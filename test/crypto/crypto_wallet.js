const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const endpoints = require('./endpoints');

const baseURL = 'https://crypto-wallet-server.mock.beeceptor.com';

describe("Testování Crypto Wallet API", () => {

  // 1. REGISTRACE - Vytvořit uživatele a peněženku
  it("1. POST - Registrace nového uživatele", async () => {

    userName = "user123";
    email = "user@example.com";
    password = "securepassword";


    const res = await request(baseURL)
      .post(endpoints.register.path)
      .send({
        username: userName,
        email: email,
        password: password
      });

    expect(res.status).to.equal(200);


    console.log(`✓ Uživatel vytvořen: ${userName}`);
  });

  // 2. LOGIN - Přihlášení a získání session tokenu
  it("2. POST - Přihlášení uživatele", async () => {
    const res = await request(baseURL)
      .post(endpoints.login.path)
      .send({
        username: userName,
        password: password
      });

    expect(res.status).to.equal(200);

    sessionToken = res.body.access_token;
    console.log(`✓ Session token: ${sessionToken}`);
  });

  // 3. BALANCE - Získat zůstatek peněženky
  it("3. GET - Získat zůstatek peněženky", async () => {
    const res = await request(baseURL)
      .get(endpoints.balance.path)
      .set('Authorization', `Bearer ${sessionToken}`);

    expect(res.status).to.equal(200);

    expect(res.body).to.have.property('balance');
    expect(res.body).to.have.property('currency');
    expect(res.body.balance).to.be.a('number');

    console.log('3. Response:', res.body);
    console.log(`✓ Zůstatek: ${res.body.balance} ${res.body.currency}`);
  });

  // 4. TRANSACTIONS LIST - Oblíst všechny transakce
  it("4. GET - Zobrazit všechny transakce", async () => {
    const res = await request(baseURL)
      .get(endpoints.transactionsList.path)
      .set('Authorization', `Bearer ${sessionToken}`);

    expect(res.status).to.equal(200);

    expect(res.body).to.have.property('transactions');
    expect(res.body.transactions).to.be.an('array');

    console.log('4. Response:', res.body);
    console.log(`✓ Počet transakcí: ${res.body.transactions.length}`);
    console.log(`✓ Pole: ${res.body.transactions.length}`);
  });

  // 5. TRANSACTIONS - Transakce
  it("5. POST - Transakce", async () => {
    const res = await request(baseURL)
      .post(endpoints.transactions.path)
      .set('Authorization', `Bearer ${sessionToken}`)
      .send({
        amount: 5,
        currency: "ETH",
        recipient: "0x1234567890abcdef1234567890abcdef12345678"
      });

    expect(res.status).to.equal(200);

    expect(res.body).to.have.property('id');

    console.log(`✓ Posláno: ${res.body.amount} ${res.body.currency}`);
    console.log(`✓ Na Adresu: ${res.body.to_address}`);
  });

  // 6. TRANSACTION FEE - Vypočítat poplatek za transakci
  it("6. POST - Vypočítat poplatek za transakci", async () => {
    const res = await request(baseURL)
      .post(endpoints.transactionFee.path)
      .set('Authorization', `Bearer ${sessionToken}`)
      .send({
        amount: 5,
        currency: "ETH",
        recipient: "0x1234567890abcdef1234567890abcdef12345678"
      });

    expect(res.status).to.equal(200);

  });

  // 7. EXCHANGE RATES - Získat aktuální kurzy
  it("7. GET /api/v1/exchange_rates - Získat kurzy měn", async () => {
    const res = await request(baseURL)
      .get(endpoints.exchangeRates.path);

    expect(res.status).to.equal(200);
    console.log('7. Response:', res.body);
  });

});

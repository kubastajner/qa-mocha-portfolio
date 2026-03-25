const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;


describe("Přihlášení uživatelů", () => {

  it("správný uživatel", async () => {
    const res = await request("https://httpbin.org")
      .get("/basic-auth/admin/passwd")
      .auth("admin", "passwd"); // 🔐 TADY posíláš login

    expect(res.status).to.equal(200);
    expect(res.body.authenticated).to.equal(true);
    expect(res.body.user).to.equal("admin");
    
    uzivatel = res.body.user;
    console.log("Přihlásil se uživatel: " + uzivatel + "✅");
  });


  it("NEsprávný uživatel", async () => {
    const res = await request("https://httpbin.org")
      .get("/basic-auth/admin/passwd")
      .auth(uzivatel, "wrongpasswd"); // 🔐 TADY posíláš login

    expect(res.status).to.equal(401);
  });

  it("volání JSONu", async () => {
    const res = await request("https://httpbin.org")
      .get("/json")

    expect(res.status).to.equal(200);
    expect(res.body.slideshow.author).to.equal("Yours Truly")
    
  });
});


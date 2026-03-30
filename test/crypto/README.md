# 🪙 Crypto Wallet API - Testovací Suite

Kompletní testovací suite pro Crypto Wallet API z [Beeceptor Mock Server](https://app.beeceptor.com/mock-server/crypto-wallet-server).

## 📁 Soubory

| Soubor | Popis |
|--------|-------|
| `endpoints.js` | Definice všech 7 API endpointů (cesty, metody, response struktury) |
| `crypto_wallet.js` | Mocha testy - 7 testů v logickém pořadí |
| `README.md` | Tento soubor |

---

## 🚀 Spuštění Testů

```bash
npm test test/crypto/crypto_wallet.js
```

---

## 📊 Struktura Testů

Testy běží **v pořadí** a na sobě závisejí:

| # | Test | Metoda | Endpoint | Auth? |
|---|------|--------|----------|-------|
| 1️⃣ | Registrace | POST | `/api/v1/register` | ❌ |
| 2️⃣ | Login | POST | `/api/v1/login` | ❌ |
| 3️⃣ | Balance | GET | `/api/v1/balance` | ✅ |
| 4️⃣ | Transactions | GET | `/api/v1/transactions` | ✅ |
| 5️⃣ | Send ETH | POST | `/api/v1/transactions` | ✅ |
| 6️⃣ | Fee Calc | POST | `/api/v1/transactions_fee` | ✅ |
| 7️⃣ | Exchange Rates | GET | `/api/v1/exchange_rates` | ❌ |

**Klíčové Body:**
- `access_token` se automaticky přenese z testu 2 do testů 3-6
- Testy s `✅` vyžadují autentizaci (automaticky přidáno)
- Response jsou logované do konzole pro debugging

---

## 📖 Dokumentace Endpointů

**Detailní dokumentace všech endpointů včetně request/response příkladů najdeš v souboru:**

👉 **[`endpoints.js`](endpoints.js)**

Tam máš všechno - metody, cesty, parametry, expected responses, atd.

---

## 📌 Poznámky

- Mock server: `https://crypto-wallet-server.mock.beeceptor.com`
- Přihlašovací údaje jsou hardcodované (mock testing)
- Všechny responses jsou logované pro debugging

---

**Verze:** 1.0.0 | [Mocha Docs](https://mochajs.org/) | [Supertest Docs](https://github.com/visionmedia/supertest)

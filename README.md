# 🧪 API Testing Suite

Tento repozitář slouží jako ukázka mé práce s automatizovaným testováním v Mocha.
Obsahuje příklady struktury testů, asercí a základních principů QA automatizace v JavaScriptu.

Cílem projektu je prezentovat přehledný, udržitelný a praktický přístup k psaní automatizovaných testů.

Testovací suite s **Mocha**, **Chai** a **Supertest**. Obsahuje dva oddělené testovací projekty.
---

## ⚙️ Instalace & Spuštění

### Požadavky:
- **Node.js** >= 14
- **npm** nebo yarn

### Instalace závislostí:
```bash
npm install mocha --save-dev
npm install chai --save-dev
npm install supertest --save-dev
```

Nebo všechny najednou:
```bash
npm install --save-dev mocha chai supertest
```

### Spuštění všech testů:
```bash
npm test
```

### Spuštění konkrétního projektu:
```bash
npm test test/login_uzivatele/login.js
npm test test/crypto/crypto_wallet.js
```

---

## 📁 Struktura Projektu

```
mocha/
├── config/
│   └── config.js                    # Konfigurační nastavení
├── test/
│   ├── login_uzivatele/
│   │   ├── login.js                # Testy pro přihlášení
│   └── crypto/
│       ├── crypto_wallet.js         # Testy pro Crypto Wallet API (7 testů)
│       ├── endpoints.js             # Definice endpointů
│       └── README.md                # Dokumentace Crypto projektu
├── package.json
├── README.md                         # Tento soubor
└── node_modules/
```

---

## 🗂️ Projekty

### 1️⃣ **Login Uživatele** – `test/login_uzivatele/`

Testy pro ověření přihlášení uživatele.

```bash
npm test test/login_uzivatele/login.js
```

---

### 2️⃣ **Crypto Wallet API** – `test/crypto/`

Kompletní testovací suite pro Beeceptor Crypto Wallet Mock API s **7 endpointy**:

1. **Register** - Registrace nového uživatele
2. **Login** - Přihlášení a token
3. **Balance** - Zůstatek peněženky
4. **Transactions** - Výpis transakcí
5. **Send ETH** - Poslat crypto
6. **Fee Calc** - Zobrazení poplatku
7. **Exchange Rates** - Kurzy měn

**Spuštění:**
```bash
npm test test/crypto/crypto_wallet.js
```

**Dokumentace:** 👉 [test/crypto/README.md](test/crypto/README.md)

---

## 📦 Závislosti

- **mocha** - Testovací framework
- **chai** - Assertion library
- **supertest** - HTTP testing

```json
{
  "devDependencies": {
    "chai": "^6.2.2",
    "mocha": "^11.7.5",
    "supertest": "^7.2.2"
  }
}
```

---

## 📝 Poznámky

- Testy se spouštějí **v pořadí** (mají sdílený state - tokeny, user data)
- Response jsou logované do konzole pro debugging
- Mock servery pro obě aplikace jsou externí (veřejné API)
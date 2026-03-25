# Testování API s Supertest a Chai

Этиот projekt obsahuje jednoduché testy pro ověření API pomocí **Supertest** a **Chai**. Testy zahrnují autentifikaci uživatele a validaci JSON dat z externího API.

---

## 📋 Požadavky

- **Node.js** >= 14
- **npm** nebo yarn
- Nainstalované závislosti:
  - `mocha` - testovací framework
  - `chai` - assertion library
  - `supertest` - HTTP assertion library

---

## 🚀 Instalace

Nainstalujte všechny potřebné balíčky:

```bash
npm install --save-dev supertest chai mocha
```

---

## 📁 Struktura projektu

```
mocha/
├── package.json          # Konfigurace projektu
├── README.md             # Tento soubor
├── test/
│   └── login.js         # Testovací soubor
└── node_modules/         # Nainstalované balíčky
```

---

## ▶️ Spuštění testů

Spusťte testy pomocí příkazu:

```bash
npm test
```

---

## 🧪 Struktura testů

Testovací soubor `test/login.js` obsahuje **3 testy** zaměřené na API autentifikaci a validaci dat.

### 1️⃣ Přihlášení správného uživatele

| Vlastnost | Hodnota |
|-----------|---------|
| **Endpoint** | `/basic-auth/admin/passwd` |
| **Metoda** | GET |
| **Přihlašovací údaje** | admin / passwd |
| **Očekávaný status** | 200 ✅ |
| **Validace** | `authenticated === true`, `user === "admin"` |
| **Výstup** | Přihlásil se uživatel: admin ✅ |

### 2️⃣ Přihlášení nesprávného uživatele

| Vlastnost | Hodnota |
|-----------|---------|
| **Endpoint** | `/basic-auth/admin/passwd` |
| **Metoda** | GET |
| **Přihlašovací údaje** | admin / wrongpasswd |
| **Očekávaný status** | 401 ⛔ (Unauthorized) |

### 3️⃣ Volání JSON dat

| Vlastnost | Hodnota |
|-----------|---------|
| **Endpoint** | `/json` |
| **Metoda** | GET |
| **Očekávaný status** | 200 ✅ |
| **Validace** | `slideshow.author === "Yours Truly"` |

---

## 📚 Testovací server

Testy používají **httpbin.org** - veřejný API pro testování:
- 🔐 `/basic-auth/{uživatel}/{heslo}` - Testování autentifikace
- 📄 `/json` - Vrácení JSON dat

---

## 📝 Poznámky

- Testy jsou psány v `async/await` syntaxi
- Používají `supertest` pro HTTP požadavky
- Validace očekávaných výsledků pomocí `chai` assertion library
- Projekt je nakonfigurován jako CommonJS module

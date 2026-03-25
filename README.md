# Testování API s Supertest a Chai

Tento projekt obsahuje jednoduché testy pro ověření API pomocí **Supertest** a **Chai**. Testy zahrnují:

- Přihlášení uživatele (správné i nesprávné údaje)
- Získání JSON dat z endpointu

---

## Požadavky

- Node.js >= 14
- npm nebo yarn
- Balíčky:
  - `supertest`
  - `chai`
  - `mocha` (pro spuštění testů)

Instalace balíčků:

```bash
npm install supertest chai mocha --save-dev

**Struktura testů**

Soubor obsahuje tři hlavní testy:

**1. Přihlášení správného uživatele**
Endpoint: /basic-auth/admin/passwd
Metoda: GET
Očekávání:
Status 200
authenticated je true
Uživatelské jméno je admin
Výstup do konzole: Přihlásil se uživatel: admin ✅

**2. Přihlášení nesprávného uživatele**
Endpoint: /basic-auth/admin/passwd
Metoda: GET
Použití nesprávného hesla
Očekávání:
Status 401 (Unauthorized)

**3. Volání JSON dat**
Endpoint: /json
Metoda: GET
Očekávání:
Status 200
slideshow.author je Yours Truly

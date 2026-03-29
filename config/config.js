// ========================================
// GLOBÁLNÍ KONFIGURACE A PROMĚNNÉ
// ========================================

module.exports = {
  // API URL
  BASE_URL: "https://httpbin.org",
  httpbin: "https://httpbin.org",

  // Autentifikační údaje
  AUTH: {
    username: "admin",
    password: "passwd",
    wrong_password: "wrongpasswd"
  },

  // Timeout
  TIMEOUT: 5000,

  // Testovací data
  TEST_DATA: {
    name: "Jiří",
    email: "jiri@example.com",
    age: 30
  },

  // Očekávané hodnoty
  EXPECTED: {
    json_author: "Yours Truly",
    json_title: "Sample Slide Show"
  }
};

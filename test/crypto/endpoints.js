/**
 * Crypto Wallet API Endpoints
 * Definice všech 7 endpointů pro crypto wallet API
 * Base URL: https://crypto-wallet-server.mock.beeceptor.com
 */

const endpoints = {
  // 1. 
  register: {
    method: 'POST',
    path: '/api/v1/register',
    description: 'Registrace nového uživatele a vytvoření peněženky',
    requestBody: {
      username: 'string (required)',
      email: 'string (required)',
      password: 'string (required)'
    },
    expectedResponse: {
      username: 'string',
      email: 'string',
      password: 'string'
    },
    expectedStatus: 200
  },

  // 2. 
  login: {
    method: 'POST',
    path: '/api/v1/login',
    description: 'Přihlášení uživatele a vygenerování session tokenu',
    requestBody: {
      username: 'string (required)',
      password: 'string (required)'
    },
    expectedResponse: {
      access_token: 'string',
      token_type: 'string',
      expires_in: 'number'
    },
    expectedStatus: 200,
    requiresAuth: false
  },

  // 3. 
  balance: {
    method: 'GET',
    path: '/api/v1/balance',
    description: 'Získat aktuální zůstatek peněženky',
    requestBody: null,
    expectedResponse: {
      balance: 'number',
      currency: 'string'
    },
    expectedStatus: 200,
    requiresAuth: true
  },

  // 4. 
  transactionsList: {
    method: 'GET',
    path: '/api/v1/transactions',
    description: 'Zobrazit seznam všech transakcí uživatele',
    requestBody: null,
    expectedResponse: {
      transactions: 'array'
    },
    expectedStatus: 200,
    requiresAuth: true
  },

  // 5.
  transactions: {
    method: 'POST',
    path: '/api/v1/transactions',
    description: 'Provede transakci z peněženky na jinou adresu',
    requestBody: {
      recipient_address: 'string (required)',
      amount: 'string (required)',
      currency: 'string (required)'
    },
    expectedResponse: {
      id: 'number',
      to_address: 'string',
      type: 'string',
      amount: 'string',
      currency: 'string',
      timestamp: 'string'
    },
    expectedStatus: 200,
    requiresAuth: true
  },

  // 6.
  transactionFee: {
    method: 'POST',
    path: '/api/v1/transactions_fee',
    description: 'spočítá poplatek za převod',
    requestBody: {
      amount: 'number (required)',
      currency: 'string (required)',
      recipient: 'string (required) - hex address'
    },
    expectedResponse: {
      fee: 'number',
      currency: 'string'
    },
    expectedStatus: 200,
    requiresAuth: true
  },

  // 7. 
  exchangeRates: {
    method: 'GET',
    path: '/api/v1/exchange_rates',
    description: 'Získat aktuální kurzy měnových párů',
    requestBody: null,
    expectedResponse: {
      BTC: 'string',
      ETH: 'string',
      USD: 'string'
    },
    expectedStatus: 200,
    requiresAuth: false
  }
};

module.exports = endpoints;
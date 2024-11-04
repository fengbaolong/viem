import { defineChain } from '../../utils/chain/defineChain.js'

export const co2e = /*#__PURE__*/ defineChain({
  id: 171,
  name: 'CO2e Ledger',
  nativeCurrency: { name: 'CO2E', symbol: 'CO2E', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.co2ledger.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'CO2e Ledger Explorer',
      url: 'https://exp.co2ledger.xyz',
    },
  },
  testnet: false,
})

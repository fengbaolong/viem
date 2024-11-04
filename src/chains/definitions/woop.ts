import { defineChain } from '../../utils/chain/defineChain.js'

export const woop = /*#__PURE__*/ defineChain({
  id: 139,
  name: 'Woop Chain Mainnet',
  nativeCurrency: { name: 'WOOC', symbol: 'WOOC', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.woop.ai/rpc'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Woop Explorer',
      url: 'https://explorer.wikiwoop.com',
    },
  },
  testnet: false,
})

import { createConfig, http } from 'wagmi'
import { mainnet, sepolia, arbitrum, base, optimism, polygon } from 'wagmi/chains'
import { getDefaultWallets } from '@rainbow-me/rainbowkit'

// Project ID WalletConnect
export const projectId = 'cb06901d6285b386d32c1c3e73b32afb'

// Buat konektor wallet RainbowKit
const { connectors } = getDefaultWallets({
  appName: 'Latihan Membuat Dapp Sederhana',
  projectId,
})

// Konfigurasi Wagmi
export const config = createConfig({
  chains: [mainnet, sepolia, arbitrum, base, optimism, polygon],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [optimism.id]: http(),
    [polygon.id]: http(),
  },
  connectors,       // konektor wallet
  // ssr: true,        // kalau pakai Next.js
})

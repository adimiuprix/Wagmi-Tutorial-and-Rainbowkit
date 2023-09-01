import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig } from 'wagmi' // Membuat config

//  Pilih Chain apa saja yang support untuk project, bisa di tambahkan sendiri
import { mainnet, sepolia, arbitrum, bsc, zora, optimism } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

//  Dapatkan ID Wallet Connect dari "https://walletconnect.com"
const walletConnectProjectId = 'cb06901d6285b386d32c1c3e73b32afb'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  //  Panggil chain yang akan di aktifkan ke ujung depan
  [mainnet, sepolia, arbitrum, bsc, zora, optimism],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'My wagmi + RainbowKit App',
  chains,
  projectId: walletConnectProjectId,
})

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

export { chains }

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { sepolia, arbitrum, base, mainnet, optimism, polygon } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Latihan Membuat Dapp Sederhana',
  projectId: 'cb06901d6285b386d32c1c3e73b32afb',
  chains: [ sepolia, arbitrum, base, mainnet, optimism, polygon ],
  ssr: true,
});
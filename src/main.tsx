import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Import module penting dari Rainbowkit dan Wagmi
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiConfig } from 'wagmi'
import { chains, config } from './wagmiConfig.tsx' // Untuk mengkonfigurasi wagmi, semua ada di module ini
import { bscTestnet } from 'wagmi/chains'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <WagmiConfig config={config}>
          
          <RainbowKitProvider
              // Atur behavior dari RainbowKitProvider
              chains={chains}
              initialChain={bscTestnet}
              modalSize='compact'
              showRecentTransactions={true}
          >
            <App />
          </RainbowKitProvider>

        </WagmiConfig>
    </React.StrictMode>,
)

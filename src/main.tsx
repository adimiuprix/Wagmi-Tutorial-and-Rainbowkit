import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Import module penting dari Rainbowkit dan Wagmi
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { config } from './wagmiConfig.tsx'
const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <WagmiProvider config={config}>
          <QueryClientProvider client={client}>
            <RainbowKitProvider
                modalSize='compact'
                showRecentTransactions={true}
            >
              <App />
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
    </React.StrictMode>,
)

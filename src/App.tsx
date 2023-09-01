import { ConnectButton } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { useAccount } from 'wagmi'

function App() {
    // Buat const untuk bermain dengan session
    const { isConnected } = useAccount()

    return (
        <>
            <h1>wagmi + RainbowKit + Vite</h1>
            <ConnectButton />
        </>
    )
}

export default App

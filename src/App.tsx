import { ConnectButton } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { useAccount } from 'wagmi'

function App() {
    // Buat const untuk bermain dengan session
    const { isConnected } = useAccount()

    return (
        <>
            <h1>Latihan Membuat dapp sederhana</h1>

            {/* Buat session jika belum masuk */}
            {!isConnected && (
                <>
                <h1>Ini tampilan ketika belum login</h1>
                <ConnectButton />
                </>
            )}
            
            {/* Tampilan ketika telah masuk */}
            {isConnected && (
                <p>Halo, selamat anda sudah masuk</p>
            )}
        </>
    )
}

export default App

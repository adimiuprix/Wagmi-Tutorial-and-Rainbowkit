import { ConnectButton } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { useAccount } from 'wagmi'

import Layout from './Layout'

function App() {
    // Buat const untuk bermain dengan session
    const { isConnected } = useAccount()

    return (
        <>
            <h1>Latihan Membuat dapp sederhana</h1>

            <ConnectButton />
            {/* Buat session jika belum masuk */}
            {!isConnected && (
                <>
                    <h1>Ini tampilan ketika belum login</h1>
                </>
            )}
            
            {/* Tampilan ketika telah masuk */}
            {isConnected && (
                <>
                    <p><b>Halo, selamat anda sudah masuk, berikut ini daftar yang sudah di buat</b></p>
                    <Layout />
                </>
            )}
        </>
    )
}

export default App

import { useEffect, useState } from 'react'
import { useReadContract } from 'wagmi'
import type { Abi } from 'viem' // ✅ type-safe untuk ABI
import { SaldoContract } from '../constant/SaldoContract'

function BacaArgument() {
  // 1️⃣ State untuk menyimpan input wallet address & hasil saldo
  const [walletAddress, setWalletAddress] = useState<string>("")
  const [saldo, setSaldo] = useState<string | null>(null)

  // 2️⃣ Hook wagmi untuk baca kontrak
  const { isLoading, isSuccess, refetch } = useReadContract({
    address: "0xeFd4E38c2Cb097236e27272425d8a34d908C3019", // alamat kontrak
    abi: SaldoContract as Abi, // gunakan Abi agar type-safe
    functionName: "BacaSaldo", // nama fungsi di kontrak
    args: [walletAddress], // argument berupa address wallet
  })

  // 3️⃣ Reset saldo setiap kali walletAddress berubah
  useEffect(() => {
    if (saldo !== null) {
      setSaldo(null)
    }
  }, [walletAddress])

  // 4️⃣ Fungsi untuk fetch saldo manual
  const handleFetch = async () => {
    try {
      const hasil = await refetch()
      const saldoValue = hasil?.data?.toString() ?? null
      setSaldo(saldoValue)
    } catch (error) {
      setSaldo(null)
    }
  }

  // 5️⃣ UI
  return (
    <div className="card">
      <div>Halo, ini contoh argument hanya satu (address)</div><br />

      {/* Input untuk wallet address */}
      <input
        className="inputform"
        onChange={(e) => setWalletAddress(e.target.value)}
        placeholder="wallet address"
        value={walletAddress}
      />

      {/* Tombol untuk fetch saldo */}
      <button className="calc-btn" onClick={handleFetch} disabled={!walletAddress}>
        {isLoading ? "Fetching..." : "Fetch"}
      </button>

      {/* Tampilkan saldo jika ada */}
      {isSuccess && saldo !== null && (
        <div>
          Saldo Alamat: {saldo}
        </div>
      )}
    </div>
  )
}

export default BacaArgument
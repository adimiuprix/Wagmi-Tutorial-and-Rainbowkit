import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { BooleanContract } from '../constant/BooleanContract'

function TombolTulis() {
  // 1️⃣ Baca data dari kontrak (fungsi getState)
  const { data: Bool } = useReadContract({
    address: '0x15FA67b612b3536C8E6D22613769D7486C13903d', // alamat kontrak
    abi: BooleanContract, // ABI kontrak
    functionName: 'getState', // nama fungsi di smart contract
  })

  // 2️⃣ Hook untuk menulis ke kontrak (fungsi setState)
  // - writeContract() digunakan untuk mengirim transaksi
  // - data = hash transaksi (jika berhasil terkirim)
  // - isPending = true saat wallet user lagi konfirmasi
  const { writeContract, data: txHash, isPending } = useWriteContract()

  // 3️⃣ Hook untuk menunggu transaksi di blockchain selesai (berhasil / gagal)
  // - isLoading = true selama transaksi masih diproses
  const { isLoading: isConfirming } = useWaitForTransactionReceipt({ hash: txHash })

  // 4️⃣ Tampilkan UI
  return (
    <div className="card">
      {/* Menampilkan nilai boolean dari kontrak */}
      <p>Nilai boolean: {JSON.stringify(Bool)}</p>

      {/* Tombol untuk mengubah state di kontrak */}
      <button
        onClick={() =>
          writeContract({
            address: '0x15FA67b612b3536C8E6D22613769D7486C13903d',
            abi: BooleanContract,
            functionName: 'setState',
          })
        }
        className="calc-btn"
        disabled={isPending || isConfirming} // disable tombol saat pending/confirm
      >
        {/* Ubah label tombol sesuai status */}
        {isPending
          ? 'Mengirim...' // saat wallet terbuka & user confirm tx
          : isConfirming
          ? 'Menunggu konfirmasi...' // tx sedang diproses di blockchain
          : 'Set State' // default
        }
      </button>
    </div>
  )
}

export default TombolTulis

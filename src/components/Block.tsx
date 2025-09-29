import { useBlock } from 'wagmi'

export default function Block() {
  // ambil data block terbaru
  const { data, isLoading, isError } = useBlock({
    includeTransactions: true, // tampilkan juga transaksi dalam blok
    watch: true,               // auto update tiap ada blok baru
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error...</p>

  return (
    <div className="card">
      <p>Block Number: {data?.number?.toString()}</p>
      <p>Block Hash: {data?.hash}</p>
      <p>Timestamp: {data?.timestamp?.toString()}</p>
    </div>
  )
}

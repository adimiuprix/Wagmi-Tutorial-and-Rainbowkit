import { useTransaction } from 'wagmi'

function Transaksi() {
  const { data, isError, isLoading } = useTransaction({
    hash: '0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060',
  })

  if (isLoading) return <div>Fetching transaction…</div>
  if (isError) return <div>Error fetching transaction</div>
  return <div>Transaction: {JSON.stringify(data)}</div>
}

export default Transaksi
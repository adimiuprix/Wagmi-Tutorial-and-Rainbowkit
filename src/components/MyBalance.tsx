import { useBalance } from "wagmi";
import '../style/style.css'

function MyBalance() {
    const { data, isError, isLoading } = useBalance({
        address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
    })

    if (isLoading) return <div>Fetching balance…</div>
    if (isError) return <div>Error fetching balance</div>

    return(
        <div className="card">
            Balance: {data?.formatted} {data?.symbol}
        </div>
    )
}

export default MyBalance
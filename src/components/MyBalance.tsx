import { useBalance } from "wagmi";
import '../style/style.css'

function MyBalance() {
    const { data, isError, isLoading } = useBalance({
        address: "0x222374582e5015621D648e1E2A17A431b8b9d4Db",
        formatUnits: 'ether',
        
        //  Optional, jika property token di hilangkan akan menampilkan saldo ether
        token: "0xbCa7404Bd54Dd2AF299eF828613cb4cb6D0df9d5",
        watch: true,
        onError(error){
            console.log('Error', error)
        }
    })

    if (isLoading) return <div className="card">Fetching balance…</div>
    if (isError) return <div className="card">Error fetching balance</div>

    return(
        <div className="card">
            Balance: {data?.formatted} {data?.symbol}
        </div>
    )
}

export default MyBalance
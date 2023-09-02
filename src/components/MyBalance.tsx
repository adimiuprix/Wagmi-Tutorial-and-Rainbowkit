import { useBalance, useAccount } from "wagmi"
import '../style/style.css'

function MyBalance() {
    const { address } = useAccount();
    const { data, isError, isLoading } = useBalance({
        address: address as `0x${string}`,
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
            <p>Tampilkan saldo:</p>
            <p>
                Balance: {data?.formatted} {data?.symbol}
            </p>
            
        </div>
    )
}

export default MyBalance
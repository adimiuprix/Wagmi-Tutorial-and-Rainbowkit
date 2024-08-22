import { useBalance, useAccount } from 'wagmi'

function MyBalance() {
    const { address } = useAccount();

    const { data } = useBalance({
        address: address,
        token: '0x1C64f4608f8B2Fb141E22EFE5dC3A5CE427d3Eb6',    // Alamat token nya
        unit: 'ether',
    })

    // if (isLoading) return <div className="card">Fetching balance…</div>
    // if (isError) return <div className="card">Error fetching balance</div>

    return(
        <div className="card">
            <p>Tampilkan saldo:</p>
            <p>
                Balance: {data?.value.toString()} {data?.symbol}
            </p>
        </div>
    )
}

export default MyBalance
import { useToken } from "wagmi";

function BacaToken(){
    const { data, isError, isLoading } = useToken({
        address: "0xcd43dc81ebbe592be94c67ab8a09420ecb0fb6aa",
    })

    if (isLoading) return (<div className="card">Fetching token…</div>)
    if (isError) return (<div className="card">Error fetching token</div>)
    
    return (
        <div className="card">
            <p>
                Nama: {data?.name} <br />
                Symbol: {data?.symbol} <br />
                Decimal: {data?.decimals} <br />
                Total suply: {data?.totalSupply?.formatted} <br />
            </p>
        </div>
    )
}

export default BacaToken
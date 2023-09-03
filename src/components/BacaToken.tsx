/* Menggunakan hook useToken dapat di gunakan untuk menampilkan informasi standard erc20
   Informasi standard seperti: name, symbol, decimal, total supply */
import { useToken } from "wagmi";   

function BacaToken(){
    const { data, isError, isLoading } = useToken({
        /* Informasi hanya baca dan di render
        kita tidak memerlukan ABI-JSON
        hanya alamat token pada jaringan */
        address: "0xcd43dc81ebbe592be94c67ab8a09420ecb0fb6aa",
        // sediakan property setelah address tapi optional saja
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
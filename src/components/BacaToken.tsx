/* Menggunakan hook useToken dapat di gunakan untuk menampilkan informasi standard erc20
   Informasi standard seperti: name, symbol, decimal, total supply */
import { useReadContract } from 'wagmi'
import { erc20Abi } from 'viem'

function BacaToken(){
    const tokenAddress = "0xCd43dC81ebbe592Be94C67AB8A09420ecB0fB6Aa"

    const { data: name } = useReadContract({
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'name',
    })

    const { data: symbol } = useReadContract({
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'symbol',
    })

    const { data: decimals } = useReadContract({
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'decimals',
    })

    const { data: totalSupply } = useReadContract({
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'totalSupply',
    })

    return (
        <div className="card">
            <p>Menampilkan detail pada erc20 secara standard denagn useToken</p>
            <p>
                Nama: {name} <br />
                Symbol: {symbol} <br />
                Decimal: {decimals} <br />
                Total suply: {totalSupply} <br />
            </p>
        </div>
    )
}

export default BacaToken
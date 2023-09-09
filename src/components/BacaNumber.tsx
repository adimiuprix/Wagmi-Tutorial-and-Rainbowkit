import { useContractRead } from 'wagmi'
import { Storage } from "../constant/Storage"
import { stringify } from 'viem'

function BacaNumber() {
    const { data: Retrieve, isError, isLoading } = useContractRead({
        address: "0xe16187983276dca45B7a014faE137347D6Fef791",
        abi: Storage,
        functionName: "value",
        watch: true,
    })

    // Bagian kondisi "if" itu opsional, bisa di hapus jika tidak di perlukan
    if (isLoading) {
        return <div className="card">Loading...</div>
    }
    if (isError) {
        return <div className="card">Error reading contract data.</div>
    }

    return (
        <div className="card">
            {/* menggunakan keyword toString untuk mengubah nilai bigInt jadi string */}
            <p>Isi integer uint256: {Retrieve?.toString()}</p>

            {/* menggunakan stringify untuk mengubah nilai bigInt jadi string */}
            <p>Isi integer uint256: {stringify(Retrieve).replace(/^"(.*)"$/, '$1')}</p>
        </div>
    );
}
export default BacaNumber

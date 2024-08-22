import { useReadContract } from 'wagmi'
import { Pesan } from '../constant/Pesan'

function BacaString() {
    const { data: IsiPesan, isError, isLoading } = useReadContract({
        address: "0xFD6C396220d84C9b4698E428486523B56124ad14",
        abi: Pesan,
        functionName: "getMessage",
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
            <p>Pesan dari contract: {IsiPesan}</p>
        </div>
    );
}
export default BacaString

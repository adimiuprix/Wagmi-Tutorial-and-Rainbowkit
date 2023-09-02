import { useContractRead } from 'wagmi';
import { Message } from "../constant/Message";

function ContractRead() {
    const { data: messageFromContract, isError, isLoading } = useContractRead({
        address: "0xb41a4Acf67DfD2120EE002bC162d55E200e2b4B1",
        abi: Message,
        functionName: "myString",
        watch: true,
    })

    // Bagian kondisi "if" itu opsional, bisa di hapus jika tidak di perlukan
    if (isLoading) {
        return <div className="card">Loading...</div>;
    }
    if (isError) {
        return <div className="card">Error reading contract data.</div>;
    }

    return (
        <div className="card">
            <p>Pesan dari contract: {messageFromContract}</p>
        </div>
    );
}
export default ContractRead;

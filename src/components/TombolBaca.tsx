import { useState } from 'react'
import { useContractRead } from 'wagmi'
import { IngatanContract } from '../constant/IngatanContract'

function TombolBaca(){
    const [showMessage, setShowMessage] = useState(false) // State untuk mengontrol tampilan pesan
    const { data: IsiPesan, isError, isLoading } = useContractRead({
        address: "0x6302cD20aC525DaF11E387Cb6B960DF9ec8494a7",
        abi: IngatanContract,
        functionName: "TampilkanData",
        watch: true,
    })

    const handleClick = () => {
        setShowMessage(true); // Saat tombol diklik, tampilkan pesan
    };

    // Bagian kondisi "if" itu opsional, bisa dihapus jika tidak diperlukan
    if (isLoading) {
        return (
            <div className="card">Loading...</div>
        )
    }
    if (isError) {
        return (
            <div className="card">
                <p>Menampilkan data dengan tombol</p>
                <button onClick={handleClick} className='calc-btn'>Tampilkan Pesan</button>
                {showMessage && <p>Pesan dari contract: {IsiPesan}</p>}
                <div>Error reading contract data.</div>
            </div>
        )
    }

    return(
        <div className="card">
            <p>Menampilkan data dengan tombol</p>
            <button onClick={handleClick} className='calc-btn'>Tampilkan Pesan</button>
            {showMessage && <p>Pesan dari contract: {IsiPesan}</p>}
        </div>
    )
}

export default TombolBaca
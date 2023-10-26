import { useEffect, useState } from 'react'
import { useContractRead } from 'wagmi'
import { SaldoContract } from '../constant/SaldoContract'

function DataArgs(){
    const [saldo, setSaldo] = useState<string | null>(null)

    const { isLoading, isSuccess, data } = useContractRead({
        address: "0xeFd4E38c2Cb097236e27272425d8a34d908C3019",
        abi: SaldoContract,
        functionName: "BacaSaldo",
        args: ["0x222374582e5015621D648e1E2A17A431b8b9d4Db"],
    })

    useEffect(() => {
        if (isSuccess && data) {
            const saldoValue = data.toString() ?? null
            setSaldo(saldoValue)
        } else {
          setSaldo(null)
        }
    }, [isSuccess, data])

    return(
        <>
            <div className='card'>
                <div>Menampilkan data dengan arguments secara explisit</div>
                <p>Saldo Alamat: {isLoading ? 'Loading...' : saldo ?? 'Data tidak tersedia'}</p>
            </div>
        </>
    )
}

export default DataArgs
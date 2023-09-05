import { useEffect, useState } from 'react'
import { useContractRead } from 'wagmi'
import { SaldoContract } from '../constant/SaldoContract'

function BacaArgument() {
    const [walletAddress, setWalletAddress] = useState("")
    const [saldo, setSaldo] = useState<string | null>(null);
    
    const { isLoading, isSuccess, refetch } = useContractRead({
        address: "0xeFd4E38c2Cb097236e27272425d8a34d908C3019",
        abi: SaldoContract,
        functionName: "BacaSaldo",
        args: [walletAddress]
    })

    useEffect(() => {
        if (saldo !== null) {
            setSaldo(null);
        }
    }, [walletAddress]);

    const handleFetch = async () => {
        try {
          const hasil = await refetch()
          const saldoValue = hasil?.data?.toString() ?? null
          setSaldo(saldoValue)
        } catch (error) {
            setSaldo(null)
        }
    }

    return (
        <div className='card'>
            <div>Halo, ini argument hanya satu</div><br />
            <input
                className='inputform'
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="wallet address"
                value={walletAddress}
            />
            <button className='calc-btn' onClick={handleFetch}>
                {isLoading ? 'Fetching...' : 'Fetch'}
            </button>
            {isSuccess && saldo !== null && <div>Saldo Alamat: {saldo}</div>}
        </div>
    )
}

export default BacaArgument
import { useContractWrite, useContractRead } from 'wagmi';
import { BooleanContract } from '../constant/BooleanContract'

function TombolTulis(){
    // Melakukan write pada smartcontract
    const { isLoading, write } = useContractWrite({
        address: '0x15FA67b612b3536C8E6D22613769D7486C13903d',
        abi: BooleanContract,
        functionName: 'setState',
    })

    // Menampilkan data pada smartcontract
    const { data: Bool } = useContractRead({
        address: "0x15FA67b612b3536C8E6D22613769D7486C13903d",
        abi: BooleanContract,
        functionName: "getState",
        watch: true,
    })

    const Handle = async () => {
        try {
            await write();
        } catch (error) {
            console.error('Error:', error)
        }
    }
    
    return (
        <div className='card'>
            <p>Nilai boolean: {JSON.stringify(Bool)}</p>
            <button onClick={Handle} className='calc-btn'>Set State</button>
            {isLoading && <div>Checking Wallet</div>}
        </div>
      )
}

export default TombolTulis;
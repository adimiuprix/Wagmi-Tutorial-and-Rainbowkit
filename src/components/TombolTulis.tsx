import { useContractWrite } from 'wagmi'
import { BooleanContract } from '../constant/BooleanContract'

function TombolTulis(){
    const { isLoading, write } = useContractWrite({
        address: '0x15FA67b612b3536C8E6D22613769D7486C13903d',
        abi: BooleanContract,
        functionName: 'setState',
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
            <button onClick={Handle}>Set State</button>
            {isLoading && <div>Checking Wallet</div>}
        </div>
      )
}

export default TombolTulis;

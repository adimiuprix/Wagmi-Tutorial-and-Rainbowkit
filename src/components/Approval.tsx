import { parseEther } from 'viem'
import { useContractWrite, useAccount, erc20ABI, useContractRead } from 'wagmi'
import { ApproveContract } from '../constant/ApproveContract'

function Approval () {
    const { address } = useAccount()

    const { write: approveWrite } = useContractWrite({
        address: '0xCd43dC81ebbe592Be94C67AB8A09420ecB0fB6Aa',
        abi: erc20ABI,
        functionName: "approve",
        args: [ '0x70213f1A5E2D146Db7Cb479C5651CB7112f52454', Number( parseEther( "1" ) ) ],
		onSuccess() {
			setTimeout( () => {
				deposit?.()
			}, 7000 );
		},

    })

	const { write: deposit } = useContractWrite( {
		address: '0x70213f1A5E2D146Db7Cb479C5651CB7112f52454',
		abi: ApproveContract,
		functionName: "deposit",
		account: address,
		chainId: 97,
		args: [ 0, Number( parseEther( "2" ) ), 10 ],
		onSuccess( data ) {
			console.log( data );
		},
		onError( err ) {
			console.log( err?.shortMessage );
		},
	})

	const { data: allowance } = useContractRead( {
		address: '0xCd43dC81ebbe592Be94C67AB8A09420ecB0fB6Aa',
		abi: erc20ABI,
		functionName: "allowance",
		chainId: 97,
		args: [ "0xCd43dC81ebbe592Be94C67AB8A09420ecB0fB6Aa", "0x70213f1A5E2D146Db7Cb479C5651CB7112f52454" ],
		watch: true,
	} )

	return (
		<>
			<div>
				<span>Allowance : {Number( allowance )}</span>
				<button onClick={() => approveWrite?.()}>Approve/Transfer</button>
			</div>
		</>
	)
}

export default Approval
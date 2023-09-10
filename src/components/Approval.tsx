import { parseEther } from 'viem'
import { useContractWrite, erc20ABI } from 'wagmi'
import { ApproveContract } from '../constant/ApproveContract'

function Approval () {
    // Membuat 2 fungsi yang akan diajalankan, pertama melakukan approval kemudia deposit

    // Membuat fungsi untuk melakukan approve tokennya dulu
    // sebelum smart contract external di izinkan
    // Argumentnya adalah "spender" dan "value"
    const { write: approveWrite } = useContractWrite({
        address: '0xCd43dC81ebbe592Be94C67AB8A09420ecB0fB6Aa',  // Address token nya
        abi: erc20ABI,
        functionName: "approve",
        args: [ '0x70213f1A5E2D146Db7Cb479C5651CB7112f52454', (parseEther('1')) ],  // Izinkan alamat spender dan masukkan nilai
		
        //  Jika berhasil jalannkan fungsi kedua yang bernama deposits
        onSuccess() {
			setTimeout( () => {
				deposit?.()
			}, 7000 );
		},
    })

    // Jalankan fungsi deposits seperti biasanya
	const { write: deposit } = useContractWrite( {
		address: '0x70213f1A5E2D146Db7Cb479C5651CB7112f52454',
		abi: ApproveContract,
		functionName: "deposit",
		 args: [ (parseEther('1')) ],  //  Masukkan argument nya
		onSuccess( data ) {
			console.log( data )
		},
	})

	return (
			<div className="card">
				<button onClick={() => approveWrite?.()} className='calc-btn'>Deposit</button>
			</div>
	)
}

export default Approval
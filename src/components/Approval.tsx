import { parseEther } from "viem"
import { erc20Abi } from "viem"
import { useWriteContract } from 'wagmi'
import { ApproveContract } from '../constant/ApproveContract'

function Approval () {

	// hook wagmi versi baru → return `writeContract` function
	const { writeContract, isPending } = useWriteContract()

	function handleDeposit() {
		try {
		// 1. Approve token dulu
		const approveTx = writeContract({
			address: "0xCd43dC81ebbe592Be94C67AB8A09420ecB0fB6Aa", // token address
			abi: erc20Abi,
			functionName: "approve",
			args: [
				"0x70213f1A5E2D146Db7Cb479C5651CB7112f52454", // spender
				parseEther("0.01"), // value
			],
		})

		console.log("Approve tx:", approveTx)

		// 2. Setelah approve, lanjut deposit
		// (biasanya tunggu mined, tapi untuk simpel cukup lanjut)
		const depositTx = writeContract({
			address: "0x70213f1A5E2D146Db7Cb479C5651CB7112f52454",
			abi: ApproveContract,
			functionName: "deposit",
			args: [parseEther("0.01")],
		})

		console.log("Deposit tx:", depositTx)
		} catch (err) {
		console.error("Error:", err)
		}
	}

	return (
			<div className="card">
				<button onClick={() => handleDeposit?.()} disabled={isPending} className='calc-btn'>
					{isPending ? "Processing..." : "Deposit"}
				</button>
			</div>
	)
}

export default Approval
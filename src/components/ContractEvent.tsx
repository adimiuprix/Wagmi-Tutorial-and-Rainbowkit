import { useContractEvent } from 'wagmi'
import { SimpleEventContract } from '../constant/SimpleEventContract'

function ContractEvent() {
  // Konfigurasi hook useContractEvent
  const contractAddress = '0xA3b4bA51C7029904Ac03cCe2726d23B4FDe44979'
  const contractABI = SimpleEventContract // Gantilah dengan ABI kontrak Anda
  const eventName = 'DataUpdated' // Gantilah dengan nama event yang ingin Anda pantau

  // Listener yang akan dijalankan ketika event terjadi
  const eventListener = (log: any) => {
    console.log(log)
    // Lakukan sesuatu dengan log event, jika diperlukan
  }

  // Gunakan hook useContractEvent dengan konfigurasi di atas
  useContractEvent({
    address: contractAddress,
    abi: contractABI,
    eventName: eventName,
    listener: eventListener,
  })

  return (
    <div>
      <h1>Contract Event Data</h1>
      {/* Tampilkan data event di sini jika diperlukan */}
    </div>
  )
}

export default ContractEvent

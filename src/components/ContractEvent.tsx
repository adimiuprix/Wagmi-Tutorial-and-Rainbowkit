import { watchContractEvent } from '@wagmi/core'
import { SimpleEventContract } from '../constant/SimpleEventContract'
import { config } from '../wagmiConfig'

function ContractEvent() {
  // Konfigurasi hook useContractEvent
  const contractAddress = '0xA3b4bA51C7029904Ac03cCe2726d23B4FDe44979'
  const contractABI = SimpleEventContract // Gantilah dengan ABI kontrak Anda
  const eventName = 'DataUpdated' // Gantilah dengan nama event yang ingin Anda pantau

  // Gunakan hook useContractEvent dengan konfigurasi di atas
  const unwatch = watchContractEvent(config, {
    address: contractAddress,
    abi: contractABI,
    eventName: eventName,
    onLogs(logs) {
      console.log('Logs:', logs)
    },
    onError(error) {
      console.error(error)
    },
  })

  // nanti kalau kamu mau berhenti listen:
  unwatch()

  return (
    <div>
      <h1>Contract Event Data</h1>
      {/* Tampilkan data event di sini jika diperlukan */}
    </div>
  )
}

export default ContractEvent

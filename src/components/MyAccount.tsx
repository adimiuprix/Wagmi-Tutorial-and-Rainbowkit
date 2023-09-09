import { useAccount } from 'wagmi'
import '../style/style.css'

const MyAccount = () => {
  const { address, isConnecting, isDisconnected } = useAccount()

  return isConnecting ? (
    <div className="card">Connecting...</div>
  ) : isDisconnected ? (
    <div className="card">Disconnected...</div>
  ) : (
    <div className="card">
      <p>Tampilkan address Pengguna</p>
      {address}
    </div>
  );
};

export default MyAccount
import { useAccount } from "wagmi";

const MyAccount = () => {
  const { address, isConnecting, isDisconnected } = useAccount();

  return isConnecting ? (
    <div>Connecting...</div>
  ) : isDisconnected ? (
    <div>Disconnected...</div>
  ) : (
    <div>
      <p>Tampilkan address Pengguna</p>
      {address}
    </div>
  );
};

export default MyAccount
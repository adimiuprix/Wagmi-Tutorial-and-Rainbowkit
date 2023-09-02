import { useBlockNumber } from "wagmi";

function BlockNumber(){
    const { data, isError, isLoading } = useBlockNumber({
        // Property optional (boleh gak di gunakan)
        watch: true,
        scopeKey: 'wagmi',
    })

    if (isLoading) return <div className="card">Fetching block number…</div>
    if (isError) return <div className="card">Error fetching block number</div>
    return <div className="card">Block number: {data?.toString()}</div>
}

export default BlockNumber
export const BooleanContract = [
    {
       "inputs": [],
       "stateMutability": "nonpayable",
       "type": "constructor"
    },
    {
       "inputs": [],
       "name": "getState",
       "outputs": [
          {
             "internalType": "bool",
             "name": "",
             "type": "bool"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [],
       "name": "setState",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [],
       "name": "state",
       "outputs": [
          {
             "internalType": "bool",
             "name": "",
             "type": "bool"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    }
] as const
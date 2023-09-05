export const SaldoContract = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "alamat",
          "type": "address"
        }
      ],
      "name": "BacaSaldo",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "saldo",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "alamat",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "saldoBaru",
          "type": "uint256"
        }
      ],
      "name": "TambahSaldo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "saldoPerAddress",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
]
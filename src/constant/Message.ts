export const Message = [
    {
      stateMutability: 'view',
      type: 'function',
      inputs: [],
      name: 'myString',
      outputs: [{ name: '', internalType: 'string', type: 'string' }],
    },
    {
      stateMutability: 'nonpayable',
      type: 'function',
      inputs: [{ name: '_myString', internalType: 'string', type: 'string' }],
      name: 'setMyString',
      outputs: [],
    },
] as const
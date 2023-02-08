"use strict";
/*
Create a function named blockChain that creates a block in your very own block chain. It takes 2 arguments:

data: any valid JSON data.
prev: the previous block, if no block are given it should use the genesis block: { index: 0, hash: '0' }.
A block must have the following properties:

index
hash: a computed hash using the hashCode function provided. You will need to pass it a concatenation of the block's index, the previous block's hash and the block's stringified data.
data: any valid object.
prev: the previous block.
chain: a function that accepts data as an argument, and creates the next block with it.
*/

const hashCode = str =>
  (
    [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
  ).toString(36)

const blockChain = function (data, prev = { index: 0, hash: '0' }) {
    return {
        index: prev.index+1,
        data: data,
        prev: prev,
        hash: hashCode(`${prev.index+1}${prev.hash}${JSON.stringify(data)}`),
        chain: function(data) {
            return blockChain(data, prev = this)
        }
    }
}
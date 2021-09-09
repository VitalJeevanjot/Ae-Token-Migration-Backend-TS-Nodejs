import express from 'express';
import MerkleTree from './createMerkleTree'
import data from './data/final-token-holders-sorted.json'
const app = express();


var data_to_array: string[] = []

data_to_array = Object.entries(data).map((e) => ( JSON.stringify({ [e[0]]: e[1] }).replace(/{|}|"/g, '').toUpperCase()));


// console.log("data_to_array--")
// console.log(data_to_array)
console.log("data_to_array length--")
console.log(data_to_array.length)
var tree = new MerkleTree(data_to_array)

var values = Object.values(data);
var sumValues = 0n
// for (let index = 0; index < values.length; index++) {
//   // console.log(index)
//   sumValues = BigInt(values[index]) + (sumValues+'n');
// }
// console.log("sumValues--")
// console.log(sumValues)
// console.log("Get Tree--")
// console.log(tree.getTree())
console.log("Get Root Hash--")
console.log(tree.getRootHash())
// console.log("Get Index--")
// console.log(tree.getIndexFromHash('310E3A573B9299000F054D25F0D301CD314C081E4C4E03E8CC07B660B8B4CC95'))

app.get('/', (req, res) => {
  res.send(data_to_array);
})

app.listen(3000, () => console.log('Running!'))


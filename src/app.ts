import express from 'express';
import MerkleTree from './createMerkleTree'
import data from './data/final-token-holders-sorted.json'
const app = express();


var data_to_array = []

data_to_array = Object.entries(data).map((e) => ( JSON.stringify({ [e[0]]: e[1] }).replace(/{|}|"/g, '').toUpperCase()));


console.log("data_to_array--")
console.log(data_to_array)
console.log("data_to_array length--")
console.log(data_to_array.length)
var tree = new MerkleTree(data_to_array)

var values = Object.values(data);
var sumValues = 0
for (let index = 0; index < values.length; index++) {
  // console.log(index)
  sumValues = Number(values[index]) + sumValues;
}
console.log("sumValues--")
console.log(sumValues.toLocaleString('fullwide', {useGrouping:false}))
// console.log("Get Tree--")
// console.log(tree.getTree())
console.log("Get Root Hash--")
console.log(tree.getRootHash())

app.get('/', (req, res) => {
  res.send('Helloi');
})

app.listen(3000, () => console.log('Running!'))


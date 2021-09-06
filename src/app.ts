import express from 'express';
import MerkleTree from './createMerkleTree'
import * as data from './data/final-token-holders-sorted-upperCase.json'
const app = express();

var treed = new MerkleTree(data)
console.log(treed)

app.get('/', (req, res) => {
  res.send('Helloi');
})

app.listen(3000, () => console.log('Running!'))


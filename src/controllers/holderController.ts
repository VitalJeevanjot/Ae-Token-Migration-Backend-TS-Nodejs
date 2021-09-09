import { Request, Response } from 'express';
import Holder from './../holders';

import MerkleTree from '../createMerkleTree'
import data from '../data/final-token-holders-sorted.json'


var data_to_array: string[] = []
data_to_array = Object.entries(data).map((e) => ( JSON.stringify({ [e[0]]: e[1] }).replace(/{|}|"/g, '').toUpperCase()));
var tree = new MerkleTree(data_to_array)

// Endpoints...
// GET - / - tree status, Root hash of merkel tree & number of leafs/nodes.
// GET - /info/<eth_address> - get info from eth address.
// GET - /hash/<index> - get hash from leaf index.
// GET - /siblings/<index> - get intermediary hashes (array) by given leaf index.
// POST - /validate - Check validity of request.
// POST - /migrate - Migrate tokens.

export let rootHash = (req: Request, res: Response) => {
  return res.send({"status": true, "tree": {"root": tree.getRootHash(), "length": tree.leaves.length}});
}





// logs




// console.log("data_to_array--")
// console.log(data_to_array)
// console.log("data_to_array length--")


// var values = Object.values(data);
// var sumValues = 0
// for (let index = 0; index < values.length; index++) {
//   // console.log(index)
//   sumValues = BigInt(values[index]) + (sumValues+'n');
// }
// console.log("sumValues--")
// console.log(sumValues)
// console.log("Get Tree--")
// console.log(tree.getTree())
// console.log("Get Root Hash--")
// console.log(tree.getRootHash())
// console.log("Get Index--")
// console.log(tree.getIndexFromHash('310E3A573B9299000F054D25F0D301CD314C081E4C4E03E8CC07B660B8B4CC95'))

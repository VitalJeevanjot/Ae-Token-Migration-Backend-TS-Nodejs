import { Request, Repsonse } from 'express';
import Holder from './../holders';


// Endpoints...
// GET - / - tree status.
// GET - /info/<eth_address> - get info from eth address.
// GET - /hash/<index> - get hash from leaf index.
// GET - /siblings/<index> - get intermediary hashes (array) by given leaf index.
// POST - /validate - Check validity of request.
// POST - /migrate - Migrate tokens.
import * as mongoose from 'mongoose';
const uri = "mongodb://jeevanjot:kjwebrkbwe34523@mongodb.ex-genievot.svc.cluster.local:27017/?authSource=token_holders&readPreference=primary&appname=MongoDB%20Compass&ssl=false";

mongoose.connect(uri, (err: any) => {
  if(err) {
    console.log(err.message)
  } else {
    console.log("Successfully Connected to MongoDB.")
  }
});

export const holderSchema = new mongoose.Schema({
  hash: { type: String, required: true },
  eth_address: { type: String, required: true},
  balance: { type: String, required: false },
  leaf_index: { type: Number, required: true },
  migrated: [{ type: Boolean, required: true }],
  ae_address: { type: String, required: false},
  migrate_tx_hash: { type: String, required: false }
});

const Holder = mongoose.model('Holder', holderSchema);

export default Holder;
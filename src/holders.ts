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
  ethAddress: { type: String, required: true},
  balance: { type: String, required: true },
  index: { type: Number, required: true },
  hashes: [{ type: String, required: true }],
  hash: { type: String, required: true },
  migrated: { type: Boolean, required: true }
});

const Holder = mongoose.model('Holder', holderSchema);

export default Holder;
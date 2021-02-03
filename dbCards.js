import mongoose from 'mongoose';
//collection > array of docs > coll > array of docs...

var Schema = mongoose.Schema;
var cardSchema = new Schema({
    name: String,
    imgUrl: String
})

export default mongoose.model("Cards",cardSchema);
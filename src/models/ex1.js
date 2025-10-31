import {Schema, model} from "mongoose";

const exemploPrato = new Schema({
  nome: {type: String, requied:true},
  preco: {type: Number}
})

const PratoModel = model('Prato', prato)

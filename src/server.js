import express from "express"
import { Database } from "./databases.js"
const app = express()
app.use(express.json())

const database = new Database()
app.get('/', (req, res) => {
    res.send("Você está na página principal")
})

app.get('/usuario', (req, res) => {
    const data = database.select("usuarios")
    res.status(200).json(data)
})

app.post('/usuario', (req, res) => {
    const {nome, idade, email} = req.body
    if (nome, idade, email){
        database.insert("usuario", {nome, idade, email})
        return res.status(201).send("Usuário Criado")
    }

    return res.status(400).send("Informações inválidas")

})

app.get('/produto', (req, res) => {
    const data = database.select("produtos")
    res.status(200).json(data)
})

app.post('/produto', (req, res) => {
    const {nome, valor, descricao} = req.body
    if (nome, valor, descricao){
        database.insert("produto", {nome, valor, descricao})
        return res.status(201).send("Produto Criado")
    }

    return res.status(400).send("Informações inválidas")

})

app.listen(3333, () => {
    console.log("Servidor rodando na porta em http://localhost:3333")
})
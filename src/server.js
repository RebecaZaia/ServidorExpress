import express from "express"
const app = express()
app.use(express.json())

const usuarios = []

app.get('/', (req, res) => {
    res.send("Você está na página principal")
})

app.get('/usuario', (req, res) => {
    res.status(200).json(usuarios)
})

app.post('/usuario', (req, res) => {
    const {nome, idade} = req.body
    usuarios.push({nome, idade})
    console.log(usuarios)
    res.status(201).send("Usuário Criado")
})

app.listen(3333, () => {
    console.log("Servidor rodando na porta em http://localhost:3333")
})
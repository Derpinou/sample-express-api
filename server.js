//Import depencies
const app = require('express')();
const port = 8080
const body = require('body-parser')
const jsonDatas = require('./api.json')

app.use(body())
//Create Routes
app.get('/', (req, res) => {
    res.send("<h1>Hello World</h1>");
});

app.get('/api/:id', (req,res) => {
    res.status(200).json(jsonDatas[req.params.id])
})

app.post('/api/console', (req, res) => {
    console.log(req.body)
    res.status(200).send("OK")
})
//Listen 8080 port
app.listen(port, ()=> {
    console.log(`Logged at http://localhost:${port}`)
})
const { index: listarTodos, store: adicionar, find: listarPorId, update: atualizar, exclude: remover } = require("./controller/user");

const app = require("./app");
var ip = require("ip");
const cors = require('cors');

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

console.dir ( ip.address() );
const port = 3003;

console.log(`Goal Users starting ...`)

app.listen(port, () => {
    console.log(`Goal Users listening at ${ip.address()}:${port}`)
})

// root
//app.get("/", homePage);

// Create
app.post("/users", adicionar);

// Read
app.get("/users", listarTodos);
app.get("/users/:id", listarPorId);

// Update
app.put("/users/:id", atualizar);

// Delete
app.delete("/users/:id", remover);
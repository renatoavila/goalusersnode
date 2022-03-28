const { index: listarTodos, store: adicionar, find: listarPorId, update: atualizar, exclude: remover } = require("./controller/user");
//const {homePage} =require("../../GoalAngular/pages/index.ts")
const app = require("./app");

var ip = require("ip");
console.dir ( ip.address() );

const port = 3003;

console.log(`Goal starting ...`)

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
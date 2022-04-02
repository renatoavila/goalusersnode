const {adicionar, alterar, remover, listarPorId, listarTodos} = require("../services/users");

const index = async (req,res) => {

    try {
        const users = await listarTodos();
        res.send(users);
        console.info(users);
    } catch(erro){
        console.error(erro);
    }
}

const store = async(req,res) => {
    try {
        const user = req.body;

        const retorno = await adicionar(user);
        user.id = retorno.insertId;
        res.status(201).send(user);

    } catch(erro){
        console.error(erro);
    }
}

const find = async(req,res) => {

    try {
        const { email } = req.params;

        console.log("id is: "+email);

        const [user] = await listarPorId(email);

        if(!user)
            return res.sendStatus(404).send({erro:"User não encontrado"});
        res.send(user);

    } catch(erro){
        console.error(erro);
    }
}
const update = async(req,res) => {
    try {
        const user = req.body;
        const { id } = req.params;
        const retorno = await alterar(user, id);
        console.log(retorno.affectedRows);
        res.sendStatus(200);

    } catch(erro){
        console.error(erro);
    }
}

const exclude = async(req,res) => {
    try {
        const user = req.body;
        const { id } = req.params;

        const retorno = await remover(id);
        res.sendStatus(200);

    } catch(erro){
        console.error(erro);
    }
}

module.exports = { index, store, find, update, exclude}
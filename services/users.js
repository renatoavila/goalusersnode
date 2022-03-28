const { CODEFRESH } = require("ci-info");
const conexao = require("../infra/conexao");


const adicionar = (user) => {
    const sql = "insert into goaluser set ?";

    return new Promise((resolve, reject) => {
        const query = conexao.format(sql, user);

        conexao.query(query, (erro, retorno) => {
            if(erro) return reject(erro);
            resolve(retorno);
        })
    })
};

const alterar = (user,id) => {
    const sql = "update goaluser set nome=?, sobrenome=?, userid=?, senha=?, email=? where id=?";

    return new Promise((resolve, reject) => {
        const query = conexao.format(sql, [user.nome, user.sobrenome, user.userid, user.senha, user.email, id]);
console.log(">>>>>>>>>>>"+query);
        conexao.query(query, (erro, retorno) => {
            if(erro) return reject(erro);
            resolve(retorno);
        })
    })
};

const remover = (id) => {
    const sql = "delete from goaluser where id = ?";

    return new Promise((resolve, reject) => {
        const query = conexao.format(sql, id);

        conexao.query(query, (erro, retorno) => {
            if(erro) return reject(erro);
            resolve(retorno);
        })
    })
};

const listarTodos = () => {
    const sql = "SELECT * FROM goaluser";

    return new Promise((resolve, reject) => {
        const query = conexao.format(sql);

        conexao.query(query, (erro, retorno) => {
            if(erro) return reject(erro);
            resolve(retorno);
        })
    })
};

const listarPorId = (id) => {
    const sql = "select * from goaluser where id = ?";

    return new Promise((resolve, reject) => {
        const query = conexao.format(sql, id);

        conexao.query(query, (erro, retorno) => {
            if(erro) return reject(erro);
            resolve(retorno);
        })
    })
};

module.exports = { adicionar, alterar, remover, listarTodos, listarPorId}
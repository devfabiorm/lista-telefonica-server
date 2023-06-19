var router = require("./router");

var app = router(3412);

const operadoras = [
  { nome: "Oi", codigo: 14, Categoria: "celular", preco: 2 },
  { nome: "Vivo", codigo: 15, Categoria: "celular", preco: 1 },
  { nome: "Tim", codigo: 41, Categoria: "celular", preco: 3 },
];

const contatos = [
  {
    id: 1,
    nome: "Bruno",
    telefone: "9999-2222",
    data: new Date(),
    operadora: operadoras[0],
  },
  {
    id: 1,
    nome: "Bruno",
    telefone: "9999-3333",
    data: new Date(),
    operadora: operadoras[1],
  },
  {
    id: 1,
    nome: "Bruno",
    telefone: "9999-9999",
    data: new Date(),
    operadora: operadoras[2],
  },
];

app.get("/operadoras", function (req, res) {
  res.write(JSON.stringify(operadoras));
  res.end();
});

app.get("/contatos", function (req, res) {
  res.write(JSON.stringify(contatos));
  res.end();
});

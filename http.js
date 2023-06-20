var router = require("./router");

var app = router(3412);

const operadoras = [
  { nome: "Oi", codigo: 14, categoria: "celular", preco: 2 },
  { nome: "Vivo", codigo: 15, categoria: "celular", preco: 1 },
  { nome: "Tim", codigo: 41, categoria: "celular", preco: 3 },
];

const contatos = [
  {
    id: 1,
    nome: "Sandra",
    telefone: "9999-2222",
    data: new Date(),
    operadora: operadoras[0],
  },
  {
    id: 1,
    nome: "Mariana",
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

app.interceptor(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS,POST,GET");
  res.setHeader("Access-Control-Max-Age", 2592000);
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get("/operadoras", function (req, res) {
  res.write(JSON.stringify(operadoras));
  res.end();
});

app.get("/contatos", function (req, res) {
  res.write(JSON.stringify(contatos));
  res.end();
});

app.post("/contatos", function (req, res) {
  var contato = req.body;
  contatos.push(JSON.parse(contato));
  res.end();
});

app.options("/contatos", function (req, res) {
  res.end();
});

import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import UsuarioController from "./controller/user.controller";
import ProdutoController from "./controller/produto.controller";
import LojaController from "./controller/loja.controller";
import FornecedorController from "./controller/fornecedor.controller";

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server on...");
});

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ success: true, msg: "Server esta rodando." });
});

//app.post()
//app.get()
const usuariosController = new UsuarioController();

app.post("/usuarios", usuariosController.create);
app.get("/usuarios", usuariosController.list);

const produtosController = new ProdutoController();
app.post("/produtos", produtosController.create);
app.get("/produtos", produtosController.list);

const lojasController = new LojaController();
app.post("/lojas", lojasController.create);
app.get("/lojas", lojasController.list);

const fornecedoresController = new FornecedorController();
app.post("/fornecedores", fornecedoresController.create);
app.get("/fornecedores", fornecedoresController.list);

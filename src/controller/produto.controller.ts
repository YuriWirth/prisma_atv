import db from "../database/prisma.connection";
import { Request, Response } from "express";

class ProdutoController {
  public async create(req: Request, res: Response) {
    try {
      const { valor, quantidade_estoque, descricao, tipo_produto } = req.body;
      await db.produto.create({
        data: {
          valor,
          quantidade_estoque,
          descricao,
          tipo_produto,
        },
      });
      return res.status(200).json({ success: true, msg: "Produto criado." });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, msg: "Produto não foi criado." });
    }
  }
  public async list(req: Request, res: Response) {
    try {
      const produtos = await db.produto.findMany();
      return res
        .status(200)
        .json({ success: true, msg: "Lista de produtos", data: produtos });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, msg: "Produto não listado." });
    }
  }
}
export default ProdutoController;

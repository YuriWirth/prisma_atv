import db from "../database/prisma.connection";
import { Request, Response } from "express";

class FornecedorController {
  public async create(req: Request, res: Response) {
    try {
      const { nome, email, avaliacao } = req.body;
      await db.fornecedor.create({
        data: {
          nome,
          email,
          avaliacao,
        },
      });
      return res.status(200).json({ success: true, msg: "Fornecedor criado." });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, msg: "Fornecedor não foi criado." });
    }
  }
  public async list(req: Request, res: Response) {
    try {
      const fornecedores = await db.fornecedor.findMany();
      return res.status(200).json({
        success: true,
        msg: "Lista de fornecedores",
        data: fornecedores,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, msg: "Fornecedor não listado." });
    }
  }
}

export default FornecedorController;

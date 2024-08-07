import db from "../database/prisma.connection";
import { Request, Response } from "express";

class LojaController {
  public async create(req: Request, res: Response) {
    try {
      const { cnpj, nome, endereco, quantidade_filiais } = req.body;
      await db.loja.create({
        data: {
          cnpj,
          nome,
          endereco,
          quantidade_filiais,
        },
      });
      return res.status(200).json({ success: true, msg: "Loja criada." });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, msg: "Loja não foi criada." });
    }
  }
  public async list(req: Request, res: Response) {
    try {
      const lojas = await db.loja.findMany();
      return res
        .status(200)
        .json({ success: true, msg: "Lista de Lojas", data: lojas });
    } catch (error) {
      return res.status(500).json({ success: false, msg: "Loja não listada." });
    }
  }
}

export default LojaController;

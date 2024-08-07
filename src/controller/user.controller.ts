import { Request, Response } from "express";
import db from "../database/prisma.connection";

class UsuarioController {
  public async create(req: Request, res: Response) {
    try {
      const { name, email, senha, idade, github } = req.body;
      await db.usuario.create({
        data: {
          email,
          senha,
          idade,
          name,
          github,
        },
      });
      return res.status(200).json({ success: true, msg: "Usuario criado." });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, msg: "O usuario não foi criado." });
    }
  }
  public async list(req: Request, res: Response) {
    try {
      const usuarios = await db.usuario.findMany();
      return res
        .status(200)
        .json({ success: true, msg: "Lista de usuarios", data: usuarios });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, msg: "Usuario não listado." });
    }
  }
}
export default UsuarioController;

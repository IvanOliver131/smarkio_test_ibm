import { Request, Response } from 'express';

import { CommentsService } from '../services/comments.service';

class CommentsController {

  async create(req: Request, res: Response) {
    const { descricao } = req.body;

    const commentsService = new CommentsService()

    try {
      const comment = await commentsService.create(descricao)
      return res.status(comment.status).json(comment.obj)
    }
    catch (error) {
      return res.status(400).json({ message: 'Falha de conexão com o Banco de Dados' })
    }
  }

  async read(req: Request, res: Response) {
    const commentsService = new CommentsService()

    try {
      const comment = await commentsService.read();
      return res.status(200).json(comment);
    } catch (error) {
      return res.status(400).json({ message: 'Falha de conexão com o banco de dados' })
    }
  }

}

export default new CommentsController();
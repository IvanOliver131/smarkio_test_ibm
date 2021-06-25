import { getRepository, Repository } from 'typeorm';
import Comment from '../models/Comment'

class CommentsService {
    private connectComments: Repository<Comment>
    constructor() {
        this.connectComments = getRepository(Comment)
    }

    async create(descricao: string) {
        try {
            const comment = this.connectComments.create({
                descricao
            })
            await this.connectComments.save(comment)
            return { status: 201, obj: comment }
        } catch (error) {
            throw error
        }
    }

    async read() {
        try {
            return await this.connectComments.find();
        } catch (error) {
            throw error
        }
    }

}

export { CommentsService }
import { Router } from 'express';

import CommentsController from './app/controllers/CommentsController';
import VoiceController from './app/controllers/VoiceController';

const router = Router();

router.post('/comments', CommentsController.create)
router.get('/comments', CommentsController.read)
router.get('/speech', VoiceController.talk)

export default router;
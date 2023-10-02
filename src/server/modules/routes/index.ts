import { Router } from 'express';
import SongRouter from './songs.router';

export const router: Router = Router();
router.use('/song', SongRouter);

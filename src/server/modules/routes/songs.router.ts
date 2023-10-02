import { Router } from 'express';
import { getSongs } from '../controllers/song.controller';

const SongRouter: Router = Router();

SongRouter.get('/', getSongs);

export default SongRouter;

import * as express from 'express';
import chirpRouter from './chirps';
import mentionsRouter from './mentions';
const router = express.Router();

router.use('/chirps', chirpRouter);
router.use('/mentions', mentionsRouter);

export default router;
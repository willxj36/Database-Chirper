import * as express from 'express';
import db from '../db';
const router = express.Router();

router.post('/id?', (req, res) => {
    db.Mentions.post
})

router.delete('/id?', (req, res) => {

})

export default router;
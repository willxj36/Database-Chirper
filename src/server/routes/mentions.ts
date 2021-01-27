import * as express from 'express';
import db from '../db';
const router = express.Router();

router.post('/', (req, res) => {
    try {
        db.Mentions.post(req.body.user, req.body.chirpid);
        res.sendStatus(200);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:name?', async (req, res) => {
    try {
        let name: string = req.params.name;
        let mention = await db.Mentions.getOne(name);
        res.send(mention);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

export default router;
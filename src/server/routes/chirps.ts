import * as express from 'express';
import db from '../db';
const router = express.Router();

router.get('/:id?', async (req, res) => {
    try {
        let id: string = req.params.id;
        if(id) {
            let chirp = await db.Chirps.one(id);
            res.send(chirp[0]);
        } else {
            let chirps = await db.Chirps.all();
            res.send(chirps);
        }
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.post('/', async (req, res) => {
    try {
        let chirp: Chirp = req.body;
        db.Chirps.post(chirp.name, chirp.text, chirp.location);
        res.sendStatus(200);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.put('/:id', (req, res) => {
    let id: string = req.params.id;
    let chirp: Chirp = req.body;
    db.Chirps.put(id, chirp.name, chirp.text);
    res.send('Chirp updated successfully!');
})

router.delete('/:id', (req, res) => {
    let id: string = req.params.id;
    db.Chirps.deleter(id);
    res.send('Chirp deleted successfully!');
})

interface Chirp {
    name: string
    text: string
    location: string
}

export default router;
import { Query } from './index';

const all = async () => Query('SELECT c.id, u.name, c.text FROM chirps c JOIN users u ON c.userid = u.id ORDER BY id DESC');

const one = async (id: string) => Query('SELECT c.id, u.name, c.text FROM chirps c JOIN users u ON c.userid = u.id WHERE c.id = ?', [id]);

const post = async (name: string, text: string, location: string) => {
    try {
        Query(
            'INSERT INTO chirps SET userid = (SELECT id FROM users WHERE name LIKE ?), text = ?, location = ?', [name, text, location]
        )
    }catch(e) {
        console.log(e);
    }
};

const put = async (id: string, name: string, text: string) => {
    try {
        Query(
            'UPDATE chirps c SET userid = (SELECT id FROM users WHERE name LIKE ?), text = ? WHERE c.id = ?', [name, text, id]
        )
    } catch(e) {
        console.log(e);
    }
}

const deleter = async (id: string) => {
    try {
        Query('DELETE FROM chirps WHERE id = ?', [id]);
    } catch(e) {
        console.log(e);
    }
}

export default {
    all,
    one,
    post,
    put,
    deleter
}
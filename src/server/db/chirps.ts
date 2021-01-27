import { Query } from './index';

const all = async () => Query('SELECT c.id, u.name, c.text FROM chirps c JOIN users u ON c.userid = u.id ORDER BY id DESC');

const one = async (id: string) => Query('SELECT c.id, u.name, c.text FROM chirps c JOIN users u ON c.userid = u.id WHERE c.id = ?', [id]);

const post = async (name: string, text: string, location: string) => {
    Query(
        'INSERT INTO chirps SET userid = (SELECT id FROM users WHERE name LIKE ?), text = ?, location = ?', [name, text, location]
    )
};

const put = async (id: string, name: string, text: string) => {
    Query(
        'UPDATE chirps c SET userid = (SELECT id FROM users WHERE name LIKE ?), text = ? WHERE c.id = ?', [name, text, id]
    )
};

const deleter = async (id: string) => Query('DELETE FROM chirps WHERE id = ?', [id]);

export default {
    all,
    one,
    post,
    put,
    deleter
}
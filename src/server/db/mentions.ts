import { Query } from './index';

const post = async (user: string, chirpid: string) => {
    Query('INSERT INTO mentions SET userid = (SELECT id FROM users WHERE name LIKE ?), chirpid = ?', [user, chirpid]);
}

const getOne = async (name: string) => Query('SELECT u.name, c.text FROM mentions m JOIN chirps c ON c.id = m.chirpid JOIN users u ON u.id = m.userid WHERE u.name LIKE ?', [name]);

export default { post, getOne };
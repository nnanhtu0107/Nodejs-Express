import pool from '../configs/connectDB';

let getHompage = async (rep, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');

    return res.render('index.ejs', { dataUser: rows });
}

let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    let [user] = await pool.execute('select * from users where id = ?',[userId]);
    return res.send(JSON.stringify(user));
}
let createNewUser = async (req, res) => {
    console.log('Check Request:', req.body);
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('INSERT INTO users(firstName, lastName, email, address) values (?, ?, ?, ?)', [firstName, lastName, email, address]);
    return res.redirect('/');

}
let deleteUser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute('DELETE FROM users WHERE id = ?', [userId]);
    return res.redirect('/');
}

let getEditPage = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute('SELECT * FROM users WHERE id = ?', [id]);
    return res.render('update.ejs', { dataUser: user[0] }); // x <- y key: values
}

let postUpdateUser = async (req, res) => {
    let { firstName, lastName, email, address,id } = req.body;
    await pool.execute('UPDATE users SET firstName = ?,lastName = ?, email = ?, address = ? WHERE id = ?', [firstName, lastName, email, address, id]);
    return res.redirect('/');
}
module.exports = {
    getHompage, getDetailPage, createNewUser, deleteUser, getEditPage, postUpdateUser
}
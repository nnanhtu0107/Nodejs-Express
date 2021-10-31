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
    console.log('Check Request:', req.body)
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('INSERT INTO users(firstName, lastName, email, address) values (?, ?, ?, ?)', [firstName, lastName, email, address]);
    return res.redirect('/')

}
module.exports = {
    getHompage, getDetailPage, createNewUser
}
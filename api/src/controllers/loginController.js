class Login {

    login(req, res) {
        res.json({ msg: 'login' });
    }
    register(req, res) {
        res.json({ msg: 'register' });
    }

}
module.exports = new Login();
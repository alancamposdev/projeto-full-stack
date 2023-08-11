class Cidades{
    getAll(req, res) {
        res.json({msg: 'getAll cidades'});
    }
    getById(req, res) {
        res.send('getById cidades');
    }
    create(req, res) {
        res.send('create cidades');
    }
    update(req, res) {
        res.send('update cidades');
    }
    delete(req, res) {
        res.send('delete cidades');
    }
}

module.exports = new Cidades();
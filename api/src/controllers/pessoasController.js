class Pessoas{
    getAll(req, res){
        res.json({msg: 'getAll pessoas'});
    }
    getById(req, res){
        res.send('getById pessoas');
    }
    create(req, res){
        res.send('create pessoas');
    }
    update(req, res){
        res.send('update pessoas');
    }
    delete(req, res){
        res.send('delete pessoas');
    }

}
module.exports = new Pessoas();
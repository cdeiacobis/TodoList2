module.exports = (function () {

    var getAll =  function(req,res){
        res.send('tutti...')
    }

    var getOne = function(req,res){
        res.send("Il to do con id:" + req.params.id)
    }

    var create =  function(req,res){
        res.json(req.body)
    }

    var update = function(req,res){
        res.json({
            id: req.params.id, 
            dati: req.body})
    }

    var deleteOne = function(req,res){
        res.json({
            id: req.params.id})
    }
    

    return {
        getAll: getAll, //chiave-valore (se coincidono si può togliere)
        getOne:getOne,
        create: create,
        update: update,
        deleteOne: deleteOne

    }

})(); //la fx si auto-lancia
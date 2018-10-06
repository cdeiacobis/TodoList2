module.exports = (function(){
    
    var getAll=function(req,res){
        res.send('hello hello')
    }

    var getOne=function(req,res){
        res.send('hello utente')
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

    return{
        getAll:getAll,
        getOne:getOne,
        create:create,
        update:update,
        deleteOne:deleteOne
    }
})();
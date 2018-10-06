module.exports = (function(){
    
    var getAll=function(req,res){
        res.send('hello hello')
    }

    var getOne=function(req,res){
        res.send('hello utente')
    }

    return{
        getAll:getAll,
        getOne:getOne
    }
})();
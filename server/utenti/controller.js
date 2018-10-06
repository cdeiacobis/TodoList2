module.exports = (function(){
    
    var getAll=function(req,res){
        res.send('hello hello')
    }


    return{
        getAll:getAll
    }
})();
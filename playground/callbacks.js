var getUser = (id,callback)=>{
    var user = {
        id:id,
        name:'Vitor'
    };

    setTimeout(()=>{
        callback(user);
    },3000)
    
};


getUser(1,(userObj)=>{
//function que roda depois que getUser terminar
console.log(userObj);
});
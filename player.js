class Player{

    constuctor (){

    }
getCount(){
    var pop=database.ref('playercount')
    pop.on("value",function(data){
playercount=data.val();
    })

}
update(name){
var playerindex="player"+playercount
database.ref(playerindex).set({
    Name:name
})
}

updatecount(count){
database.ref('/').update({
   playercount:count 
})
}
}
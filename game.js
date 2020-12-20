class Game{
    constructor(){
        
    }

    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
        
    }

    getState(){
        var gameStateref=database("gameState");
        gameState.on("value",(data)=>{
            gameState = data.val();
        })
    }

    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }

    play(){
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            background("red");
            Image(carromboard,0,0,800,800);
        }
        
        

    }
    
}

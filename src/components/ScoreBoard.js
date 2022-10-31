

const ScoreBoard = ({score} ) =>{
     
    

     if(score > 30){
      document.body.style.backgroundImage = "url('https://giffiles.alphacoders.com/133/133581.gif')";    
     }
     if(score > 60){
      document.body.style.backgroundImage = "url('https://giffiles.alphacoders.com/133/133579.gif')"; 
     }
     if(score > 90){
      document.body.style.backgroundImage = "url('https://giffiles.alphacoders.com/133/133574.gif')"; 
     }
     if(score > 120){
      document.body.style.backgroundImage = "url('https://giffiles.alphacoders.com/133/133576.gif')"; 
     }
     if(score > 150){
      document.body.style.backgroundImage = "url('https://media1.giphy.com/media/dUIZlh9FGTUa8EN7K2/giphy.gif')"; 
     }
     if(score > 180){
      document.body.style.backgroundImage = "url('https://giffiles.alphacoders.com/133/133575.gif')"; 
     }
    
    
    return(
        <div className="score-board">
            <h1>🍬Score {score}</h1>       
        </div>
    )
}

export default ScoreBoard
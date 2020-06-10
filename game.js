





var scores,roundScores,activePlayer,gamePlaying;


//document.querySelector('#current-' + activePlayer).textContent = dice;
resetGame();

var lastDice;

document.querySelector('.btn-roll').addEventListener('click',function(){
    
     if (gamePlaying){
       var dice1 = Math.floor(Math.random() * 6) +1;
       var dice2 = Math.floor(Math.random() * 6) +1; 
         
       document.getElementById('dice-1').style.display = 'block';
       document.getElementById('dice-2').style.display = 'block';
       document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
       document.getElementById('dice-2').src = 'dice-' + dice2 + '.png'; 
         
         if ( dice1 !== 1 && dice2 !==1){
         roundScores += dice1 + dice2;
         
         
         document.querySelector('#current-' + activePlayer).textContent = roundScores;
         
      }else {
         selectPlayer();
      } 
     
         
     /*if (dice === 6 && lastDice === 6){
         scores[activePlayer] = 0
         document.querySelector('#score-' + activePlayer).textContent = '0';
     }else if ( dice !== 1){
         roundScores += dice;
         
         document.querySelector('#current-' + activePlayer).textContent = roundScores;
         
     }else {
         selectPlayer();
      }  
         
        lastDice = dice; */
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(gamePlaying){
        scores[activePlayer] += roundScores;
        document.querySelector('#score-' + activePlayer).textContent =scores[activePlayer];
        var input = document.querySelector('.final-score').value;
        var winningScore = input;
        if(input){
             winningScore = input;
        }else {
            winningScore = 100;
        }
        
        
        if(scores[activePlayer] >= winningScore){
            document.querySelector('#name-'+ activePlayer).textContent = 'winner!';
            hideDice();
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        
        
         }else {
          selectPlayer();
      }   
    } 
});


document.querySelector('.btn-new').addEventListener('click', resetGame);



function resetGame(){
    scores =[0,0];
    activePlayer =0;
    roundScores = 0;
    gamePlaying = true;
    
    hideDice();
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent ='Player 1';
    document.getElementById('name-1').textContent ='Player 2';
    
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');   
}

function selectPlayer (){
         activePlayer === 0 ? activePlayer = 1 : activePlayer =0;
         roundScores = 0;
         document.getElementById('current-0').textContent = '0';
         document.getElementById('current-1').textContent = '0';
         
         document.querySelector('.player-0-panel').classList.toggle('active');
         document.querySelector('.player-1-panel').classList.toggle('active');
         hideDice();
}

        
 function hideDice () {
         document.getElementById('dice-1').style.display = 'none';
         document.getElementById('dice-2').style.display = 'none';
     
 }        
         
  
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         

         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
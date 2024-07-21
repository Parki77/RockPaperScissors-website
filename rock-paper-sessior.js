const wini={
  wins:0,
  tie:0,
  loses:0
}


function score()
{
  document.querySelector('.js-score').innerHTML = 
  `Wins: ${wini.wins}, Ties: ${wini.tie}, Losses: ${wini.loses}`;
 
}

function pickcomputermove(){
  let commove='';
  
  const rando= Math.random();
  
  if(rando>=0 && rando<1/3)
  {
    commove='Rock';
  }
  else if(rando>=1/3 && rando<2/3)
  {
    commove='Paper';
  }
  else if(rando>=2/3 && rando<1)
  {
      commove='scissor';
  }
  
  
  return commove;

    }
    score();
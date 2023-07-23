

function evenOrOdd(){
    let userNumber='';
    while(userNumber!==0){
         userNumber=+prompt('Enter a number\n\ for Exit enter 0');
  (userNumber%2===0) ? alert(`${userNumber} is even`) : alert(`${userNumber} is odd`);
    }
}
evenOrOdd();
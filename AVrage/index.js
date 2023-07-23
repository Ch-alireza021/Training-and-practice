function Avrage(){
   let userNumber=''
   let sum=0;
   let count=0
    while(userNumber!==0){
        userNumber=+prompt('');
         sum+=userNumber; 
         userNumber!=0 ? count++ : count ;
    }
   console.log(sum/count)
}
Avrage();
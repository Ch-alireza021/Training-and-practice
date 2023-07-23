let users = [
    {id: 1, name: 'amin', family: 'saeedirad', age: 21, email: 'ce01010101it@gmail.com'},
    {id: 2, name: 'amir', family: 'hoyeiny', age: 19, email: 'amir@gmail.com'},
    {id: 3, name: 'ali', family: 'mohammadi', age: 10, email: 'ali@gmail.com'},
  ]

let login=()=>{
    let userName='  '
    let i=3
    while(userName!=null){
        
         userName=prompt('username')
        const userFamily=prompt('family')
        const userAge=prompt('age')
        const userEmail=prompt('email')
         i++;
        const user={
            id: i,
            name:userName ,
            family:userFamily ,
            age:userAge,
            email:userEmail ,
        };
        users.push(user)
    }
}
login();
console.log(users)
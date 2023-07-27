let login = document.querySelector("#login");
let userName = document.querySelector("#userName");
let password = document.querySelector("#password");
let modal = document.querySelector("#modal");
let form = document.querySelector("#form");
let userNameHelp=document.querySelector('#userNameHelp')
let passwordHelp=document.querySelector('#passwordHelp')

// -------------------event click------------------

// login.addEventListener('click',function(){
// let userNameValue=userName.value
//     console.log(userNameValue);

//     let passwordValue=password.value
//     console.log(passwordValue);

//     // let modalValue=modal.textContent

//     if(userNameValue.length<11){
//         modal.textContent="Your username must be at least 12 characters long "
//         modal.style.display="block"
//         setTimeout(() => {
//             modal.style.display="none"
//         }, 3000);
//     }else if(passwordValue.length<7){
//         modal.textContent="Your password must be at least 8 characters long "
//         modal.style.display="block"

//         setTimeout(() => {
//             modal.style.display="none"

//         }, 3000);
//     }else{
//         modal.textContent="Welcome "
//         modal.style.display="block"
//         modal.style.backgroundColor="green"
//         setTimeout(() => {
//             modal.style.display="none"
//         modal.style.backgroundColor="red"

//         }, 3000);
//     }

// })

// -------------------event submit && form data-------------------

// console.log(form);

form.addEventListener("submit", function (e) {
  let form = document.querySelector("#form");
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(form).entries());
  console.log(formData);

  let userNameValue = formData.userName;
  let passwordValue = formData.password;
  // console.log(userNameValue);
  if (userNameValue.length < 12) {
    modal.textContent = "Your username must be at least 12 characters long ";
    modal.style.display = "block";
    
  } else if (passwordValue.length < 8) {
    modal.textContent = "Your password must be at least 8 characters long ";
    modal.style.display = "block";

  } else {
    modal.textContent = "Welcome ";
    modal.style.display = "block";
    modal.style.backgroundColor = "green";
}
setTimeout(() => {
  modal.style.display = "none";
  modal.style.backgroundColor = "red";
}, 3000);
});

// -------------------event blur------------------

// userName.addEventListener("blur",function(){
//   let userNameValue=userName.value

//   if (userNameValue.length < 12) {
//         modal.textContent = "Your username must be at least 12 characters long ";
//         modal.style.display = "block";
//         setTimeout(() => {
//           modal.style.display = "none";
//         }, 3000);
//       }})

//         password.addEventListener("blur",function(){
//           let passwordValue=userName.value
//     if (passwordValue.length < 8) {
//         modal.textContent = "Your password must be at least 8 characters long ";
//         modal.style.display = "block";

//         setTimeout(() => {
//           modal.style.display = "none";
//         }, 3000);
// }})

// -------------------------------------------------------------------


userName.addEventListener('focus',function(){
  userNameHelp.style.display='block'
})

password.addEventListener('focus',function(){
 passwordHelp.style.display='block'
})
function singup(){

    let  Name = document.getElementById('username');
    let Email = document.getElementById("email");
    let Password = document.getElementById("password");
    let Conformpassword = document.getElementById("conformpassword");
        
  
    let user = {
      Name: Name.value,
      Email: Email.value,
      Password: Password.value,
      Conformpassword: Conformpassword.value,   
      id: Math.floor(Math.random() * 1000),
      allExpenses: [],
      categories: [],
  };
  console.log(user)
  Math.floor(user.id)
  let users = [];
  if (JSON.parse(localStorage.getItem("users"))) {
      const prevUsers = JSON.parse(localStorage.getItem("users"));
      prevUsers.forEach(element => {
          users.push(element);
      });
  }
  users.push(user)
  localStorage.setItem("users", JSON.stringify(users));

 

clear();


}
function clear(){
                    
  document.getElementById("username").value = "";
            
  document.getElementById("email").value = "";
            
  document.getElementById("password").value = "";
            
  document.getElementById("conformpassword").value = "";


 }

let nameerror = document.getElementById("name-error");

 function validation(){
 
let name = document.getElementById("username").value;

if(name.length == 0){
  nameerror.innerHTML ="**Name is requid";
  return false;


}
if(!name.match(/^[A-za-z]*\s{1}[A-za-z]*$/)){
  nameerror.innerHTML ="**write full name";
  return false;


}
nameerror.innerHTML = '<i class="ri-checkbox-fill"></i>'
return true;

  
  

  }
  //email validation//

  let emailerror = document.getElementById("email-error");

 function validationemail(){
 
let email= document.getElementById("email").value;

if(email.length == 0){
  emailerror.innerHTML ="**Email is Requied";
  return false;


}

emailerror.innerHTML = '<i class="ri-checkbox-fill"></i>'
return true;;

  
  

  }
  //phone validation//

  let passworderror = document.getElementById("password-error")

 function validation3(){
 
let password= document.getElementById("password").value;

if(password.length == 0){
  passworderror.innerHTML ="**Password only 8 number";
  return false;
}
if(!password.match(/^[0-8]{8}$/)){
  passwordlerror.innerHTML ="**Password succesful";
  return false;


}

passworderror.innerHTML = '<i class="ri-checkbox-fill"></i>'
return true;;

  
  

  }
  let cpassworderror = document.getElementById("cpassword-error")
  function validation4(){
 
    let conformpassword= document.getElementById("conformpassword").value;
    
    
    if(conformpassword.length == 0){
      passworderror.innerHTML ="**password not match";
      return false;
    
    
    }
    if(!conformpassword.match(/^[0-8]{8}$/)){
      cpassworderror.innerHTML ="**Password not match";
      return false;
    
    
    }
    
    cpassworderror.innerHTML = '<i class="ri-checkbox-fill"></i>'
    return true;;
    
      
      
    
      }
      function thank(){
        

        let Name = document.getElementById('username').value;
     


        if(Name == "" ){
         // swal("Thanks !", "Registrationsucccessfull ","" )
         Swal.fire({
         text: 'Successfully Registered!',
          icon: 'success',  title: 'Tanks',
       
        
        
       cancelButtonColor: '#d33',
          
    })
        }
      }
function  singin(){
    
    
    let email = document.getElementById("Email") ;
    let password = document.getElementById("Password");


    let islogin = false;
    let loginDetails;
    let usersData = JSON.parse(localStorage.getItem('users'));
    usersData.forEach(user => {
        if (email.value === user.Email && password.value === user.Password) {
            console.log("user found")
            islogin = true
            loginDetails = { ...user }
        }
    }) ; 
     if (islogin) {
      localStorage.setItem('allUserData', JSON.stringify(loginDetails))
     
  
            

  
    
   Swal.fire({
    title: 'Successfully Registered!',
    text: 'WELCOM',
    icon: "success",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
 cancelButtonColor: '#d33',
    confirmButtonText: ' Welcome Page!',
 }).then (function(result){
   if (result.isConfirmed) {
     location.assign("./pages/home.html")
   };
 });
} else {



     swal("Password !", " NO", 'error' )

}    

// user name show welcom page//
//let users = users.filter((v)=>{return v.email == email && v.password == password})[0]
      // localStorage.setItem("name",users.Name) 
}




/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';


document.querySelector("#button").addEventListener("click", getExternal);
function showhide() {
  const div = document.querySelector("#newpost");
  if (div.style.display !== "block") {
    div.style.display = "block";
  }
  else {
    div.style.display = "none";
  }
}


function getExternal(){
  fetch ("https://api.github.com/users")
.then(response => response.json())
.then(data => outputExternal(data))
.catch(error => console.log(error))
}
function outputExternal(data){
  let output = "";
  data.forEach(user => {
    output += `<li>${user.login} ${user.avatar_url} </li>`
  });
  document.querySelector("#output").innerHTML = output
}

let mainDiv = document.querySelector('.main-div');

let button = document.querySelector('#themeChanger');

let themeMode = document.querySelector('#themeMode');

let body = document.body;



button.addEventListener("click",()=>{
    body.classList.toggle('active');
    if(body.classList == 'active'){
        themeMode.innerHTML = "Dark";
    }else{
        themeMode.innerHTML = "Light";
    }
});
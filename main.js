var errortxt  = document.getElementById("error");

document.getElementById("emailbtn").addEventListener("click", function(){
    var email = document.getElementById("emailinp").value;
    console.log(email); 
    if(email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        errortxt.innerHTML = "";
        errortxt.style.color = "green";
        errortxt.innerHTML = "Thank you for Subscribing";
        errortxt.style.visibility = "visible";
    }else{
        errortxt.innerHTML = "";
        errortxt.style.color = "red";
        errortxt.innerHTML = "Email is not valid";
        errortxt.style.visibility = "visible";
    }
}); 

const burger = document.querySelector('.burger');
const navMobile = document.querySelector('.nav-links-mobile');
const navLinks = document.querySelectorAll('.nav-links li');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
var i = 1;

burger.addEventListener('click', () => {
    if(i%2 != 0){
        navMobile.style.visibility = 'visible';
        line2.style.visibility = 'hidden';
        line1.style.transform = 'rotate(-45deg) translate(-4px, 6px)';
        line3.style.transform = 'rotate(45deg) translate(-4px, -6px)';
        burger.style.transform = 'translateY(-90%)';
        burger.style.position = 'relative'; 
    }else{
        line2.style.visibility = 'visible';
        line1.style.transform = 'rotate(0deg) translate(0px, 0px)';
        line3.style.transform = 'rotate(0deg) translate(0px, 0px)';
        burger.style.transform = 'translateY(0%)';
        navMobile.style.visibility = 'hidden';
    }
    i++;
}); 

var root = document.documentElement;
const lists = document.querySelectorAll('.ts'); 

lists.forEach(el => {
  const listItems = el.querySelectorAll('testimonial');
  const n = el.children.length;
  el.style.setProperty('--total', n);
});
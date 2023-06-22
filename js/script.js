const menuBtn = document.getElementById("menu-btn");
const product = document.querySelector(".product")
const closeBtn = document.querySelector(".close");

const dropDown = document.getElementById("dropdown");

 menuBtn.onclick=()=>{
   console.log("add");
    dropDown.classList.add("show");

 }

 product.onclick=()=>{

    dropDown.classList.add("show");

 }

 closeBtn.onclick=()=>{
    dropDown.classList.remove("show");
 }
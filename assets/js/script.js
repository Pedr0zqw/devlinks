const btn_switch = document.querySelectorAll("button")[0];
const body_switch = document.querySelectorAll("body")[0];
let btn = false;


btn_switch.addEventListener("click", ()=>{
    if (btn == false) {
     btn = !btn;
 body_switch.classList = "";   
    } else {
   btn = !btn;
 body_switch.classList = "light";
    }
})

window.addEventListener('scroll',()=>{
    document.getElementById('nav').classList.toggle('sticky',window.scrollY>0);
})
var ul=document.querySelector('#ul');
//navbar
const navigation = document.querySelector(".toggle i");
navigation.onclick = function () {
    navigation.classList.toggle("fa-times");
    ul.classList.toggle("block");
}
var listItems=ul.querySelectorAll('li').forEach((item)=>{
    item.onclick=()=>{
    ul.classList.remove('block');
    navigation.classList.remove('fa-times')
    }
})
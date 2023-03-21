let input = document.getElementById('text');
let qrImg = document.getElementById('qrimg');
let imgBox= document.getElementById('imgbox');
let qrBtn= document.getElementById('qrbtn');
let error = document.querySelector('.error')
qrBtn.addEventListener('click', ()=>{

 if(input.value.length > 0){
qrImg.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ input.value;

imgBox.classList.add("show-img");
    }
else {
error.style.display="block";
 qrImg.style.display="none";
input.style.border=" 1px solid #EA4335";
}
});

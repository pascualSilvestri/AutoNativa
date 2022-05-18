addEventListener('DOMContentLoaded',()=>{
    const btn = document.querySelector('.btn-menu');
    if(btn){
        btn.addEventListener('click',()=>{
            const nav = document.querySelector('.nav-ul-respon');
            nav.classList.toggle('mostrar'); 
        })
    }
})
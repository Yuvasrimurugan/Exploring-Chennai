/*window.onload=function(){
    window.addEventListener('scroll',function(e){
        if(window.pageYOffset>100){
            document.querySelector("header").classList.add('is-scrolling');

        }
        else{
            document.querySelector("header").classList.remove('is-scrolling');
        }
    });
    const menu_btn=document.querySelector('.hamburger');
    const mobile_menu=document.querySelector('.mobile-nav');
    menu_btn.addEventListener('click',function(){
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');

    });
}*/
/*document.querySelectorz('.menu-toggle').addEventListener('click',()=>{
    document.querySelector('.nav-links').classList.toggle('active');
})
    */
document.getElementById('contactform').addEventListener('submit',(e)=>{
    e.preventDefault();
    alert("thsnks for submission")
})
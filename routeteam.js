let all=document.getElementById("all");
let graphics=document.getElementById("graphics");
let web=document.getElementById("web");
let brand=document.getElementById("brand");
let hey=document.getElementById("hey");
let by=document.getElementById("by");
let mody=document.getElementById("mody");
let bony=document.getElementById("bony");
let imgs =Array.from(document.querySelectorAll('.nagi'));
let background =document.querySelector(".background");
let backgrounditem =document.querySelector(".backgrounditem");
let exit = document.querySelector('.exit');
let imageIndex;
for(let i=0;i<imgs.length;i++)
{
imgs[i].addEventListener("click",function(e){
    showPortfolio(e)

})
}
function showPortfolio(event) {
    console.log(event.target)
        imageIndex = imgs.indexOf(event.target);
       background.classList.remove('d-none');
       background.classList.add('d-flex');
        backgrounditem.style.backgroundImage = `url(${event.target.src})`;
    }

    exit.addEventListener("click", exitimgs);
    function exitimgs()
    
    { 
        background.classList.add('d-none');
         background.classList.remove('d-flex'); 
    
    
    }
    document.addEventListener('keydown',function(e)
    {
        if(e.key=='Escape')
        {
            exitimgs();
        }
    })
   
all.addEventListener("click",function(){
    oneway();
})
function oneway(){
    bony.classList.remove("d-none");
    hey.classList.remove("d-none");
    mody.classList.remove("d-none");
    by.classList.remove("d-none");
    all.style.backgroundColor='white';
   graphics.style.backgroundColor='transparent';
    web.style.backgroundColor='transparent';
    brand.style.backgroundColor='transparent';
}
graphics.addEventListener("click",function(){
    twoway();
})
function twoway(){
    bony.classList.add("d-none");
    hey.classList.remove("d-none");
    mody.classList.remove("d-none");
    by.classList.remove("d-none");
    graphics.style.backgroundColor='white';
    all.style.backgroundColor='transparent';
    web.style.backgroundColor='transparent';
    brand.style.backgroundColor='transparent';
}
web.addEventListener("click",function(){
    threeway();
})
function threeway(){
    hey.classList.remove("d-none");
    by.classList.add("d-none");
    mody.classList.add("d-none");
    bony.classList.add("d-none");
    web.style.backgroundColor='white';
    all.style.backgroundColor='transparent';
    graphics.style.backgroundColor='transparent';
    brand.style.backgroundColor='transparent';
}
    brand.addEventListener("click",function(){
        fourway();
    })
    function fourway(){
        hey.classList.add("d-none");
        by.classList.add("d-none");
        mody.classList.add("d-none");
        bony.classList.add("d-none");
        brand.style.backgroundColor='white';
        all.style.backgroundColor='transparent';
        graphics.style.backgroundColor='transparent';
       web.style.backgroundColor='transparent';
    }
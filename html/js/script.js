var brandbutton = document.querySelectorAll("a");

for(var i=0; i< brandbutton.length;i++){
    brandbutton[i].addEventListener("mouseover",function(){
    this.style.color="Green" ;
});
    brandbutton[i].addEventListener("mouseout",function(){
    this.style.color="White" ;
});
    brandbutton[i].addEventListener("click", function(){
        this.classList.toggle("done")
    });

}




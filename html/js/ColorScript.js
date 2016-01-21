
var element = document.getElementById('GetStartedBtn');
var jumbot = document.getElementsByClassName('jumbotron');

element.addEventListener("click", function(){
     
    document.body.classList.toggle("body2");
    element.classList.toggle('btn-success');
    jumbot[0].classList.toggle("jumbo2");
    
    });     
 
 var brandbutton = document.querySelectorAll("a");

for(var i=0; i< 3;i++){
    brandbutton[i].addEventListener("mouseover",function(){
    this.style.color="Green" ;
});
    brandbutton[i].addEventListener("mouseout",function(){
    this.style.color="white" ;
});
   
}


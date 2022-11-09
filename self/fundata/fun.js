var img =document.getElementById("funs");
img.addEventListener("mouseover",function(){
    this.src ="fundata/no.png";
})

img.addEventListener("mouseout",function(){
    this.src ="fundata/yes.png";
})
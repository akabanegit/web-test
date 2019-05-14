window.onload = prepareLinks;
function prepareLinks(){
    var links=document.getElementsByTagName("a");
    for(let i=0;i<links.length;i++){
        if(links[i].getAttribute("class")==="popup"){
            links[i].onclick=function(){
                popUp(this.href);
                return false;
            }
        }
    }
}
function popUp(winURL){
    window.open(winURL,"popup","width=320,height=480");
}



function prepareGallery(){
    if(!document.getElementById||!document.getElementsByTagName){
        return false;
    }
    if(!document.getElementById("imagegallery")){
        return false;
    }//向后兼容
    var gallery=document.getElementById("gallery");
    var links=gallery.getElementsByTagName("a");
    for(i=0;i<links.length;i++){
        links[i].onclick=function(){
            showPic(this);
            return false;
        }
    }

}
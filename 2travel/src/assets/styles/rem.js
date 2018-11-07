function resize(originSize,type){
  var type=type||"x";
  var widths=document.documentElement.clientWidth;
  var heights=document.documentElement.clientHeight;
  if(type=="x"){
    var scale=widths/originSize*100+"px";
  }else{
    var scale=heights/originSize*100+"px";
  }
  document.getElementsByTagName("html")[0].style.fontSize=scale;
}
window.onload=function(){
  resize(667,"y");     //参数 412为UI设计图的总宽度
}

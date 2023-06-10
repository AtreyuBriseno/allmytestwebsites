/*
document.getElementById("submit").onclick = function(){
  var sa = document.getElementById("age").value;    //sa means submitidage
  
  if (sa < 15){
    alert('too young');
  }if (sa = 15 and sa < 16 ){
    alert('too young but you can try for your permit');
  }if (sa >= 70){
    alert('you might need to get a new license');
  }else{
    alert('you can drive')
  }
}
*/
document.getElementById("submit").onclick = function(){
  var sa = document.getElementById("age").value;    //sa means submitidage

  if (sa < 15){
    alert('too young');
  }if (sa = 15 and sa < 16){
    alert('too young but you can try for your permit');
  }if (sa >= 70){
    alert('you might need to get a new permit');
  }else{
    alert('you can drive');
  }
}

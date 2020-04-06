var numero = prompt("Hola Bienvenido!! Escoge un Numero")

function esdivisible (n, div){
  if(n % div == 0){
    return true
  }
  else{
    return false
  }
}

for(i=1; i<= numero; i++){
  if(esdivisible(i,3)){
    document.write("agua")
  }
  if(esdivisible(i,5)){
    document.write("cate")
  }
  if(!esdivisible(i,3)&&!esdivisible(i,5)){
    document.write(i)
  }
  document.write("<br />");
}

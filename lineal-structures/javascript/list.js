class Nodo {
  constructor(valor) {
    this.valor = valor
    this.siguiente = null
  }
}

class Lista{
  constructor() {
    this.cabeza = null
  }
  
  agregar(valor) {
    var temp = new Nodo(valor)
    temp.siguiente = this.cabeza
    this.cabeza = temp
  }
  
  mostrar() {
    var temp = this.cabeza
    document.getElementById("log").innerHTML+="<br>[ "    
    while(temp) {
      document.getElementById("log").innerHTML+=temp.valor+" ";
      temp = temp.siguiente
    }
    document.getElementById("log").innerHTML+="]"
  } 
}

var lista = new Lista()
lista.agregar(20)
lista.agregar(10)
lista.agregar(15)
lista.agregar(5)
lista.mostrar()

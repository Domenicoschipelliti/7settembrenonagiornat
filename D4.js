/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(li,l2){
 let rettangolo=li * l2
 return rettangolo
}



console.log(area(1,2));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum=function(num,num2){
    let somma=num + num2
     
   if (num===num2) {
       return somma * 3
    }
   return somma

}

console.log(crazySum(2,2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n1) {
     let diff=Math.abs(n1-19)  //math.abs serve per calcolare la differenza assoluta
     if (n1>19) {
        diff=n1*3
     }
    return diff
}

console.log(crazyDiff(27))




/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary=function(n){
    
    if (n>=20 && n<=100 || n===400) {
        return true
    }

    else{
        return false
    }
  
}

console.log(boundary(20))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify=function(stringa) {
   let  string=""
   
    
    const stringanuova=string.concat("EPICODE")

    if (string==="EPICODE") {
         return stringa
    }
    
    //indexof serve per vedere la posizione della stringa corrente e lastof fa il contrario i 2 accettano un altro parametro che consiste nel dire in quale posizione si vuole inziare la ricerca.
    return stringanuova
}

console.log(epify());



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n4){
   let  nem=n4
  if (n4 / 3 && n4 / 7) {
    return nem
  }
  
  
}

console.log(check3and7(21))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString=function(string){
    string="EPICODE"

    if(string==="EPICODE")
    return string="EDOCIPE"

}
console.log(reverseString())


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst=function(stringa){
    stringa="buongiorno barone biagio"
   
   return stringa.replaceAll("b","B")
}

console.log(upperFirst())

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString=function(str) {
    str="EpicodE"

    let nuovaStringa= str
    return nuovaStringa.replaceAll("E","")
}

console.log(cutString());

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

 let array=[]

 function giveMeRandom(n) {
    
    n=array
         

    if (n=array) {
        return array.push(Math.random())
    }
    console.log(array)
    
 }

 console.log(giveMeRandom())

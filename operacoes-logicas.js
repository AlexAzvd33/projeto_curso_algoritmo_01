/* 

passou:= falso 
escreval("Digite o nome do aluno:  ")
leia(nome)
escreval("Digite a nota 01 do aluno:  ")
leia(nota01))
escreval("Digite a nota 02 do aluno:  ")
leia(nota02)
media := (nota01 + nota02) / 2

se media >= 50 entao 
  passou := verdadeiro
fimse


se ( passou ) && ( media >= 50  || media <= 70) entao  
 escreval("Aprovado!", nome)
senao 
  escreval("Reprovado!", nome)
fimse

 */


 var nome, nota01, nota02, passou; 

passou = false

 nome = prompt("Digite o nome do aluno: ")
 nota01 =  prompt("Digite a nota 01 do aluno: ")
 nota02 = prompt("Digite a nota 02 do aluno: ")
 
 media =  (parseInt(nota01)  + parseInt (nota02)) / 2;
 
 if(media >=50)
     passou = true; 

 if(passou && (media >= 70 && media <= 90))
     alert("Aprovado!" +  nome)
 else
     alert("Reprovado!" + nome)
    
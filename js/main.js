function clicou(){
document.getElementById("clique").innerHTML = "Clicou";
}

function redirecionar(){
    window.open("https://google.com");
}

function trocarTexto(elemento){
   elemento.innerText = "Passou pq quis";
}

function voltar(){
    document.getElementById("mouse").innerText = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChance(elemento){
    console.log(elemento.value);
}
/*
function soma(n1,n2){
    return n1 +n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace("5 mais 5 é 10","10","dez"));


var date = new Date();
alert(date);


var count;
for(count=0; count <=5; count++){
    alert(count);
}

var count = 0;
while(count<5){
    console.log(count);
    count = count+1;
    alert(count);

}


var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
}

var dicionario = [{login:"gabrielgadelha3798@gmail.com", senha:"tijolocomketchup"},{login:"gabrielggg", senha:"ggg123"}];
console.log(dicionario);


var lista = ["Português", "inglês", "espanhol"];
lista.push("francês");
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" | "));

alert("teste kraio");
alert(lista.toString().replace("Português", "hue"));
*/


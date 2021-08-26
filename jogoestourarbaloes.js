function addBola() {
    var bola = document.createElement("div")
    //document.createElement vai criar um elemento novo
    //e vai armazenar na variavel bola, no caso a div
    bola.setAttribute("class","bola");
    //Agora estamos adicionando o atributo class
    // com o valor bola
    var p1 = Math.floor(Math.random() * 500);
    //Gerando numero aleatorio de 0 a 500 para o p1
    var p2 = Math.floor(Math.random() * 400);
    //Gerando numero aleatorio de 0 a 400 para o p2
    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");
    //adicionando atribute style para dizer que é css
    //vamos colocar a propriedade left e vamos concatenar com o valor de p1.
    //vamos colocar a propriedade top e vamos concatenar com o valor de p2.
    //o px é para indicar que é pixel
    bola.setAttribute("onclick", "estourar(this)");
    //evento de click
    document.body.appendChild(bola);
    //Isso vai pegar o conteudo que já está lá no site 
    //e vai adicionar um elemento novo que vai ser a bola
}
function estourar(elemento) {
    document.body.removeChild(elemento);
}
function iniciar() {
    setInterval(addBola, 1000);
    //setando um intervalo de tempo de 1 segundo para ele executar a função addBola.
    //o 1000 equivale a um segundo.
}
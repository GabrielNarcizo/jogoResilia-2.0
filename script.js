//CRIA BOTÕES

function criarBotao(btn1, funcName1, btn2, funcName2){
    var btn = document.getElementById("btn2");
    btn.innerHTML= `<button onclick = "${funcName1}()">${btn1}</button>
    <button  onclick = "${funcName2}()">${btn2}</button>`
}

//MENSAGENS NA TELA

function msgs(txt){
    var msg = document.getElementById("txt");
    msg.innerHTML = txt
}

//REMOVE INPUT DA TELA PARA DAR SEQUENCIA

function remove(){
    var input = document.getElementById("digitaNome");
    input.style.display = 'none'
    var botao = document.getElementById("btn");
    botao.style.display = 'none';
    var radio = document.getElementById("rb");
    radio.style.display = 'none'
    var textoMusica = document.getElementById("texto-musica");
    textoMusica.innerHTML = ""
}

//FUNÇÃO PARA FECHAR O GAME

function sair(){
    window.close();
}

//REINICIAR JOGO

function reinicia(){
    location.reload();
}

//FUNÇÃO WIN

function win(){
    document.getElementById("txt").style.color = "white";
    var venceu = new Image(); 
    venceu.src = "win.jpg";
    document.body.style.backgroundImage = "url('win.jpg')";
}

//FUNÇÃO PARA RESETAR O LAYOUT

function resetaLayout(){
    
    document.body.style.backgroundImage = ""
    document.body.style.backgroundColor = "rgba(129, 187, 158, 0.533)"

    var paragrafo = document.getElementById("txt");
    paragrafo.style.color = "";
}




//FUNÇÃO GAME OVER

function gameOver(){
    document.getElementById("txt").style.color = "yellow";
    // var fim = new Image(); 
    // fim.src = "gameOver.jpg";
    //document.body.style.backgroundImage = "url('gameOver.jpg')";
    document.body.style.backgroundImage = "url('gameOver.jpg')";
}



//ARRAY DE BOTÕES

var btns = 
        [
            ['Cálice direita', 'escolheCaliceDireita', 'Cálice esquerda', 'escolheCaliceEsquerda'], //0
            ['SOMBRA', 'escolheSombra', 'ÁRVORE', 'escolheArvore'],                                        //1   
            ['Baú de ouro', 'escolheBauOuro', 'Baú de pirita', 'escolheBauPirita'],          //2
            ['Entregar moedas', 'entregaMoedas', 'Contar uma história', 'contaHistoria'],    //3
            ['Reiniciar fase', 'inicio', 'Sair', 'sair'],                          // 4
            ['Jogar novamente', 'reinicia', 'Sair', 'sair'],                                    //5
            ['Guerra', 'contaGuerra', 'Fome', 'contaFome'],                                  //6
            ['Reiniciar fase', 'escolheCaliceDireita', 'Sair', 'sair'],                      //7
            ['Reiniciar fase', 'escolheSombra', 'Sair', 'sair'],                            //8
            ['Reiniciar fase', 'contaHistoria', 'Sair', 'sair']                             //9
        ]

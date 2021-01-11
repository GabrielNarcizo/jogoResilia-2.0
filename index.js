function inicia(){
    
    var nome = document.getElementById("digitaNome").value
    document.getElementById("caixa").innerHTML = `Jogador: ${nome}`
    document.getElementById("btn").innerHTML = "Start with double click"
}

function start(){
    var rb = document.getElementById("rb");
    var audio = new Audio('Canto-elfico.mp3');
    if (rb.checked == true) {
        
        audio.play();
    
        remove();

        msgs();
        
        inicio();
    } else {
        remove();

        msgs();
        
        inicio();
    }
    
    
}

function inicio(){
    resetaLayout();
    msgs(`O instrutor do local os indica por onde devem entrar na floresta e ao adentrar, um ser com um crânio de bode escondendo a face lhes entrega uma carta e em uma língua estranha deseja a vocês boa sorte.<br><br><br>Na carta tem o primeiro enigma: A sua frente duas opções, uma abrirá sua mente e a outra o chão. A opção correta é escamada, lembre-se disso antes da decisão ser tomada. Dirijam-se ao x e escolham com sabedoria.<br><br><br>Agora que está no x, faça sua escolha. A sua frente existem dois cálices, Yuno aponta que o cálice a sua direita tem alguns animais entalhados e entre eles um peixe. Yuki diz que o da esquerda tem um pequeno abacaxi quase imperceptível em sua beirada.`)
    criarBotao(...btns[0])
    
}


//ALTERNATIVAS CORRETAS

function escolheCaliceDireita(){
    
    msgs (`Ao escolher o cálice da direita você e seus amigos percebem que nele se encontra uma pequena chave. Parabéns, vamos para a próxima fase.<br><br>Uma figura élfica entrega uma carta a vocês e em uma língua estranha aponta para onde devem seguir, a frente tem uma cabana e em sua entrada uma figura doce que se parece com uma fada os impede de continuar pergutando-lhes qual a senha.<br><br>Vocês abrem a carta e nela está escrito: Ao nascer e ao morrer sou grande, porém sou pequena no vigor da idade. Quem sou eu? Pensem bem antes de responder.`)
    criarBotao(...btns[1])
    
    resetaLayout();
}

function escolheSombra(){
    msgs('A porta da cabana se abre e a fada lhe entrega uma carta, é hora de saber para que serve a chave que vocês conseguiram.<br><br>A cabana é mal ilumina quase não dá para vocês verem um passo a frente. Yuki tropeça em algo e palavrões ecooam pelo local. A frente de vocês uma luz fraca começa a surgir aumentando seu brilho até deixar claro que ilumina dois baús. Yuno fala que finalmente poderão usar a chave.<br><br> Vocês abrem a carta e ela diz "eu fui banhado pela luz do sol, meu brilho é sedutor, já não sei do meu valor.".')
    criarBotao(...btns[2])
    resetaLayout();
}

function escolheBauPirita(){
    msgs('A chave se encaixa perfeitamente e o baú é aberto, em seu interior uma pequena bolsa de pano desgastado contendo moedas douradas.<br><br>Um pigarro ecoa atrás de vocês e ao se virarem o infarto quase vem, uma figura com olhos vermelhos, rosto branco e chifres estava parado bem a frente, ele os acompanha até o lado de fora.<br><br>A figura horripilante lhes indica o caminho e ao chegar ao local se deparam com uma figura que parece o Coronte da mitologia, ele está em um barco os aguardando. O barqueiro os informa que para leva-los ao outro lado do rio vocês podem pagar com ouro ou lhe contar uma boa história, mas se a história não for boa a Morte virá buscá-los. Yuki diz para acabar logo com isso e Yuno diz que vocês deveriam ficar com as moedas como recordação.')
    criarBotao(...btns[3])
}

function entregaMoedas(){
    msgs('Parabéns, você e seus amigos terminaram o desafio!');
    criarBotao(...btns[5])
    win()
    
}

function contaHistoria(){
    msgs (`Você tem duas opções de história.<br><br>A história de um jovem chamado Guerra que destruiu a humanidade.<br>A história de um lobo chamado Fome que devorou a humanidade.`)
    criarBotao(...btns[6])
    resetaLayout();
}

function contaFome(){
    msgs('Sua história agradou o barqueiro e assim ele os leva até o final do desafio. Parabéns, vocês venceram!')
    criarBotao(...btns[5])
    win()
}


//ALTERNATIVAS INCORRETAS

function escolheCaliceEsquerda(){
    gameOver();
    msgs (`FIM DE JOGO!!! O chão abaixo de você se abre e você e seus amigos caem em alguns colchões. Vocês falharam!`);
    criarBotao(...btns[4]);

}

function escolheArvore(){
    gameOver();
    msgs ('A fada não lhe deixa passar e infelizmente esse era o único caminho para continuar. Vocês falharam. FIM DE JOGO!')
    criarBotao(...btns[7])
}

function escolheBauOuro(){
    gameOver();
    msgs ('A chave não abre o baú, mas ativa um mecanismo no teto que derrama sobre vocês sangue falso ou ao menos é o que querem acreditar.Vocês fracassaram!')
    criarBotao(...btns[8])
}

function contaGuerra(){
    gameOver();
    msgs ('O barqueiro achou sua história chata, ele ouve o choro de Guerra todos os dias em seu rio de lamentações. A Morte os leva para fora.')
    criarBotao(...btns[9])
}
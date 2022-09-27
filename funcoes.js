function paraResponder() {
    let numTicket = document.getElementsByClassName('description ng-binding')[0].innerText;
    let msg = `
--------
Para responder a este ticket, siga os seguintes passos:
1) Acesse: https://app.uff.br/atendimento. Informe o seu login e senha.
2) No sistema, clique no logotipo da UFF (logotipo azul), presente na parte superior esquerda da tela.
3) Clique no menu compacto que aparece do lado superior esquerdo (três traços) > escolha a opção 'Meus tickets'.
4) No campo 'Pesquisa' informe o número do ticket ${numTicket} e selecione a opção 'Todos' no campo  'Situação' .
5) Aperte o botão enter do teclado ou confirme a pesquisa clicando no símbolo de uma lupa (símbolo verde, presente ao lado direito da tela).
6) No ticket ${numTicket}, procure pelo símbolo de 'Adicionar nota' (símbolo de um balão de texto) e adicione seus comentários/resposta.
Em caso de dúvidas, entre em contato com nossa central de atendimento pelo email atendimento@id.uff.br, informando o número deste ticket.
 
Atenciosamente,
Equipe Web`;
    return msg;
}

function bomDiaBoaTardeBoaNoite() {
    let fullName = document.getElementsByClassName('requester-information-title ng-binding')[0].innerText;
    let arrayName = fullName.split(" "); 
    let userName = arrayName[0];
    let data = new Date();
    let hora = data.getHours();

    if (hora <= 11) {
        return `Bom dia, ${userName}.`;
    } else if (hora <= 18) {
        return `Boa tarde, ${userName}.`;
    } else {
        return `Boa noite, ${userName}.`;
    }
}

if (window.location.hostname === 'citsmart.uff.br') {
    let msg = `${bomDiaBoaTardeBoaNoite()}


    ${paraResponder()}
    `;

    navigator.clipboard.writeText(msg)

    setTimeout(() => {
        alert(msg);
    }, 0);

}

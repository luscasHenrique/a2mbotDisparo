async function dialogo1(client, message) {
  const texto1 = "Me chamo Ritheli, é um prazer!\nFaço parte da equipe A2M uma agência especializada em aumentar os resultados das empresas.\nEu gostaria de uma oportunidade para falar um pouco mais sobre nosso trabalho!";
  const texto2 =
    "Já pensou em aumentar suas vendas em até 10x mais sem precisar gastar tempo com mídias sociais e estratégias que não dão certo?";
  const texto3 =
    "Temos uma equipe qualificada que busca gerar resultados com, excelência e muita precisão, e estamos com uma ótima oferta para o seu negócio.\nVocê é o responsável para que eu possa explicar como funciona?";

  await client
    .sendText(message.from, texto1)
    .then((result) => {
      client
        .sendText(message.from, texto2)
        .then((result) => {
          client.sendText(message.from, texto3);
          console.log("Result: ", result); //return object success
        })
        .then((result) => {
          console.log("Result: ", result); //return object success
        });
      console.log("Result: ", "result"); //return object success
    })
    .catch((erro) => {
      console.error("Erro ao enviar mensagem ", erro); //return object error
    });
}

module.exports = dialogo1;

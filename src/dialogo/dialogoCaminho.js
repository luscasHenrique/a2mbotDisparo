async function dialogoCaminho(client, message) {
  const texto = "*Como podemos ajudar?\n1 - Orçamento 2 - Falar no SAC*"

  await client
    .sendText(message.from, texto)
    .then(() => {
      console.log('Result: ', "result"); //return object success
    })
    .catch((erro) => {
      console.error('Erro ao enviar mensagem ', erro); //return object error
    });
}

module.exports = dialogoCaminho;
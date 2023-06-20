async function dialogoInicial(client, message) {
  const texto = "*Olá, seja bem vindo a Loja Tendenci.\nFavor escolher enviando a numeração desejada. Você já é cliente?\n1 - Sim 2 - Não*"

  await client
    .sendText(message.from, texto)
    .then(() => {
      console.log('Result: ', "result"); //return object success
    })
    .catch((erro) => {
      console.error('Erro ao enviar mensagem ', erro); //return object error
    });
}

export default dialogoInicial;
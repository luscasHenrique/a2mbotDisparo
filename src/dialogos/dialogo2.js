async function dialogo2(client, message) {
  const texto = "*Estou entrando em contato porque ficamos interessados na sua empresa..."

  await client
    .sendText(message.from, texto)
    .then(() => {
      console.log('Result: ', "result"); //return object success
    })
    .catch((erro) => {
      console.error('Erro ao enviar mensagem ', erro); //return object error
    });
}

module.exports = dialogo2; 
async function dialogo1(client, message) {
  const texto1 = "Prazer, me chamo Ritheli😊";
  const texto2 =
    "Faço parte de uma equipe de marketing especializada em alavancar empresas como a sua🚀\nEstou entrando em contato porque ficamos interessados na sua empresa...";
  const texto3 =
    "Você tem 5 minutos para que eu possa explicar como podemos ajudar vocês?";

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

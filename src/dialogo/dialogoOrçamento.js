async function dialogoOrçamento(client, message) {
  const texto = "*O orçamento desejado seria:\n1 - móveis e estantes\n 2- planejados\n3- quadros\n4 - mesas e aparadores"

  await client
    .sendText(message.from, texto)
    .then(() => {
      console.log('Result: ', "result"); //return object success
    })
    .catch((erro) => {
      console.error('Erro ao enviar mensagem ', erro); //return object error
    });
}

export default dialogoOrçamento;
async function dialogoSac(client, message) {
  const texto = "Como podemos ajudar?\n*1 - acompanhar produtos\n2 - Troca ou devolução\n0 - Voltar ao menu inicial*"

  await client
    .sendText(message.from, texto)
    .then(() => {
      console.log('Result: ', "result"); //return object success
    })
    .catch((erro) => {
      console.error('Erro ao enviar mensagem ', erro); //return object error
    });
}

export default dialogoSac;
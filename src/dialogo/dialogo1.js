async function dialogo1(client, message) {
  const buttons = [
    {
      buttonText: {
        displayText: "Orçamentos",
      },
      buttonText: {
        displayText: "Falar no sac",
      },
    },
  ];
  await client
    .sendButtons(message.from, "Title", buttons, "Description")
    .then((result) => {
      console.log("Result: ", result); //return object success
    })
    .catch((erro) => {
      console.error("Error when sending: ", erro); //return object error
    });
}
export default dialogo1;

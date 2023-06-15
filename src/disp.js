import conn from "./db/conn.js";
import Cliente from "./models/chat.js";
import schedule from "node-schedule";
import moment from "moment";
import { create } from "venom-bot";
import { Op } from "sequelize";
import dialogo1 from "./dialogo/dialogo1.js"


const venomOptions = {
  multiDevice: true,
  session: 'Testes',
  createPathFileToken: true,
  waitForLogin: true,
  createPathFileToken:true,
};

function start(client) {
  console.log("Cliente Venom iniciado!");
  // Bot ativo
  schedule.scheduleJob("*/15 * * * * *", () => {
  (async () => {
    const atendido = 0

    const clientes = await Cliente.findAll({
      where: {
        atendido: {
          [Op.eq]: atendido,
        },
      },
    });

    if (clientes.length === 0) {
      console.log("Todos os contatos foram processados!");
      return;
    }

    for (const cliente of clientes) {
      const id = cliente.id;
      const assunto = cliente.assunto;
      const nome = cliente.nome;
      const atendido = cliente.atendido;
      console.log(assunto);

      let textmsg = `Olá ${nome}, eu sou a Ana, a inteligencia virtual da Tendenci. Vou continuar o seu atendimento por aqui. O seu nome esta correto?`
      
      const numero = cliente.telefone;
      const numeroDisp = "55" + numero;
      client
        .sendText(`55${numeroDisp}@c.us`, textmsg)
        .then((result) => {
          console.log(`Mensagem enviada para: ${numeroDisp}`);
        })
        .catch((error) => {
          console.error(
            `Erro ao enviar mensagem para: ${numeroDisp} - ${error}`
          );
        });

        atualizaAtendimento(id);
        
        async function atualizaAtendimento(id){
          const atendido = 1;
          await Cliente.update({ atendido }, { where: { id: id } });
        }
        
    }
  
    console.log("Todas as mensagens foram enviadas!");
  })();

  // Bote Receptivo
  client.onMessage((message) => {
    if (message.isGroupMsg === false) {
      dialogo1(client, message);
    }
  });

});
}

create(venomOptions)
  .then((client) => start(client))
  .catch((error) => {
    console.log(error);
  });
conn
  .sync()
  .then(() => {})
  .catch((err) => console.log(err));

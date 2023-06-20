import conn from "./db/conn.js";
import Cliente from "./models/chat.js";
import schedule from "node-schedule";
import moment from "moment";
import { create } from "venom-bot";
import { Op } from "sequelize";
import dialogo1 from "./dialogo/dialogo1.js"
import dialogoInicial from "./dialogo/dialogoInicial.js";
import dialogoCredencial from "./dialogo/dialogoCredencial.js";
import dialogoCaminho from "./dialogo/dialogoCaminho.js";
import dialogoSac from "./dialogo/dialogoSac.js";
import dialogoOrçamento from "./dialogo/dialogoOrçamento.js";

const venomOptions = {
  multiDevice: true,
  session: "Testes",
  createPathFileToken: true,
  waitForLogin: true,
  createPathFileToken: true,
};

function start(client) {
  console.log("Cliente Venom iniciado!");
  // Bot ativo
  schedule.scheduleJob("*/15 * * * * *", () => {
    (async () => {
      const atendido = 0;

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

        let textmsg = `Olá ${nome}, eu sou a Ana, a inteligencia virtual da Tendenci. Vou continuar o seu atendimento por aqui. O seu nome esta correto?`;

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

        async function atualizaAtendimento(id) {
          const atendido = 1;
          await Cliente.update({ atendido }, { where: { id: id } });
        }
      }

      console.log("Todas as mensagens foram enviadas!");
    })();

    // Bote Receptivo
    client.onMessage((message) => {
      if (message.isGroupMsg === false) {
        dialogoInicial(client, message);
        atendimento[tel].stage = 2;
      }
      //chama dialogo inicial
      if (message.body && atendimento[tel].stage === 1) {
        dialogoInicial(client, message);
        atendimento[tel].stage = 2;
      }
      //pede o nome e o cpf
      else if (message.body === "1" && atendimento[tel].stage === 2) {
        dialogoCredencial(client, message);
        atendimento[tel].stage = 3;
      }
      //Não e cliente ainda
      else if (message.body === "2" && atendimento[tel].stage === 2) {
        dialogoCredencial(client, message);
        atendimento[tel].stage = 4;
      }
      //Pergunta se deseja sac ou orçamento
      else if (message.body && atendimento[tel].stage === 3) {
        dialogoCaminho(client, message);
        atendimento[tel].stage = 5;
      }
      //Caso queira o orcamento
      else if (message.body === "1" && atendimento[tel].stage === 5) {
        dialogoOrçamento(client, message);
        atendimento[tel].stage = 6;
      }
      //caso queira falar no sac
      else if (message.body === "2" && atendimento[tel].stage === 5) {
        dialogoSac(client, message);
        atendimento[tel].stage = 7;
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

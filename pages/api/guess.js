let secretNumber = Math.floor(Math.random() * 100) + 1;

export default function handler(req, res) {
  if (req.method === "POST") {
    const { guess } = req.body;

    if (!guess) return res.status(400).json({ message: "Envie um número" });

    const numberGuess = Number(guess);

    if (numberGuess === secretNumber) {
      secretNumber = Math.floor(Math.random() * 100) + 1; 
      return res.json({ message: "Parabéns! Você acertou!" });
    }

    if (numberGuess > secretNumber) {
      return res.json({ message: "Muito alto!" });
    } else {
      return res.json({ message: "Muito baixo!" });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}

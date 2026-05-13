export default function handler(req, res) {
  if (req.method === 'POST') {
    // Тук пристигат данните от Raspberry Pi
    const data = req.body;
    console.log("Данни от сензорите:", data);
    // Връщаме отговор 200 (OK)
    return res.status(200).json({
      status: 'success',
      received: data
    });
  } else {
    // Ако някой го отвори през браузър, връщаме грешка 405
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

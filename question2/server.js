const express = require("express");
const app = express();
const PORT = 3000;

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

app.use(express.json()); // Middleware to parse JSON requests

app.get("/primes/:max", (req, res) => {
  const max = parseInt(req.params.max);
  console.log(max);
  if (isNaN(max) || max < 2) {
    return res.status(400).json({ error: "Invalid input. 'max' must be a positive integer greater than or equal to 2." });
  }

  const primes = [];
  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  res.json({ primes });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong on the server." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

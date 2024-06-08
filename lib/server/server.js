// lib/server/server.js

const express = require("express");
const session = require("express-session");
const { Pool } = require("pg");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors({ origin: "*" }));

// Gunakan express-session untuk mengatur session
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// Middleware untuk memeriksa apakah pengguna telah login
const requireLogin = (req, res, next) => {
  if (!req.session.loggedIn) {
    // Jika pengguna belum login, lakukan redirect ke halaman login
    return res.redirect("/login");
  }

  next();
};

app.get("/data", async (req, res) => {
  try {
    const pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "bigforum",
      password: "191919",
      port: 5432,
    });

    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint untuk halaman dashboard
app.get("/pages/dashboard", requireLogin, (req, res) => {
  // Jika pengguna sudah login, kirimkan halaman dashboard
  res.redirect("/pages/dashboard");
});

// Endpoint untuk halaman login
app.get("/login", (req, res) => {
  res.redirect("/pages/login");
});

// Endpoint untuk menghandle request login dari form
app.post("/login", (req, res) => {
  // Logika autentikasi (contoh sederhana)
  const { username, password } = req.body;
  if (username === username && password === password) {
    // Jika autentikasi berhasil, atur session loggedIn menjadi true
    req.session.loggedIn = true;
    return res.redirect("/pages/dashboard");
  } else {
    // Jika autentikasi gagal, kembalikan pengguna ke halaman login
    return res.redirect("/login");
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

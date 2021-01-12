const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const multer = require("multer");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcryptjs");
const { response } = require("express");

const saltRounds = 10;

const PORT = 3001;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    key: "userId",
    secret: "whateverYouPut",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
    },
  })
);

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../server-side/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage }).single("file");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "bcvdatabase",
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(
      "INSERT INTO users (username, password) VALUES (?,?)",
      [username, hash],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send({ message: "user doesn't exist!" });
        }
      }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users where username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong username or password" });
          }
        });
      } else {
        res.send({ message: "user doesn't exist!" });
      }
    }
  );
});

app.post("/upload", (req, res) => {
  const namaLengkap = req.body.namaLengkap;
  const univ = req.body.univ;
  const namaPeneliti = req.body.namaPeneliti;

  db.query(
    "INSERT INTO uploadriset (namaLengkap, univ, namaPeneliti) VALUES (?,?,?)",
    [namaLengkap, univ, namaPeneliti],
    (err, result) => {
      if (err) {
        console.log(err);
      } else res.send("Values Inserted");
    }
  );
});

app.post("/uploadfile", function (req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

app.get("/uploadriset", (req, res) => {
  db.query("SELECT * FROM uploadriset", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/kategoribukufav", (req, res) => {
  db.query(
    "SELECT * FROM bcvdatabase.kategori_buku ORDER BY peminjam DESC LIMIT 2;",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/rankingbuku", (req, res) => {
  db.query(
    "SELECT * FROM bcvdatabase.kategori_buku ORDER BY peminjam DESC LIMIT 3;",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/kategoriebook", (req, res) => {
  db.query("SELECT * FROM kategori_ebook", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/kategoribuku", (req, res) => {
  db.query("SELECT * FROM kategori_buku", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/thrive", (req, res) => {
  db.query("SELECT * FROM kategori_buku WHERE id = 1", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/manajemen", (req, res) => {
  db.query("SELECT * FROM kategori_buku WHERE id = 2", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/50hobi", (req, res) => {
  db.query("SELECT * FROM kategori_buku WHERE id = 3", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/21alasan", (req, res) => {
  db.query("SELECT * FROM kategori_buku WHERE id = 4", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/pinjam/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "UPDATE kategori_buku SET peminjam = peminjam + 1 WHERE id = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(response);
      }
    }
  );
});

app.post("/selesaipinjam/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "UPDATE kategori_buku SET peminjam = peminjam - 1 WHERE id = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(response);
      }
    }
  );
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

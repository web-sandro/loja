const express = require('express');
const router = express.Router();
const pool = require('../db')

// products index/list
router.get("/", async (req, res, next) => {
  try {
    console.log(req.session)
    const message = req.flash('message')[0];
    console.log(message);

    const sql = `SELECT * FROM product;`;
    const [rows] = await pool.query(sql);

    res.render("products/index", { products: rows, message });
  } catch (err) {
    console.error(err);
    next(new Error("Ocorreu um erro ao carregar os dados dos produtos."));
  }
});

// products create/new
router.get("/cadastrar", async (req, res, next) => {
  res.render("products/create", { error: null, formData: {} });
});

// products store/save
router.post("/cadastrar", async (req, res, next) => {
  try {
    const { name, price } = req.body;

    // validação dos campos de formulário
    const errors = [];

    if (!name) {
      errors.push("`Nome` é obrigatório.");
    }

    if (!price) {
      errors.push("`Preço` é obrigatório.");
    }

    if (errors.length > 0) {
      return res.render("products/create", { errors, formData: req.body });
    }

    const sql = "INSERT INTO product (name, price) VALUES (?, ?);";
    const values = [name, price];
    const [rows] = await pool.query(sql, values);

    const { insertId } = rows;
    res.redirect(`/produtos/${insertId}`);
  } catch (err) {
    console.error(err);
    next(new Error("Ocorreu um erro ao cadastrar o produto."));
  }
});

// products show/details
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const sql = `SELECT * FROM product WHERE id = ?;`;
    const values = [id];
    const [rows] = await pool.query(sql, values);

    if (rows.length === 0) {
      next(createError(404));
    }

    res.render("products/show", { product: rows[0] });
  } catch (err) {
    console.error(err);
    next(new Error("Ocorreu um erro ao carregar os dados do produto."));
  }
});

// products edit
router.get("/produtos/:id/editar", async (req, res, next) => {
  res.render("products/edit");
});

// products update
router.post("/:id/editar", async (req, res, next) => { });

// products destroy/delete
router.post("/:id/deletar", async (req, res, next) => {
  try {
    const { id } = req.params;

    const sql = `DELETE FROM product WHERE id = ?;`;
    const values = [id];
    const [rows] = await pool.query(sql, values);

    const { affectedRows } = rows;

    if (affectedRows === 0) {
      next(createError(404));
    }

    req.flash("message", {
      text: "O produto foi deletado com sucesso.",
      type: "success"
    });
    res.redirect("/produtos");
  } catch (err) {
    console.error(err);
    next(new Error("Ocorreu um erro ao carregar os dados do produto."));
  }
});

module.exports = router;
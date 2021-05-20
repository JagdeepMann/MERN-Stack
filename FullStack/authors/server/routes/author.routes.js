const AuthorController = require("../controllers/author.controller");


module.exports = app =>{
    app.get("/api/authors", AuthorController.findAllAuthors)
    app.post("/api/authors/create", AuthorController.createAuthor)
    app.get("/api/authors/:id", AuthorController.findOneAuthor)
    app.put("/api/authors/update/:id", AuthorController.updateOneAuthor)
    app.delete("/api/authors/delete/:id", AuthorController.deleteAuthor)
}
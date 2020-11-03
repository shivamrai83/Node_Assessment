const { bookmarkTable, blogTable } = require("../database/db");

function bookmarkController(app) {
  app.get("/bookmark/:id", async function (request, response) {
    const { id } = request.params;
    const data = await blogTable.findOne({ id });
    const saveBook = await bookmarkTable.create({
      blogName: data.blogName,
      blogContent: data.blogcontent,
      blogRating: data.blogRating,
    });
    await saveBook.save();
    response.send({ status: "Sucessfully added" });
  });

  app.get("/allbookmark", async function (request, response) {
    const allBookmarkBlogs = await bookmarkTable.findAll();
    response.send(allBookmarkBlogs);
  });
}

module.exports = {
  bookmarkController,
};

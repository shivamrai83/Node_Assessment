const { blogTable } = require("../database/db");
const md5 = require("md5");
const passport = require("passport");

function blogController(app) {
  app.get(
    "/blogs",
    passport.authenticate("jwt", { session: false }),
    async function (request, response) {
      const allBlogs = await blogTable.findAll();
      response.status(200).send(allBlogs);
    }
  );
  app.get(
    "/blogs/:id",
    passport.authenticate("jwt", { session: false }),
    async function (request, response) {
      const { id } = request.params;
      const blog = await blogTable.findOne({ id });
      response.status(202).send(blog);
    }
  );
  app.post(
    "/blogs",
    passport.authenticate("jwt", { session: false }),
    async function (request, response) {
      const { blogName, blogContent, blogRating } = request.body;
      const createdBlog = await blogTable.create({
        blogName,
        blogContent,
        blogRating,
      });
      response.status(201).send(createdBlog);
    }
  );
  app.put(
    "/blogs/:id",
    passport.authenticate("jwt", { session: false }),
    async function (request, response) {
      const { id } = request.params;
      const updatedUser = await blogTable.findOne({ id });
      const { blogName, blogContent, blogRating } = request.body;

      updatedUser.blogName = blogName ? blogName : updatedUser.blogName;
      updatedUser.blogContent = blogContent
        ? blogContent
        : updatedUser.blogContent;
      updatedUser.blogRating = blogRating ? blogRating : updatedUser.blogRating;

      await updatedUser.save();
      response.status(203).send(updatedUser);
    }
  );
  app.delete(
    "/blogs/:id",
    passport.authenticate("jwt", { session: false }),
    async function (request, response) {
      const { id } = request.params;
      const deleteUser = await blogTable.findOne({ id });
      const deleted = await deleteUser.destroy();
      response.status(204).send({ delete: "deleted" });
    }
  );
}

module.exports = {
  blogController,
};

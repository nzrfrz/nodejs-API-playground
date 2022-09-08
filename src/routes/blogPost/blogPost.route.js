import express from "express";
import { 
    GetBlogPost, 
    CreateBlogPost, 
    UpdateBlogPost, 
    DeleteBlogPost 
} from "../../controllers/index.js";

const router = express.Router();

export const BlogPost = (app) => {
    const getBlogPost = router.get("/blog_post/get_all", GetBlogPost);
    const createBlogPost = router.post("/blog_post/create", CreateBlogPost);
    const updateBlogPost = router.put("/blog_post/update", UpdateBlogPost);
    const deleteBlogPost = router.delete("/blog_post/delete-blogPostID=:id", DeleteBlogPost);

    app.use("/playground", getBlogPost);
    app.use("/playground", createBlogPost);
    app.use("/playground", updateBlogPost);
    app.use("/playground", deleteBlogPost);
};
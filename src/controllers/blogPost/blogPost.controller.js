import DB from "../../../db.config.js";

import { 
    responseStatus, 
    responseMessage, 
    responseHelper 
} from "../../_helpers/ResponseHelper.js";
import { Authentication } from "../../_helpers/AuthHelper.js";
import { blogPostManager } from "./_queManager.js";

const BLOG_POST = DB.blog_posts;

export const GetBlogPost = async (req, res) => {
    await Authentication(req, res);
    if (req.user === undefined) return;
    try {
        const blogPostData = await blogPostManager.findDocumentByUserID(req.user.id);
        responseHelper(res, responseStatus().success, responseMessage().successTokenValid, blogPostData);
    } catch (error) {
        responseHelper(res, responseStatus().errorServer, responseMessage().errorServer, error);
    }
};

export const CreateBlogPost = async (req, res) => {
    const { postTitle, postBody, category, status } = req.body;

    await Authentication(req, res);
    if (req.user === undefined) return;

    const payload = new BLOG_POST(
        {
            userID: req.user.id,
            postTitle,
            postBody,
            category,
            status
        }
    );

    try {
        const saveResults = await blogPostManager.saveNewDocument(payload);
        if (saveResults === undefined) return responseHelper(res, responseStatus().errorServer, responseMessage().errorServer, {});
        responseHelper(res, responseStatus().success, responseMessage().successCreateBlogPost, saveResults);
    } catch (error) {
        responseHelper(res, responseStatus().errorServer, responseMessage().errorServer, error);
    }
};

export const UpdateBlogPost = async (req, res) => {
    const { id, postTitle, postBody, category, status } = req.body;

    await Authentication(req, res);
    if (req.user === undefined) return;

    const payload = {
        userID: req.user.id,
        id,
        postTitle, 
        postBody, 
        category, 
        status
    };

    try {
        const updateResults = await blogPostManager.updateDocument(BLOG_POST, id, payload);
        if (updateResults === undefined) return responseHelper(res, responseStatus().errorServer, responseMessage().errorServer, {});
        responseHelper(res, responseStatus().success, responseMessage().successEditBlogPost, updateResults);
    } catch (error) {
        responseHelper(res, responseStatus().errorServer, responseMessage().errorServer, error);
    }
};

export const DeleteBlogPost = async (req, res) => {
    const { id } = req.params;

    await Authentication(req, res);
    if (req.user === undefined) return;

    try {
        const deleteResults = await blogPostManager.deleteDocumentByID(BLOG_POST, id);
        if (deleteResults === null) return responseHelper(res, responseStatus().errorRequest, responseMessage().errorBlogPostNotFound, {});
        responseHelper(res, responseStatus().success, responseMessage().successDeleteBlogPost, {});
    } catch (error) {
        responseHelper(res, responseStatus().errorServer, responseMessage().errorServer, error);
    }
};
import DB from "../../../db.config.js";

const BLOG_POST = DB.blog_posts;

class query {

    findDocumentByUserID = (data) => new Promise((resolve, reject) => {
        BLOG_POST.find({ userID: data }, (error, results) => {
            resolve(results);
            reject(error);
        })
    });

    saveNewDocument = (data) => new Promise((resolve, reject) => {
        data.save((error, results) => {
            resolve(results);
            reject(error);
        })
    });

    updateDocument = (document, id, data) => new Promise((resolve, reject) => {
        document.findByIdAndUpdate(id, data, {new: true}, (error, results) => {
            resolve(results);
            reject(error);
        })
    });

    deleteDocumentByID = (document, id) => new Promise((resolve, reject) => {
        document.findByIdAndRemove(id, (error, results) => {
            resolve(results);
            reject(error);
        })
    });
};

export const blogPostManager = new query();
import { 
    responseStatus,
    responseMessage,
    responseHelper 
} from "../_helpers/ResponseHelper.js";

export const uploadImage = async (req, res) => {
    console.log("FILE REQUEST: ", req.file);
};
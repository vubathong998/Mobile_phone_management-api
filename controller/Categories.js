import Category from '../models/Categories.js';
import { jsonError, jsonSuccess } from '../utils/response.js';

class CategoriesController {
    async list(req, res) {
        try {
            const data = await Category.find(req.query);
            console.log({ data });
            jsonSuccess(res, data);
        } catch (error) {
            jsonError(res, error);
        }
    }
    async add(req, res) {
        try {
            const data = await Category.create(req.body);
            jsonSuccess(res, data);
        } catch (error) {
            jsonError(res, error);
        }
    }
    async update(req, res) {
        try {
            const data = await Category.findByIdAndUpdate(req.param.id, req.body);
            jsonSuccess(res, data);
        } catch (error) {
            jsonError(res, error);
        }
    }
}

export default CategoriesController;

import express from 'express';
import CategoriesController from '../controller/Categories.js';
import verifyToken from '../checkVerifyToken.js';

const routeCategories = express.Router();
const categoriesController = new CategoriesController();

routeCategories.get('/', categoriesController.list);
routeCategories.post('/', verifyToken, categoriesController.add);
routeCategories.put('/:id', verifyToken, categoriesController.update);
export default routeCategories;

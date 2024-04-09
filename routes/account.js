import express from 'express';
import AccountController from '../controller/AccountController.js';

const routeAccount = express.Router();
const accountController = new AccountController();

// routeAccount.get('/', productsController.list);
routeAccount.post('/login', accountController.login);
routeAccount.post('/register', accountController.register);

export default routeAccount;

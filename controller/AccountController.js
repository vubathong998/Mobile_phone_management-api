import Account from '../models/Account.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import baseResponse from '../models/BaseResponse.js';
import { STATUS_CODE } from '../constants/statusCode.js';

class AccountController {
    async login(req, res) {
        try {
            const user = await Account.findOne({
                username: req.body.username
            });
            console.log({ user });
            const match = bcrypt.compare(req.body.password, user.password);
            if (match) {
                const token = jwt.sign({ user: user }, process.env.JWT_SECRET, {
                    expiresIn: '5h'
                });

                res.json(
                    baseResponse({
                        code: STATUS_CODE.Success,
                        data: {
                            token
                        }
                    })
                );
            } else {
                res.status(504).json({ code: STATUS_CODE.IncorrectAccount, message: 'User name or password is incorrect' });
            }
        } catch (error) {
            res.json(
                baseResponse({
                    code: STATUS_CODE.BadRequest,
                    message: error
                })
            );
        }
    }
    async register(req, res) {
        try {
            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

            if (emailRegex.test(req.body.email)) {
                const salt = bcrypt.genSaltSync(parseInt(process.env.SAIL_ROUND));
                const hash = bcrypt.hashSync(req.body.password, salt);

                const data = {
                    ...req.body,
                    email: req.body.email,
                    password: hash,
                    permission: ''
                };
                const user = await Account.create(data);

                const token = jwt.sign({ user: user }, process.env.JWT_SECRET, {
                    expiresIn: '5h'
                });

                res.json(
                    baseResponse({
                        data: {
                            token
                        },
                        code: STATUS_CODE.Success
                    })
                );
            } else {
                res.json({
                    code: STATUS_CODE.BadRequest
                });
            }
        } catch (error) {
            res.json(
                baseResponse({
                    message: error,
                    code: STATUS_CODE.BadRequest
                })
            );
        }
    }
}

export default AccountController;

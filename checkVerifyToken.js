import jwt from 'jsonwebtoken';
import { jsonError } from './utils/response.js';
import { STATUS_CODE } from './constants/statusCode.js';

export default function verifyToken(req, res, next) {
    const bearerToken = req.headers['authorization'];
    if (bearerToken != undefined) {
        const token = bearerToken.split(' ')[1];
        try {
            jwt.verify(token, process.env.JWT_SECRET);
            return next();
        } catch (error) {
            jsonError(res, '', STATUS_CODE.NoPermission);
        }
    } else {
        jsonError(res, '', STATUS_CODE.NoPermission);
    }
}

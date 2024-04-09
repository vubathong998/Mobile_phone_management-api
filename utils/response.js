import { STATUS_CODE } from '../constants/statusCode.js';
import baseResponse from '../models/BaseResponse.js';

const jsonSuccess = (res, data, message, code = STATUS_CODE.Success) => {
    res.json(
        baseResponse({
            data,
            code,
            message
        })
    );
};

const jsonError = (res, message, code = STATUS_CODE.InternalServerError) => {
    res.json(
        baseResponse({
            code: code,
            message
        })
    );
};

export { jsonError, jsonSuccess };

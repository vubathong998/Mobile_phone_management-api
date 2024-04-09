const baseResponse = ({ data, message, code }) => {
    return {
        data,
        message,
        code
    };
};

export default baseResponse;

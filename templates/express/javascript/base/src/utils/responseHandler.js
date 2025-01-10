export const responseHandler = (res, statusCode, responseData) => {
    const defaultResponse = {
        success: responseData.success,
        message:
            responseData.message ||
            (responseData.success
                ? "Request was successful"
                : "Request failed"),
        data: responseData.data || null,
        error: responseData.error || null,
    };

    res.status(statusCode).send(defaultResponse);
};

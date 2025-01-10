export const errorHandler = (err, req, res) => {
    const statusCode = err.status || 500;
    const message = statusCode === 500 ? "Internal Server Error" : err.message;

    console.error(
        `[${new Date().toISOString()}] ${req.method} ${req.url} - ${message}`,
        err
    );

    res.status(statusCode).json({ error: message });
};


export const ErrorHandler = (err, req, res, next) => {

    err.message = err.message || `Internal server error`;
    err.statuscode = err.statuscode || 500

    if (err.code = 11000) {
        err.message = err.message;
        err.statuscode = err.statuscode;
    }

    res.status(err.statuscode).json({
        success: false,
        message: err.message,
        statuscode: err.statuscode
    })

}

export default ErrorHandler;

class ErrorHandler1 extends Error{
    constructor(message,statuscode){
        super(message)
        this.statuscode=statuscode
    }
}

export default ErrorHandler1;
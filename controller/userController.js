import ErrorHandler1 from "../utils/customErrorhandler.js"
import { User } from "../models/user.js"

export const newUser = async (req, res, next) => {




    try {
        let user = await User.findOne({ email: "ajay@gmail.com" })

        if (user) {
            return next(new ErrorHandler1('Already exists'))
        }

        const con = await User.create({
            name: "Ajay",
            email: "ajay@gmail.com"
        })
    }
    catch (error) {
        return next(new ErrorHandler1(error.message, 404))
    }

    res.status(200).json({
        msg: "User Created Sucessfully"
    })

}
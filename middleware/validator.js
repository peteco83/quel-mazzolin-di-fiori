const { body, validationResult, } = require("express-validator")


// const client = async Client.find({email:})


exports.validateInputs = () => {
    return [
        body("email")
            .notEmpty()
            .isEmail()
            .normalizeEmail({ all_lowercase: true })
            .withMessage("Invalid email"),

        body("password")
            .isLength({ min: 5 })
            .withMessage("Password is too short"),

        body("firstName")
            .notEmpty()
            .trim()
            .escape()
            .withMessage("Please give us your first name"),

        (req, res, next) => {
            let errors = validationResult(req)
            if (!errors.isEmpty()) {
                console.log(errors)
                let err = errors.errors.map(er => ({ [er.param]: er.msg }))
                return res.json({ status: 203, message: err })
            }
            next()
        }
    ]
}
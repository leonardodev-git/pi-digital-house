const { check, validationResult, body } = require('express-validator');
const search = require('../db/userQuerys')

const auth = (req, res, next) => {
    req.session.userSession ? next() : res.redirect("/login")
}

const dateValidation = () => {

    let validations = [
        check("email").isEmail().withMessage("Email invalido"),
        check("senha").isLength({ min: 3 }).withMessage("Senha deve conter mínimo 6 caracteres"),
        body('email').custom(email => {
            return search.searchUsers(email).then(user => {
                if (user) {
                    return Promise.reject('E-mail já cadastrado');
                }

            });
        }),
        body('confirmarSenha').custom((value, { req }) => {
            if (value !== req.body.senha) {
                throw new Error('Campo senha e confimar senha não coincidem');
            }
            return true;
        })


    ]

    return validations
}

module.exports = {
    auth,
    dateValidation

}
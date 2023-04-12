const {check} = require ("express-validator");

module.exports = [
    check ("title").notEmpty().withMessage("Title Requerido"),
    check ("rating").notEmpty().withMessage("Rating  equerido"),
    check ("awards").notEmpty().withMessage("Awards equerido"),
    check ("release_date").notEmpty().withMessage("Release Date Requerido"),
    check ("genre_id").notEmpty().withMessage("Genr Requerido")
]
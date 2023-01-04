import { check } from "express-validator";
import { validationResult } from "express-validator/check";
import { Request, Response, NextFunction } from "express";

const throwValidations = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({ errors: errors.array() });
    next();
}

const requestValidations = [
    check('name').not().isEmpty().trim().escape().exists(),
        check('email')
            .bail()
            .isEmail().withMessage('email format error')
            .exists().withMessage('email not found')
            .normalizeEmail(),
        check('password').isLength({ min: 5 }),
        check('notifyOnReply').toBoolean()
]

const finalValidations = [
    ...requestValidations,
    throwValidations
];


export default finalValidations;
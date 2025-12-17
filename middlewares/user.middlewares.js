const { userBodyschema } = require('../validators/uservalidation.schema');

exports.createvalidationmiddleware = (req, res, next) => {
    try {
        userBodyschema.parse(req.body);
        next();
    }
    catch (error) {
        return res.status(400).json({ error: error });
}
}

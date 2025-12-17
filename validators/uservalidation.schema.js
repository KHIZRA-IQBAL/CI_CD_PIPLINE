const z = require('zod');

exports.userBodyschema = z.object({
    username: z.string(),
    password: z.string().min(6),
    email: z.email(),
});
    
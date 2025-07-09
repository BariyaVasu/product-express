// function authMiddleware(req, res, next) {
//     const authHeader = req.header.authorization;
//     if (!authHeader || authHeader.startsWith("Bearer")) {
//         return res.status(400).json({ error: "No Token Provided" });
//     }
//     const token = authHeader.split(" ")[1];
//     try {
//         const decode = jwt.verfify(token, "your_secret_key");
//         res.name = decode;
//         next();
//     } catch (error) {
//         return res.status(401).json({ message: "Invlaid Token" });
//     }
// }

// module.exports = authMiddleware();
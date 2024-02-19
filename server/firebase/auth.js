const firebase =  require("./firebase");

const auth = firebase.auth();

async function verifyToken(token) {
    return await auth.verifyIdToken(token);
}

module.exports.auth = auth;
module.exports.verifyToken = verifyToken;

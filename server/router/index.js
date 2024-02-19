const express = require("express");
const {verifyToken} = require("../firebase/auth");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        status: 200,
        code: "UP-AND-RUNNING",
        message: "Hello from the server!"
    });
});

router.post("/auth/verify", async (req, res) => {
    const givenToken = req.body.token;
    const response = await verifyToken(givenToken);
    console.log(response.user_id)
    if(response.user_id) {
        res.json({
            status: 200,
            code: "TOKEN-VERIFIED",
            message: "Token verified successfully!",
            data: response
        });
    } else {
        res.json({
            status: 401,
            code: "UNAUTHORIZED",
            message: "Token verification failed!",
        });
    }
});

module.exports = router;

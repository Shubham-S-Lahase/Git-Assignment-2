const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Assignment");
const port = 3000;
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.json());

app.use('/api/v1/posts', (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization;
        Jwt.verify(token, secret, function (err, decoded) {
            if (err) {
                return res.status(403).json({
                    status: "failed",
                    message: "Not a valid token"
                })
            }
            else {
                req.user =  decoded.data
                console.log(decoded.data);
                next();
            }
        })
    }
    else {
        res.status(403).json({
            status: "Failed",
            message: "Not authenticated user"
        })
    }
})


app.use('/api/v1/users', loginRoutes)
app.use('/api/v1/', postsRoutes)

app.listen(port, () => console.log(`Server Running on ${port}`));
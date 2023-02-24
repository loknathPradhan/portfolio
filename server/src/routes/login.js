const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const jwt = require("jsonwebtoken");
const secret = "LOKNATH";
const bcrypt = require("bcrypt");
const User = require("../models/user");
const { body, validationResult, Result } = require('express-validator');


router.use(bodyParser.json());

router.post("/login", body('email').isEmail(), async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }

        const {email, password} = req.body;

        let user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({
                status: "Failed",
                message: "User is not registered Please try to SignUp"
            })
        }

        bcrypt.compare(password, user.password, function (err, result) {
           if(err) {
            return res.status(500).json({
                status: "Failed",
                message: err.message
            })
           }

           if(result) {
            const token = jwt.sign({
                exp: Math.floor(Date.now()/1000) + (60*60),
                data: user.id
            },secret);

            return res.status(200).json({
                status: "Success",
                message: "Login successful",
                user,
                token
            })
           }
           else {
             res.status(401).json({
                status: "Failed",
                message: "Invalid credentials..!!! Please provide correct email/password"
            })
           }
        })

    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: error.message
        })
    }
})

module.exports = router;
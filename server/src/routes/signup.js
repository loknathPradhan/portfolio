const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const { body, validationResult } = require('express-validator');
const User = require("../models/user")
const cors = require('cors');



router.use(cors());


router.use(bodyParser.json());

router.post("/signup",  async (req, res) => {
    try {
        
        const {username, email, password} = req.body;

        let user = await User.findOne({email});
        if(user) {
            return res.status(400).json({
                status: "Failed",
                message: "User already exists please try to login"
            })
        }

        bcrypt.hash(password, 10, async function (err, hash) {
            if(err) {
                return res.status(400).json({
                    status: "Failed",
                    message: err.message
                })
            }

            const user = await User.create({
                username,
                email,
                password: hash
            })

            return res.status(200).json({
                status: "success",
                message: "Signup successful",
                user
            })

        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
})



module.exports = router;

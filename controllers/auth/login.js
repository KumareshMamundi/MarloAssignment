const express = require('express');
const jwt = require('jsonwebtoken');

const models = require('../../database/models');

const app = express();

app.post('/', (req, res) => {
    try {
        console.log(req.body);
        
        models.UserContacts.findOne({
            where: {
                Email: req.body.Email,
                Password: req.body.Password
            },
            raw: true
        })
        .then(data => {
            if (data) {
                const token = jwt.sign(
                    {
                        Email: req.body.Email
                    },
                    'secret_this_should_be_longer',
                    {
                        expiresIn: '24h'
                    }
                );
                console.log(token);
                res.status(200).send({Message:'login success :', token});
            } else {
                res.status(401).send('login failed please check your Email or Password');
            }            
        })
        .catch(err => {
            console.log(err);
        });
        
    }
    catch(error) {
        console.log(error);
    }
});

module.exports = app;
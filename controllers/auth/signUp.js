const express = require('express');
const UUID = require('uuid').v4;
const moment = require('moment');

const models = require('../../database/models');

const app = express();

app.post('/', async (req, res) => {
    try {
        console.log(req.body);
        let payload = {
            Id: UUID(),
            FirstName: req.body.FirstName,
            MiddleName: req.body.MiddleName,
            LastName: req.body.LastName,
            DOB: moment.utc(new Date(req.body.DOB)).format('YYYY-MM-DDTHH:mm:ss.sssZ'),
            Email: req.body.Email,
            PhoneNumber: req.body.PhoneNumber,
            Occupation: req.body.Occupation,
            Company: req.body.Company,
            Password: req.body.Password
        }
        let data = await models.UserContacts.findOne({
            where: {
                Email: req.body.Email
            },
            raw: true
        })
        console.log(payload);
        if (!data) {
            models.UserContacts.create(payload)
            .then(data => {
                console.log(data);
                res.status(200).send('signup completed');
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            res.status(403).send('Already your email registered');
        }
    }
    catch(error) {
        console.log(error);
    }
});

module.exports = app;
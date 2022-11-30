const express = require('express');
const moment = require('moment');

const models = require('../../database/models');

const app = express();

app.get('/getAllContacts/:emailId', (req, res) => {
    try {
        models.UserContacts.findAll({
            where: {
                Email: req.params.emailId
            },
            raw: true
        })
        .then(data => {
            console.log(data);
            res.status(200).send(data);
        })
        .catch(err => {
            console.log(err);
        });
    }
    catch(error) {
        console.log(error);
    }
});

app.post('/update', async (req, res) => {
    try {
        console.log(req.body);
        let payload = {
            Id: req.body.Id,
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
        const updateContact = await models.UserContacts.update(
            payload,
            { where: { Id: req.body.Id } }
        );
        res.status(200).send('user data updated successfully');
    } 
    catch(error) {
        console.log(error);
    }
});

app.delete('/delete', async (req, res) => {
    try {
        console.log(req.body);
        const deleteContact = await models.UserContacts.destroy(
            { where: { Id: req.body.Id } }
        );
        res.status(200).send('update data');
    } 
    catch(error) {
        console.log(error);
    }
});


module.exports = app;
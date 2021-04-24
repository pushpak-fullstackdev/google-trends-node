const app = require('express');
const express = app();
const trends = require('google-trends-api');
const { formatData } = require('./format');

express.get('/trends', (req, res) => {
    trends.interestOverTime({
    keyword: req.query.keyword,
    category: 65,
    startTime: new Date(req.query.startDate),
    endTime: new Date(req.query.endDate),
    })
    .then((response) => {
        response = JSON.parse(response);
        console.log('Response', response);
        res.send(formatData(response.default.timelineData));
    })
    .catch((err) => {
        res.sendStatus(500);
    })
})


express.listen(3000, () => {
    console.log(`Listing on port 3000`);
})
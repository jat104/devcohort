//Use Postman to see the results of this exercise.

const express = require('express');
const app = express();
app.listen(3000);

var users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
        }
    ]
}]

app.use(express.json());


// req & res => request and response
app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    console.log(johnKidneys);
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i < johnKidneys.length; i++){
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1; 
        }
    }
    const numberofUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberofUnhealthyKidneys
    })
})

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req, res) {
    for (let i = 0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function(req, res) {
    const newKideneys = [];
    for (i = 0; i<users[0].kidneys.length; i++){
        if (!users[0].kidneys[i].healthy){
            newKideneys.push({
                healthy: true
            })
            users[0].kidneys = newKideneys;
            res.json({
            msg: "removed unhealthy kidney"
            });
        } else {
            res.json({
            msg: "No Unhealthy Kidney"
            });
        }
    }
})
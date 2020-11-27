const db = require("../models");

module.exports = function(app){
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

app.put("/api/workouts/:id", ({body, params}, res) => {
    const id = params.id;
    db.Workout.updateOne({_id:req.params.id}, {excercise})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err);
    });
})


app.post("/api/workouts", async (req, res)=> {
    try{
        const response = await db.Workout.create({type: "workout"})
        res.json(response);
    }
    catch(err){
        console.log("error occurred creating a workout: ", err)
    }
})
}


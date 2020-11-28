const db = require("../models");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.put("/api/workouts/:id", ({ body, params }, res) => {
        console.log(body);
        const id = params.id; 
        
        db.Workout.findByIdAndUpdate({_id: id}, { $push: { exercises: body }})
            .then(dbWorkout => {
                res.json(dbWorkout)
                console.log(dbWorkout)
            })
            .catch(err => {
                res.status(400).json(err);
            });
    })


    app.post("/api/workouts", async (req, res) => {
        try {
            await db.Workout.create({ type: "workout" })
                .then(dbWorkout => {
                    res.json(dbWorkout);
                })
        }
        catch (err) {
            console.log("error occurred creating a workout: ", err)
        }
    })
}


const mongoose = require('mongoose');


const quizSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            unique: true,
            require: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        userID: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
)



module.exports = mongoose.model("Quiz", quizSchema)
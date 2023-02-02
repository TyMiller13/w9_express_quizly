// Import built-in graphql types
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInputObjectType, GraphQLInt } = require('graphql')
//import user model
const { user, User } = require('../models')

const UserType = new GraphQLObjectType (
    {
        name: 'User',
        description: 'User Type',
        fields: () => ({
            id: {type: GraphQLID},
            username: {type: GraphQLString},
            email: { type: GraphQLString}
        })
    }
)

const QuizType = new GraphQLObjectType (
    {
        name: 'Quiz',
        description: 'Quiz Type',
        fields: () => ({
            id: {type: GraphQLID},
            slug: {type: GraphQLString},
            title: { type: GraphQLString},
            description: { type: GraphQLString},
            userId: { type: GraphQLID},
            user: {
                type: UserType,
                resolve(parent, args){
                    return User.findById(parent.userId)
                }
            }
        })
    }
)

// create a Question Type(input) for mutation of creating a quiz
const QuestionInputType = new GraphQLInputObjectType(
    {
        name: 'QuestionInput',
        description: 'Question input type',
        fields: () => ({
            title: { type: GraphQLString },
            order: { type: GraphQLInt },
            correctAnswer: { type: GraphQLString}
        })
    }

)







module.exports = {
    UserType,
    QuizType,
    QuestionInputType,
}
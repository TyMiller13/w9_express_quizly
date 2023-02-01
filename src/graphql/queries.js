//Import Types from graphql
const { GraphQLList, GraphQLID } = require('graphql')
//Import our own created type
const { UserType } = require('./types')
//Import model so we can get data from MongoDB
const { User } = require('../models')


const users = {
    type: new GraphQLList(UserType),
    description: 'Get all users from the database',
    async resolve(parent, args){
        let users = await User.find()
        console.log(users)
        return users
    }
}

const user = {
    type: UserType,
    description: 'Query single user from database by ID',
    args: {
        id: {type: GraphQLID}
    },
    resolve(parent, args){
        console.log(parent, args)
        return User.findById(args.id)
    }
}

module.exports = {
    users, 
    user
}
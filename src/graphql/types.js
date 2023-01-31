// Import built-in graphql types
const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql')

const UserType = new GraphQLObjectType (
    {
        
        name: 'UserType',
        fields: () => ({
            id: {type: GraphQLID},
            username: {type: GraphQLString},
            email: { type: GraphQLString} 
        })
    }
)

module.exports = {
    UserType
}
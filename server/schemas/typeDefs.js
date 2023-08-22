const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        usernmane: String
    }
    type Book {
        _id: ID
        authors: [String]
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }
`;

module.exports = typeDefs;

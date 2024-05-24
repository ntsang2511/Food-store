// Query use for query data from client to server
// Mutation use for update data
// Subscription use for update realtime

export const typeDefs = `#graphql
    scalar Date

    type ProductType {
        id: String!,
        name: String,
        createdAt: String,
        description: String,
        img: String,
        author: Author,
        updatedAt: Date,
    }

    type Author { 
        uid: String!,
        name: String!,
    }

    type Query {
        productsType: [ProductType],
        product(productId: String!): ProductType,
    }

    type Mutation {
        addProduct(name: String!, description: String!, img: String!): ProductType,
        deleteProduct(productId: String!): ProductType,
        updateProduct(id: String!, name: String!, description: String!, img: String!): ProductType,
        register(uid: String!, name: String!): Author,
        pushNotifications(content: String): Message
    }

    type Message {
        message: String
    }

    type Subscription {
        productCreated: Message,
        notification: Message,
    }
`;

module.exports = {
    port: 8081,
    graphqlEndpoint:'/graphql',
    graphiqlEndpoint:'/graphiql',
    db: {
        host: '172.17.0.2',
        database: 'appointment',
        user: 'appointment',
        password: 'appointment',
        dialect: 'mysql'
    }
};
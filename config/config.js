module.exports = {
    port: 8081,
    graphqlEndpoint:'/graphql',
    graphiqlEndpoint:'/graphiql',
    db: {
        host: process.env.DATABASE_HOST || '127.0.0.1',
        database: 'appointment',
        user: 'appointment',
        password: 'appointment',
        dialect: 'mysql'
    }
};
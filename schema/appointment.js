export default `
 type Appointment{
    id: Int!
    address: String!
    appointmentType: String!
    userId: String
 },
 
 type Query{
    getAppointment(id:Int!): Appointment!
    allAppointments:[Appointment!]!
 }
 
 type Mutation{
    createAppointment(address:String!, appointmentType:String!): Appointment!
 }
 `;
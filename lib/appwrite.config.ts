import * as sdk from 'node-appwrite' 


const client = new sdk.Client()
.setEndpoint(`${process.env.NEXT_PUBLIC_ENDPOINT}`)
.setProject(`${process.env.PROJECT_ID}`)
.setKey(`${process.env.API_KEY}`); 

export const database = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);

export const users = new sdk.Users(client);

// process.env.PROJECT_ID
// process.env.API_KEY
// process.env.DATABASE_ID
// process.env.PATIENT_COLLECTION_ID
// process.env.DOCTOR_COLLECTION_ID
// process.env.APPOINTMENT_COLLECTION_ID
// process.env.NEXT_PUBLIC_BUCKET_ID
// process.env.NEXT_PUBLIC_ENDPOINT
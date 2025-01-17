import * as sdk from 'node-appwrite' 

export const {
PROJECT_ID, 
API_KEY,
DATABASE_ID,
PATIENT_COLLECTION_ID,
DOCTOR_COLLECTION_ID,
APPOINTMENT_COLLECTION_ID,
NEXT_PUBLIC_BUCKET_ID:BUCKET_ID,
NEXT_PUBLIC_ENDPOINT:ENDPOINT, 
} = process.env

const client = new sdk.Client().setEndpoint(`${process.env.NEXT_PUBLIC_ENDPOINT}`).setProject("6787eed3002da8eb1ea8").setKey('standard_53e1cc5c25529d9aef68865c3d90487c615fa39ea95f43e708837a18953096547900a6b68344dfce9af2a75ac4fb9119ee32295fbeea3220af47a8ecf1b3b879cd5f6e037f3c94798739025506355c2266a4b8f0effb89b811dd791e313e470a82eac728e8f9ddf76ddb2f0d53b26f5417ae349bddffc07415b9e4d7d6f9f22d');

export const database = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);

export const users = new sdk.Users(client);

process.env.PROJECT_ID
process.env.API_KEY
process.env.DATABASE_ID
process.env.PATIENT_COLLECTION_ID
process.env.DOCTOR_COLLECTION_ID
process.env.APPOINTMENT_COLLECTION_ID
process.env.NEXT_PUBLIC_BUCKET_ID
process.env.NEXT_PUBLIC_ENDPOINT
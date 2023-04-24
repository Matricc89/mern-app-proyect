import dotenv from 'dotenv';

dotenv.config()

export const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost/testdb"
export const PORT = process.env.PORT || 4000
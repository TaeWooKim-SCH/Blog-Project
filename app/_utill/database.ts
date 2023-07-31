import { MongoClient, Db } from "mongodb";

let cachedDb: Db | null = null;

export async function connectDB(): Promise<Db> {
  if (cachedDb) {
    return cachedDb;
  }
  const uri: string = process.env.MONGODB_URI || 'mongodb+srv://admin:tjfd6055@zop1234.w45q5gz.mongodb.net/?retryWrites=true&w=majority'
  const client: MongoClient = await MongoClient.connect(uri);

  const db: Db = client.db('blog-project');

  cachedDb = db;
  return db;
}
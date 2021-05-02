import { connectToDatabase } from '../util/mongodb';
import bcrypt from 'bcryptjs';

export default async function createUser({ username, password }) {
  const { db } = await connectToDatabase();

  db.collection('data').findOne({ username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send('User Already Exists');
    if (!doc) {
      const hashedPassword = await bcrypt.hash(password, 10);
      await db.collection('data').insertOne({
        username,
        password: hashedPassword,
      });
      return { username };
    }
  });
}

// regristration is complete now impliment passport on login

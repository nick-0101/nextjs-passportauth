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

// Find if user exists
export async function findUser({ username }) {
  const { db } = await connectToDatabase();
  db.collection('data').findOne({ username: username }, (err, user) => {
    if (err) throw err;
    if (user) return user;
  });
}

// Bcrypt Compare & Validate Passwords
export async function validatePassword({ password, user }) {
  //   console.log(user.password, password);
  bcrypt.compare(password, user.password, (err, res) => {
    if (err) throw err;
    if (res === true) {
      return true;
    } else {
      return false;
    }
  });
}

// regristration is complete now impliment passport on login

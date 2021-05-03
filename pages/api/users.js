import { connectToDatabase } from '../../util/mongodb';

export async function getApiUsers(req, res) {
  const { db } = await connectToDatabase();

  // Fetch users from mongodb
  const users = await db.collection('users').find({}).limit(5).toArray();

  // Filter users
  const filterUsers = [];

  users.forEach((user) => {
    const userInfo = { name: user.name, image: user.image };
    filterUsers.push(userInfo);
  });

  // Return users
  return filterUsers;
}

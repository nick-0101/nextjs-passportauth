import Local from 'passport-local';
import { findUser, validatePassword } from './user';

export const localStrategy = new Local.Strategy(function (
  username,
  password,
  done
) {
  console.log(username, password);
  findUser({ username })
    .then((user) => {
      if (validatePassword(password)) {
        done(null, user);
      } else {
        done(new Error('Invalid username and password combination'));
      }
    })
    .catch((error) => {
      done(error);
    });
});

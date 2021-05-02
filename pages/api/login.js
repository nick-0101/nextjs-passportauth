import passport from 'passport';
import nextConnect from 'next-connect';
import { localStrategy } from '../../lib/passport-local';

const authenticate = (method, req, res) => {
  new Promise((resolve, reject) => {
    passport.authenticate(method, (err, user) => {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    })(req, res);
  });
};

passport.use(localStrategy);

export default nextConnect()
  .use(passport.initialize(), passport.session())
  .post(async (req, res) => {
    try {
      await authenticate('local', req, res);
      res.status(200).send({ done: true });
    } catch (err) {
      console.error(err);
      res.status(401).send(err.message);
    }
  });

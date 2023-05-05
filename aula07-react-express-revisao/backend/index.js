import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { expressjwt } from 'express-jwt';

import { Users } from './model/Users.js';

const app = express(),
      SECRET = 'secreta';

app.use(express.json());
app.use(cors());

app.get('/users',
        expressjwt({ secret: SECRET, algorithms: ["HS256"] }),
        async (req, res) => {
  const users = await Users.find();
  res.json(users);
});

app.post('/login', async (req, res) => {
  const { name } = req.body,
        user = await Users.login({ name });

  if (user === null) res.status(403).json({ msg: 'opps' });
  else {
    const token = jwt.sign({ user }, SECRET);
    res.json({ token });
  }
});

app.listen(3000);

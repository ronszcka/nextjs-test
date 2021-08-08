// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import users from "../../../data/users";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const {
      query: { id }
  } = req;

  const user = users.find(u => u.id === +id);

  if (!user) {
    res.status(404).json({error: "user not found"});
  }
  
  res.status(200).json(user);
  
}

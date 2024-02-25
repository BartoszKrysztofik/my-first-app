import { NextApiRequest, NextApiResponse } from "next";
import data from "../../db.json"

export default function dataHandler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ posts: data.posts })
}


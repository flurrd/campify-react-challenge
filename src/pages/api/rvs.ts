// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { rvsData } from "@/data/rvsData";
import {Rv, RV_TYPES} from "@/types/rvs";



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Rv[]>
) {

  setTimeout(() => {
    res.status(200).json(rvsData);
  }, 1000);
}

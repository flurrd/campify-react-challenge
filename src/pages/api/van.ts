// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { LISTING_STATUS, Rv, RV_TYPES } from "@/types/rvs";
import type { NextApiRequest, NextApiResponse } from "next";
import { rvsData } from "@/data/rvsData";

export default function typeHandler(
  req: NextApiRequest,
  res: NextApiResponse<Rv[]>
) 

{
 const filtered = rvsData.filter((rv) => rv.vanType === RV_TYPES.van)
  setTimeout(() => {
    res.status(200).json(filtered);
  }, 1000);
}


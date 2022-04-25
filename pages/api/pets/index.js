import dbConnect from "../../../db/dbConnect";
import Newsletter from "../../../models/Newsletter";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const newsletters = await Newsletter.find({}); /* find all the data in our database */
        res.status(200).json({ success: true, data: newsletters });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const newsletter = await Newsletter.create(req.body); /* create a new model in the database */
        res.status(201).json({ success: true, data: newsletter });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

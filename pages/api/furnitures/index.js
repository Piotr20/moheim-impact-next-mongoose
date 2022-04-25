import dbConnect from "../../../db/dbConnect";
import Furniture from "../../../models/Furniture";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const furnitures = await Furniture.find({}); /* find all the data in our database */
        res.status(200).json({ success: true, data: furnitures });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const furniture = await Furniture.create(req.body); /* create a new model in the database */
        res.status(201).json({ success: true, data: furniture });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

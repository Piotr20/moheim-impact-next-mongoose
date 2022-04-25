import dbConnect from "../../../db/dbConnect";
import Furniture from "../../../models/Furniture";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const forniture = await Furniture.findById(id);
        if (!forniture) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: forniture });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const forniture = await Furniture.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!forniture) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: forniture });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedFurniture = await Furniture.deleteOne({ _id: id });
        if (!deletedFurniture) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}

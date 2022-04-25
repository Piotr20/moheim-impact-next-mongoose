import { useEffect, useState } from "react";

const ShopBody = ({ furnituresProp }) => {
  const [furnitures, setFurnitures] = useState({});
  async function fetchFurniture() {
    const res = await fetch("/api/furnitures", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const furnitures = await res.json();
    setFurnitures(await furnitures.data);
    console.log(furnitures);
  }
  useEffect(() => {
    fetchFurniture();
  }, []);

  return (
    <section className="flex">
      <aside className=" pr-8 lg:pr-16">
        <h2 className="hidden lg:block text-3xl font-bold">Categories</h2>
        <ul></ul>
      </aside>
      <div>
        <h3 className="hidden lg:block text-xl font-bold"> {furnitures[0]?.name}</h3>
        <p className="hidden lg:block text-base"> {furnitures[0]?.description}</p>
        <span>{furnitures[0]?.category}</span>
        <p>{furnitures[0]?.imgUrl}</p>
      </div>
    </section>
  );
};

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Furniture.find();
  const furnitures = result.map((doc) => {
    const furniture = doc.toObject();
    furniture._id = furniture._id.toString();
    return furniture;
  });

  return { props: { furnituresProp: furnitures } };
}
export default ShopBody;

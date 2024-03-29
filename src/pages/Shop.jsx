import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { ProductCard } from "../components";
import { db } from "../firebase-config";
import { getDocs, collection } from "firebase/firestore";

export default function Shop() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("All");
  const { ctgy } = useParams();

  const collectionName = "items";

  // fetch products from database
  useEffect(() => {
    async function getData() {
      try {
        // set state to allow loading spinner
        setLoading(true);

        // setting collection to retrieve
        const colRef = collection(db, collectionName);

        // Fetching data
        const snapshot = await getDocs(colRef);

        // Mapping over retrieved object to return relevant data
        const returnedData = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        // Filter shop Content based on category
        if (ctgy === "All") {
          // Pushing data to state
          setData(returnedData);

          // setting title
          setTitle("All");
        } else {
          const filtered = returnedData.filter(
            (item) => item.category === ctgy
          );
          setData(filtered);
          setTitle(ctgy);
        }
      } catch (error) {
        console.error("retrieving error: ", error.message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  // passing data as prop to component
  const items = data.map((item) => (
    <ProductCard
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      img={item.imageURL}
      colName={collectionName}
    />
  ));

  return (
    <section className="px-3 min-h-full py-4 mt-5 sm:px-6 xl:px-9 xl:h-auto">
      <p className="text-right text-md mr-6 font-bold text-gray-600 lg:text-lg xl:text-xl">
        {title.replace(title[0], title[0].toUpperCase())}
      </p>
      <div className="flex flex-wrap grid-rows-5 justify-evenly mt-6 gap-1 py-3 items-stretch">
        {/* Check for state and render spinner or component */}
        {loading ? (
          <TailSpin
            visible={true}
            height="60"
            width="60"
            color="#bb9457"
            ariaLabel="tail-spin-loading"
            radius="3"
            wrapperStyle={{}}
            wrapperClass="mx-auto my-20"
          />
        ) : items.length >= 1 ? (
          items
        ) : (
          <p className="text-base italic mt-20 text-gray-700 text-center lg:text-md">
            No data returned
          </p>
        )}
      </div>
    </section>
  );
}

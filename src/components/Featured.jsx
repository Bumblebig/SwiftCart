import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { db } from "../firebase-config";
import { getDocs, collection } from "firebase/firestore";
import ProductCard from "./ProductCard";

export default function Featured() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const collectionName = "featured";

  // Fetch data from firestore
  useEffect(() => {
    async function get() {
      try {
        // Toggle loading animation while getting data
        setLoading(true);

        const colRef = collection(db, collectionName);
        const snapshots = await getDocs(colRef);
        const returnedData = snapshots.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setData(returnedData);
      } catch (err) {
        console.error("error: ", err.message);
      } finally {
        // Toggles off loading spinners
        setLoading(false);
      }
    }

    get();
  }, []);

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
    <section className="mb-9 lg:mb-16 xl:mb-20">
      <h2 className="mb-8 font-bold sm:text-lg xl:text-2xl 2xl:mb-12">
        Featured Products
      </h2>

      <div className="w-full flex mx-auto featured-item overflow-x-auto gap-5 lg:gap-6">
        {loading ? (
          <TailSpin
            visible={true}
            height="50"
            width="50"
            color="#bb9457"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass="mx-auto"
          />
        ) : items.length >= 1 ? (
          items
        ) : (
          <p className="text-base w-max mx-auto italic my-6 text-gray-700 text-center lg:text-md">
            No data returned
          </p>
        )}
      </div>
    </section>
  );
}

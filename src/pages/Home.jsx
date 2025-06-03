import { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/config/firebase";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const productsCollection = collection(db, "products");

    getDocs(productsCollection)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <>Loading...</>;
  if (error) return <>Error</>;

  return <ItemListContainer products={products} />;
};

export default Home;

import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products.service";
import ItemListContainer from "../components/ItemListContainer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <>Loading...</>;
  if (error) return <>Error</>;

  return <ItemListContainer products={products} />;
};

export default Home;

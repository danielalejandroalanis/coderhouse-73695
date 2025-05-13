import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products.service";
import ItemListContainer from "../components/ItemListContainer";

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return <ItemListContainer products={products}/>;
};

export default Home;

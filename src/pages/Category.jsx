import { useParams } from "react-router";
import ItemListContainer from "../components/ItemListContainer";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/products.service";

const Category = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProductsByCategory(id)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return <ItemListContainer products={products} />;
};

export default Category;

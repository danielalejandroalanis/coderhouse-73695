import { useParams } from "react-router";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useGetItemFirestore } from "../hooks/useGetItemFirestore";
import { useEffect } from "react";
import { useTitle } from "../hooks/useTitle";

const Item = () => {

  const { id } = useParams();
  
  useTitle("Item Page")

  const { loading, item: product } = useGetItemFirestore("products", id);

  return loading ? <>Loading...</> : <ItemDetailContainer product={product} />;
};

export default Item;

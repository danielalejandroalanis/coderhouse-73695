import { useParams } from "react-router";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useEffect, useState } from "react";
import { db } from "../services/config/firebase";
import { doc, getDoc } from "firebase/firestore";

const Item = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productDoc = doc(db, "products", id);
    getDoc(productDoc)
      .then((snapshot) => {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, [id]);

  return loading ? <>Loading...</> : <ItemDetailContainer product={product} />;
};

export default Item;

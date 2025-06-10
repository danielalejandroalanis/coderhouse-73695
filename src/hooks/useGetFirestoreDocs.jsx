import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/config/firebase";

export const useGetFirestoreDocs = (collectionName) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const itemsCollection = collection(db, collectionName);

    getDocs(itemsCollection)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { loading, error, items };
};

import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../services/config/firebase";


/**
 * 
 * @param {string} collectionName Firestore Collection Name
 * @param {string} id Firestore Document ID
 * @returns Return an object with the item and a loading variable
 */
export const useGetItemFirestore = (collectionName, id) => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemDoc = doc(db, collectionName, id);
    getDoc(itemDoc)
      .then((snapshot) => {
        setItem({ id: snapshot.id, ...snapshot.data() });
      })
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, [id]);

  return { item, loading };
};

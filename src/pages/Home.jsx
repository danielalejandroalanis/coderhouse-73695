import ItemListContainer from "../components/ItemListContainer";
import { useGetFirestoreDocs } from "../hooks/useGetFirestoreDocs";
import { useTitle } from "../hooks/useTitle";

const Home = () => {
  const { loading, error, items: products } = useGetFirestoreDocs("products");
  useTitle("Home Page")
  if (loading) return <>Loading...</>;
  if (error) return <>Error</>;

  return <ItemListContainer products={products} />;
};

export default Home;

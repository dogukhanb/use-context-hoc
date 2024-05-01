import { useContext } from "react";
import Loader from "../components/Loader";
import Card from "../components/Card";
import { ProductContext } from "../context/productContext";

const MainPage = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4 my-5 pt-5 ">
      {!products ? (
        <Loader />
      ) : (
        products.map((item) => <Card key={item.id} product={item} />)
      )}
    </div>
  );
};

export default MainPage;

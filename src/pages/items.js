import Footer from "../comp/Footer";

import Headerhome from "../comp/Headerhome";
import { useLocation } from "react-router-dom";
const Home = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  const image = searchParams.get("image");
  const description = searchParams.get("description");
  const rating = searchParams.get("rating");
  return (
    <>
      <Headerhome />

      <div className="recipe-card__header" style={{ margin:'100px', }}>
        <h1>{name}</h1>
        <img width={100} src={image} alt={name} />
        <p>{description}</p>
        <p>Rate:{rating}</p>
      </div>

    <Footer />
    </>
  );
};

export default Home;

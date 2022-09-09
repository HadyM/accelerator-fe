import Loader from "react-loaders";

import "./Home.scss";

const Home = () => {
  return (
    <>
      <div>
        <h1>Hello World!!</h1>
      </div>
      <Loader type="ball-scale-multiple" />
    </>
  );
};

export default Home;

// import { useNavigate } from "react-router-dom";

import "./IndividualCookingStyleLayout.scss";

const IndividualCookingStyleLayout = ({ cookingstyle }) => {
  // let navigate = useNavigate();

  // const handleGoBack = (e) => {
  //   e.preventDefault();
  //   navigate("/cookingstyles");
  // };

  return (
    <>
      <div className="IndividualCookingStyleLayout">
        <div>
          {/* <button onClick={handleGoBack}>Back to Cooking Styles</button> */}
          <div className="CookingStyleTitleImage">
            <h1>{cookingstyle.name}</h1>
          </div>
          <div>
            <img src={cookingstyle.image} alt="cookingstylepicture" />
          </div>
          <div>
            <h3>{cookingstyle.description}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualCookingStyleLayout;

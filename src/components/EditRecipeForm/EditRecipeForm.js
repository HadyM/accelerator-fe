import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateRecipe, getRecipeId } from "../../util/apiURL";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./EditRecipeForm.scss";

const EditRecipeForm = () => {
  let { id } = useParams();

  const [editRecipe, setEditRecipe] = useState({
    title: "",
    image: "",
    description: "",
    time: "",
    cookingstyle: "",
    ingredients: "",
    instructions: "",
  });

  let navigate = useNavigate();

  const handleInput = (e) => {
    const { value } = e.target;
    setEditRecipe({ ...editRecipe, [e.target.id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateIndividualRecipe(editRecipe, id);
    navigate(`/recipes/${id}`, { state: { recipe: editRecipe } });
  };

  const updateIndividualRecipe = (updaterecipe, id) => {
    updateRecipe(updaterecipe, id).then(
      (response) => {
        setEditRecipe(response);
      },
      (error) => {
        console.log(error);
      },
    );
  };

  const handleCancel = () => {
    navigate(`/recipes/${id}`);
  };

  useEffect(() => {
    getRecipeId().then(
      (response) => {
        setEditRecipe(response);
      },
      (error) => {
        navigate("/not-found");
      },
    );
  }, [navigate]);

  return (
    <>
      <div className="UpdateFormDetails">
        <Form onSubmit={handleSubmit} className="Form">
          <Form.Group className="InputContainer">
            <Form.Label className="InputTitle">Recipe Title</Form.Label>
            <Form.Control
              id="title"
              type="text"
              className="InputBox"
              value={editRecipe.title || ""}
              onChange={handleInput}
              placeholder="Enter Recipe Title...."
              required
            />
            <Form.Text className="InputText">
              Please enter the title name
            </Form.Text>
          </Form.Group>
          <Form.Group className="InputContainer">
            <Form.Label className="InputTitle">Recipe Image URL</Form.Label>
            <Form.Control
              id="image"
              type="url"
              className="InputBox"
              value={editRecipe.image || ""}
              onChange={handleInput}
              placeholder="Enter Recipe Image URL...."
              required
            />
            <Form.Text className="InputText">
              Please enter the image URL
            </Form.Text>
          </Form.Group>
          <Form.Group className="InputContainer">
            <Form.Label className="InputTitle">Recipe Description</Form.Label>
            <Form.Control
              id="description"
              type="text"
              className="InputBox"
              value={editRecipe.description || ""}
              onChange={handleInput}
              placeholder="Enter Recipe Description...."
              required
            />
            <Form.Text className="InputText">
              Please enter a short description of the recipe
            </Form.Text>
          </Form.Group>
          <Form.Group className="InputContainer">
            <Form.Label className="InputTitle">Recipe Time</Form.Label>
            <Form.Control
              id="time"
              type="text"
              className="InputBox"
              value={editRecipe.time || ""}
              onChange={handleInput}
              placeholder="Enter Recipe Time...."
              required
            />
            <Form.Text className="InputText">
              Please enter the recipes time length for example "5 Minutes"
            </Form.Text>
          </Form.Group>
          <Form.Group className="InputContainer">
            <Form.Label className="InputTitle">Recipe Cooking Style</Form.Label>
            <Form.Select
              aria-label="Default select example"
              id="cookingstyle"
              className="InputBox"
              value={editRecipe.cookingstyle}
              onChange={handleInput}
              required
            >
              <option>Select a cooking style....</option>
              <option value="grilling">Grilling</option>
              <option value="broiling">Broiling</option>
              <option value="baking">Baking</option>
              <option value="roasting">Roasting</option>
              <option value="sauteing">Sauteing</option>
              <option value="searing">Searing</option>
              <option value="frying">Frying</option>
              <option value="boiling">Boiling</option>
              <option value="poaching">Poaching</option>
              <option value="steaming">Steaming</option>
              <option value="blanching">Blanching</option>
              <option value="sous vide">Sous Vide</option>
            </Form.Select>
            <Form.Text className="InputText">
              Please select one of the following cooking styles
            </Form.Text>
          </Form.Group>
          <Form.Group className="InputContainer">
            <Form.Label className="InputTitle">Recipe Ingredients</Form.Label>
            <Form.Control
              id="ingredients"
              type="text"
              className="InputBox"
              value={editRecipe.ingredients || ""}
              onChange={handleInput}
              placeholder="Enter Ingredient List...."
              required
            />
            <Form.Text className="InputText">
              Please enter the list of ingredients separated by a comma and
              space for example "2 eggs, 4 cups sugar, 1/2 teaspoon vanilla"
            </Form.Text>
          </Form.Group>
          <Form.Group className="InputContainer">
            <Form.Label className="InputTitle">Recipe Instructions</Form.Label>
            <Form.Control
              id="instructions"
              type="text"
              className="InputBox"
              value={editRecipe.instructions || ""}
              onChange={handleInput}
              placeholder="Enter Instruction Description...."
              required
            />
            <Form.Text className="InputText">
              Please enter the instructions separated by a period, comma, and
              space, folowed by Step for example "Step 1: preheat the oven.,
              Step 2: add ingredients to a baking pan., Step 3 : etc etc"
            </Form.Text>
          </Form.Group>
          <Button className="FormButton" variant="primary" type="submit">
            Update Recipe
          </Button>
          <Button
            className="FormButton"
            variant="primary"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Form>
      </div>
    </>
  );
};

export default EditRecipeForm;

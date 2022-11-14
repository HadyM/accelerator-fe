import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addRecipe } from "../../util/apiURL";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./NewRecipeForm.scss";

const NewRecipeForm = () => {
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    image: "",
    description: "",
    time: "",
    cookingstyle: "",
    ingredients: "",
    instructions: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { value } = e.target;
    setNewRecipe({ ...newRecipe, [e.target.id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewRecipe(newRecipe);
    navigate("/recipes");
  };

  const addNewRecipe = (newrecipe) => {
    addRecipe(newrecipe)
      .then((response) => {
        setNewRecipe([...newRecipe, newrecipe]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = () => {
    navigate("/recipes");
  };

  console.log(newRecipe);

  return (
    <>
      <div className="NewFormDetails">
        <Form onSubmit={handleSubmit} className="Form">
          <Form.Group>
            <Form.Label>Recipe Title</Form.Label>
            <Form.Control
              id="title"
              type="text"
              value={newRecipe.title}
              onChange={handleInput}
              placeholder="Enter Recipe Title"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Recipe Image URL</Form.Label>
            <Form.Control
              id="image"
              type="url"
              value={newRecipe.image}
              onChange={handleInput}
              placeholder="Enter Recipe Image URL"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Recipe Description</Form.Label>
            <Form.Control
              id="description"
              type="text"
              value={newRecipe.description}
              onChange={handleInput}
              placeholder="Enter Recipe Description"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Recipe Time</Form.Label>
            <Form.Control
              id="time"
              type="text"
              value={newRecipe.time}
              onChange={handleInput}
              placeholder="Enter Recipe Time"
              required
            />
            <Form.Text className="text-muted">
              Please enter the recipes time length example "5 Minutes"
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Recipe Cooking Style</Form.Label>
            <Form.Select
              aria-label="Default select example"
              id="cookingstyle"
              value={newRecipe.cookingstyle}
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
            <Form.Text className="text-muted">
              Please enter one of the following styles
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Recipe Ingredients</Form.Label>
            <Form.Control
              id="ingredients"
              type="text"
              value={newRecipe.ingredients}
              onChange={handleInput}
              placeholder="Enter Ingredient List"
              required
            />
            <Form.Text className="text-muted">
              Please enter the list of ingredients separated by a comma and
              space example "2 eggs, 4 cups sugar, 1/2 teaspoon vanilla"
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Recipe Instructions</Form.Label>
            <Form.Control
              id="instructions"
              type="text"
              value={newRecipe.instructions}
              onChange={handleInput}
              placeholder="Enter Instruction Descriptions"
              required
            />
            <Form.Text className="text-muted">
              Please enter the instructions separated by a period, comma, and
              space, folowed by Step example "Step 1: preheat the oven., Step 2:
              add ingredients to a baking pan., Step 3 : etc etc"
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Create Recipe
          </Button>
          <Button variant="primary" onClick={handleCancel}>
            Cancel
          </Button>
        </Form>
      </div>
    </>
  );
};

export default NewRecipeForm;

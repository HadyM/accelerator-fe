import axios from "axios";

export const apiURL = axios.create({
  baseURL: "https://recipe-book-backend-app.adaptable.app",
});

export const getRecipes = async () => {
  const response = await apiURL.get("/recipes");
  return response.data.payload;
};

export const getRecipeId = async () => {
  const response = await apiURL.get("/recipes/:id");
  return response.data.payload;
};

export const getCookingStyles = async () => {
  const response = await apiURL.get("/cookingstyles");
  return response.data.payload;
};

export const getCookingStyleId = async () => {
  const response = await apiURL.get("/cookingstyles/:id");
  return response.data.payload;
};

export const getCuttingStyles = async () => {
  const response = await apiURL.get("/cuttingstyles");
  return response.data.payload;
};

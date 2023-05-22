import axios, { AxiosResponse } from 'axios';

// Although the API is rate limited, I'm still pushing the code I had locally to demonstrate

export interface Recipe {
  id: number;
  info: {
    type: string;
    name: string;
    status: string;
  };
  ingredients: string[];
  preparation: string[];
  version: number;
}

export interface ApiResponse<T> {
  data: T;
}

const url = 'https://26b2607e-3115-4ed1-9207-f78850b4792e.mock.pstmn.io';

export const fetchRecipes = async (): Promise<ApiResponse<Recipe[]>> => {
  const response: AxiosResponse<ApiResponse<Recipe[]>> = await axios.get(
    `${url}/api/recipes`
  );
  return response.data;
};

export const createRecipe = async (): Promise<ApiResponse<Recipe>> => {
  const response: AxiosResponse<ApiResponse<Recipe>> = await axios.post(
    `${url}/api/recipes`
  );
  return response.data;
};

export const login = async (payload: any): Promise<{}> => {
  const response: AxiosResponse<ApiResponse<Recipe[]>> = await axios.post(
    `${url}/api/login`,
    payload
  );
  return response.data;
};

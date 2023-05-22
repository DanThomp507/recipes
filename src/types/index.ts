export interface Recipe {
  info: {
    type: string;
    name: string;
    status: string;
  };
  ingredients: string[];
  preparation: string[];
  version: number;
  id: number;
}

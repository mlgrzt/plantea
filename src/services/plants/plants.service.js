import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const plantsRequest = (types = "fern") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[types];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const plantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((plant) => {
    plant.photos = plant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...plant,
      isPetSafe: plant.pet_friendly,
      //is: plants.air_cleaner,
    };
  });

  return camelize(mappedResults);
};

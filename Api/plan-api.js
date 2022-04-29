import axios from "axios";

// const path = "http://10.0.2.2:5000";
const path = "https://flamingo-express.herokuapp.com";

export const addPlan = async (user, plan) => {
  const result = await axios
    .post(`${path}/${user}/plan/${plan}`)
    .catch((err) => {
      err: true;
    });
  return result;
};

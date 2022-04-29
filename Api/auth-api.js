import axios from "axios";

// const path = "http://10.0.2.2:5000";
const path = "https://flamingo-express.herokuapp.com";

export const pull = async () => {
  const result = await axios.get(path).catch((err) => {
    err: true;
  });
  return result;
};

export const signIn = async (user) => {
  const result = await axios.post(`${path}/signin`, user).catch((err) => {
    return { error: true };
  });
  return result;
};

export const signUp = async (user) => {
  const result = await axios.post(`${path}/signup`, user).catch((err) => {
    console.log(result);
    return { error: true };
  });
  return result;
};

export const reset = async (user) => {
  const result = await axios.post(`${path}/reset`, user).catch((err) => {
    return { error: true };
  });
  return result;
};

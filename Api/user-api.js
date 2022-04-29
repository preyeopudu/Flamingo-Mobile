import axios from "axios";

// const path = "http://10.0.2.2:5000";
const path = "https://flamingo-express.herokuapp.com";

export const userSecret = async (user, secret) => {
  const result = await axios
    .post(`${path}/${user}/secret`, secret)
    .catch((err) => {
      return { error: true };
    });
  return result;
};

export const getUser = async (user) => {
  const result = await axios.get(`${path}/user/${user}`).catch((err) => {
    return { error: true };
  });
  return result;
};

export const getBonus = async (user) => {
  const result = await axios.post(`${path}/${user}/claim`).catch((err) => {
    return { error: true };
  });
  return result;
};

export const notify = async (user) => {
  const result = await axios.post(`${path}/${user}/notify`).catch((err) => {
    return { error: true };
  });
  return result;
};

export const userWithdraw = async (user, withdraw) => {
  const result = await axios
    .post(`${path}/${user}/withdraw`, withdraw)
    .catch((err) => {
      return { error: true };
    });
  return result;
};

export const userRegister = async (user, data) => {
  const result = await axios
    .post(`${path}/${user}/register`, data)
    .catch((err) => {
      return { error: true };
    });
  console.log(result);
  return result;
};

export const transfer = async (user, data) => {
  const result = await axios
    .post(`${path}/${user}/transfer`, data)
    .catch((err) => {
      return { error: true };
    });
  console.log(result);
  return result;
};

export const getNotification = async () => {
  const result = await axios.get(`${path}/notifications`).catch((err) => {
    return { error: true };
  });
  console.log(result);
  return result;
};

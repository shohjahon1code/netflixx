export const getTokenDuration = () => {
  const storedExpiritionDate = localStorage.getItem("expirition");
  const expiritionDate = new Date(storedExpiritionDate);
  const now = new Date();
  const duration = expiritionDate.getTime() - now.getTime();

  return duration;
};

export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  const tokenDuration = getTokenDuration();

  if (!token) {
    return;
  }

  if (tokenDuration < 0) {
    return "Your Token Expired";
  }

  return token;
};

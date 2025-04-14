import { BASE_URL } from "../utils";

// refresh token
export const refreshToken = async (refreshToken) => {
  console.log("this is the refresh_token " + refreshToken);
  const response = await fetch(`${BASE_URL}/auth/refresh-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const data = await response.json();

  return data;
};

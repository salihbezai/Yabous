import { refreshToken } from "./features/auth/authActions";

export const BASE_URL = "https://api.escuelajs.co/api/v1";
export const API_BASE_CATEGORY = "https://api.escuelajs.co/api/v1/categories";

export const fetchWithAuth = async (dispatch, getState, url, options = {}) => {
  const refresh_token = localStorage.getItem("refresh_token");
  const state = getState();
  const token = state.auth.accessToken;

  const config = {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  };

  let response = await fetch(url, config);
  console.log("this is the response " + response.status);
  if (response.status === 403 || response.status === 401) {
    const refreshResult = await dispatch(refreshToken(refresh_token)).unwrap();
    if (refreshResult?.access_token) {
      config.headers["Authorization"] = `Bearer ${refreshResult.access_token}`;
      response = await fetch(url, config);
    }
  }

  return response;
};

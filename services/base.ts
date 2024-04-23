import axios, { AxiosResponse } from 'axios';

function newAbortSignal(timeoutMs: number) {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), timeoutMs || 0);
  return abortController.signal;
}

export const api = axios.create({
  baseURL: 'https://6626040f052332d553214b42.mockapi.io/',
});

api.interceptors.request.use(
  (config) => {
    if (config.method === 'get') {
      config.signal = newAbortSignal(10000);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const { response } = error;

    return handleError(response);
  }
);

// Error handling function
function handleError(response: AxiosResponse) {
  const { status, data } = response;

  if (status && status >= 400 && status <= 600) {
    const messages = data?.message;

    if (typeof messages === 'string' || Array.isArray(messages)) {
      if (Array.isArray(messages)) {
        const [message] = messages;

        throw new Error(message);
      }

      throw new Error(messages);
    }

    throw Error(String(response));
  }

  if ('data' in response) return response;
}

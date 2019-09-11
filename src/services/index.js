export const request = async (endpoint, method, body) => {
  const headers = { Accept: 'application/json' };

  const response = await fetch(endpoint, {
    headers,
    method,
    body: JSON.stringify(body)
  });

  return response.json();
};

const SECTION = 'viewed';
const PERIOD = '7';
const API_KEY = 'Chom0VvAYApKdJYAfCoXGVADl9t0r3Ny';
const API_ENDPOINT = 'https://api.nytimes.com/svc/mostpopular/v2/';

export const fetchArticlesList = () => request(
  `${API_ENDPOINT}/${SECTION}/${PERIOD}.json?api-key=${API_KEY}`,
  'GET'
);

export function fetchCaudalesData(uri) {
  return fetch(uri)
    .then(response => response.json())
    .then(response => response);
}
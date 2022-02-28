export default async function fetchWithError(url, options) {
  const response = await fetch(url, options);

  if (response.status === 200) {
    const result = await response.json();

    if (result.error) {
      throw new Error(result.error);
    }

    return result;
  }

  throw new Error(`Error ${response.status}: ${response.statusText}`);
}

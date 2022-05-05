const API_KEY = "24326711-c75af6ca42eaac7ed3ff7c6d9";
const BASE_URL = "https://pixabay.com/api/";
const PER_PAGE = 12;

export default function fetchImage(imageName, page) {
  const url = `${BASE_URL}?q=${imageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;

  return fetch(url).then((r) => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(new Error(`${imageName} not found`)).then((data) => {
      return data.hits;
    });
  });
}

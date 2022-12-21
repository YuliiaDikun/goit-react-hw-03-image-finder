import axios from 'axios';

export const getImages = async (query, page) => {
  const { data } = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '31392505-41b93051c6715e7012a1d9703',
      q: query,
      page: page,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return data;
};

import axios from 'axios';

const API_URL = 'https://satellite-proximity-api.herokuapp.com/';

export function getProximities({ lat, lon, limit, callback }) {
  axios
    .get(`${API_URL}/api/v1/proximity?lat=${lat}&lon=${lon}&limit=${limit}`)
    .then((response) => {
      const sanitezedResponse = sanitizeResponse(response.data);
      callback(sanitezedResponse);
    });
}

function sanitizeResponse(response) {
  return response.satellites.map(({ name, lat, lon }, index) => ({
    id: index,
    coordinates: [lat, lon],
    value: 100 - index,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    name,
  }));
}

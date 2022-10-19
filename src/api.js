const BASE_URL = 'http://localhost:3001';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  emps: {
    list() {
      return callApi('/emps');
    },
    create(emp) {
      return callApi(`/emps`, {
        method: 'POST',
        body: JSON.stringify(emp),
      });
    },
    read(empId) {
      return callApi(`/emps/${empId}`);
    },
    update(empId, updates) {
      return callApi(`/emps/${empId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    remove(empId) {
      return callApi(`/emps/${empId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;
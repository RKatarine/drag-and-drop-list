export default function elementsApi(config, axios) {
  function getAll(userName, schemeId) {
    const params = {
      userName,
      schemeId,
    };
    return axios.post(`${config.domain}/get/elements/list`, params)
    .then(response => (response))
  }

  return {
    getAll,
  };
}

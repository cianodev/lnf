import axios from "axios";

const lnf = axios.create({
  baseURL: "/api",
  timeout: 10000000,
});

const _all = async (url) => await lnf.get(url);

const _post = async (url, params) => await lnf.post(url, params);

const _upload = async (url, body) => await lnf.post(url, body);

const _delete = async (url, params) => await lnf.delete(url, params);

const _get = async (url, params) => await lnf.get(url, params);

const _update = async (url, params) => await lnf.put(url, params);

export { _all, _post, _delete, _get, _update, _upload };

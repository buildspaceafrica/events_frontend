import httpService from "./httpService";

async function RegisterUser(body) {
  return await httpService.post(`/api/register`, body);
}

async function DeleteMediaResource(id) {
  return await httpService.delete(`${route}/${id}`);
}

export { RegisterUser };

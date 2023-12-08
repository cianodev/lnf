import { _post } from "@/services/apiProvider";

const requestRegister = (params) => 
  _post("/user/add", params)

const requestLogin = (params)=> 
  _post("/user/login", params)

export {
  requestRegister,
  requestLogin,
}
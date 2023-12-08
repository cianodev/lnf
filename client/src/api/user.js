import { _post } from "@/services/apiProvider";

const requestRegister = (params) => 
  _post("/user/add", params)

export {
  requestRegister,
}
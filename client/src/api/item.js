import { _post } from "@/services/apiProvider";
  
const requestReportItem = (params) => 
  _post("/lostFoundItemReport/add", params)

export {
  requestReportItem,
}
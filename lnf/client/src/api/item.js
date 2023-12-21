import { _post, _get } from "@/services/apiProvider";
  
const requestReportItem = (params) => 
  _post("/lostFoundItemReport/add", params)
  
const requestGetAllItems = () => 
  _get("/lostFoundItemReport/all")

export {
  requestReportItem,
  requestGetAllItems,
}
import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=30&nat=us";

//Calling API
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    apiSearch : function () {
        return axios.get(BASEURL);
    }
}
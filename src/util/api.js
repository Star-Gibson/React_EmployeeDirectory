import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=30";

//Calling API
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    API: function () {
        return axios.get(BASEURL);
    }
}
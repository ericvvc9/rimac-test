import axios from "axios";
import { CompletePersonalData, PersonalData, ResponsePersonalData } from "../models/personal-data";

const key = 'session';
function getPersonalData (personalData: PersonalData) {
  const API_ENDPOINT = 'https://freestyle.getsandbox.com/dummy/obtenerdatospersona';
  return axios.post<ResponsePersonalData>(API_ENDPOINT, personalData).then((data) => {
    setCurrentUser(data.data.data.tercero)
    return data;
  });
}


function getCurrentUser () {
  const personalData:CompletePersonalData | null = JSON.parse(sessionStorage.getItem(key) || "{}");
  return personalData;
}

function setCurrentUser (completePersonalData: CompletePersonalData) {
  sessionStorage.setItem(key,JSON.stringify(completePersonalData));
}

export { getPersonalData ,getCurrentUser};


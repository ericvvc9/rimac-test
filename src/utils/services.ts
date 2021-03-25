import axios from "axios";
import { CompletePersonalData, PersonalData, ResponsePersonalData } from "../models/personal-data";

const key = 'session';
function getPersonalData (personalData: PersonalData) {
  const API_ENDPOINT = 'https://randomuser.me/api';
  return axios.get<ResponsePersonalData>(API_ENDPOINT).then((data) => {
    setCurrentUser({
      ...data.data.results[0],
      documentNumber: personalData.documentNumber,
      documentType: personalData.documentType,
      birthDate: personalData.birthDate,
    })
    return data;
  });
}


function getCurrentUser (): CompletePersonalData | null {
  const session = sessionStorage.getItem(key);
  if(session) {
    const personalData:CompletePersonalData | null = JSON.parse(session);
    return personalData;
  }
  return null;
}

function setCurrentUser (completePersonalData: CompletePersonalData) {
  sessionStorage.setItem(key,JSON.stringify(completePersonalData));
}

export { getPersonalData ,getCurrentUser};


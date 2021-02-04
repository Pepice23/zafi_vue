import axios from "axios";

function extractData(response) {
  return response.data;
}

export function getKarakterNameList() {
  return axios
    .get("http://127.0.0.1:8000/api/karakterek/nevek/")
    .then(extractData);
}

export function createNewKarakter(
  karakterNev,
  karakterFaction,
  karakterGender,
  karakterRace,
  karakterClass
) {
  return axios
    .post("http://127.0.0.1:8000/api/uj/", {
      karakter_name: karakterNev,
      karakter_faction: karakterFaction,
      karakter_gender: karakterGender,
      karakter_race: karakterRace,
      karakter_class: karakterClass
    })
    .then(extractData);
}

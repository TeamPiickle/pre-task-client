import axios from "axios";

export const client = axios.create({
  baseURL: "https://sopt-letter.herokupp.com",
});

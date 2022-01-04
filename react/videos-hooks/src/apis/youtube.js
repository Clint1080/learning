import axios from "axios";

const KEY = "AIzaSyD_Cba-YLc0ykxkSlN-OhN_vJIwNKKUA6Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

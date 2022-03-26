import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer d1bvjDLQPeIW7lGtwy0LcrfCki4fgl9b90wH4yRvwGKa8WQ4kwLXVLo0vQQ-jAkNRAMgYTvFgU4r22KZzy8lvnh4wkt4mKSxvfmq3KkVo5TpNcUEGxAJZZkEXRY-YnYx",
  },
});

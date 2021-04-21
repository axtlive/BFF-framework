import axios from "axios";

class AxtliveRequest {
  static fetch(url) {
    const result = {
      code: 0,
      message: "",
      data: null,
    };
    const time = Number((Math.random() * 4).toFixed(0));
    console.log(time);
    return new Promise((resolve, reject) => {
      axios(url)
        .then((res) => {
          result.data = res.data;
          setTimeout(() => {
            resolve(result);
          }, time * 1000);
        })
        .catch((err) => {
          result.message = err.message;
          result.code = -1;
          resolve(result);
        });
    });
  }
}

export default AxtliveRequest;

import instance from "./request";

// export const GetCaptchaCodeApi = instance.get('prod-api/captchaImage')

// export const GetCaptchaCodeApi = instance({
//   url:'/verifycode/code',
//   params:{
//     len:5,
//     type:0,
//     app_id:'xvqopyqkqb1vnusl',
//     app_secret:'mlACdkAAIYaezcdM2gJGOvErsbmKL0u1'
//   }
// })
export const GetCaptchaCodeApi = () => {
  return new Promise((resolve, reject) => {
    instance({
      url:'/verifycode/code',
      params:{
        len:5,
        type:0,
        app_id:'xvqopyqkqb1vnusl',
        app_secret:'mlACdkAAIYaezcdM2gJGOvErsbmKL0u1'
      }
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
export const GetGirlImageApi = ()=>{
  return new Promise((resolve, reject)=>{
    instance({
      url:'/image/girl/list/random',
      params:{
        app_id:'xvqopyqkqb1vnusl',
        app_secret:'mlACdkAAIYaezcdM2gJGOvErsbmKL0u1'
      }
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(error => {
      reject(error);
    });
  })
}
export const GetWeatherApi = (cityName)=>{
  return new Promise((resolve, reject)=>{
    instance({
      url:`/weather/current/${cityName}`,
      params:{
        app_id:'xvqopyqkqb1vnusl',
        app_secret:'mlACdkAAIYaezcdM2gJGOvErsbmKL0u1'
      }
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(error => {
      reject(error);
    });
  })
}

// export const GetCaptchaCodeApi = () => {
//   return instance.get('/verifycode/code', {
//     params: {
//       len: 5,
//       type: 0,
//       app_id: 'xvqopyqkqb1vnusl',
//       app_secret: 'mlACdkAAIYaezcdM2gJGOvErsbmKL0u1'
//     }
//   });
// };
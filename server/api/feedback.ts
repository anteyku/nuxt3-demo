//! POST ЗАПРОС ДЛЯ ПОЛУЧЕНИЯ ДАННЫХ ИЗ ФОРМЫ И ОТПРАВКИ НА ПОЧТУ
export default defineEventHandler(async(req) => {
    let barni = `Барвинка`
    
    let body = await readBody(req)
    console.log(body);   


      return {
        api: barni
      }
    })
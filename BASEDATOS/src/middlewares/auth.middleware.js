//importamos jwt
const jwt = require("jsonwebtoken");
const HTTPSTATUSCODE = require("../utils/HTTP");
const isAuth = (req, res, next) => {
  
  const authorization = req.headers.authorization;
  
  if (!authorization) {
    return res.json({
      status: 401,
      message: HTTPSTATUSCODE[401],
      data: null,
    });
  }

  const splits = authorization.split(" ");
  if (splits.length != 2 || splits[0] != "Bearer") {
    return res.json({
      status: 400,
      message: HTTPSTATUSCODE[400],
      data: null,
    });
  }
  
  const jwtString = splits[1];
  try {
   
    var token = jwt.verify(jwtString, req.app.get("secretKey"));

    
  } catch (err) {
    return next(err);
  }
  //creamos una variable con la informacion que queremos meter en la
  //peticion
  const authority = {
    id: token.id,
    nombre: token.nombre,
  };
  //Se la asignamos al request de la peticion
  req.authority = authority;
  //si todo ha ido bien pasamos el middleware
  next();
};
//exportamos la funcion isAuth
module.exports = {
  isAuth,
};

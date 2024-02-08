"use strict";
//Importar paquete mysql para realizar la conexion

import { MongoClient } from "mongodb"; //para trabajar con promesas
const URI =
  "mongodb+srv://ivanolo3000:@Ivanillo01@ciclos.5sskuwu.mongodb.net/?retryWrites=true&w=majority";

//crear la instancia del cliente mongodb utilizando la URI de conexion que nos ha proporcionado MongoDB
const client = new MongoClient(URI);
let conexion;
const conexionBD = async () => {
  //conectar al servidor de forma asíncrona
  try {
    if (!conexion) {
      conexion = await client.connect();
      console.log("Conectada la BD MongoDB");
    }
    return conexion.db("empresadb"); //nombre de base de datos. Crea también la base de datos aunque no esté creada.
  } catch (error) {
    console.log("Error. Base de datos no conectada");
  }
};

export default conexionBD; //exportamos conexion

// import conexion from "../mysql_conector.js";
import conexionBD from "../../mongodb_conector.js";
import { ObjectId } from "mongodb";
/**
 * @description Funcion encargada de hacer la petición a la bbdd para
 * obtener los cursos.
 * @param {*} req 
 * @param {*} res 
 */
export const mostrarCursos = async (req, res) => {
  try {
    const database = await conexionBD();
    const collection = database.collection("cursos")//obtenemos la coleccion de cursos
    const result = await collection.find({}).toArray()
    res.status(200).json(result)
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error en el servidor",
    });
  }
};

/**
 * @description Función encargada de hacer la petición de modulos que tiene un curso.
 * El curso se pasa como parámetro para hacer la consulta y se trata del parámetro req.
 * @param {*} req 
 * @param {*} res 
 */
export const mostrarModulos = async (req, res) => {
  try {
    const {idCurso} = req.params; //para extraer el atributo id de params
    const database = await conexionBD();
    const collection = database.collection("Modulos")
    const result = await collection.find({idCurso:idCurso}).toArray()
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor",
    }); 
  }
};

/**
 * @description Función encargada de hacer la petición a la bbdd para mostrar los alumnos 
 * que tiene un curso. Éste se pasa como parámetro (req)
 * @param {*} req 
 * @param {*} res 
 */
export const mostrarAlumnos = async (req, res) => {
  //argumentos de peticion y respuesta
  try {
    const {idCurso} = req.params; //para extraer el atributo id de params
    const database = await conexionBD();
    const collection = database.collection("Alumnos")
    const result = await collection.find({idCurso:idCurso}).toArray()
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error en el servidor",
    });
  }
};
export const grabarDatos = async (req,res)=>{
  try {
    const {idCurso,idModulo,idAlumno,calificacion}=req.body
    console.log(req.body);
    const datosAInsertar={
      idCurso:idCurso,
      idModulo:idModulo,
      idAlumno:idAlumno,
      calificacion:calificacion
    }
    const database = await conexionBD();
    const collection = database.collection("Calificaciones")
    const result = await collection.insertOne(datosAInsertar);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error en el servidor",
    });
  }
}
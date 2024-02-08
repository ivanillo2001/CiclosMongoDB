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
    console.log(database);
    const collection = database.collection("cursos")
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
// export const mostrarModulos = async (req, res) => {
//   try {
//     const { id } = req.params; //para extraer el atributo id de params
//     const [result] = await conexion.query(
//       "SELECT * FROM modulos where idCurso=? order by descripcion",
//       [id]
//     );
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({
//       message: "Error en el servidor",
//     });
//   }
// };

// /**
//  * @description Función encargada de hacer la petición a la bbdd para mostrar los alumnos 
//  * que tiene un curso. Éste se pasa como parámetro (req)
//  * @param {*} req 
//  * @param {*} res 
//  */
// export const mostrarAlumnos = async (req, res) => {
//   //argumentos de peticion y respuesta
//   try {
//     const { id } = req.params; //para extraer el atributo id de params
//     const [result] = await conexion.query(
//       "SELECT * FROM alumnos where idCurso=? order by apellidosNombre",
//       [id]
//     );
//     res.status(200).json(result);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       message: "Error en el servidor",
//     });
//   }
// };
// export const grabarDatos = async (req,res)=>{
//   try {
//     console.log("Pasa1");
//     console.log(req.query);
//     const {idCurso, idModulo,idAlumno,calificacion}=req.body;
//     console.log("Pasa 2");
//     console.log(req.body);
//     const [result]= await conexion.query("INSERT INTO calificaciones (idCalificaciones, idCurso, idModulo, idAlumno, calificacion) VALUES (NULL,?,?,?,?)",[idCurso,idModulo,idAlumno,calificacion])
//     res.status(201).json({ idCurso: result.insertId });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       message: "Error en el servidor",
//     });
//   }
// }
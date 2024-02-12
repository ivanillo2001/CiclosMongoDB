"use strict"
/**
 * Importaciones necesarias:
 */
import { Router } from "express";
import {mostrarCursos,mostrarModulos,mostrarAlumnos,grabarDatos} from "../controllers/ciclos.controllers.js";//con esto importamos las funciones desde controller

const router = Router(); //declaración del router

router.get("/cursos",mostrarCursos);//dirección de la funcion de mostrar cursos

router.get("/modulos/:idCurso", mostrarModulos);//dirección de la funcion de mostrarModulos. Se pasa el idCurso como parametro
// 
router.get("/alumnos/:idCurso",mostrarAlumnos)//dirección de la funcion de mostrarAlumnos. Se pasa el idCurso como parametro
// 
router.post("/notas/",grabarDatos)//dirección de la funcion de mostrarAlumnos. Se pasa el idCurso, idModulo, idAlumno y calificacion como parametros

export default router;//lo exportamos.

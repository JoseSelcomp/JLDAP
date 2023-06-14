import express from 'express';
import bodyParser from 'body-parser';
import path, { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import port from './config.js'
import indexRoutes from "./routes/index.js"


const app = express();
app.use(bodyParser.urlencoded({extended: true}))
const __dirname = dirname(fileURLToPath(import.meta.url))

const sistemaGestion = join(__dirname, 'views', 'pages', 'gestion-integral', 'pages', 'SG-Calidad')
const procesoApoyo = join(sistemaGestion, 'pages', 'procesos-apoyo-soporte')
const procesoGerencial = join(sistemaGestion, 'pages', 'procesos-gerenciales')
const procesoMisional = join(sistemaGestion, 'pages', 'procesos-misionales')

app.set('views', [
    join(__dirname, 'views'),
    join(__dirname, 'views', 'pages', 'apps'),
    join(__dirname, 'views', 'pages', 'apps', 'pages', 'aranda'),
    join(__dirname, 'views', 'pages', 'apps', 'pages', 'novasoft'),

    join(__dirname, 'views', 'pages', 'gestion-integral'),
    join(sistemaGestion),
    join(procesoApoyo),
    join(procesoApoyo, 'docsGA'),
    join(procesoApoyo, 'docsGF'),
    join(procesoApoyo, 'docsGH'),
    join(procesoGerencial),
    join(procesoGerencial, 'docsGCS'),
    join(procesoGerencial, 'docsGE'),
    join(procesoMisional),
    join(procesoMisional, 'docsGC'),
    join(procesoMisional, 'docsGO'),
]);
app.set('view engine', 'ejs');


// 81721019
// Depto Tecnologia

app.use(indexRoutes);

//Estilo global
app.use(express.static(path.join(__dirname, 'public', 'css')));

//Bootstrap global
app.use(express.static(join(__dirname, 'css')));
app.use(express.static(join(__dirname, 'js')));
app.use(express.static(join(sistemaGestion, 'javascript')));

//Imagenes
app.use(express.static(path.join(__dirname, 'public', 'img')));
app.use(express.static(path.join(__dirname, 'public', 'imagenes')));

app.use(express.static(path.join(__dirname, 'views', 'pages', 'apps')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'apps', 'images')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'apps', 'pages', 'aranda')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'apps', 'pages', 'aranda', 'images')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'apps', 'pages', 'novasoft')));
app.use(express.static(path.join(__dirname, 'views', 'pages', 'apps', 'pages', 'novasoft', 'images')));


//Accediendo a los assets del sistema de gestion integral y todas sus paginas

//<<============================================>Mapa de los procesos<======================================================>>
app.use(express.static(path.join(__dirname, 'views', 'pages', 'gestion-integral')));
app.use(express.static(path.join(sistemaGestion)));
app.use(express.static(path.join(sistemaGestion, 'public', 'css')));
app.use(express.static(path.join(sistemaGestion, 'public', 'img')));
app.use(express.static(path.join(sistemaGestion, 'javascript')));
app.use(express.static(path.join(procesoApoyo)));
app.use(express.static(path.join(procesoGerencial)));
app.use(express.static(path.join(procesoMisional)));

//<=========================================Gestion humana====================================================>

app.use(express.static(path.join(procesoApoyo, 'docsGH')));

// 1 Caracterizacion
app.use(express.static(path.join(procesoApoyo, 'docsGH', 'docs', 'caracterizacion')));

//2 Politicas
app.use(express.static(path.join(procesoApoyo, 'docsGH', 'docs', 'politicas')));

//3 Manuales
app.use(express.static(path.join(procesoApoyo, 'docsGH', 'docs', 'manuales')));

//4 Procedimientos
app.use(express.static(path.join(procesoApoyo, 'docsGH', 'docs', 'procedimientos')));

//5 Instructivos
app.use(express.static(path.join(procesoApoyo, 'docsGH', 'docs', 'instructivos')));

//6 Organigrama
app.use(express.static(path.join(procesoApoyo, 'docsGH', 'docs', 'organigrama')));

//7 Formatos
app.use(express.static(path.join(procesoApoyo, 'docsGH', 'docs', 'formatos', 'capacitaciones')));
app.use(express.static(path.join(procesoApoyo, 'docsGH', 'docs', 'formatos', 'evaluacionDesempeño')));
app.use(express.static(path.join(procesoApoyo, 'docsGH', 'docs', 'formatos', 'formatosGenerales')));
app.use(express.static(path.join(procesoApoyo, 'docsGH', 'docs', 'formatos', 'formatosInternosNoControlados')));
app.use(express.static(path.join(procesoApoyo, 'docsGH', 'docs', 'formatos', 'SeleccionPersonal')));

//8 Guias
app.use(express.static(path.join(procesoApoyo, 'docsGH', 'docs', 'guias')));

//<=========================================Gestion de aprovisionamiento====================================================>
app.use(express.static(path.join(procesoApoyo, 'docsGA')));

// 1 Caracterizacion
app.use(express.static(path.join(procesoApoyo, 'docsGA', 'docs', 'caracterizacion')));

//2 Compras
app.use(express.static(path.join(procesoApoyo, 'docsGA', 'docs', 'compras', 'formatos')));
app.use(express.static(path.join(procesoApoyo, 'docsGA', 'docs', 'compras', 'instructivos')));
app.use(express.static(path.join(procesoApoyo, 'docsGA', 'docs', 'compras', 'politica')));
app.use(express.static(path.join(procesoApoyo, 'docsGA', 'docs', 'compras', 'procedimientos')));

//3 Almacen
app.use(express.static(path.join(procesoApoyo, 'docsGA', 'docs', 'almacen', 'formatos')));
app.use(express.static(path.join(procesoApoyo, 'docsGA', 'docs', 'almacen', 'instructivos')));
app.use(express.static(path.join(procesoApoyo, 'docsGA', 'docs', 'almacen', 'noControlados')));
app.use(express.static(path.join(procesoApoyo, 'docsGA', 'docs', 'almacen', 'procedimientos')));

//4 Producto no conforme
app.use(express.static(path.join(procesoApoyo, 'docsGA', 'docs', 'productoNoConforme', 'instructivos')));
app.use(express.static(path.join(procesoApoyo, 'docsGA', 'docs', 'productoNoConforme', 'procedimientos')));

//<=========================================Gestion financiera====================================================>
app.use(express.static(path.join(procesoApoyo, 'docsGF')));

// 1 Caracterizacion
app.use(express.static(path.join(procesoApoyo, 'docsGF', 'docs', 'caracterizacion')));

//2 Procedimientos
app.use(express.static(path.join(procesoApoyo, 'docsGF', 'docs', 'procedimientos')));

//3 Instructivos
app.use(express.static(path.join(procesoApoyo, 'docsGF', 'docs', 'instructivos')));

//4 Formatos
app.use(express.static(path.join(procesoApoyo, 'docsGF', 'docs', 'formatos')));

//5 No cotrolados
app.use(express.static(path.join(procesoApoyo, 'docsGF', 'docs', 'noControlados')));

//<=========================================Gestion estrategica====================================================>
app.use(express.static(path.join(procesoGerencial, 'docsGE')));
app.use(express.static(path.join(procesoGerencial, 'docsGE', 'docs')));
// // 1 Caracterizacion
// app.use(express.static(path.join(procesoGerencial, 'docsGE', '')));

// //2 Procedimientos
// app.use(express.static(path.join(procesoGerencial, 'docsGE', '')));

// //3 Manuales
// app.use(express.static(path.join(procesoGerencial, 'docsGE', '')));

// //4 Formatos
// app.use(express.static(path.join(procesoGerencial, 'docsGE', '')));

//<=========================================Gestion de calidad====================================================>
app.use(express.static(path.join(procesoGerencial, 'docsGCS')));
app.use(express.static(path.join(procesoGerencial, 'docsGCS', 'docs')));

app.use(express.static(path.join(procesoGerencial, 'docsGCS', 'docs', 'accionesMejora')));
app.use(express.static(path.join(procesoGerencial, 'docsGCS', 'docs', 'auditorias')));

//<=========================================Gestion comercial====================================================>
app.use(express.static(path.join(procesoMisional, 'docsGC')));

// 1 Caracterizacion
app.use(express.static(path.join(procesoMisional, 'docsGC', 'docs', 'caracterizacion')));

//2 Procedimientos
app.use(express.static(path.join(procesoMisional, 'docsGC', 'docs', 'formatos')));

//3 Politicas
app.use(express.static(path.join(procesoMisional, 'docsGC', 'docs', 'politicas')));

//4 Formatos
app.use(express.static(path.join(procesoMisional, 'docsGC', 'docs', 'procedimientos')));
//<=========================================Gestion de operaciones====================================================>
app.use(express.static(path.join(procesoMisional, 'docsGO')));

// 1 Operaciones
app.use(express.static(path.join(procesoMisional, 'docsGO', 'docs', 'operaciones')));

//2 Mantenimiento
app.use(express.static(path.join(procesoMisional, 'docsGO', 'docs', 'mantenimiento')));

//3 Laboratorio
app.use(express.static(path.join(procesoMisional, 'docsGO', 'docs', 'laboratorio')));

//4 Planes de trabajo
app.use(express.static(path.join(procesoMisional, 'docsGO', 'docs', 'planesTrabajo')));

app.listen(port, function(){
    console.log(`Server running on port ${port}`);
});

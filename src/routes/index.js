import { Router } from "express";
import session from "express-session";
import { client } from "../db.js";

const router = Router();

router.use(
  session({
    secret: '**AdminSelcomp//2012**', // Cambia esto por una clave secreta más segura
    resave: false,
    saveUninitialized: true,
  })
);

//Función que valida el login
function requireLogin(req, res, next) {
  if (req.session && req.session.username) {
    next();
  } else {
    res.redirect('/');
  }
}

//Función para dar acceso a un área en específico
//Función de permisos para gestion humana
function requireHumana(req, res, next){
  if (req.session.group === "Depto Humana" || req.session.group === "Depto Tecnologia") {
    next();
  } else {
    res.redirect('/integral/procesos');
    console.log('No tiene permiso para acceder a estos documentos');
  }
}

//Función de permisos para gestion Aprovisionamiento
function requireAprovisionamiento(req, res, next){
  if(req.session.group === "Depto Aprovisionamiento" || req.session.group === "Depto Tecnologia"){
    next();
  }else{
    res.redirect('/integral/procesos');
    console.log('No tiene permiso para acceder a estos documentos');
  }
}

//Función de permisos para gestion financiera
function requireFinanciera(req, res, next){
  if(req.session.group === "Depto Financiera" || req.session.group === "Depto Tecnologia"){
    next();
  }else{
    res.redirect("/integral/procesos");
    console.log('No tiene permiso para acceder a estos documentos')
  }
}

//Función de permisos para gestion estrategica
function requireEstrategica(req, res, next){
  if(req.session.group === "Depto Estrategica" || req.session.group === "Depto Tecnologia"){
    next();
  }else{
    res.redirect("/integral/procesos");
    console.log('No tiene permiso para acceder a estos documentos')
  }
}
//Función de permisos para gestion calidad
function requireCalidad(req, res, next){
  if(req.session.group === "Depto Calidad" || req.session.group === "Depto Tecnologia"){
    next();
  }else{
    res.redirect("/integral/procesos");
    console.log('No tiene permiso para acceder a estos documentos')
  }
}
//Función de permisos para gestion comercial
function requireComercial(req, res, next){
  if(req.session.group === "Depto Comercial" || req.session.group === "Depto Tecnologia"){
    next();
  }else{
    res.redirect("/integral/procesos");
    console.log('No tiene permiso para acceder a estos documentos')
  }
}
//Función de permisos para gestion operaciones
function requireOperaciones(req, res, next){
  if(req.session.group === "Depto Operaciones" || req.session.group === "Depto Tecnologia"){
    next();
  }else{
    res.redirect("/integral/procesos");
    console.log('No tiene permiso para acceder a estos documentos')
  }
}

//Ruta por defecto que muestra la página de inicio de sesion
router.get("/", (req, res) => {
  if (req.session && req.session.username) {
    res.redirect('/index');
    return;
  }
  res.render("login", { error: null });
});

//ruta que envia los datos del usuario
router.post("/", (req, res) => {
  const { group, username, password } = req.body;

  client.bind(
    `cn=${username},ou=${group},cn=UserWebGroup,ou=WebUnit,cn=Manager,dc=gruposelcomp,dc=com`,
    password, (err) => {
      if (err) {
        console.error('Error al autenticar usuario:', err);
        res.render('login', { error: 'Credenciales inválidas' });
        return;
      }
      req.session.username = username;
      req.session.group = group;
      console.log('Inicio de sesión exitoso');
      res.redirect('/index');
  });
}); 

//Ruta de la pagina principal
router.get('/index', requireLogin, (req, res) => {
  const username = req.session.username;
  res.render('index', { username });
});

//Ruta para cerrar sesion
router.post('/index', requireLogin, (req, res) => {
  const username = req.session.username;
  req.session.destroy((err) => {
    console.log(`${username} ha cerrado sesion`);
    if (err) {
      console.log(err);
    }

    res.render('login', { error: 'Credenciales inválidas' });
  });
});


//============================== Rutas hijas ============================================
//================Page Aplicaciones==============================
router.get("/aplicaciones",  requireLogin, (req, res) => {
  res.render("aplicaciones");
});

router.get("/aplicaciones/aranda",  requireLogin, (req, res) => {
  res.render("aranda");
});

router.get("/aplicaciones/novasoft",  requireLogin, (req, res) => {
  res.render("novasoft");
});

//==============Page gestion integral===========================================
router.get("/integral",  requireLogin,  (req, res) => {
  res.render("integral");
});

router.get("/integral/procesos",  requireLogin,  (req, res) => {
  const group = req.session.group;
  res.render("mapaProcesos", {group});
});

//Procesos de apoyo o soporte
//---------------------------------------------------------------------------------------------------
router.get("/integral/procesos/humana",  requireLogin, requireHumana, (req, res) => {
  res.render("gHumana");
});

//=========================paginas gestion humana==================================
router.get("/integral/procesos/humana/caracterizacion",  requireLogin, requireHumana, (req, res) => {
  res.render("GHCaracterizacion");
});
router.get("/integral/procesos/humana/politicas",  requireLogin, requireHumana, (req, res) => {
  res.render("GHpoliticas");
});
router.get("/integral/procesos/humana/manuales",  requireLogin, requireHumana,  (req, res) => {
  res.render("GHmanuales");
});
router.get("/integral/procesos/humana/procedimientos",  requireLogin, requireHumana,  (req, res) => {
  res.render("GHprocedimientos");
});
router.get("/integral/procesos/humana/instructivos",  requireLogin, requireHumana,  (req, res) => {
  res.render("GHinstructivos");
});
router.get("/integral/procesos/humana/organigramas",  requireLogin, requireHumana,  (req, res) => {
  res.render("GHorganigramas");
});
router.get("/integral/procesos/humana/formatos",  requireLogin, requireHumana,  (req, res) => {
  res.render("GHformatos");
});
router.get("/integral/procesos/humana/guias",  requireLogin, requireHumana,  (req, res) => {
  res.render("GHguias");
});
//---------------------------------------------------------------------------------------------------------


router.get("/integral/procesos/aprovisionamiento",  requireLogin, requireAprovisionamiento, (req, res) => {
  res.render("gAprovisionamiento");
});
//=========================paginas gestion aprovisionamiento==================================
router.get("/integral/procesos/aprovisionamiento/caracterizacion",  requireLogin, requireAprovisionamiento,  (req, res) => {
  res.render("GAcaracterizacion");
});
router.get("/integral/procesos/aprovisionamiento/compras",  requireLogin, requireAprovisionamiento,  (req, res) => {
  res.render("GAcompras");
});
router.get("/integral/procesos/aprovisionamiento/almacen",  requireLogin, requireAprovisionamiento,  (req, res) => {
  res.render("GAalmacen");
});
router.get("/integral/procesos/aprovisionamiento/producto-no-conforme",  requireLogin, requireAprovisionamiento,  (req, res) => {
  res.render("GAprodnoconforme");
});
//-------------------------------------------------------------------------------------------------------------

router.get("/integral/procesos/financiera",  requireLogin, requireFinanciera, (req, res) => {
  res.render("gFinanciera");
});
//=========================paginas gestion financiera==================================
router.get("/integral/procesos/financiera/caracterizacion",  requireLogin, requireFinanciera,  (req, res) => {
  res.render("GFCaracterizacion");
});
router.get("/integral/procesos/financiera/procedimientos",  requireLogin, requireFinanciera,  (req, res) => {
  res.render("GFprocedimientos");
});
router.get("/integral/procesos/financiera/instructivos",  requireLogin, requireFinanciera,  (req, res) => {
  res.render("GFinstructivos");
});
router.get("/integral/procesos/financiera/formatos",  requireLogin, requireFinanciera,  (req, res) => {
  res.render("GFformatos");
});
router.get("/integral/procesos/financiera/no-controlados",  requireLogin, requireFinanciera,  (req, res) => {
  res.render("GFnocontroladosSGC");
});
//----------------------------------------------------------------------------

//Procesos gerenciales
router.get("/integral/procesos/estrategica",  requireLogin, requireEstrategica, (req, res) => {
  res.render("gEstrategica");
});
//=========================paginas gestion estrategica==================================
router.get("/integral/procesos/estrategica/caracterizacion",  requireLogin, requireEstrategica,  (req, res) => {
  res.render("GECaracterizacion");
});
router.get("/integral/procesos/estrategica/procedimientos",  requireLogin, requireEstrategica,  (req, res) => {
  res.render("GEprocedimientos");
});
router.get("/integral/procesos/estrategica/manuales",  requireLogin, requireEstrategica,  (req, res) => {
  res.render("GEmanuales");
});
router.get("/integral/procesos/estrategica/formatos",  requireLogin, requireEstrategica,  (req, res) => {
  res.render("GEformatos");
});
//-------------------------------------------------------------------------

router.get("/integral/procesos/calidad",  requireLogin, requireCalidad,  (req, res) => {
  res.render("gCalidadyServicio");
});
//=========================paginas gestion calidad==================================
router.get("/integral/procesos/calidad/caracterizacion",  requireLogin, requireCalidad,  (req, res) => {
  res.render("GCSCaracterizacion");
});
router.get("/integral/procesos/calidad/calidad",  requireLogin, requireCalidad,  (req, res) => {
  res.render("GCScalidad");
});
router.get("/integral/procesos/calidad/acciones-de-mejora",  requireLogin, requireCalidad,  (req, res) => {
  res.render("GCSaccionesdemejora");
});
router.get("/integral/procesos/calidad/auditorias",  requireLogin, requireCalidad,  (req, res) => {
  res.render("GCSauditorias");
});
router.get("/integral/procesos/calidad/informacion-documentada",  requireLogin, requireCalidad,  (req, res) => {
  res.render("GCSinfodocumentada");
});
router.get("/integral/procesos/calidad/servicio-al-cliente",  requireLogin, requireCalidad,  (req, res) => {
  res.render("GCSserviciocliente");
});
router.get("/integral/procesos/calidad/generales",  requireLogin, requireCalidad,  (req, res) => {
  res.render("GCSgenerales");
});
//-----------------------------------------------------------------------

//Procesos misionales
router.get("/integral/procesos/comercial",  requireLogin, requireComercial, (req, res) => {
  res.render("gComercial");
});
//=========================paginas gestion comercial==================================
router.get("/integral/procesos/comercial/caracterzacion",  requireLogin, requireComercial,  (req, res) => {
  res.render("GCcaracterizacion");
});
router.get("/integral/procesos/comercial/procedimientos",  requireLogin, requireComercial,  (req, res) => {
  res.render("GCprocedimientos");
});
router.get("/integral/procesos/comercial/politicas",  requireLogin, requireComercial,  (req, res) => {
  res.render("GCpoliticas");
});
router.get("/integral/procesos/comercial/formatos",  requireLogin, requireComercial,  (req, res) => {
  res.render("GCformatos");
});
//-------------------------------------------------------------------------

router.get("/integral/procesos/operaciones",  requireLogin, requireOperaciones, (req, res) => {
  res.render("gOperaciones");
});
//=========================paginas gestion operaciones==================================
router.get("/integral/procesos/operaciones/operaciones",  requireLogin, requireOperaciones,  (req, res) => {
  res.render("GOoperaciones");
});
router.get("/integral/procesos/operaciones/mantenimiento",  requireLogin, requireOperaciones,  (req, res) => {
  res.render("GOmantenimientoPreventivo");
});
router.get("/integral/procesos/operaciones/laboratorio",  requireLogin, requireOperaciones,  (req, res) => {
  res.render("GOlaboratorio");
});
router.get("/integral/procesos/operaciones/planes-de-trabajo",  requireLogin, requireOperaciones,  (req, res) => {
  res.render("GOplanesTrabajo");
});

export default router;

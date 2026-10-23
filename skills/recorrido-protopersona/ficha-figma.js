// Ficha de protopersona en Figma · plantilla de Sara Luz (CC BY 4.0)
// Script para use_figma. Dibuja la ficha y el post-it de tareas dentro de una sección blanca.
// Cambia solo DATOS. Un campo vacío se dibuja con "Texto": así sale la ficha sin contenido.
// Cada texto que se rellena se llama "campo:<clave>" para poder rellenarlo después.

const DATOS = {
  paginaId: '',           // id de la página donde va la ficha ('' = primera página)
  producto: 'la web',      // nombre de la web o software, sale en dos filas
  nombre: '', momento: '', rol: '', bio: '',
  quien: '', espera: '', nivel: '', hace: '', miembros: '', preocupa: '', atasca: '',
  tareas: []               // lista de frases
};

if (DATOS.paginaId) await figma.setCurrentPageAsync(await figma.getNodeByIdAsync(DATOS.paginaId));
await Promise.all(['Regular', 'Medium', 'Semi Bold'].map(style => figma.loadFontAsync({ family: 'Inter', style })));

const rgb = h => ({ r: parseInt(h.slice(1, 3), 16) / 255, g: parseInt(h.slice(3, 5), 16) / 255, b: parseInt(h.slice(5, 7), 16) / 255 });
const AZUL = rgb('#00518C'), TINTA = rgb('#002139'), FONDO = rgb('#FAFAFA'), BORDE = rgb('#B0B0B0'), BLANCO = rgb('#FFFFFF');
const solido = c => [{ type: 'SOLID', color: c }];
const valor = v => (Array.isArray(v) ? v.join('\n') : v) || 'Texto';

function texto(padre, chars, style, size, color, name) {
  const t = figma.createText();
  t.fontName = { family: 'Inter', style };
  t.fontSize = size;
  t.characters = chars;
  t.fills = solido(color);
  t.name = name;
  padre.appendChild(t);
  t.layoutSizingHorizontal = 'FILL';
  t.textAutoResize = 'HEIGHT';
  return t;
}

// Ficha
const ficha = figma.createAutoLayout('VERTICAL', {
  name: 'Ficha', itemSpacing: 49, paddingTop: 40, paddingBottom: 40, paddingLeft: 47, paddingRight: 47,
  cornerRadius: 21.3, fills: solido(BLANCO)
});
ficha.resize(1184, 100);
ficha.primaryAxisSizingMode = 'AUTO';

// Cabecera: foto, nombre y momento | rol y bio
const cabecera = figma.createAutoLayout('HORIZONTAL', { name: 'Cabecera', itemSpacing: 49, fills: [] });
ficha.appendChild(cabecera);
cabecera.layoutSizingHorizontal = 'FILL';

const caja = props => figma.createAutoLayout('VERTICAL', {
  paddingTop: 33.5, paddingBottom: 33.5, paddingLeft: 33.5, paddingRight: 33.5, cornerRadius: 32, fills: solido(FONDO), ...props
});
const izquierda = caja({ name: 'Persona', itemSpacing: 40 });
cabecera.appendChild(izquierda);
izquierda.resize(503, 100);
izquierda.layoutSizingVertical = 'FILL';
const foto = figma.createEllipse();
foto.name = 'Foto';
foto.resize(100, 100);
foto.fills = solido(rgb('#D9D9D9'));
izquierda.appendChild(foto);
const nombre = figma.createAutoLayout('VERTICAL', { name: 'Nombre', itemSpacing: 16, fills: [] });
izquierda.appendChild(nombre);
nombre.layoutSizingHorizontal = 'FILL';
texto(nombre, DATOS.nombre || 'Nombre', 'Medium', 36.62, AZUL, 'campo:nombre');
texto(nombre, DATOS.momento || 'Momento', 'Regular', 32, TINTA, 'campo:momento');

const derecha = caja({ name: 'Bio', itemSpacing: 10 });
cabecera.appendChild(derecha);
derecha.layoutSizingHorizontal = 'FILL';
derecha.layoutSizingVertical = 'FILL';
texto(derecha, DATOS.rol || 'Rol', 'Semi Bold', 24, AZUL, 'campo:rol');
texto(derecha, valor(DATOS.bio), 'Regular', 24, TINTA, 'campo:bio');

// Tabla
const tabla = figma.createAutoLayout('VERTICAL', { name: 'Tabla', itemSpacing: 0, fills: [] });
ficha.appendChild(tabla);
tabla.layoutSizingHorizontal = 'FILL';
const filas = [
  ['quien', 'Quién suele ser'],
  ['espera', `Qué espera de ${DATOS.producto} al llegar`],
  ['nivel', 'Nivel técnico'],
  ['hace', `Qué hace en ${DATOS.producto}`],
  ['miembros', 'Cuántos miembros gestiona'],
  ['preocupa', 'Qué le preocupa'],
  ['atasca', 'Dónde se puede atascar']
];
const celda = name => figma.createAutoLayout('VERTICAL', {
  name, paddingTop: 16, paddingBottom: 16, paddingLeft: 16, paddingRight: 16,
  strokes: solido(BORDE), strokeWeight: 1.11, fills: []
});
for (const [clave, etiqueta] of filas) {
  const fila = figma.createAutoLayout('HORIZONTAL', { name: 'Fila', itemSpacing: 0, fills: [] });
  tabla.appendChild(fila);
  fila.layoutSizingHorizontal = 'FILL';
  const titulo = celda('Title');
  fila.appendChild(titulo);
  titulo.resize(323, 60);
  titulo.layoutSizingVertical = 'FILL';
  texto(titulo, etiqueta, 'Medium', 24, AZUL, etiqueta);
  const contenido = celda('Content');
  fila.appendChild(contenido);
  contenido.layoutSizingHorizontal = 'FILL';
  contenido.layoutSizingVertical = 'FILL';
  texto(contenido, valor(DATOS[clave]), 'Regular', 24, TINTA, 'campo:' + clave);
}

// Post-it de tareas
const postit = figma.createAutoLayout('VERTICAL', {
  name: 'Tareas', paddingTop: 20, paddingBottom: 20, paddingLeft: 20, paddingRight: 20, cornerRadius: 4,
  fills: solido(rgb('#FFF4A3')),
  effects: [{ type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.12 }, offset: { x: 0, y: 4 }, radius: 10, spread: 0, visible: true, blendMode: 'NORMAL' }]
});
postit.resize(360, 100);
postit.primaryAxisSizingMode = 'AUTO';
const tareas = texto(postit, valor(DATOS.tareas), 'Regular', 24, TINTA, 'campo:tareas');
tareas.setRangeListOptions(0, tareas.characters.length, { type: 'UNORDERED' });

// Sección blanca con borde negro al 10 %, a la derecha de lo que ya hay
const seccion = figma.createSection();
seccion.name = DATOS.nombre || 'Protopersona';
seccion.fills = solido(BLANCO);
seccion.strokes = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 }, opacity: 0.1 }];
const derechaDeTodo = figma.currentPage.children
  .filter(n => n !== seccion)
  .reduce((max, n) => Math.max(max, n.x + n.width), 0);
seccion.x = derechaDeTodo + 200;
seccion.y = 0;
seccion.appendChild(ficha);
seccion.appendChild(postit);
ficha.x = 100; ficha.y = 100;
postit.x = 100 + ficha.width + 60; postit.y = 100;
seccion.resizeWithoutConstraints(100 + ficha.width + 60 + postit.width + 100, Math.max(ficha.height, postit.height) + 200);

return { seccionId: seccion.id, fichaId: ficha.id, tareasId: postit.id };

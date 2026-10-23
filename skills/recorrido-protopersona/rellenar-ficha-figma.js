// Rellenar la ficha de protopersona dibujada con ficha-figma.js · Sara Luz (CC BY 4.0)
// Script para use_figma. Cambia SECCION_ID y CAMPOS. Solo cambia los campos que pongas.
// Se puede lanzar tras cada respuesta del usuario, para que vea la ficha llenarse.

const SECCION_ID = '';
const CAMPOS = {
  // nombre: '', momento: '', rol: '', bio: '',
  // quien: '', espera: '', nivel: '', hace: '', miembros: '', preocupa: '', atasca: '',
  // tareas: ['', '']
};

const seccion = await figma.getNodeByIdAsync(SECCION_ID);
await figma.setCurrentPageAsync(seccion.parent);
await Promise.all(['Regular', 'Medium', 'Semi Bold'].map(style => figma.loadFontAsync({ family: 'Inter', style })));

const cambiados = [];
for (const [clave, v] of Object.entries(CAMPOS)) {
  const t = seccion.findOne(n => n.type === 'TEXT' && n.name === 'campo:' + clave);
  if (!t || !v || (Array.isArray(v) && !v.length)) continue;
  t.characters = Array.isArray(v) ? v.join('\n') : v;
  if (clave === 'tareas') t.setRangeListOptions(0, t.characters.length, { type: 'UNORDERED' });
  cambiados.push(t.id);
}
if (CAMPOS.nombre) seccion.name = CAMPOS.nombre;

// La sección no crece sola: se ajusta al alto de la ficha y del post-it
const ficha = seccion.findChild(n => n.name === 'Ficha');
const postit = seccion.findChild(n => n.name === 'Tareas');
seccion.resizeWithoutConstraints(seccion.width, Math.max(ficha.height, postit.height) + 200);

return { seccionId: seccion.id, cambiados };

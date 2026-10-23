# Recorrido UX por protopersonas

Método y skills de Claude Code para auditar **cualquier web (página o software)** recorriéndola como una protopersona. El resultado:
- capturas paso a paso;
- semáforo de navegación e interacción;
- la voz del usuario;
- tiempos de espera;
- el flujo montado en Figma.

**Diseñadora:** Sara Luz. Si usas o adaptas este método, cítalo (ver LICENSE y CITATION.cff).

👉 **¿Primera vez? Lee [EMPIEZA-AQUI.md](EMPIEZA-AQUI.md): paso a paso desde cero.**

> **Prueba piloto · v0.1.** Probado en un recorrido real de un software web. Solo sirve para webs que se abren en el navegador. Se irá ajustando con el uso: cuéntanos qué falla.

## Qué necesitas
- **Claude Code**: la app de escritorio o la terminal.
- **Claude in Chrome**: la extensión, para que Claude navegue con tu sesión.
- **El conector de Figma**, con sus skills (figma-use).

## Instalar (una vez)
Copia las skills a tu carpeta de Claude. Desde la carpeta del kit:

```bash
mkdir -p ~/.claude/skills && cp -R skills/* ~/.claude/skills/
```

Si actualizas el kit, repite la copia.

### Menos permisos que aprobar (opcional)
Por defecto, Claude pide permiso en cada acción del navegador y de Figma. `ejemplo-permisos.json` deja hechas de antemano tres cosas:
- navegar con Claude in Chrome;
- editar en Figma;
- subir capturas con `curl`.

Copia su contenido en `.claude/settings.json` dentro de la carpeta donde trabajes. Si ese archivo ya existe, añade las líneas de `allow` a las que tenga.

Iniciar sesión, pagar, publicar, invitar o enviar algo sigue siendo cosa tuya: Claude se para y te avisa.

## Cómo se usa
1. Abre Claude Code en la carpeta donde quieres guardar las notas y las capturas.
2. Pide: «Haz un recorrido de protopersona».
3. Claude te preguntará, una cosa cada vez:
   - la dirección web y si es una página o un software;
   - el entorno (producción o pruebas) y si hay que iniciar sesión;
   - dónde documentar en Figma (enlace del archivo y página);
   - la ficha de la protopersona y sus tareas;
   - la pregunta principal de la investigación;
   - qué hay que tener preparado antes de empezar.

   La ficha y las tareas puedes **contestarlas en el chat** o pedirle que **las lea de tu archivo** (Figma o un documento). Si contestas en el chat, Claude dibuja la ficha vacía en Figma y la va rellenando con cada respuesta.
4. Tú inicias sesión y apruebas pagos, publicaciones o envíos. Claude recorre la web y captura cada paso.
5. Al terminar, Claude te dice cuántos pasos y problemas ha encontrado y te propone pasarlo a Figma, con el archivo, la página y la sección donde irá. Solo tienes que decir que sí.

## Qué sale
- `recorrido-<persona>.md`: una tabla por paso con la captura, la acción, el semáforo (🟢 va bien / 🟡 fricción / 🔴 bloqueo), una nota y la espera.
- `capturas/<persona>/`: las capturas numeradas.
- En Figma:
  - una página por protopersona y una sección por recorrido;
  - los pasos en una fila;
  - los bloqueos resaltados en rojo;
  - la voz del usuario en cada fricción.

## Qué incluye
- `skills/recorrido-protopersona`: el recorrido. Incluye `ficha-figma.js` y `rellenar-ficha-figma.js`, que dibujan y rellenan la ficha en Figma.
- `skills/flujo-figma`: el formato del flujo en Figma.
- `plantillas/`: la ficha y la hoja de recorrido en texto, para quien no use Figma.
- `ejemplo-permisos.json`: permisos opcionales.

# Empieza aquí

Paso a paso para usar el kit de recorrido UX por protopersonas desde cero.

## 1. Entrar
1. Si el repositorio es privado, te llega un **correo de GitHub con la invitación**. Pulsa **Accept invitation**.
2. Abre el enlace del repositorio.

## 2. Tener lo necesario (una vez)
3. **Claude Code**: la app de escritorio de Claude (pestaña Code) o la terminal.
4. **Claude in Chrome**: instala la extensión en Chrome y entra con tu cuenta de Claude.
5. **Figma**: activa el conector de Figma en Claude.

## 3. Descargar e instalar el kit (una vez)
6. En esta página de GitHub, pulsa el botón verde **Code → Download ZIP**.
7. Haz doble clic en el ZIP descargado: aparece la carpeta `recorrido-ux-main` en Descargas.
8. Instala las skills de una de estas dos formas:
   - **Sin terminal:** abre una sesión de Claude Code y escribe: *«Instala las skills de la carpeta Descargas/recorrido-ux-main»*.
   - **Con terminal:**
     ```bash
     mkdir -p ~/.claude/skills && cp -R ~/Downloads/recorrido-ux-main/skills/* ~/.claude/skills/
     ```
9. Opcional, para que Claude pida menos permisos: copia el contenido de `ejemplo-permisos.json` en el archivo `.claude/settings.json` de la carpeta donde vayas a trabajar. También puedes pedírselo a Claude.

## 4. Hacer un recorrido
10. Crea una carpeta para el recorrido, por ejemplo `Auditoria-<web>`, y abre en ella una sesión nueva de Claude Code.
11. Si la web pide cuenta, entra tú en Chrome antes de empezar.
12. Escribe **«Haz un recorrido de protopersona»** y contesta sus preguntas, de una en una:
    - la web;
    - el entorno;
    - el enlace de Figma;
    - la ficha y las tareas;
    - la pregunta de investigación.

    La ficha y las tareas puedes contestarlas en el chat o pedir que las lea de tu archivo.
13. Cuando Claude se pare para que inicies sesión, metas un código, publiques o envíes algo, hazlo tú y dile *«sigue»*.
14. Al terminar, Claude te dice cuántos pasos y problemas ha encontrado y propone pasarlo a Figma, con el archivo, la página y la sección. Basta con decir **sí**.

**Consejo:** la primera vez, prueba con una tarea corta, de 5 a 10 pasos, en una web sencilla.

Más detalle sobre el método y lo que incluye: [README.md](README.md).

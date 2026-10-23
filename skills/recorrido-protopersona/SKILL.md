---
name: recorrido-protopersona
description: Recorre una web (página o software) como una protopersona, hace sus tareas en el navegador, captura cada paso y anota problemas de navegación e interacción. Úsala cuando pidan auditar, recorrer o probar una web como un usuario.
---
# Recorrido de protopersona

## 1. Pide los inputs (una pregunta cada vez, nada inventado)
1. Dirección web y tipo: ¿página o software?
2. Entorno: ¿producción o pruebas? ¿Hay que iniciar sesión? (lo hace el usuario)
3. Dónde documentar: archivo de Figma (enlace) y página. Para la ficha y las tareas, pregunta qué prefiere: contestarlas en el chat o que las leas de su archivo (Figma con la skill figma-use, o un documento/markdown que te indique).
4. Ficha de la protopersona y sus tareas (ver «La ficha en Figma»). Cada línea: dato (con fuente) o supuesto. Tareas: objetivo, dónde empieza, cuándo se da por hecha.
5. Pregunta principal de la investigación (qué queremos averiguar) y qué hay que tener preparado antes de empezar (cuentas de prueba, a quién se puede invitar).

## La ficha en Figma (se pregunta dibujando)
- Antes de preguntar por la ficha, dibújala vacía en su página de Figma con `ficha-figma.js` (esta carpeta): copia el script en use_figma cambiando solo `DATOS.paginaId` y `DATOS.producto`. Sale la plantilla con "Texto" en cada hueco y un post-it de tareas. Guarda el `seccionId` que devuelve.
- Pregunta campo a campo, en este orden: nombre, momento de uso, rol, bio, quién suele ser, qué espera al llegar, nivel técnico, qué hace en el producto, cuántos miembros gestiona, qué le preocupa, dónde se puede atascar, tareas.
- Tras cada respuesta (o cada pocas), rellena con `rellenar-ficha-figma.js` (solo los campos contestados), para que el usuario vea la ficha llenarse.
- Si las lee de su archivo, rellénala de una vez con lo leído y marca lo que falte.
- Si el usuario ya tiene su propia plantilla en el archivo, usa la suya y no dibujes esta.

## Requisitos
Claude in Chrome (sesión del usuario), conector de Figma con sus skills (figma-use) y `curl`.

## Trucos aprendidos
- Hora de cada captura: el nombre del archivo que guarda Chrome lleva la hora en milisegundos; úsala para calcular esperas (es la hora de fin del lote de acciones, da rangos).
- Con varias pestañas, escribe solo tras pulsar un elemento con su referencia (`find` + clic por ref): si no, el texto puede ir a otra pestaña o perderse.
- Botones pequeños (radios) y botones que se mueven al marcar una opción: comprueba con zoom o `find` que la acción ocurrió.
- Escape puede cerrar un formulario entero: no lo uses para cerrar listas.
- Botones desactivados a veces solo explican el motivo al pasar el ratón: búscalo con `find`.
- Si el sistema construye algo largo, espera en tandas de ~2 min y registra el rango.

## 2. Recorre
- Haz solo lo que haría esa persona con lo que sabe. Captura cada pantalla (también errores y cuando sales de la web) en `capturas/<persona>/NN-nombre.jpg`.
- En cada paso: acción (1 línea), semáforo 🟢 va bien / 🟡 fricción / 🔴 bloqueo, nota corta solo si hay problema, y en 🟡/🔴 una frase en su voz: 💬 «…».
- Revisa siempre: ¿sabe dónde está? ¿encuentra el siguiente paso? ¿la acción hace lo esperado? ¿hay respuesta? ¿puede volver? ¿es coherente?
- Anota cuánto hace esperar el sistema (cargando, procesando). No presentes tu velocidad como la de una persona.
- Problemas: solo lo observado, nunca teoría sin evidencia.

## 3. Para y pregunta
Iniciar sesión, crear cuentas, contraseñas, códigos, conectar cuentas, pagar, publicar, invitar o enviar algo: lo hace o lo aprueba el usuario. Datos personales visibles: no se guardan (paso "sin captura").

## 4. Entrega
- Notas en `recorrido-<persona>.md` (tabla: #, captura, acción, semáforo, nota, espera).
- Al terminar el recorrido (o si el usuario dice que pare), no esperes a que lo pida: propón el flujo con todos los datos, por ejemplo: «He terminado: 18 pasos, 3 fricciones y 1 bloqueo. ¿Lo paso a Figma? Archivo: <nombre>, página "Recorrido - <Persona> (<momento>)", sección "<Persona> · <recorrido>"». Con su sí, usa la skill `flujo-figma`.
- Al acabar en Figma, da el enlace a la sección y di cuántos pasos hay y cuáles son 🔴.

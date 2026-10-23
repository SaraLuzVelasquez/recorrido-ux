---
name: flujo-figma
description: Monta en Figma el flujo de un recorrido de protopersona (capturas en una fila, semáforo, tiempos, voz y bloqueos). Úsala después de recorrido-protopersona.
---
# Flujo en Figma
- Una página por protopersona: "Recorrido - <Persona> (<momento>)". Una sección por recorrido: blanca, borde negro 10 %, sin marco envolvente.
- Dentro: título (Inter Semi Bold 40), subtítulo (entorno · fecha · las 6 preguntas; Inter Regular 22) y marco "Pasos" en UNA fila horizontal (sin saltos, separación 24).
- Cada paso: captura 756×386 (radio 8) con círculos del color del semáforo donde está el problema → "Paso N · captura N" → acción (Inter Medium 24) → semáforo (Va bien / Fricción / Bloqueo) → "⏱ Espera: …" solo si el sistema hace esperar (gris) → nota → 💬 «voz» en 🟡/🔴 (Inter Italic 22). Flecha "→" entre pasos.
- Pasos fuera de la web o con datos personales: caja gris "Fuera de la web · sin captura".
- Detrás de cada 🔴 (o grupo seguido): sección "Bloqueo", rojo 8 %, borde rojo 49 %, radio 25.
- Subir capturas: crear los marcos, upload_assets con nodeIds y POST de cada imagen con `curl -F "file=@…"` (en zsh, arrays empiezan en 1 y no uses `set -- $var`). Comprobar con una captura al final.
- Antes de crear nada, lee la página: si el usuario ha cambiado el formato o el nombre de la página, copia su versión (manda lo que haya en Figma).

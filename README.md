# Partituras en Movimiento

App para aprender bailes compás a compás, contando 1, 2, 3, 4. Pensada para niños pequeños.

- **Bailar:** monigote animado, tiempos de colores, metrónomo, velocidad 50/75/100 %, repetir una parte y cuenta antes de empezar.
- **Partitura y letra:** pentagrama y letra de cada compás, vista «Letra completa» que se resalta mientras suena, botón «Pegar letra» (reparte una línea por compás) y botón «PDF» para ver tu partitura. La letra y el PDF se guardan solo en el dispositivo; no se suben al repositorio.
- **Recorrido:** todas las partes de la canción con su minuto.

Canciones: *So What* (P!nk).

## Añadir una canción
Añade otro objeto a `SONGS` en `index.html` con la misma forma que *So What* (`id`, `title`, `artist`, `bpm`, `video`, `sections`, `route`).

## Despliegue
Es una web estática de un solo archivo (`index.html`). En Render se publica como *Static Site* con `render.yaml`.

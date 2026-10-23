# FICTICIA — Cyberpunk Landing

Sitio estático para GitHub Pages con reproductor de audio integrado para los dos discos de FICTICIA.

## Estructura

```
├── index.html          # Página principal (terminal UI + reproductor)
├── assets/
│   └── music/
│       ├── Ya esta pasando/        # 10 tracks
│       └── La ultima parada/       # 8 tracks
├── .nojekyll           # Evita que GitHub Pages ignore assets/
└── .gitignore
```

## Funcionalidades

- **Modo intercalado**: alterna tracks de ambos discos (playlist por defecto)
- **Modo álbum**: click en tarjeta de disco → reproduce solo ese disco secuencialmente
- **Toggle UI**: botón "↩ VOLVER A MEZCLA INTERCALADA" en modo álbum
- Reproductor HTML5 Audio nativo (progress, volume, keyboard, next/prev)
- Terminal-style playlist con indicadores de fuente (YA ESTÁ / ÚLTIMA PARADA)
- Responsive, cyberpunk aesthetic (acid green, dark theme)

## Desarrollo local

```bash
# Servir localmente (cualquier static server)
npx serve .
# o
python3 -m http.server 8000
# Abrir http://localhost:8000
```

## Agregar/cambiar tracks

1. Convertí a MP3 (128-192kbps recomendado)
2. Nombrá archivo: `nombre-del-track.mp3` (minúsculas, espacios OK)
3. Colocá en `assets/music/<carpeta-disco>/`
4. Editá `index.html` → array `albums` (línea ~38):
   ```js
   const albums = [
     {title:'Ya está pasando!', folder:'Ya esta pasando', tracks:['track-1','track-2',...]},
     {title:'La última parada', folder:'La ultima parada', tracks:['track-1','track-2',...]}
   ];
   ```
5. Commit + push → GitHub Pages redeploy automático

## Cambiar portadas

Reemplazá los `data:image/jpeg;base64,` en los `<img>` de:
- Hero (línea ~23)
- Album cards (líneas ~28, ~29)
- Player cover (línea ~25)

O cambiá a URLs externas / archivos en `assets/images/`.

## Deploy

```bash
git add .
git commit -m "tipo: descripción breve"
git push origin cyberpunk
```

GitHub Pages sirve desde rama `cyberpunk` / root → `https://ficticia.github.io/cyberpunk/`

## Convenciones de commit

| Tipo | Uso |
|------|-----|
| `feat:` | Nueva funcionalidad (ej. agregar modo shuffle) |
| `fix:` | Bugfix (ej. audio no avanza al ended) |
| `style:` | CSS/visual (ej. ajustar responsive) |
| `chore:` | Mantenimiento (ej. actualizar .gitignore) |
| `docs:` | README/comentarios |
| `assets:` | Agregar/quitar MP3s o imágenes |

Ejemplos:
```
feat: agregar modo repeat/loop al reproductor
fix: corregir progress bar en tracks > 3min
assets: agregar track 11 a Ya está pasando!
style: mejorar contraste en mobile
docs: actualizar instrucciones de deploy
```
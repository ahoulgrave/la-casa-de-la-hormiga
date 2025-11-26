# Gestión de Videos

## Cómo añadir un nuevo video

### 1. Añadir los datos del video

Editar `app/data/videos.ts`:

```ts
export const videosData: VideoData[] = [
  // ... videos existentes ...
  {
    id: 'nuevoVideo',                        // ID único (camelCase, sin espacios)
    title: 'Nombre del Artista',             // Título (igual en todos los idiomas)
    date: '2025-01-15',                      // Fecha en formato ISO: YYYY-MM-DD
    thumbnail: '/img/videos/nuevo.jpg',      // Imagen en /public/img/videos/
    youtubeUrl: 'https://www.youtube.com/watch?v=XXXXX',
    description: {
      es: 'Descripción del concierto en español.',
      en: 'Concert description in English.',
      ca: 'Descripció del concert en català.'
    }
  },
]
```

### 2. Añadir la imagen thumbnail

Guardar la imagen en `/public/img/videos/` con el nombre que pusiste en `thumbnail`.

- Formato recomendado: JPG
- Tamaño recomendado: 800x450px (16:9)

### 3. Regenerar el sitio

```bash
npm run generate
```

---

## Videos destacados en la página de inicio

Para cambiar qué videos aparecen en la página de inicio, editar `featuredVideoIds` en `app/data/videos.ts`:

```ts
// Los 3 videos que aparecen en la home
export const featuredVideoIds = ['pyramides', 'manza', 'sergioPangaro']
```

---

## Cómo quitar un video

1. Eliminar la entrada del array en `app/data/videos.ts`
2. (Opcional) Eliminar la imagen de `/public/img/videos/`
3. Regenerar: `npm run generate`

---

## Redes sociales

Los enlaces a YouTube e Instagram están centralizados en `app/data/social.ts`:

```ts
export const socialLinks = {
  youtube: 'https://www.youtube.com/@somoslacasadelahormiga',
  instagram: 'https://www.instagram.com/somoslacasadelahormiga',
}
```

Para cambiar los enlaces, solo edita este archivo y se actualizarán en todo el sitio.

---

## Formato de fechas

Las fechas se guardan en formato ISO (`YYYY-MM-DD`) y se muestran automáticamente en el idioma del usuario:

- Español: "15 de enero de 2025"
- English: "January 15, 2025"
- Català: "15 de gener de 2025"

---

## Estructura actual

| ID | Artista | YouTube |
|----|---------|---------|
| rocasChinas | Rocas Chinas | [Ver](https://www.youtube.com/watch?v=efVOj04w8aY) |
| nadieLoQuiere | Nadie Lo Quiere | [Ver](https://www.youtube.com/watch?v=vgjsayWdFMc) |
| vueloDespierto | Vuelo Despierto | [Ver](https://www.youtube.com/watch?v=Jw4-Hcv4Cc0) |
| sergioPangaro | Sergio Pángaro | [Ver](https://www.youtube.com/watch?v=3D-9XwMOGnY) |
| manza | Manza | [Ver](https://www.youtube.com/watch?v=C1D30TS0hmY) |
| pyramides | Pyramides | [Ver](https://www.youtube.com/watch?v=qNz-JDd6_Eo) |
| gilDeGilsCinetika | Gil de Gils @ Cinètika | [Ver](https://www.youtube.com/watch?v=EK5vv1PgkfU) |
| solMarianela | Sol Marianela | [Ver](https://www.youtube.com/watch?v=Bj70_YyIgLE) |
| luqArlequin | LUQ Arlequín | [Ver](https://www.youtube.com/watch?v=pGwqM-a73eU) |
| lvzSilenciosa | LVZ Silenciosa | [Ver](https://www.youtube.com/watch?v=5ZikR_UpeXU) |
| catiKate | Cati Kate | [Ver](https://www.youtube.com/watch?v=XzHWAnXe8dE) |
| gilDeGils | Gil de Gils | [Ver](https://www.youtube.com/watch?v=EbZArS8nQq0) |
| valenluna | Valenluna | [Ver](https://www.youtube.com/watch?v=EeXeMnc_5aQ) |
| fr4no | FR4NO | [Ver](https://www.youtube.com/watch?v=OvVHQ22sDP8) |
| galeriaInterior | Galería Interior | [Ver](https://www.youtube.com/watch?v=8C4IPKPuhEI) |
| stalkerSpleen | Stalker Spleen | [Ver](https://www.youtube.com/watch?v=H6CTlAgbDws) |
| trioSarazeno | Trío Sarazeno | [Ver](https://www.youtube.com/watch?v=2JzBtiHxiwI) |
| melcochas | Melcochas | [Ver](https://www.youtube.com/watch?v=GjjkKiwZNoI) |
| duoBrillante | Dúo Brillante ft. ffa música | [Ver](https://www.youtube.com/watch?v=xGUVNWUXMLM) |

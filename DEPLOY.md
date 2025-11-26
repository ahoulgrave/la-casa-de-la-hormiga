# Despliegue en GitHub Pages

## Pasos para desplegar en lacasadelahormiga.com

### 1. Crear repositorio en GitHub

Si aún no tienes el repositorio en GitHub:

```bash
# Desde el directorio del proyecto
git remote add origin https://github.com/TU_USUARIO/la-casa-de-la-hormiga.git
git branch -M main
git push -u origin main
```

### 2. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. En "Build and deployment":
   - Source: **GitHub Actions**

### 3. Añadir secreto para Web3Forms

1. Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `WEB3FORMS_ACCESS_KEY`
4. Value: tu API key de Web3Forms

### 4. Configurar DNS del dominio

En tu proveedor de dominio (donde compraste lacasadelahormiga.com), configura:

**Opción A: Solo dominio raíz (lacasadelahormiga.com)**

| Tipo | Nombre | Valor |
|------|--------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**Opción B: Con www (recomendado)**

| Tipo | Nombre | Valor |
|------|--------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | TU_USUARIO.github.io |

### 5. Configurar dominio en GitHub

1. Settings → Pages
2. En "Custom domain": `lacasadelahormiga.com`
3. Click "Save"
4. Marca "Enforce HTTPS" (espera a que el certificado SSL se genere)

### 6. Desplegar

El despliegue es automático con cada push a `main`:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push
```

Ve a Actions en GitHub para ver el progreso del despliegue.

---

## Comandos útiles

```bash
# Generar sitio localmente
npm run generate

# Previsualizar sitio generado
npx serve .output/public

# Ver en desarrollo
npm run dev
```

---

## Solución de problemas

### El dominio no funciona
- Espera 24-48 horas para que los DNS se propaguen
- Verifica que el archivo CNAME esté en `public/CNAME`
- Comprueba la configuración DNS con: `dig lacasadelahormiga.com`

### Error 404 en rutas
- Asegúrate de que el build se completó correctamente
- Verifica que `nitro.preset` sea `'static'` en `nuxt.config.ts`

### El formulario no envía
- Verifica que el secreto `WEB3FORMS_ACCESS_KEY` esté configurado
- Comprueba la consola del navegador para errores

---

## Estructura del despliegue

```
.output/public/          # Sitio generado (no subir a git)
├── index.html           # Página principal (español)
├── en/                  # Versión en inglés
├── ca/                  # Versión en catalán
├── videos/
├── proyecto/
├── contacto/
├── img/
├── vendor/
└── CNAME               # Dominio personalizado
```

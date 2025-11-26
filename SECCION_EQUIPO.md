# Sección "El Equipo" - Instrucciones

## Información necesaria por cada integrante

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| **Nombre** | Como quieren aparecer en la web | Sí |
| **Foto** | Cuadrada, mínimo 400x400px, JPG o PNG | Sí |
| **Rol** | Ej: "Sonido", "Cámara", "Edición", "Producción" | Sí |
| **Bio** | 2-3 frases (~150 caracteres) | Opcional |
| **Instagram** | Solo el usuario (sin @) | Opcional |

## Mensaje para enviar al equipo

> Hola! Estamos armando la web de La Casa de la Hormiga y queremos incluir una sección del equipo. ¿Me puedes pasar?
>
> - Tu nombre (como quieras que aparezca)
> - Una foto tuya (cuadrada, buena calidad)
> - Tu rol en el proyecto (ej: cámara, sonido, edición...)
> - Una frase corta sobre ti o por qué participas (~2 líneas) [opcional]
> - Tu Instagram (opcional)

## Formato para completar

Cuando tengas la información, copia este formato por cada persona:

```
### Persona 1
- Nombre:
- Rol:
- Bio:
- Instagram:
- Foto: [nombre del archivo]
```

## Ejemplo completado

```
### Persona 1
- Nombre: Juan Pérez
- Rol: Sonido
- Bio: Ingeniero de sonido desde 2015. Me apasiona capturar la energía de los conciertos en vivo.
- Instagram: juanperez_sound
- Foto: juan.jpg
```

## Dónde guardar las fotos

Las fotos deben guardarse en:
```
/public/img/team/
```

Con nombres descriptivos, por ejemplo:
- `juan.jpg`
- `maria.jpg`
- etc.

## Archivos a modificar

Una vez tengas toda la información, hay que editar:
- `app/pages/proyecto.vue` - actualizar el array `teamMembers`

---

**Estado actual:** 9 placeholders listos para reemplazar con datos reales.

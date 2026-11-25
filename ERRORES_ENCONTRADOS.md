# Errores encontrados

**Nombre:**
**Fecha:**

> Tipos válidos: `Typo` (editor en rojo) · `Sintaxis` · `Terminal` (prisma / arranque / endpoint / tests) · `Lógica`

Prisma Schema Module config.ts :Derlyz

| # | Archivo | Línea | Tipo | ¿Qué estaba mal? | ¿Cómo lo detectaste? | ¿Cómo lo solucionaste? |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `prisma/schema.prisma` | 20 | Typo | El atributo de email único estaba escrito `@uniqe` en vez de `@unique` | Revisando el schema (Attribute not known: "@uniqe".Prisma) | Corregí `@uniqe` por `@unique` |
| 2 | `prisma/schema.prisma` | 46 | Terminal | En el modelo `Producto` faltaba el campo de relación inversa `detalles DetallePedido[]` hacia `DetallePedido` | VSCode lo marcó en rojo "Error validating field `producto` in model `DetallePedido`: The relation field `producto` on model `DetallePedido` is missing an opposite relation field on the model `Producto`. Either run `prisma format` or add it manually.Prisma" |
| 3 | `prisma/schema.prisma` | 53 | Typo | El valor por defecto de `estado` en `Pedido` era `@default(PENDENTE)` en vez de `@default(PENDIENTE)` | VSCode lo marcó en rojo "Error parsing attribute "@default": The defined default value `PENDENTE` is not a valid value of the enum specified for the field." | Cambié `@default(PENDENTE)` por `@default(PENDIENTE)` |
| 4 | `src/prisma/prisma.service.ts` | 7 | Sintaxis | El `constructor()` de `PrismaService` (que hereda de `PrismaClient`) creaba `adapter` pero no llamaba a `super({ adapter })` | VS Code lo marca en rojo "Los constructores de las clases derivadas deben contener una llamada a "super"." | Agregué `super({ adapter });` dentro del constructor de `PrismaService` |

Module App y main :Derlyz

| # | Archivo | Línea | Tipo | ¿Qué estaba mal? | ¿Cómo lo detectaste? | ¿Cómo lo solucionaste? |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `src/app.module.ts` | 5 | Typo | El import de `ClienteModule` apuntaba a `'./clientes/cliente.module.js'` (en plural) en vez de `'./cliente/cliente.module.js'` | VS Code lo marcó en rojo: "No se encuentra el módulo "./clientes/cliente.module.js" ni sus declaraciones de tipos correspondientes." | Cambié la ruta a `'./cliente/cliente.module.js'` |
| 2 | `src/main.ts` | 2 | Typo | `ValidationPipe` se estaba importando desde `'@nestjs/core'` en lugar de `'@nestjs/common'` | VS Code lo marcó en rojo: "El módulo '"@nestjs/core"' no tiene ningún miembro 'ValidationPipe' exportado." | Importé `ValidationPipe` desde `'@nestjs/common'` |
| 3 | `package.json` | 13 | Terminal | El script `start:dev` tenía escrito `"nest star --watch"` en vez de `"nest start --watch"` | Al intentar levantar el servidor con `npm run start:dev` en la terminal falla el comando `nest star` | Corregí el script a `"nest start --watch"` |

Module Cliente :Derlyz

| # | Archivo | Línea | Tipo | ¿Qué estaba mal? | ¿Cómo lo detectaste? | ¿Cómo lo solucionaste? |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | `src/ejemplo/ejemplo.service.ts` | 10 | Typo | _(fila de ejemplo, bórrala) se llamaba `this.prisma.usuaro` en vez de `this.prisma.usuario`_ | _VS Code lo marcó en rojo: "Property 'usuaro' does not exist"_ | _corregí el nombre del modelo_ |
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |

Module Categoria : Sara

| # | Archivo | Línea | Tipo | ¿Qué estaba mal? | ¿Cómo lo detectaste? | ¿Cómo lo solucionaste? |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | `src/ejemplo/ejemplo.service.ts` | 10 | Typo | _(fila de ejemplo, bórrala) se llamaba `this.prisma.usuaro` en vez de `this.prisma.usuario`_ | _VS Code lo marcó en rojo: "Property 'usuaro' does not exist"_ | _corregí el nombre del modelo_ |
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |

Module Producto : Leonardo

| # | Archivo | Línea | Tipo | ¿Qué estaba mal? | ¿Cómo lo detectaste? | ¿Cómo lo solucionaste? |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | `src/ejemplo/ejemplo.service.ts` | 10 | Typo | _(fila de ejemplo, bórrala) se llamaba `this.prisma.usuaro` en vez de `this.prisma.usuario`_ | _VS Code lo marcó en rojo: "Property 'usuaro' does not exist"_ | _corregí el nombre del modelo_ |
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |

Module Pedido : Oscar

| # | Archivo | Línea | Tipo | ¿Qué estaba mal? | ¿Cómo lo detectaste? | ¿Cómo lo solucionaste? |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | `src/ejemplo/ejemplo.service.ts` | 10 | Typo | _(fila de ejemplo, bórrala) se llamaba `this.prisma.usuaro` en vez de `this.prisma.usuario`_ | _VS Code lo marcó en rojo: "Property 'usuaro' does not exist"_ | _corregí el nombre del modelo_ |
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |

<!-- Agrega todas las filas que necesites -->

## Reflexión final

1. ¿Qué tipo de error te costó más encontrar y por qué?
2. ¿Qué herramienta te ayudó más (editor, terminal, Swagger/Postman, tests)?
3. ¿Qué harías para evitar este tipo de errores en tus propios proyectos?

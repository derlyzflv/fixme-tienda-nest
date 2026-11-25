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
| 1 | `src/pedido/pedido.controller.ts` | — | Typo | El parámetro de la ruta para buscar pedidos por cliente tenía un nombre diferente al que se utilizaba en `@Param()`. | Revisando el controlador y la forma en que se recibía el ID del cliente. | Corregí el nombre del parámetro para que coincidiera con el de la ruta. |
| 2 | `src/pedido/dto/create-pedido.dto.ts` | — | Sintaxis | Faltaba configurar correctamente la validación de los productos que se reciben al crear un pedido. | Revisando el DTO y las validaciones de sus propiedades. | Agregué las validaciones necesarias para revisar los datos y las cantidades de los productos. |
| 3 | `src/pedido/dto/cambiar-estado.dto.ts` | — | Typo | La validación del estado del pedido necesitaba utilizar correctamente los valores del enum `EstadoPedido`. | Revisando el DTO y los valores permitidos para el estado. | Corregí la configuración de `@ApiProperty` y `@IsEnum` para validar los estados permitidos. |
| 4 | `src/pedido/utils/calculos.ts` | — | Lógica | Los cálculos del pedido necesitaban obtener correctamente el subtotal de cada producto y el total de todos los productos. | Revisando las operaciones utilizadas para calcular los precios. | Corregí los cálculos para multiplicar el precio por la cantidad y sumar los subtotales. |
| 5 | `src/pedido/utils/calculos.ts` | — | Lógica | No estaban definidas correctamente las transiciones permitidas entre los estados de un pedido. | Revisando los cambios de estado que puede tener un pedido. | Agregué las reglas para permitir cambios válidos y evitar transiciones no permitidas. |
| 6 | `src/pedido/pedido.service.ts` | — | Lógica | Al crear un pedido era necesario comprobar que el cliente y los productos existieran y que hubiera suficiente stock. | Revisando el proceso de creación del pedido y sus validaciones. | Agregué las comprobaciones del cliente, los productos y las cantidades disponibles antes de crear el pedido. |
| 7 | `src/pedido/pedido.service.ts` | — | Lógica | El stock de los productos debía actualizarse al crear un pedido y recuperarse cuando se cancelara. | Revisando el proceso de creación y cancelación de pedidos. | Agregué las operaciones para descontar el stock al crear el pedido y devolverlo al cancelarlo, utilizando transacciones. |
| 8 | `src/pedido/pedido.module.ts` | — | Typo | El nombre de la clase del módulo debía coincidir con el módulo de pedidos. | Revisando el nombre de la clase y su registro en el proyecto. | Corregí el nombre de la clase a `PedidoModule`. |


<!-- Agrega todas las filas que necesites -->

## Reflexión final

1. ¿Qué tipo de error te costó más encontrar y por qué?
2. ¿Qué herramienta te ayudó más (editor, terminal, Swagger/Postman, tests)?
3. ¿Qué harías para evitar este tipo de errores en tus propios proyectos?

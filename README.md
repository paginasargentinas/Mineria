# Simulación de UI - Pool de Minería en la Nube

## 1. Propósito del Proyecto

Este proyecto es una **plantilla de interfaz de usuario (UI)** y una **simulación visual** para un servicio de pool de minería en la nube. Su objetivo es presentar un diseño de concepto moderno y funcional, estructurado de manera semántica para ser fácilmente interpretable por agentes de Inteligencia Artificial (IA).

**Este proyecto no realiza operaciones reales de minería, no procesa transacciones ni se conecta a ninguna blockchain.**

## 2. Enfoque en Agentes de IA

Para asegurar la legibilidad por parte de máquinas, el proyecto implementa:

- **HTML Semántico:** Uso de etiquetas como `<main>`, `<section>`, `<form>`, etc., para dar un significado claro a cada parte de la página.
- **JSON-LD:** Un script de datos estructurados incrustado en el `index.html` que describe la página como un servicio (`Service`), detallando la acción que el usuario puede realizar (simular una inversión) y los parámetros requeridos (red, wallet, cantidad).
- **Estructura Clara:** Separación de contenido (HTML), estilo (CSS) y lógica (JavaScript) para un análisis sencillo.

## 3. Componentes de la Simulación

- **Selector de Red:** Permite al usuario elegir una red compatible con MetaMask.
- **Entrada de Wallet:** Campo para que el usuario introduzca su dirección de wallet.
- **Selector de Cantidad:** Campo numérico para definir una cantidad a "invertir", con un mínimo de 5 y un máximo de 1000.
- **Botón de Acción:** Inicia la simulación de la transacción.

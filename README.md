### [Live Demo](https://gabrieltd.github.io/pokemon-app/)

# Pokemon App

Este proyecto es una aplicación web desarrollada en Angular que utiliza la API pública de [PokéAPI](https://pokeapi.co/) para mostrar información sobre distintos pokémon, y como parte del Technical Challenge de [Devsafío](https://devsafio.com/).

La aplicación fue generada utilizando [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Instalación

Previo a ejecutar la aplicación se requiere tener instalado globalmente [Angular CLI](https://github.com/angular/angular-cli) y [Node.js](https://nodejs.org/).

A continuación se explican los pasos para instalar la aplicación.

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/proyecto-pokedex.git
```

2. Abrir una terminal en la carpeta del proyecto e instalar las dependencias:

```bash
cd pokemon-app
npm install
```

3. Iniciar la aplicación en el navegador:

```bash
ng serve
```

La aplicación estará disponible en http://localhost:4200/.

## Funcionalidades

- Lista de Pokémon: La aplicación muestra una tabla con todos los pokémon disponibles en la PokeAPI de forma paginada. Es posible filtrar los pokémon utilizando el campo de búsqueda proporcionado.

- Detalles del Pokémon: Al hacer clic en un pokémon de la lista, se mostrará su información detallada en el panel de la derecha.

- Pokémon favorito: Es posible seleccionar un pokémon como favorito y este aparecerá en la parte superior de la página. Al hacer clic en el pokémon favorito, se mostrará su información detallada.

- Tabla de resumen: La aplicación muestra una tabla con la cantidad de pokémon que inician con cada letra del abecedario.

## Stack

La aplicación utiliza las siguientes tecnologías:

- Angular
- Angular Material
- NgRx
- Cypress

## Estructura del proyecto

La estructura del proyecto sigue las recomendaciones generales de Angular. A continuación se muestra un diagrama de la estructura de carpetas.

```bash
src/
├── app
│   ├── pokemon 		  #Módulo de Pokémon
│   │   ├── components		  #Componentes específicos del módulo
│   │   │   ├── pokemon-detail
│   │   │   ├── pokemon-favorite
│   │   │   ├── pokemon-header
│   │   │   ├── pokemon-list
│   │   │   ├── pokemon-search
│   │   │   └── pokemon-summary
│   │   ├── interfaces		  #Interfaces y tipos generales del módulo
│   │   ├── pages		  #Vista principal de la app
│   │   └── services		  #Servicios específicos del módulo
│   ├── shared			  #Recursos compartidos en toda la app
│   │   └── pipes
│   └── store			  #Configuración y lógica del store de la app
│       ├── actions
│       ├── effects
│       ├── models
│       ├── reducers
│       └── selectors
├── assets			  #Archivos estáticos (imágenes, iconos, etc.)
└── styles			  #Estilos SCSS utilizados en la app
```

## E2E Testing

Esta aplicación utiliza [Cypress](https://www.cypress.io/) para realizar end-to-end testing. Para ejecutar los tests E2E, asegúrese de que la aplicación se esté ejecutando con `ng serve` y luego ejecute el siguiente comando:

```bash
npm run cypress:open
```

Esto abrirá Cypress Test Runner, donde puede seleccionar el test para ejecutar.

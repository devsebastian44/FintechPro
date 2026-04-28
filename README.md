# 📈 FintechPro

![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=flat&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat&logo=typescript&logoColor=white)
![Binance API](https://img.shields.io/badge/Binance_API-Real--Time-F0B90B?style=flat&logo=binance&logoColor=black)
![Lightweight Charts](https://img.shields.io/badge/Charts-Lightweight_Charts_4.x-2196F3?style=flat&logo=tradingview&logoColor=white)
![License](https://img.shields.io/badge/License-No%20License-lightgrey?style=flat&logo=opensourceinitiative&logoColor=white)

> 🌐 **Live:** [fintechprocripto.netlify.app](https://devblog44.vercel.apphttps://fintechprocripto.netlify.app/)

---

> [!IMPORTANT]
> **Ethical Disclaimer:** This project is for educational and ethical purposes only. Trading financial assets involves significant risk. The information provided by this dashboard is mocked or for presentation purposes.

## 🧠 Overview

**FintechPro** es una landing page de alto rendimiento para una plataforma de
trading financiero, construida con **Astro 5** y **Tailwind CSS v4**. El
proyecto combina la generación estática (SSG) con la **arquitectura de islas**
de Astro para hidratar selectivamente los componentes interactivos que
requieren JavaScript en cliente — principalmente el dashboard de trading en
tiempo real —, manteniendo el resto del sitio completamente estático y
ultraligero.

El núcleo técnico más destacado es el **dashboard de trading interactivo**
integrado directamente en la landing, que consume la **API pública de Binance**
para mostrar precios en vivo de BTC y ETH, y renderiza gráficos de velas
japonesas con múltiples marcos temporales usando la librería **Lightweight
Charts 4.1.1** de TradingView. Un ticker tape en la cabecera actualiza los
valores de criptomonedas cada 3 segundos y simula movimientos de índices
bursátiles (S&P 500, NASDAQ) para una experiencia visualmente realista de
plataforma financiera profesional.

El proyecto incluye además una página de precios (`/pricing`) con planes Pro
e Institucional, una sección de contacto empresarial, y un diseño oscuro
premium acorde al estilo visual de plataformas fintech de mercado.

---

## ⚙️ Features

- **Ticker tape de mercado en tiempo real** (`MarketTicker.astro`) que
  consume la API pública de Binance y actualiza los precios de
  criptomonedas cada 3 segundos, complementado con simulación de movimiento
  de índices S&P 500 y NASDAQ para una apariencia de plataforma profesional.
- **Dashboard de trading interactivo** (`PlatformPreview.astro`) con gráfico
  de velas japonesas renderizado por **Lightweight Charts 4.1.1** de
  TradingView, selección de marcos temporales (1H, 4H, 1D) y book de
  órdenes simulado.
- **Watchlist dinámica** con soporte para BTC, ETH y SOL: al cambiar de
  activo, el gráfico y el header se actualizan instantáneamente con los
  datos del nuevo par de trading.
- **Arquitectura de islas Astro** — solo los componentes que requieren
  interactividad real (ticker, gráfico) se hidratan en cliente; el resto
  del sitio se sirve como HTML estático puro para máximo rendimiento y SEO.
- **Navbar sticky interactiva** (`Navbar.astro`) con navegación responsive y
  comportamiento de desplazamiento configurado.
- **Sección Hero** (`Hero.astro`) con doble CTA orientado a conversión:
  acceso a la plataforma de trading y contacto con ventas enterprise.
- **Sección de características** (`Features.astro`) que presenta los
  beneficios diferenciales de la plataforma: análisis técnico, cobertura
  de activos y herramientas de gestión de riesgo.
- **Formulario de contacto enterprise** (`CTA.astro`) para captación de
  clientes institucionales con campos de empresa, volumen de operaciones
  y mensaje personalizado.
- **Página de precios** (`/pricing`) con tabla comparativa de planes Pro
  e Institucional, incluyendo características, límites y CTAs diferenciados.
- **Iconografía con Material Symbols** (Google Fonts, variante Outlined)
  para consistencia visual en toda la interfaz.
- **Tailwind CSS v4 con `@theme`** configurado en `src/styles/global.css`,
  aprovechando el motor CSS-first de la nueva versión con variables CSS
  nativas para el sistema de diseño.
- **Diagramas de arquitectura** en `diagrams/` y documentación técnica
  adicional en `docs/` para referencia del proyecto.

---

## 🛠️ Tech Stack

| Categoría        | Tecnología                       | Versión / Detalle                 |
| ---------------- | -------------------------------- | --------------------------------- |
| Framework        | Astro (SSG + Islands)            | 5.1+                              |
| Estilos          | Tailwind CSS (CSS-first engine)  | v4                                |
| Gráficos         | Lightweight Charts (TradingView) | 4.1.1                             |
| Datos de mercado | Binance REST API                 | Pública — sin auth                |
| Iconos           | Material Symbols (Google Fonts)  | Outlined                          |
| Lenguaje         | TypeScript                       | Strict (`astro/tsconfigs/strict`) |
| Linting          | ESLint (flat config)             | `eslint.config.js`                |
| Formateo         | Prettier                         | `prettier.config.js`              |
| Node versioning  | `.nvmrc`                         | Versión fijada                    |
| Arquitectura     | DevSecOps Clean Repo             | GitHub (Source of Truth)          |

---

## 📦 Installation

### Prerrequisitos

- **Node.js** (versión especificada en `.nvmrc`)
- **npm** actualizado

### 1. Clonar el repositorio

```bash
git clone https://github.com/devsebastian44/FintechPro.git

cd FintechPro
```

### 2. Usar la versión correcta de Node

```bash
nvm use
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Configurar variables de entorno

```bash
cp .env.example .env
```

```env
# .env — no incluir en el repositorio
# VITE_API_KEY=tu_api_key_aqui   (opcional, Binance API es pública)
NODE_ENV=development
VITE_SITE_URL=http://localhost:4321
```

> La **Binance REST API** usada para precios en tiempo real es completamente
> pública y no requiere autenticación ni API key para los endpoints de
> datos de mercado (`/api/v3/ticker/price`, `/api/v3/klines`).

---

## ▶️ Usage

### Servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en tu navegador.
El ticker de precios y el gráfico de trading empezarán a cargar datos
en vivo desde la API de Binance automáticamente.

### Build de producción

```bash
npm run build
```

Los archivos estáticos se generan en `./dist/`, listos para desplegar en
cualquier plataforma de hosting estático.

### Previsualizar el build

```bash
npm run preview
```

### Linting y formateo

```bash
# Verificar errores de linting
npx eslint .

# Formatear todo el código
npx prettier --write .

# Verificar formato sin modificar
npx prettier --check .

### Ejecutar tests (Playwright)

```bash
# Instalar navegadores de Playwright (solo la primera vez)
npx playwright install

# Ejecutar todos los tests
npm test

# Ejecutar tests con interfaz visual
npx playwright test --ui
```
```

---

## 📁 Project Structure

```
FintechPro/
│
├── src/
│   ├── components/                  # Componentes de UI reutilizables (Astro Islands)
│   │   ├── MarketTicker.astro       # Ticker tape en tiempo real (Binance API, 3s interval)
│   │   ├── PlatformPreview.astro    # Dashboard de trading: gráfico + watchlist + order book
│   │   ├── Navbar.astro             # Barra de navegación sticky con scroll behavior
│   │   ├── Hero.astro               # Sección principal con doble CTA (platform + enterprise)
│   │   ├── Features.astro           # Características y beneficios de la plataforma
│   │   ├── CTA.astro                # Formulario de contacto para clientes institucionales
│   │   └── Footer.astro             # Footer con navegación y branding
│   │
│   ├── layouts/
│   │   └── Layout.astro             # Layout base: SEO metadata, font imports, estructura HTML
│   │
│   ├── pages/
│   │   ├── index.astro              # Landing page principal con dashboard de trading integrado
│   │   └── pricing.astro            # Página de precios: planes Pro e Institucional
│   │
│   └── styles/
│       └── global.css               # Tailwind v4 entry point + @theme (design tokens CSS)
│
├── public/                          # Assets estáticos: logos, favicon, imágenes
│
├── diagrams/                        # Diagramas de arquitectura del proyecto
│
├── docs/                            # Documentación técnica adicional
│
├── .vscode/                         # Configuración del editor VS Code
│
├── Logo.png                         # Logo oficial de FintechPro
├── .env.example                     # Plantilla de variables de entorno
├── .gitignore                       # Exclusiones de Git
├── .nvmrc                           # Versión de Node.js fijada
├── astro.config.mjs                 # Configuración de Astro 5 (SSG + Islands)
├── eslint.config.js                 # ESLint flat config para TS + Astro
├── prettier.config.js               # Configuración de Prettier
├── tsconfig.json                    # TypeScript strict via astro/tsconfigs/strict
├── package.json                     # Dependencias y scripts
└── README.md                        # Documentación principal
```

> **Arquitectura del repositorio:**
> El proyecto incluye todas las configuraciones necesarias para desarrollo,
> incluyendo tests E2E y configuraciones de entorno.

---

## 🔐 Security

### API de Binance — uso de endpoints públicos

El proyecto consume exclusivamente la **REST API pública de Binance** sin
autenticación, utilizando los endpoints de solo lectura para precios en
tiempo real (`/ticker/price`) y datos de velas (`/klines`). Ninguna
credencial privada de exchange ni clave de API con permisos de trading
es utilizada ni necesaria en este proyecto.

### Variables de entorno y gestión de secretos

El archivo `.env.example` documenta las variables de entorno disponibles
sin exponer valores reales. El `.gitignore` excluye `.env` y todas sus
variantes del repositorio. La variable `VITE_API_KEY` está comentada
por defecto, reflejando que la API de datos de mercado empleada no
requiere autenticación.

### Arquitectura sin backend propio

Al ser un sitio estático sin servidor de aplicaciones propio, FintechPro
no expone endpoints vulnerables ni bases de datos. Toda la interactividad
del dashboard se realiza mediante llamadas directas desde el cliente a
la API pública de Binance, sin intermediarios propios.

### Calidad de Código

El flujo de trabajo recomendado incluye auditoría de dependencias con
`npm audit` y verificaciones de linting antes de realizar despliegues,
garantizando que no se introduzcan paquetes con vulnerabilidades conocidas
ni código con errores de tipado sin detectar.

---

## 🌐 Repository Architecture

Este proyecto sigue una arquitectura de repositorio único en GitHub, donde
se centraliza tanto el código fuente de la landing como las configuraciones
técnicas, suites de tests y documentación.

GitHub es la fuente de verdad y contiene las configuraciones de entorno,
la suite de tests E2E completa (`tests/e2e/`) y la documentación técnica,
orientado a mantener un flujo de trabajo profesional y transparente.

---

## 🚀 Roadmap

Mejoras sugeridas a partir de la arquitectura y stack detectados:

- **WebSocket en lugar de REST polling** — Migrar el `MarketTicker` de
  llamadas REST cada 3 segundos a la **Binance WebSocket API** para
  streaming verdaderamente continuo con menor latencia y sin throttling.
- **Más pares de trading** en la watchlist: añadir soporte para BNB, MATIC,
  AVAX, DOGE u otros pares configurables desde un archivo de datos Astro.
- **Indicadores técnicos** sobre el gráfico de velas: medias móviles (EMA,
  SMA), RSI y Bandas de Bollinger usando las capacidades de series de
  Lightweight Charts.
- **Página de análisis de mercado** con vista de calor (heatmap) del mercado
  cripto por capitalización, sector y variación en 24h.
- **Formulario CTA conectado a backend** — Integrar el formulario de contacto
  enterprise con un servicio de email como Resend o con un endpoint de Astro
  Actions para procesar los leads sin servidor dedicado.
- **Modo claro / oscuro** con toggle persistido en `localStorage` y respeto
  a `prefers-color-scheme`, manteniendo la paleta oscura como predeterminada.
- **Tests E2E con Playwright** expandidos para cubrir la carga del ticker,
  la interacción con la watchlist y el cambio de timeframe en el gráfico.
- **Internacionalización (i18n)** con Astro i18n para versiones en español
  e inglés del contenido estático de la landing.
- **Página de blog de análisis** integrada con el mismo stack para publicar
  análisis técnicos y noticias del mercado financiero.
- **Performance budget** — Configurar límites de tamaño de bundle en Astro
  config para garantizar que la adición de dependencias de gráficos no
  degrada el score de Core Web Vitals.

---

## 🤝 Contributing

¡Las contribuciones son bienvenidas! Si deseas mejorar FintechPro, sigue estos pasos:

1. **Fork** el repositorio.
2. Crea una **rama** para tu mejora (`git checkout -b feature/amazing-feature`).
3. Haz **commit** de tus cambios siguiendo los [Conventional Commits](https://www.conventionalcommits.org/).
4. Haz **Push** a la rama (`git push origin feature/amazing-feature`).
5. Abre un **Pull Request** explicando tus cambios.

Por favor, asegúrate de que los tests pasen y el código cumpla con el estilo del proyecto.

---

## 📄 License

Este repositorio no incluye un archivo de licencia explícito. Todos los
derechos están reservados por el autor salvo indicación contraria. Para
uso, distribución o modificación del código, contactar directamente con
el autor.

Copyright © 2025 **Sebastián Zhunaula** (devsebastian44)

---

## 👨‍💻 Author

<table>
  <tr>
    <td align="center">
      <b>Sebastián Zhunaula</b><br/>
      <sub>Full-Stack Developer · Frontend Specialist · Fintech UI</sub><br/><br/>
      <a href="https://github.com/devsebastian44">
        <img src="https://img.shields.io/badge/GitHub-devsebastian44-black?style=flat&logo=github" />
      </a>
    </td>
  </tr>
</table>

> Este proyecto forma parte de un portafolio de desarrollo web frontend
> especializado, demostrando integración de Astro 5 con arquitectura de
> islas, Tailwind CSS v4 con motor CSS-first, consumo de APIs financieras
> en tiempo real (Binance) y visualización de datos de mercado con
> Lightweight Charts de TradingView.

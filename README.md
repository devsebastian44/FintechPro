# FintechPro Landing Page

<p align="center">
  <img src="Logo.png">
</p>

Modern, high-performance landing page for a financial trading platform built with **Astro 5** and **Tailwind CSS v4**.

## 🚀 Live Trading Features (New)

The platform now features a fully functional, real-time trading dashboard mockup with:
- **Interactive Chart**: Built with **Lightweight Charts 4.1.1**. Supports 1H, 4H, and 1D timeframes.
- **Real-Time Data**: Live streaming of Bitcoin (BTC) and Ethereum (ETH) prices via the **Binance REST API**.
- **Live Market Header**: A dynamic ticker tape at the top that updates crypto values every 3 seconds and simulates index movement (S&P 500, NASDAQ) for a realistic trading feel.
- **Dynamic Watchlist**: Switching between BTC, ETH, and SOL instantly updates the chart and header.

## 🛠️ Technologies Used

- **Framework**: [Astro 5.1+](https://astro.build/) (Static Site Generation & Islands Architecture)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first engine)
- **Charts**: [Lightweight Charts](https://github.com/tradingview/lightweight-charts) (TradingView)
- **Data Source**: [Binance Public API](https://binance-docs.github.io/apidocs/spot/en/#introduction)
- **Icons**: [Material Symbols](https://fonts.google.com/icons) (Outlined)

## 📂 Project Structure

```text
/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── MarketTicker.astro     # Real-time top ticker tape with high-frequency updates
│   │   ├── PlatformPreview.astro  # Core Trading Dashboard (Live Chart, Order Book, Watchlist)
│   │   ├── Navbar.astro           # Sticky header with interactive navigation
│   │   ├── Hero.astro             # Main hero section with dual CTAs
│   │   ├── Features.astro         # Service highlights & trading benefits
│   │   ├── CTA.astro              # Enterprise contact form section
│   │   └── Footer.astro           # Brand footer with navigation links
│   ├── layouts/              # Page skeletons
│   │   └── Layout.astro           # Main wrapper with font imports & SEO metadata
│   ├── pages/                # Application routes
│   │   ├── index.astro            # Primary landing page & trading hub
│   │   └── pricing.astro          # Pricing & Plans page (Pro & Institutional)
│   └── styles/               # Styling layer
│       └── global.css             # Tailwind v4 entry & @theme configuration
├── public/                   # Static assets (Logos, Icons)
└── package.json              # Project dependencies & scripts
```

## 🛠️ Development

### Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds the production site to `./dist/` |
| `npm run preview` | Previews the production build locally |

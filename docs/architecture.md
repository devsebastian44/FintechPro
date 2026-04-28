# FintechPro Architecture

This document briefly describes the DevSecOps architecture of the FintechPro Dashboard.

## 1. Domain
The project is a static frontend built with Astro 5 and Tailwind CSS v4. It features a mocked, real-time trading dashboard using Lightweight Charts and the Binance Public REST API.

## 2. DevSecOps Strategy
To ensure a secure pipeline and maintain high standards:
- **GitHub (Source of Truth)**: Used for complete development, testing, and documentation. Holds `tests/` and `configs/`.


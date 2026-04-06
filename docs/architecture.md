# FintechPro Architecture

This document briefly describes the DevSecOps architecture of the FintechPro Dashboard.

## 1. Domain
The project is a static frontend built with Astro 5 and Tailwind CSS v4. It features a mocked, real-time trading dashboard using Lightweight Charts and the Binance Public REST API.

## 2. DevSecOps Strategy
To ensure a secure pipeline and prevent the exposure of sensitive testing or configuration logic:
- **GitLab (Source of Truth)**: Used for complete development. Holds `.gitlab-ci.yml`, `tests/` and `configs/`. Pull Requests require CI Pipeline execution before merging to `main`.
- **GitHub (Public Portfolio)**: Used to publicly showcase the platform features. All underlying testing logic, CI/CD routines, and secure configs are stripped prior to the release using a custom sanitization script.

## 3. Publication Pipeline
Located in `scripts/publish_public.ps1`, the script guarantees the enforcement of the sanitization policy before pushing changes to the `public/main` branch on GitHub.

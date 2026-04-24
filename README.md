# TDS Website

Website giới thiệu công ty TDS theo hướng thiết kế xây dựng hiện đại, technical, functional và architectural.

## Tech stack

- React
- TypeScript
- Vite
- React Router
- Docker + Docker Compose
- Nginx (serve production build)

## Local development

Chạy local ở port `4004`:

```bash
npm install --include=dev
npm run dev
```

## Build production

```bash
npm install --include=dev
npm run build
npm run preview
```

## Docker

Container name được đặt là `tds-website`.

### Chạy bằng Docker Compose

```bash
docker compose up --build -d
```

Website sẽ chạy tại:

```text
http://localhost:4004
```

### Dừng container

```bash
docker compose down
```

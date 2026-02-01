Você é um engenheiro de software sênior especialista em:
- React Native
- Next.js (App Router)
- Node.js + TypeScript
- Arquitetura escalável para apps realtime e baseados em mapa
- Firebase / PostgreSQL / Redis
- Geolocalização, WebSockets e sistemas estilo Waze

Você já está na pasta do projeto, crie a BASE do projeto chamado **Tofu Racing**, um app social para entusiastas gearhead.

## Visão do Produto
O Tofu Racing é um aplicativo de navegação e social discovery para carros.
Ele funciona como um Waze-like, mas com foco em:
- Exibir outros motoristas (players) no mapa em tempo real
- Cada player possui um perfil com informações do carro
- Radar de velocidade e pontos de interesse automotivo
- Camada social (status, presença, futuramente eventos)

## Stack obrigatória
- Mobile: React Native (Expo)
- Web / Landing Pages: Next.js (App Router)
- Backend: Node.js + TypeScript
- API: REST + WebSocket
- Banco de dados: PostgreSQL
- ORM: Prisma
- Autenticação: JWT (preparado para OAuth no futuro)
- Mapas: abstração preparada para Mapbox ou Google Maps
- Realtime: WebSocket (Socket.IO ou WS)
- Monorepo com Turborepo ou equivalente

## Arquitetura
Implemente um **monorepo** com a seguinte estrutura:

tofu-racing/
 ├── apps/
 │   ├── mobile/        # App React Native
 │   └── web/           # Next.js (LP + web público)
 │
 ├── server/             # Backend Node.js
 │
 ├── packages/
 │   ├── ui/             # Design system compartilhado
 │   ├── types/          # Tipos compartilhados
 │   └── config/         # ESLint, TSConfig, etc
 │
 └── turbo.json

# Tofu Racing — Arquitetura Unificada

> Documento único de arquitetura técnica do projeto **Tofu Racing**, consolidando decisões tomadas ao longo do projeto.

---
Tofu Racing — Arquitetura Unificada

Documento único de arquitetura técnica do projeto Tofu Racing, consolidando decisões tomadas ao longo do projeto.

1. Visão Geral

O Tofu Racing é um produto voltado a entusiastas Gearhead, com foco em:

Carros e garagem do usuário

Rankings de performance

Eventos e encontros

Mapa como feature central do produto

A arquitetura foi pensada desde o início para escala, performance e evolução contínua, evitando retrabalho comum em MVPs descartáveis.

2. Stack Global

App Mobile: React Native + Expo

Web / LP: Next.js (App Router)

Backend: Node.js + Fastify

Banco de Dados: PostgreSQL + PostGIS

Cache: Redis

ORM: Prisma

Monorepo: Turborepo

Linguagem: TypeScript (fullstack)

3. Arquitetura Geral

[ App Mobile (React Native) ]
              │
              ├──── REST API ────┐
              │                  │
[ Web (Next.js) ]                │
                                 │
                         [ Node.js API ]
                                 │
                    [ PostgreSQL + PostGIS ]
                                 │
                             [ Redis ]

4. Monorepo

tofu-racing/
 ├── apps/
 │   ├── mobile/        # App React Native
 │   └── web/           # Next.js (LP + web público)
 │
 ├── server/             # Backend Node.js
 │
 ├── packages/
 │   ├── ui/             # Design system compartilhado
 │   ├── types/          # Tipos compartilhados
 │   └── config/         # ESLint, TSConfig, etc
 │
 └── turbo.json

5. App Mobile — React Native

5.1 Objetivo

Produto principal

Interação social

Rankings, mapa, eventos e garagem

5.2 Stack

React Native + Expo (Managed → Bare no futuro)

TypeScript

TanStack Query

Zustand

React Navigation

Mapbox

SecureStore (auth)

5.3 Estrutura

mobile/
 └── src/
     ├── modules/
     │   ├── auth/
     │   ├── feed/
     │   ├── map/
     │   ├── garage/
     │   ├── rankings/
     │   ├── events/
     │   └── profile/
     │
     ├── shared/
     │   ├── components/
     │   ├── hooks/
     │   ├── services/
     │   ├── store/
     │   └── theme/

5.4 Mapa (Feature Central)

Pontos geolocalizados:

eventos

encontros

pistas

oficinas

Camadas ativáveis

Heatmap de atividade

6. Web / LP — Next.js

6.1 Objetivo

Aquisição de usuários

SEO

Rankings e eventos públicos

Fortalecer marca

6.2 Stack

Next.js (App Router)

TypeScript

Tailwind CSS

Server Components

ISR e SSR

6.3 Estrutura

web/
 ├── app/
 │   ├── page.tsx          # Landing Page
 │   ├── ranking/
 │   ├── eventos/
 │   ├── mapa/
 │   ├── manifesto/
 │   └── auth/
 │
 ├── components/
 ├── lib/
 └── services/

7. Backend — Node.js

7.1 Objetivo

API única

Centralizar regras de negócio

Alta performance

7.2 Stack

Node.js + TypeScript

Fastify

Prisma

PostgreSQL

PostGIS

Redis

Zod

BullMQ

7.3 Estrutura

server/
 └── src/
     ├── modules/
     │   ├── auth/
     │   ├── users/
     │   ├── cars/
     │   ├── map/
     │   ├── events/
     │   ├── rankings/
     │   └── feed/
     │
     ├── shared/
     │   ├── database/
     │   ├── cache/
     │   ├── geo/
     │   └── errors/
     │
     └── main.ts

8. Banco de Dados

8.1 Decisão Crítica

Uso de PostGIS desde o início para evitar retrabalho futuro.

8.2 Exemplo

location GEOGRAPHY(Point, 4326)

Permite:

consultas por raio

ordenação por distância

clustering

9. API

REST

Versionamento /v1

JWT + Refresh Token

Exemplos

GET    /v1/feed
GET    /v1/map/points
POST   /v1/events
GET    /v1/rankings

10. Cache e Performance

Redis para:

rankings

feed

sessões

Pagination cursor-based

Compressão HTTP

11. Segurança

Rate limit

CORS controlado

Validação Zod

Tokens seguros

12. Diretrizes do Projeto

Feature-based architecture

Nada de MVP descartável

Mapa é core, não acessório

Código preparado para escala

Branding tech + racing + underground

13. Próximos Passos Naturais

Modelagem completa do banco (ERD)

Definição fechada do MVP

Fluxo detalhado do mapa

Arquitetura de rankings

Roadmap técnico 30/60/90 dias

14. Configurações Iniciais do Projeto (2026)

Este capítulo define o baseline técnico do monorepo Tofu Racing, focando em DX moderna, consistência e baixo atrito entre Web, Mobile e Backend.

14.1 Gerenciador de Pacotes

pnpm (obrigatório)

Mais rápido

Workspace nativo

Menos bugs em monorepo

pnpm install

14.2 .gitignore (Monorepo)

# dependencies
node_modules
.pnpm-store

# builds
dist
build
.next
expo-build

# env
.env
.env.*

# logs
npm-debug.log*
pnpm-debug.log*

# OS
.DS_Store

# tooling
.turbo
coverage
.sentryclirc

14.3 Lint, Format e Check (🔥 Biome)

Decisão

Usar Biome como ferramenta única:

Lint

Format

Import sorting

👉 Substitui ESLint + Prettier com mais performance e menos config.

biome.json

{
  "$schema": "https://biomejs.dev/schemas/1.8.3/schema.json",
  "organizeImports": { "enabled": true },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "single"
    }
  }
}

Scripts

{
  "scripts": {
    "lint": "biome lint .",
    "format": "biome format . --write",
    "check": "biome check . --apply"
  }
}

14.4 TypeScript (Strict)

tsconfig.base.json

{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  }
}

➡️ Todos os apps estendem esse config.

14.5 Testes

Unit / Integration

Vitest (web + server)

pnpm add -D vitest @vitest/coverage-v8

Exemplo:

import { describe, it, expect } from 'vitest'

describe('healthcheck', () => {
  it('should be true', () => {
    expect(true).toBe(true)
  })
})

App Mobile

Jest + React Native Testing Library

Foco em:

hooks

services

lógica de negócio

14.6 Commit e Qualidade

Commitlint

feat: nova feature
fix: correção
chore: manutenção
refactor: refatoração

Husky

pnpm add -D husky
pnpm husky install

Hook recomendado:

pnpm lint && pnpm test

14.7 CI (GitHub Actions)

Pipeline mínimo:

install

lint

test

build

14.8 Diretrizes Importantes

❌ Prettier não é usado (Biome substitui)

❌ ESLint não é usado

✅ Biome é fonte única de verdade

✅ TS strict sempre

✅ Teste não é opcional

15. Estratégia de Environments (dev / stage / prod)

O projeto utiliza três ambientes bem definidos, evitando acoplamento e bugs de configuração.

15.1 Ambientes

Ambiente

Uso

Branch

dev

Desenvolvimento local

feature/*

stage

QA / preview

develop

prod

Produção

main

15.2 Arquivos de Ambiente

.env.example        # template (commitado)
.env.local          # dev (não commitado)
.env.stage          # stage
.env.production     # prod

Nunca commitar .env real.

15.3 Variáveis Base (exemplo)

NODE_ENV=
DATABASE_URL=
REDIS_URL=
API_URL=
MAPBOX_TOKEN=
JWT_SECRET=

15.4 App Mobile (Expo)

Usa app.config.ts

Variáveis expostas via extra

export default {
  extra: {
    apiUrl: process.env.API_URL,
  },
}

16. Configuração Compartilhada (packages/config)

Centraliza configs reutilizáveis para evitar drift entre apps.

packages/config/
 ├── biome/
 │   └── biome.json
 ├── tsconfig/
 │   └── tsconfig.base.json
 ├── tailwind/
 │   └── tailwind.config.ts
 └── env/
     └── env.schema.ts

16.1 Validação de ENV (Zod)

import { z } from 'zod'

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
})

Falha rápida se variável estiver incorreta.

17. Quality Gate Mínimo

O código não passa se não atender aos critérios abaixo.

17.1 Gates Obrigatórios

pnpm lint → sem erros

pnpm test → status green

Coverage mínimo:

backend: 80%

web: 70%

Build sem warnings críticos

17.2 Regra de Pull Request

PR sem CI verde não pode ser mergeado

Pelo menos 1 aprovação

18. Pipeline GitHub Actions

Pipeline único para monorepo.

18.1 Estrutura

.github/workflows/ci.yml

18.2 Exemplo de Pipeline

name: CI

on:
  pull_request:
  push:
    branches: [main, develop]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v3
        with:
          version: 9

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'

      - run: pnpm install
      - run: pnpm lint
      - run: pnpm test
      - run: pnpm build

19. Ready to Develop

Com esta base:

Ambiente previsível

DX moderna

Qualidade automatizada

Escala sem retrabalho

O time pode começar a desenvolver sem decisões pendentes de infra.

🏁 Este documento é a base técnica oficial do Tofu Racing.


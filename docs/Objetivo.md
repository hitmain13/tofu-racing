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

## 1. Visão Geral

O **Tofu Racing** é um produto voltado a entusiastas **Gearhead**, com foco em:

* Carros e garagem do usuário
* Rankings de performance
* Eventos e encontros
* Mapa como feature central do produto

A arquitetura foi pensada desde o início para **escala**, **performance** e **evolução contínua**, evitando retrabalho comum em MVPs descartáveis.

---

## 2. Stack Global

* **App Mobile:** React Native + Expo
* **Web / LP:** Next.js (App Router)
* **Backend:** Node.js + Fastify
* **Banco de Dados:** PostgreSQL + PostGIS
* **Cache:** Redis
* **ORM:** Prisma
* **Monorepo:** Turborepo
* **Linguagem:** TypeScript (fullstack)

---

## 3. Arquitetura Geral

```
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
```

---

## 4. Monorepo

```
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
```
📦 packages/ui
packages/ui/
 ├── tokens/          # cores, spacing, radius
 ├── tailwind/        # config compartilhado
 ├── primitives/
 │   ├── Button/
 │   ├── Input/
 │   ├── Card/
 │   └── Text/
 │
 ├── web/             # wrappers shadcn/ui
 └── mobile/          # wrappers RN + NativeWind

---

## 5. App Mobile — React Native

### 5.1 Objetivo

* Produto principal
* Interação social
* Rankings, mapa, eventos e garagem

### 5.2 Stack

* React Native + Expo (Managed → Bare no futuro)
* TypeScript
* TanStack Query
* Zustand
* React Navigation
* Mapbox
* SecureStore (auth)

### 5.3 Estrutura

```
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
```

React Native
+ NativeWind
+ Tailwind config compartilhado

### 5.4 Mapa (Feature Central)

* Pontos geolocalizados:

  * eventos
  * encontros
  * pistas
  * oficinas
* Camadas ativáveis
* Heatmap de atividade

---

## 6. Web / LP — Next.js

### 6.1 Objetivo

* Aquisição de usuários
* SEO
* Rankings e eventos públicos
* Fortalecer marca

### 6.2 Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Server Components
* ISR e SSR

### 6.3 Estrutura

```
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
```

---

## 7. Backend — Node.js

### 7.1 Objetivo

* API única
* Centralizar regras de negócio
* Alta performance

### 7.2 Stack

* Node.js + TypeScript
* Fastify
* Prisma
* PostgreSQL
* PostGIS
* Redis
* Zod
* BullMQ

### 7.3 Estrutura

```
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
```

---

## 8. Banco de Dados

### 8.1 Decisão Crítica

Uso de **PostGIS desde o início** para evitar retrabalho futuro.

### 8.2 Exemplo

```sql
location GEOGRAPHY(Point, 4326)
```

Permite:

* consultas por raio
* ordenação por distância
* clustering

---

## 9. API

* REST
* Versionamento `/v1`
* JWT + Refresh Token

### Exemplos

```
GET    /v1/feed
GET    /v1/map/points
POST   /v1/events
GET    /v1/rankings
```

---

## 10. Cache e Performance

* Redis para:

  * rankings
  * feed
  * sessões
* Pagination cursor-based
* Compressão HTTP

---

## 11. Segurança

* Rate limit
* CORS controlado
* Validação Zod
* Tokens seguros

---

## 12. Diretrizes do Projeto

* Feature-based architecture
* Nada de MVP descartável
* Mapa é core, não acessório
* Código preparado para escala
* Branding tech + racing + underground

---

## 13. Próximos Passos Naturais

* Modelagem completa do banco (ERD)
* Definição fechada do MVP
* Fluxo detalhado do mapa
* Arquitetura de rankings
* Roadmap técnico 30/60/90 dias

---

🏁 **Este documento é a base técnica oficial do Tofu Racing.**


## Qualidade
- ESLint + Prettier configurados
- Env vars documentadas
- Scripts npm/yarn/pnpm bem definidos
- README inicial explicando:
  - Arquitetura
  - Como rodar cada app
  - Como funciona o realtime

## Importante
- NÃO implemente features completas
- Foque em:
  - Estrutura
  - Boilerplate
  - Conexões iniciais
  - Padrões de código
- Código limpo, comentado e escalável

No final, gere:
- Estrutura de pastas
- Principais arquivos iniciais
- Exemplos de endpoints
- Exemplo de evento WebSocket
- README.md inicial

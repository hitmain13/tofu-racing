# 📐 Diretrizes Oficiais de Desenvolvimento — Monorepo

Estas diretrizes definem o **padrão obrigatório de desenvolvimento** para todo o projeto.
Elas devem ser consideradas **em qualquer prompt, feature, refactor ou decisão técnica**, garantindo **consistência arquitetural**, **qualidade**, **performance** e **escalabilidade**.

---

## 🧱 Contexto do Monorepo

O projeto é estruturado em um **monorepo**, contendo:

- **App Mobile**: React Native (iOS / Android)
- **Web**: Next.js (App Router)
- **Backend**: Node.js
- **Packages Compartilhados**: hooks, utils, design system, tipos e contratos

### Princípios fundamentais
- Código compartilhado **não pode depender de runtime específico**
- Separação clara de **responsabilidades**
- Nenhuma lógica de negócio deve existir em camadas de UI
- Arquitetura vem antes da implementação
- Evitar comentários no código

---

## 🧠 TypeScript (Obrigatório)

### Regras absolutas
- `strict: true` sempre ativo
- É **proibido**:
  - `any`
  - `unknown` sem narrowing explícito
  - `as Type` (type assertions), salvo exceções bem justificadas e documentadas

### Boas práticas
- Tipos devem **modelar o domínio**, não apenas satisfazer o compilador
- Preferir tipos explícitos a inferências complexas
- Separar claramente:
  - DTOs
  - Entities
  - Contracts
- Utilizar `readonly` sempre que possível
- Tipos compartilhados vivem em `packages/shared`

---

## ⚛️ React / React Native / Next.js

### Arquitetura de Componentes — Atomic Design

Adotar **Atomic Design** como padrão obrigatório:

components/
├─ atoms/
├─ molecules/
├─ organisms/
└─ templates/


- **Atoms**: componentes básicos (Button, Text, Icon)
- **Molecules**: combinações simples (Input + Label)
- **Organisms**: blocos funcionais (Header, Card, List)
- **Templates**: estrutura de página e layout

### Regras gerais
- Componentes devem ser **puros e previsíveis**
- Nenhum componente deve conter regra de negócio
- Props pequenas, claras e bem tipadas
- Evitar re-renderizações desnecessárias
- Preferir composição a componentes gigantes

---

## 🪝 Hooks, Estado e Data Fetching

### Hooks
- Hooks customizados devem:
  - Ter **responsabilidade única**
  - Não misturar UI com regra de negócio
- Hooks compartilhados devem ficar em `packages/shared/hooks`

### Estado e Fetching
- Priorizar **React Query** (ou equivalente)
- Nunca duplicar estado remoto em estado local
- Cache, retry e invalidação devem ser explícitos
- Pensar sempre em **fluxo de dados previsível**

---

## 🧩 Design Patterns (Obrigatório)

Todo código deve ser escrito considerando padrões de projeto.

### Padrões esperados
- **Guard Clauses** sempre que possível
- **Single Responsibility Principle**
- **Separation of Concerns**
- **Composition over Inheritance**
- Evitar `else` aninhado
- Funções pequenas, legíveis e testáveis

---

## 🌐 Next.js — Server Components (Regra)

### Boas práticas para Server Components

#### Diretrizes
1. **Data Fetching no Server**
   - Todo dado necessário para o primeiro render deve ser buscado no servidor

2. **Server + Client Components**
   - Server Components → dados e conteúdo estático
   - Client Components → interações, eventos e estado

3. **Server Components Leves**
   - Evitar lógica pesada
   - Evitar dependências desnecessárias

---

### Benefícios Esperados

#### Performance
- Redução do JavaScript enviado ao cliente
- Menor tempo de carregamento
- Melhor performance em redes lentas

#### SEO
- HTML renderizado no servidor
- Melhor indexação
- Melhor Core Web Vitals

#### UX
- Faster Time-to-Interactive
- Navegação fluida
- Menos loaders desnecessários

---

## 🧠 Backend — Node.js

### Arquitetura
- Código orientado a **domínio**
- Separação clara entre:
  - Controllers
  - Services
  - Use Cases
  - Repositories
  - Providers

### SOLID (Prioridade Máxima)
- **Single Responsibility**
- **Open/Closed**
- **Liskov Substitution**
- **Interface Segregation**
- **Dependency Inversion** (obrigatório)

### Regras
- Core da aplicação não depende de frameworks
- Inversão de dependência via interfaces
- Infraestrutura deve ser plugável
- Nenhuma regra de negócio depende de Express, Fastify ou similares

---

## 📦 Código Compartilhado

- Código compartilhado deve ser:
  - Independente de plataforma
  - Bem tipado
  - Testável
- Tipos, hooks, utils e contratos vivem fora das aplicações
- Evitar duplicação de lógica entre Web, App e Backend

---

## 🧪 Qualidade e Manutenção

- Código deve ser:
  - Legível
  - Previsível
  - Testável
- Complexidade deve ser **intencional**, nunca acidental
- Refactors são parte natural do fluxo
- Se algo parece rápido demais, provavelmente está errado

---

## 🧭 Regra de Ouro do Projeto

> **Sempre pensar primeiro em arquitetura, depois em implementação.**

Todo código deve:
- Seguir estas diretrizes
- Priorizar clareza sobre esperteza
- Facilitar a vida do time do futuro

---

Utilizar sempre o pnpm e zsh como terminal.

**Este documento é a referência oficial de desenvolvimento do projeto.**
Qualquer exceção deve ser rara, consciente e bem documentada.

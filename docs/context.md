# Project Gojo — Master Context

> Single source of truth for the build. Every session works from this document.
> If a decision changes, it changes here first, then in code.

## 1. What this is

A commercial-grade multi-agent system on a locked-down Azure VPS inside a single
M365 tenant. The orchestrator is Gojo — a Claude Code session bridged into
Microsoft Teams (Bot Framework transport, Entra Object ID identity, single-tenant
pin, prompt-injection fence). Gojo fans out to specialist agents across Teams,
Outlook/Graph, SharePoint, Zoho CRM/Desk, Jira, and Confluence, backed by a
vector DB + RAG layer and a Python/LangGraph subsystem.

Dual purpose: (1) a real working system worth showcasing, and (2) a vehicle to
close specific skill gaps for the Japanese AI-engineering job market.

## 2. Build phases

Phase 1 — Platform: VPS bootstrap, Caddy+TLS, Azure Bot+Entra ID, Gojo Teams
plugin, then connectors.
Phase 2 — Memory & Workspace (parked).
Phase 3 — Specialist agents (Outlook first as reference pattern).
Phase 4 — Intelligence layer: Python/LangGraph RAG, Langfuse observability.
Phase 5 — Showcase + advanced.

## 3. Guardrails (non-negotiable)

1. One subsystem = one spec -> build -> evidence cycle.
2. Evidence is a deliverable (README section, diagram, or write-up) before moving on.
3. Security-first: treat all connector data as hostile. The prompt-injection
   fence is load-bearing the moment an agent reads customer data.
4. JLPT is a separate live track.
5. Sequence by market-ROI, not excitement.
6. The repo stays clean. One private repo = the whole estate.

## 4. Current decisions

- Single-tenant, Claude Code + MCP plugin architecture.
- Build agents properly first; vector DB / RAG / LangGraph / memory parked until
  the agent spine works.
- Build Outlook connector end-to-end as the reference pattern, then clone it.
- Monorepo (packages/ layout), Bun primary runtime, Node as compatibility layer.

## 5. Phase 1 definition of done

A single recordable demo: DM Gojo from a phone, it recalls something from a prior
conversation, and replies intelligently through the same Teams thread.

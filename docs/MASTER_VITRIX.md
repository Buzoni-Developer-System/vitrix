# MASTER VITRIX

## Visão Geral
O Vitrix é uma plataforma de cartão digital premium para profissionais e vendedores autônomos.

Permite que qualquer profissional tenha sua presença digital em um único link, reunindo:
- branding visual premium
- contatos rápidos
- links de ação personalizados
- integração com WhatsApp
- vitrine ou catálogo (conforme o perfil do usuário)

---

## Segmentos Atendidos

### Profissionais de Saúde
- Médicos, dentistas, cirurgiões
- Cartão focado em: contato, agendamento, avaliações Google
- Visual: clean, light, transmite confiança e profissionalismo

### Vendedores Autônomos
- Revendedores, importadores, pequenos comerciantes
- Cartão focado em: catálogo, WhatsApp, vitrine de produtos
- Visual: moderno, dinâmico, comercial

---

## Proposta de Valor
"Seu negócio profissional em um link."

---

## Stack Obrigatória
Frontend:
- React
- Vite
- TypeScript
- Tailwind CSS v3.4.17

Backend:
- Supabase

---

## Arquitetura
- Mobile First obrigatório
- Componentes reutilizáveis por segmento
- Cada profissional = um arquivo de dados em src/data/doctors/ ou src/data/vendors/
- Rotas por slug: /alexandre, /joao, /maria

---

## Filosofia de Produto
O produto deve parecer:
- moderno
- premium
- simples de usar
- profissional

Nunca deve parecer:
- sistema complexo
- ERP
- painel burocrático

---

## Fora do Escopo MVP
- Multi-tenant/SaaS
- Billing/assinaturas
- Analytics
- Scraping
- Estoque avançado
- ERP/Financeiro complexo

---

## Rodapé de Marca
Todos os cartões exibem discretamente:
"Vitrix · Cartão Digital"
Ao clicar: "Desenvolvido por Buzoni Developers System" (com link para WhatsApp comercial)

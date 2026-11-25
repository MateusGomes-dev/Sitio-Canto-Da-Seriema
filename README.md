# Sítio Canto da Seriema

Site institucional em React + Vite + Tailwind CSS + Lucide React.

## Rodar localmente
    npm install
    npm run dev

## Gerar versão de produção
    npm run build

## Editar conteúdo
Tudo em `src/data/site.js`: endereço completo, redes sociais, textos e fotos
(coloque as imagens em `public/fotos` e preencha o campo `src`).

## Publicar no GitHub Pages
1. Crie o repositório e envie o código para a branch `main`.
2. Em **Settings > Pages**, escolha **Source: GitHub Actions**.
3. A cada push, o workflow `.github/workflows/deploy.yml` publica o site.

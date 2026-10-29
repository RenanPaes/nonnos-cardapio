# Cardápio Nonno's

Cardápio digital da Nonno's Pizza Napoletana (React + Vite), pensado para celular: o cliente lê o QR code e abre direto no navegador.

## Rodar localmente

```bash
npm install
npm run dev
```

## Adicionar as fotos

Cada item usa a foto `public/images/menu/<id>.jpg`, onde `<id>` é o `id` do item em [`src/data/menu.js`](src/data/menu.js), por exemplo:

```
public/images/menu/margherita.jpg
public/images/menu/prosciutto-di-parma.jpg
public/images/menu/rolled-de-nutella.jpg
public/images/menu/agua-com-gas.jpg
```

Enquanto o arquivo não existir, aparece um ícone provisório. Dicas: fotos quadradas, ~600×600 px, até ~100 KB cada (JPG ou WebP). Para usar outro nome ou formato, defina `photo: '/images/menu/outro.webp'` no item.

## Editar itens e preços

Tudo está em [`src/data/menu.js`](src/data/menu.js). Pizzas usam `pizza(id, nome, [piccolino, 4 pedaços, 8 pedaços], descrição)`; use `null` no piccolino quando a pizza não tem esse tamanho.

## Publicar na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Na Vercel: **Add New → Project**, importe o repositório e clique em **Deploy** (o preset Vite é detectado; `vercel.json` já está configurado).
3. Gere o QR code apontando para a URL do deploy (ou do domínio próprio).

Ou pela CLI: `npx vercel --prod`.

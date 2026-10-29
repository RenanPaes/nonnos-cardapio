// Cardápio Nonno's — fonte única dos itens.
//
// Fotos: coloque o arquivo em `public/images/menu/<id>.jpg` (o `id` do item).
// Enquanto o arquivo não existir, o item mostra uma imagem provisória.
// Para usar outro nome/formato, defina `photo: '/images/menu/outro-nome.webp'`.

const pizza = (id, name, prices, description) => ({
  id,
  name,
  description,
  prices: [
    prices[0] != null && { label: 'Piccolino', value: prices[0] },
    { label: '4 pedaços', value: prices[1] },
    { label: '8 pedaços', value: prices[2] },
  ].filter(Boolean),
})

const single = (id, name, value, description) => ({
  id,
  name,
  description,
  prices: [{ label: null, value }],
})

export const categories = [
  {
    id: 'pizzas',
    title: 'Pizzas',
    items: [
      pizza('margherita', 'Margherita', [27, 55, 103],
        'Molho de tomate rústico, muçarela de búfala, manjericão, queijo parmesão e azeite de oliva.'),
      pizza('prosciutto-di-parma', 'Prosciutto di Parma', [31, 64, 121],
        'Molho de tomate rústico, muçarela, muçarela de búfala, presunto de Parma, rúcula e tomate cereja.'),
      pizza('burrata', 'Burrata', [null, 65, 123],
        'Molho de tomate rústico, parmesão, muçarela, tomate cereja, rúcula, burrata, pesto de manjericão e azeite de oliva.'),
      pizza('burrata-com-prosciutto-di-parma', 'Burrata com Prosciutto di Parma', [null, 80, 138],
        'Molho de tomate rústico, muçarela, presunto de Parma, burrata, tomate cereja, pesto de manjericão, azeitonas, azeite de oliva e orégano.'),
      pizza('prosciutto-e-champignon', 'Prosciutto e Champignon', [29, 63, 119],
        'Molho de tomate rústico, muçarela, presunto de Parma e cogumelo champignon.'),
      pizza('boscaiola', 'Boscaiola', [29, 63, 119],
        'Molho de tomate rústico, muçarela, cogumelo champignon, linguiça toscana picada, pimenta biquinho, tomate seco, parmesão, azeitona preta e orégano.'),
      pizza('quattro-formaggi', 'Quattro Formaggi', [26, 59, 109],
        'Creme de ricota, muçarela, muçarela de búfala, gorgonzola e provolone.'),
      pizza('pepperoni', 'Pepperoni', [26, 58, 106],
        'Molho de tomate rústico, muçarela, salame picante e orégano.'),
      pizza('marinara', 'Marinara', [19, 45, 83],
        'Molho de tomate rústico com alho, orégano e azeite de oliva.'),
      pizza('quatro-queijos', 'Quatro Queijos', [26, 59, 109],
        'Molho de tomate rústico, muçarela, provolone, gorgonzola e parmesão.'),
      pizza('dois-queijos', 'Dois Queijos', [23, 55, 101],
        'Muçarela e catupiry.'),
      pizza('mucarela', 'Muçarela', [22, 49, 90],
        'Molho de tomate rústico, muçarela e tomate cereja.'),
      pizza('calabresa', 'Calabresa', [25, 49, 90],
        'Molho de tomate rústico, calabresa e cebola.'),
      pizza('toscana', 'Toscana', [26, 57, 101],
        'Molho de tomate rústico, calabresa e queijo muçarela.'),
      pizza('bacon', 'Bacon', [27, 58, 102],
        'Molho de tomate rústico, muçarela, bacon em tiras e bacon picado.'),
      pizza('bauru', 'Bauru', [26, 57, 101],
        'Molho de tomate rústico, muçarela, presunto e catupiry.'),
      pizza('peito-de-peru', 'Peito de Peru', [26, 57, 101],
        'Molho de tomate rústico, peito de peru defumado e queijo catupiry.'),
      pizza('atum', 'Atum', [26, 57, 101],
        'Molho de tomate rústico, muçarela, atum em pedaços e cebola.'),
      pizza('portuguesa', 'Portuguesa', [28, 58, 102],
        'Molho de tomate rústico, muçarela, presunto, ovo, ervilha, milho e cebola.'),
      pizza('doritos', 'Doritos', [27, 57, 107],
        'Molho de tomate rústico, muçarela, bacon picado e Doritos.'),
      pizza('frango-com-catupiry', 'Frango c/ Catupiry', [27, 58, 102],
        'Molho de tomate rústico, frango temperado com salsinha e catupiry.'),
      pizza('galetto', 'Galetto', [30, 63, 107],
        'Molho de tomate rústico, muçarela, frango desfiado, catupiry, milho, cebola, azeitonas e orégano.'),
      pizza('frango-ao-barbecue', 'Frango ao Barbecue', [30, 63, 107],
        'Molho de tomate rústico, muçarela, frango desfiado, pedaços de bacon, cheddar, molho barbecue, salsinha, azeitonas e orégano.'),
    ],
  },
  {
    id: 'vegetarianas',
    title: 'Vegetarianas',
    items: [
      pizza('rucula-e-balsamico', 'Rúcula & Balsâmico', [27, 60, 116],
        'Molho de tomate rústico, muçarela, rúcula, tomate cereja, tomate seco, palmito em rodelas, azeitonas pretas e verdes, cebola roxa, azeite de oliva, redução de vinagre balsâmico e orégano.'),
      pizza('mediterraneo', 'Mediterrâneo', [29, 63, 119],
        'Molho de tomate rústico, muçarela, tomate cereja, tomate seco, palmito em rodelas, milho, cogumelo champignon, azeitonas pretas e verdes, azeite de oliva, manjericão e orégano.'),
      pizza('zucchini', 'Zucchini', [26, 59, 109],
        'Creme de ricota, abobrinha em rodelas, muçarela, muçarela de búfala, parmesão, azeite de oliva, orégano e azeitona preta.'),
    ],
  },
  {
    id: 'sobremesas',
    title: 'Sobremesas',
    items: [
      single('rolled-de-nutella', 'Rolled de Nutella', 54,
        '4 rolinhos recheados de Nutella e morango.'),
      single('rolled-de-pistache', 'Rolled de Pistache', 54,
        '4 rolinhos recheados de pistache e morango.'),
      single('pizza-de-laranja', 'Pizza de Laranja', 54,
        '4 pedaços. Laranja em rodelas finas, geleia de damasco e açúcar de confeiteiro.'),
    ],
  },
  {
    id: 'bebidas',
    title: 'Bebidas',
    items: [
      single('refrigerante-lata', 'Refrigerante Lata', 8),
      single('h2oh', 'H2OH', 8),
      single('suco-lata', 'Suco Lata', 7),
      single('agua', 'Água', 6),
      single('agua-com-gas', 'Água com Gás', 6),
    ],
  },
]

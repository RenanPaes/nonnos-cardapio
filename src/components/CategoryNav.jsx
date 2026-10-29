import { useEffect, useRef, useState } from 'react'

// Barra fixa no topo com atalhos para cada categoria; destaca a seção visível.
export default function CategoryNav({ categories }) {
  const [active, setActive] = useState(categories[0].id)
  const listRef = useRef(null)

  useEffect(() => {
    const visible = new Set()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        const first = categories.find((c) => visible.has(c.id))
        if (first) setActive(first.id)
      },
      // faixa fina logo abaixo da barra fixa
      { rootMargin: '-72px 0px -70% 0px' },
    )
    for (const { id } of categories) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [categories])

  // mantém o atalho ativo à vista na barra rolável
  useEffect(() => {
    const el = listRef.current?.querySelector('[aria-current="true"]')
    el?.scrollIntoView({ block: 'nearest', inline: 'center' })
  }, [active])

  return (
    <nav className="nav" aria-label="Categorias do cardápio">
      <ul className="nav__list" ref={listRef}>
        {categories.map(({ id, title }) => (
          <li key={id}>
            <a
              className="nav__link"
              href={`#${id}`}
              aria-current={active === id ? 'true' : undefined}
              onClick={() => setActive(id)}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

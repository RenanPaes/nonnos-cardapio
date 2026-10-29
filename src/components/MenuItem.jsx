import Photo from './Photo.jsx'

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export default function MenuItem({ item }) {
  const photo = item.photo ?? `/images/menu/${item.id}.jpg`
  const hasSizes = item.prices.some((price) => price.label)

  return (
    <li className="item">
      <Photo src={photo} alt={item.name} />
      <div className="item__body">
        <h3 className="item__name">{item.name}</h3>
        {item.description && <p className="item__desc">{item.description}</p>}
      </div>
      <dl className={hasSizes ? 'prices' : 'prices prices--single'}>
        {item.prices.map(({ label, value }) => (
          <div className="price" key={label ?? 'unico'}>
            {label && <dt>{label}</dt>}
            <dd>{brl.format(value)}</dd>
          </div>
        ))}
      </dl>
    </li>
  )
}

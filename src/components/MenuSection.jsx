import divider from '../assets/divider.png'
import MenuItem from './MenuItem.jsx'

export default function MenuSection({ category }) {
  return (
    <section className="section" id={category.id} aria-labelledby={`${category.id}-title`}>
      <h2 className="section__title" id={`${category.id}-title`}>
        {category.title}
      </h2>
      <img className="divider" src={divider} alt="" aria-hidden="true" />
      <ul className="items">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  )
}

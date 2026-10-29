import { categories } from './data/menu.js'
import Hero from './components/Hero.jsx'
import CategoryNav from './components/CategoryNav.jsx'
import MenuSection from './components/MenuSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Hero />
      <CategoryNav categories={categories} />
      <main className="menu">
        {categories.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}
      </main>
      <Footer />
    </>
  )
}

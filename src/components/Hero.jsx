import logo from '../assets/logo.png'
import corner from '../assets/corner.png'

export default function Hero() {
  return (
    <header className="hero">
      <img className="hero__corner hero__corner--tl" src={corner} alt="" aria-hidden="true" />
      <img className="hero__corner hero__corner--br" src={corner} alt="" aria-hidden="true" />
      <div className="hero__frame">
        <img className="hero__logo" src={logo} alt="Nonno's Pizza Napoletana" width="240" height="188" />
        <h1 className="hero__title">Cardápio</h1>
      </div>
    </header>
  )
}

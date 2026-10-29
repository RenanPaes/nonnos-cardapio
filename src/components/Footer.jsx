import logo from '../assets/logo.png'
import divider from '../assets/divider.png'

export default function Footer() {
  return (
    <footer className="footer">
      <img className="divider" src={divider} alt="" aria-hidden="true" />
      <img className="footer__logo" src={logo} alt="Nonno's Pizza Napoletana" width="120" height="94" />
    </footer>
  )
}

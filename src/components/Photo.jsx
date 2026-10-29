import { useState } from 'react'

// Mostra a foto do item; se o arquivo ainda não existir, cai num ícone provisório.
export default function Photo({ src, alt }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="photo">
      {failed ? (
        <svg className="photo__placeholder" viewBox="0 0 64 64" role="img" aria-label={`Foto de ${alt} em breve`}>
          <path
            d="M32 58 8 14a52 52 0 0 1 48 0z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="24" r="3.2" fill="currentColor" />
          <circle cx="38" cy="29" r="3.2" fill="currentColor" />
          <circle cx="30" cy="38" r="3.2" fill="currentColor" />
        </svg>
      ) : (
        <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} />
      )}
    </div>
  )
}

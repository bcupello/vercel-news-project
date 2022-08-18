import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/noticias/2022">
          <a>Vai para pages/noticias/[ano]/index.js</a>
        </Link>
      </li>
      <li>
        <Link href="/noticias?ano=2022&categoria=esportes">
          <a>Vai para pages/noticias/index.js</a>
        </Link>
      </li>
      <li>
        <Link href="/noticias/2022/esportes">
          <a>Vai para pages/noticias/[ano]/[categoria].js</a>
        </Link>
      </li>
    </ul>
  )
}
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h1>Home!</h1>
    <div>
      <h2>Meus Produtos</h2>
      <ul>
        <li><Link href="/produtos/tenis">Tênis</Link></li>
        <li><Link href="/produtos/calca">Calca</Link></li>
        <li><Link href="/produtos/meia">Meia</Link></li>
        <li><Link href="/produtos/camisa">Camisa</Link></li>
      </ul>
      <figure>
      <Image src="/img/home.jpg" alt="Placa escura" width={700} height={500}></Image>
      </figure>
    </div>
    </>
  )
}

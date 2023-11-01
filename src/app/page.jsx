import Image from 'next/image'

export default function Home() {
  return (
    <>
    <h1>Home!</h1>
    <div>
      <figure>
      <Image src="/img/home.jpg" alt="Placa escura" width={700} height={500}></Image>
      </figure>
    </div>
    </>
  )
}

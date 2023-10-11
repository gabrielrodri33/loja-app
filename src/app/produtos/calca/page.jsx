import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function calca() {
  return (
    <>
    <div>
        <h1>Calça</h1>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, odio. Ipsa atque impedit aut, dicta dolorem fugiat velit sit, modi ducimus aspernatur placeat tempore ea, libero nulla iusto eaque! Excepturi?</p>
            <p> <Link href="/">Voltar</Link></p>
            <figure>
            <Image src="/img/calca.jpeg" alt="Placa escura" width={1024} height={1024}></Image>
            </figure>
        </div>
    </div>
    </>
  )
}

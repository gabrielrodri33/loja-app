import React from 'react'

export default function ProdutoId({params}) {
  return (
    <div>
        <h1>Produto Slug</h1>
        <p>Slug: {params.id}</p>
    </div>
  )
}

import React from 'react'

export default function Apply() {
  return (
    <div className="">
      <div className="w-64 mx-auto my-8">
        <h1 className="font-medium text-center">@apply</h1>
        <div className="mt-8">
          <button className="bg-blue-500 border-2 border-blue-700 font-medium px-4 py-2 rounded shadow-lg text-white w-full md:w-auto hover:bg-blue-400">
            Botón con clases
          </button>
        </div>
        <div className="mt-8">
          <button className="btn btn-primary btn-full md:btn-auto hover:btn-full">
            Botón con apply
          </button>
        </div>
        <div className="mt-8">
          <Button type="primary" />
        </div>
        <div className="mt-8">
          <Button type="secondary" />
        </div>
      </div>
    </div>
  )
}

function Button({ type }: { type: 'primary' | 'secondary' }) {
  let colors = ''

  if (type === 'primary') {
    colors = 'bg-blue-500 border-2 border-blue-700 hover:bg-blue-400 text-white'
  }

  if (type === 'secondary') {
    colors =
      'bg-green-500 border-2 border-green-700 hover:bg-green-400 text-white'
  }

  return (
    <button
      className={`font-medium px-4 py-2 rounded shadow-lg w-full md:w-auto ${colors}`}
    >
      Button #1
    </button>
  )
}

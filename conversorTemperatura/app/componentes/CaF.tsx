import React from 'react'

export default function CaF({ celsius }: { celsius: number }) {
    const fahrenheit = (celsius * 9 / 5) + 32

    return (
        <div>{celsius} °C = {fahrenheit.toFixed(2)} °F</div>
    )
}

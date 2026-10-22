import React from 'react'

export default function CaK({ celsius }: { celsius: number }) {
    const kelvin = celsius + 273.15

    return (
        <div>{celsius} °C = {kelvin.toFixed(2)} K</div>
    )
}

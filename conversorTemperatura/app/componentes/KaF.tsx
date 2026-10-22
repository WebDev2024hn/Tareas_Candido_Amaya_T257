import React from 'react'

export default function KaF({ kelvin }: { kelvin: number }) {
    const fahrenheit = (kelvin - 273.15) * 9 / 5 + 32

    return (
        <div>{kelvin} K = {fahrenheit.toFixed(2)} °F</div>
    )
}

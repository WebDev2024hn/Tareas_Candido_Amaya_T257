import React from 'react'

export default function KaC({ kelvin }: { kelvin: number }) {
    const celsius = kelvin - 273.15

    return (
        <div>{kelvin} K = {celsius.toFixed(2)} °C</div>
    )
}

import React from 'react'

export default function FaC({ fahrenheit }: { fahrenheit: number }) {
    const celsius = (fahrenheit - 32) * 5 / 9

    return (
        <div>{fahrenheit} °F = {celsius.toFixed(2)} °C</div>
    )
}

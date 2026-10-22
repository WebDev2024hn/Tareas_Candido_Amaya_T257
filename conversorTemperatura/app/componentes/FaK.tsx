import React from 'react'

export default function FaK({ fahrenheit }: { fahrenheit: number }) {
    const kelvin = (fahrenheit - 32) * 5 / 9 + 273.15

    return (
        <div>{fahrenheit} °F = {kelvin.toFixed(2)} K</div>
    )
}

import React from "react";

interface ErrorerProps {
    error: string
}
export function Errorer({ error }: ErrorerProps) {
    return (
        <p className="text-center text-red-600">{error}</p>
    )
}
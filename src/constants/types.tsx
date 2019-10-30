export interface Line {
    stations: ReadonlyArray<Station>,
    color: Color,
    passengers: number
}

export enum Color {
    red = 'red',
    green = 'green',
    blue = 'blue'
}

export interface Station {
    x: number,
    y: number
}

export interface Train {
    moving: boolean,
    coordinates: Station,
    color: Color,
    passengers: number
}
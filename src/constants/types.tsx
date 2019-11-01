export interface Line {
    stations: ReadonlyArray<Station>,
    color: Color,
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

export enum Direction {
    straight = 'straight',
    forward = 'forward'
}
export interface Train {
    moving: boolean,
    coordinates: Station,
    nextCoordinates: Station,
    color: Color,
    passengers: number,
    direction: Direction,
}
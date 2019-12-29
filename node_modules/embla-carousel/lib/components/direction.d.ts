import { Vector1D } from './vector1d';
export declare type Direction = {
    get: () => number;
    set: (v: Vector1D) => Direction;
};
export declare function Direction(value: number): Direction;

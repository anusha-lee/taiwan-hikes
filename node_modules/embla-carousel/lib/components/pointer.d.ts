import { ChunkSize } from './chunkSize';
import { Direction } from './direction';
import { Vector1D } from './vector1d';
declare type Axis = 'x' | 'y';
export declare type Pointer = {
    direction: Direction;
    down: (evt: Event) => number;
    move: (evt: Event) => number;
    up: () => number;
    read: (evt: any, axis: Axis) => Vector1D;
};
export declare function Pointer(size: ChunkSize): Pointer;
export {};

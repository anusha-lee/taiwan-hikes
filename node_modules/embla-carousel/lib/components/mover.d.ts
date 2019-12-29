import { Direction } from './direction';
import { Vector1D } from './vector1d';
declare type Params = {
    location: Vector1D;
    speed: number;
    mass: number;
};
export declare type Mover = {
    location: Vector1D;
    direction: Direction;
    update: () => void;
    seek: (target: Vector1D) => Mover;
    settle: (target: Vector1D) => boolean;
    useSpeed: (newSpeed: number) => Mover;
    useDefaultSpeed: () => Mover;
    useMass: (newMass: number) => Mover;
    useDefaultMass: () => Mover;
};
export declare function Mover(params: Params): Mover;
export {};

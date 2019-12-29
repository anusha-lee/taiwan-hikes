import { Animation } from './animation';
import { Limit } from './limit';
import { Mover } from './mover';
import { Vector1D } from './vector1d';
declare type Params = {
    limit: Limit;
    location: Vector1D;
    mover: Mover;
    animation: Animation;
    tolerance: number;
};
export declare type ScrollBounds = {
    constrain: (v: Vector1D) => void;
};
export declare function ScrollBounds(params: Params): ScrollBounds;
export {};

import { Alignments } from './alignSize';
import { Counter } from './counter';
import { Limit } from './limit';
import { Vector1D } from './vector1d';
declare type Params = {
    align: Alignments;
    dragFree: boolean;
    index: Counter;
    loop: boolean;
    snapSizes: number[];
    scrollSnaps: number[];
    contentSize: number;
    limit: Limit;
    target: Vector1D;
};
export declare type Target = {
    distance: number;
    index: number;
};
export declare type ScrollTarget = {
    byIndex: (target: number, direction: number) => Target;
    byDistance: (force: number) => Target;
};
export declare function ScrollTarget(params: Params): ScrollTarget;
export {};

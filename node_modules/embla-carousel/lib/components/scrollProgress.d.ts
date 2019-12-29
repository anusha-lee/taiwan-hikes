import { Limit } from './limit';
import { Vector1D } from './vector1d';
declare type Params = {
    location: Vector1D;
    limit: Limit;
};
export declare type ScrollProgress = {
    get: () => number;
};
export declare function ScrollProgress(params: Params): ScrollProgress;
export {};

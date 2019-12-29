import { Vector1D } from './vector1d';
declare type Params = {
    scrollSnaps: number[];
    viewSize: number;
    location: Vector1D;
    slideSizes: number[];
    contentSize: number;
};
declare type LoopPoint = {
    point: number;
    location: Vector1D;
    index: number;
    findTarget: (location: number) => Vector1D;
};
export declare type SlideLooper = {
    loop: (slides: HTMLElement[]) => void;
    loopPoints: LoopPoint[];
};
export declare function SlideLooper(params: Params): Readonly<SlideLooper>;
export {};

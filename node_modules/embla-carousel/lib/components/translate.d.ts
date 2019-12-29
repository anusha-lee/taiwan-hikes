import { Vector1D } from './vector1d';
export declare type Translate = {
    to: (vector: Vector1D) => void;
};
export declare function Translate(node: HTMLElement): Translate;

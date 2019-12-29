import { Limit } from './limit';
declare type Params = {
    start: number;
    limit: Limit;
    loop: boolean;
};
export declare type Counter = {
    min: number;
    max: number;
    get: () => number;
    set: (n: number) => Counter;
    add: (n: number) => Counter;
    clone: () => Counter;
};
export declare function Counter(params: Params): Counter;
export {};

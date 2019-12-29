export declare type Vector1D = {
    get: () => number;
    set: (v: Vector1D) => Vector1D;
    add: (v: Vector1D) => Vector1D;
    subtract: (v: Vector1D) => Vector1D;
    multiply: (n: number) => Vector1D;
    setNumber: (n: number) => Vector1D;
    addNumber: (n: number) => Vector1D;
    subtractNumber: (n: number) => Vector1D;
    divide: (n: number) => Vector1D;
    magnitude: () => number;
    normalize: () => Vector1D;
};
export declare function Vector1D(value: number): Vector1D;

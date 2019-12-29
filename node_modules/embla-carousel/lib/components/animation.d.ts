export declare type Animation = {
    start: () => void;
    stop: () => void;
    proceed: () => void;
};
export declare function Animation(callback: FrameRequestCallback): Animation;

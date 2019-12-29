import { Callback as EmblaCallback, Event as EmblaEvent } from './components/eventDispatcher';
import { UserOptions } from './components/options';
declare type ScrollSnap = {
    slideNodes: HTMLElement[];
    slideIndexes: number[];
};
export declare type EmblaCarousel = {
    canScrollNext: () => boolean;
    canScrollPrev: () => boolean;
    changeOptions: (options: UserOptions) => void;
    clickAllowed: () => boolean;
    containerNode: () => HTMLElement;
    destroy: () => void;
    off: (evt: EmblaEvent, cb: EmblaCallback) => void;
    on: (evt: EmblaEvent, cb: EmblaCallback) => void;
    previousScrollSnap: () => number;
    scrollNext: () => void;
    scrollPrev: () => void;
    scrollProgress: () => number;
    scrollSnapList: () => ScrollSnap[];
    scrollTo: (index: number) => void;
    selectedScrollSnap: () => number;
    slideNodes: () => HTMLElement[];
};
export declare function EmblaCarousel(sliderRoot: HTMLElement, userOptions?: UserOptions): EmblaCarousel;
export default EmblaCarousel;
export { UserOptions };

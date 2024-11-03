/// <reference lib="es2015" />

export = fetchProgress;

declare function fetchProgress(initOptions?: fetchProgress.FetchProgressInitOptions): fetchProgress.FetchProgressInterceptor;

declare namespace fetchProgress {
    export function isFetchProgressSupported(): boolean;
    export type FetchProgressInterceptor = (response: Response) => Promise<Response>;

    export interface FetchProgressData {
        length: number;
        transferred: number;
        speed: number;
        initial: boolean;
        emitDelay: number;
        eventStart: number;
        percentage: number;
        getRemainingBytes(): number;
        getEta(): number;
    }

    export interface FetchProgressInitOptions {
        defaultSize?: number;
        emitDelay?: number;
        onProgress?: (progress: FetchProgressData) => void;
        onComplete?: () => void;
        onError?: (error: Error) => void;
    }
}


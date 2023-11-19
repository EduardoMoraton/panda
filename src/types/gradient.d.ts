declare module "stripe-gradient" {
    class Gradient {
        constructor(...t: any[]);
        scrollingTimeout: number;
        isScrolling: boolean;
        width: number;
        xSegCount: number;
        ySegCount: number;
        isMetaKey: any;
        isMouseDown: boolean;
        last: any;
        isLoadedClass: boolean;
        el: any;
        connect(): Promise<void>;
        shaderFiles: {
            vertex: string;
            noise: string;
            blend: string;
            fragment: string;
        };
        conf: {
            presetName: string;
            wireframe: boolean;
            density: number[];
            zoom: number;
            rotation: number;
            playing: boolean;
        };
        minigl: MiniGl;
        computedCanvasStyle: CSSStyleDeclaration;
        disconnect(): void;
        initMaterial(): any;
        uniforms: {
            u_time: any;
            u_shadow_power: any;
            u_darken_top: any;
            u_active_colors: any;
            u_global: any;
            u_vertDeform: any;
            u_baseColor: any;
            u_waveLayers: any;
        };
        vertexShader: string;
        initMesh(): void;
        material: any;
        geometry: any;
        mesh: any;
        shouldSkipFrame(e: any): true;
        updateFrequency(e: any): void;
        toggleColor(index: any): void;
        showGradientLegend(): void;
        isGradientLegendVisible: boolean;
        hideGradientLegend(): void;
        init(): void;
        waitForCssVars(): any;
        sectionColors: number[] | number[][];
        initGradient(selector: string): unknown
        initGradientColors(): void;
    }
    class MiniGl {
        constructor(canvas: any, width: any, height: any, debug?: boolean);
        canvas: any;
        gl: any;
        meshes: any[];
        debug: (e: any, ...args: any[]) => void;
        commonUniforms: {
            projectionMatrix: any;
            modelViewMatrix: any;
            resolution: any;
            aspectRatio: any;
        };
        setSize(e?: number, t?: number): void;
        width: number;
        height: number;
        setOrthographicCamera(e?: number, t?: number, n?: number, i?: number, s?: number): void;
        render(): void;
    }
    function normalizeColor(hexCode: any): number[];
    function setInitialProperty(object: any, propertyName: any, val: any): any;
}

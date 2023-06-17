import React, {
    useRef,
    useState,
    useCallback,
    forwardRef,
    useImperativeHandle,
    useEffect
} from "react";
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    addBasePlugins,
    CanvasSnipperPlugin,
    mobileAndTabletCheck,


} from "webgi";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";




function WebgiViewer() {
    const canvasRef = useRef(null);

    const setupViewer = useCallback(async () => {

        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        })

        const manager = await viewer.addPlugin(AssetManagerPlugin)


        // await viewer.addPlugin(GBufferPlugin)
        // await viewer.addPlugin(new ProgressivePlugin(32))
        // await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm))
        // await viewer.addPlugin(GammaCorrectionPlugin)
        // await viewer.addPlugin(SSRPlugin)
        // await viewer.addPlugin(SSAOPlugin)
        // await viewer.addPlugin(BloomPlugin)

        await addBasePlugins(viewer);
        await viewer.addPlugin(CanvasSnipperPlugin);
        viewer.renderer.refreshPipeline();
        await manager.addFromPath("scene-black.glb");

        viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

        // viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

        // window.scroll(0, 0);
        // viewer.addEventListener('preFrame', () => { });

    }, []);


    useEffect(() => {
        setupViewer();
    }, []);


    return (
        <div id='webgi-canvas-container' >
            <canvas id="webgi-canvas" ref={canvasRef} />
        </div>
    );
}

export default WebgiViewer;
const createScene = function() {
    const scene = new BABYLON.Scene(engine);
    
    const camera = new BABYLON.ArcRotateCamera(
        "camera",
        0, Math.PI / 3,
        10,
        BABYLON.Vector3.Zero(),
        scene
    );
    camera.attachControl(canvas, true);
    
    const light = new BABYLON.HemisphericLight(
        "light",
        new BABYLON.Vector3(0, 1, 0),
        scene
    );
    // Create a box
    const box = BABYLON.MeshBuilder.CreateBox("box", {}, scene);
    
    // Create PBR material
    const pbr = new BABYLON.PBRMaterial("pbr", scene);
    pbr.metallic = 0.6;
    pbr.roughness = 0.4;
    pbr.albedoColor = new BABYLON.Color3(0.24, 0.79, 0.24);
    
    box.material = pbr;
    return scene;
};
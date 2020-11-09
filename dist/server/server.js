"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const port = 3035;
class App {
    constructor(port) {
        this.port = port;
        const app = express_1.default();
        app.use(express_1.default.static(path_1.default.join(__dirname, '../client')));
        app.use('/build/three.module.js', express_1.default.static(path_1.default.join(__dirname, '../../node_modules/three/build/three.module.js')));
        app.use('/jsm/controls/OrbitControls', express_1.default.static(path_1.default.join(__dirname, '../../node_modules/three/examples/jsm/controls/OrbitControls.js')));
        app.use('/jsm/loaders/GLTFLoader', express_1.default.static(path_1.default.join(__dirname, '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js')));
        app.use('/jsm/libs/inflate.module.min.js', express_1.default.static(path_1.default.join(__dirname, '../../node_modules/three/examples/jsm/libs/inflate.module.min.js')));
        app.use('/jsm/curves/NURBSCurve.js', express_1.default.static(path_1.default.join(__dirname, '../../node_modules/three/examples/jsm/curves/NURBSCurve.js')));
        app.use('/jsm/curves/NURBSUtils.js', express_1.default.static(path_1.default.join(__dirname, '../../node_modules/three/examples/jsm/curves/NURBSUtils.js')));
        app.use('/jsm/libs/dat.gui.module', express_1.default.static(path_1.default.join(__dirname, '../../node_modules/three/examples/jsm/libs/dat.gui.module.js')));
        app.use('/jsm/objects/Water.js', express_1.default.static(path_1.default.join(__dirname, '../../node_modules/three/examples/jsm/objects/Water.js')));
        //Assets
        app.use('/assets/objects/P_Seascape.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/P_Seascape.gltf')));
        app.use('/assets/objects/P_Shipwreck.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/P_Shipwreck.gltf')));
        app.use('/assets/objects/P_TreasureChestA.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/P_TreasureChestA.gltf')));
        app.use('/assets/objects/P_TreasureChestB.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/P_TreasureChestB.gltf')));
        app.use('/assets/objects/Fish_Shark.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/Fish_Shark.gltf')));
        app.use('/assets/objects/Fish_Turtle.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/Fish_Turtle.gltf')));
        app.use('/assets/objects/Fish_Barracuda.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/Fish_Barracuda.gltf')));
        app.use('/assets/objects/G_Fish_A.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/G_Fish_A.gltf')));
        app.use('/assets/objects/G_Fish_B.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/G_Fish_B.gltf')));
        app.use('/assets/objects/G_Fish_C.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/G_Fish_C.gltf')));
        app.use('/assets/objects/G_Fish_D.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/G_Fish_D.gltf')));
        app.use('/assets/objects/G_Fish_E.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/G_Fish_E.gltf')));
        app.use('/assets/objects/G_Fish_F.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/G_Fish_F.gltf')));
        app.use('/assets/objects/G_Seaweed_Big.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/G_Seaweed_Big.gltf')));
        app.use('/assets/objects/G_Seaweed_Bigger.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/G_Seaweed_Bigger.gltf')));
        app.use('/assets/objects/G_RockA.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/G_RockA.gltf')));
        app.use('/assets/objects/G_RockB.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/G_RockB.gltf')));
        app.use('/assets/objects/G_StarfishA.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/G_StarfishA.gltf')));
        app.use('/assets/objects/G_StarfishB.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/G_StarfishB.gltf')));
        app.use('/assets/objects/G_StarfishC.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/G_StarfishC.gltf')));
        app.use('/assets/objects/G_Coral_Green.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/G_Coral_Green.gltf')));
        app.use('/assets/objects/G_Coral_Yellow.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/G_Coral_Yellow.gltf')));
        app.use('/assets/objects/G_Coral_Blue.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/G_Coral_Blue.gltf')));
        app.use('/assets/objects/G_Coral_Pink.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/G_Coral_Pink.gltf')));
        app.use('/assets/objects/G_Coral_Red.gltf', express_1.default.static(path_1.default.join(__dirname, '../../assets/objects/G_Coral_Red.gltf')));
        app.use('/assets/textures/water.jpg', express_1.default.static(path_1.default.join(__dirname, '../../assets/textures/water.jpg')));
        this.server = new http_1.default.Server(app);
    }
    Start() {
        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}.`);
        });
    }
}
new App(port).Start();
//# sourceMappingURL=server.js.map
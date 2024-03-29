import {MarchingCubes, MarchingCube, Environment, Bounds, CameraControls} from '@react-three/drei';

const RESOLUTION = 6;
export const Torso = ({length, strengthScale}) => {
    return (
        new Array(RESOLUTION).fill(0).map((_, i) => {
            return <MarchingCube
                strength={strengthScale}
                color={"#00f"}
                position={[-i, 0, 0]}
            />;
        })
    );
}
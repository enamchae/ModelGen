import {MarchingCubes, MarchingCube, Environment, Bounds, CameraControls} from '@react-three/drei';

const RESOLUTION = 8;
export const Tail = ({length, strengthScale}) => {
    return (
        new Array(RESOLUTION - 1).fill(0).map((_, i) => {
            return <MarchingCube
                strength={(1 - i / RESOLUTION)**2 * strengthScale}
                subtract={1}
                color={"#f00"}
                position={[i / RESOLUTION, 0, 0]}
                scale={[length / RESOLUTION, 1, 1]}
            />;
        })
    );
};
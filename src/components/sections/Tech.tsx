import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Ball from '../canvas/Ball.tsx';

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        <Canvas
          frameloop="demand"
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
        >
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <OrbitControls enablePan={false} enableZoom={false} />
            <Ball imgUrl={technology.icon} />
          </div>
        ))}
        </Canvas>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");

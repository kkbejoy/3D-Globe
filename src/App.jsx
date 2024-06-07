import { useState, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import Earth from "../public/Earth";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center w-full h-screen">
        <div className="h-[100vh] w-[100vh]">
          <Canvas>
            <ambientLight />
            <OrbitControls />
            <Suspense fallback={null}>
              <Earth />
            </Suspense>
            <Environment preset="sunset" />
            <ContactShadows
              position={[0, -2.5, 0]}
              opacity={0.25}
              scale={50}
              blur={1}
              far={10}
              resolution={256}
              color="#000000"
            />
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default App;

"use client";

import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const AXIAL_TILT = THREE.MathUtils.degToRad(23.4);

export default function EarthMesh() {
  const ref = useRef<THREE.Mesh>(null);

  const [dayMap, bumpMap] = useLoader(THREE.TextureLoader, [
    "/textures/earth/earth-daymap.jpg",
    "/textures/earth/earth-topology.png",
  ]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group rotation={[AXIAL_TILT, 0, 0]}>
      <mesh ref={ref}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={dayMap}
          emissiveMap={dayMap}
          emissive={new THREE.Color(1, 1, 1)}
          emissiveIntensity={1}
          bumpMap={bumpMap}
          bumpScale={0.04}
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}

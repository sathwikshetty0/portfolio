"use client";
import React from "react";
import { MotionCanvas, motion } from "framer-motion-3d";

import { Canvas } from "@react-three/fiber";
import { BoxGeometry, MeshPhongMaterial } from "three";
import { MeshPortalMaterial } from "@react-three/drei";
import { LinearSRGBColorSpace } from "three";

const Cube = () => {
  return (
    <mesh position={[1.2, 0, 0]}>
      {/* args={[x,y,z]} */}
      <boxGeometry args={[2, 2, 4]} />

    </mesh>
  );
};

function Card() {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 10]} />
      <Cube />
    </Canvas>
  );
}

export default Card;

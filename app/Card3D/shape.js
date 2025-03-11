import { useFrame } from '@react-three/fiber'
import React, {  useMemo, useEffect } from 'react'
     import { useRef } from 'react'
            import { Vector3, BufferGeometry, DoubleSide, BoxGeometry } from 'three'

           function Polyhedron({position , color}) {
               

                const geometry = useMemo(() => {
                    let g = new BoxGeometry(1,1,1)
                    
                    g.computeVertexNormals()
                    return g
                }, [])

                useEffect(() => {
                    
                }, [])
                const meshRef = useRef();

                useFrame((state) => {
                    meshRef.current.rotation.x += 0.01; // Rotate on x-axis
                    meshRef.current.rotation.z += 0.01;
                    
                    
                    
                })

                return (
                    <mesh ref={meshRef} geometry={geometry} position={position} >
                        <meshNormalMaterial  color={color}/>
                    </mesh>
                )
            }

            export default function Scene (){
                return (
                    <>
                    <Polyhedron position={[0, 0, 3]} color={"red"}/>
                   
                    </>
                );
            }
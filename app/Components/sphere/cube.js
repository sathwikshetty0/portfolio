"use client";import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

const GlowingCube = ({position}) => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Basic Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Create a Cube with emissive material
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({
            color: 0x0077ff,
            emissive: 0xae77ff,  // Emissive color matches the base color
            emissiveIntensity: 5, // Increase intensity for more glow
            metalness: 0.7,
            roughness: 0.2
        });
        // const shader = new THREE.ShaderMaterial({
        //     vertexShader:`
        //     `
        // })
        const cube = new THREE.Mesh(geometry, material );
        cube.position.set(position.x, position.y, position.z);
        scene.add(cube);

        // Add Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); // Lower ambient light to enhance the cube's glow
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 0.8); // Increased point light to better illuminate surroundings
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        // Add Orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);

        // Position the Camera
        camera.position.z = 3;

        // Post-Processing for Bloom Effect
        const renderScene = new RenderPass(scene, camera);
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            .453, // Increased strength for stronger bloom
            0.5, // Radius
            0.3// Threshold
        );

        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            controls.update();
            composer.render();
        };
        animate();

        // Responsive Design
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            composer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default GlowingCube;

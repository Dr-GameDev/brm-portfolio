'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleSystem: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const sceneRef = useRef<{
        scene: THREE.Scene;
        camera: THREE.PerspectiveCamera;
        renderer: THREE.WebGLRenderer;
        particles: THREE.Points[];
        shapes: THREE.Mesh[];
        animationId: number;
    } | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true,
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Crimson particle system
        const createParticleSystem = (color: number, count: number, speed: number) => {
            const particles = new THREE.BufferGeometry();
            const positions = new Float32Array(count * 3);
            const velocities: THREE.Vector3[] = [];

            for (let i = 0; i < count; i++) {
                positions[i * 3] = (Math.random() - 0.5) * 30;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

                velocities.push(
                    new THREE.Vector3(
                        (Math.random() - 0.5) * speed,
                        (Math.random() - 0.5) * speed,
                        (Math.random() - 0.5) * speed
                    )
                );
            }

            particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

            const material = new THREE.PointsMaterial({
                color: color,
                size: 0.05,
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending,
            });

            const particleSystem = new THREE.Points(particles, material);
            (particleSystem as any).velocities = velocities;
            return particleSystem;
        };

        // Create multiple particle systems
        const particleSystems = [
            createParticleSystem(0xff0040, 200, 0.01), // Crimson red
            createParticleSystem(0x00d4ff, 100, 0.008), // Electric blue
            createParticleSystem(0x8000ff, 80, 0.006), // Electric purple
            createParticleSystem(0x00ff80, 60, 0.012), // Electric green
        ];

        particleSystems.forEach(system => scene.add(system));

        // Futuristic geometric shapes
        const shapes: THREE.Mesh[] = [];
        const geometries = [
            new THREE.BoxGeometry(0.8, 0.8, 0.8),
            new THREE.SphereGeometry(0.5, 12, 12),
            new THREE.ConeGeometry(0.4, 1, 8),
            new THREE.OctahedronGeometry(0.6),
            new THREE.TetrahedronGeometry(0.7),
        ];

        for (let i = 0; i < 15; i++) {
            const geometry = geometries[Math.floor(Math.random() * geometries.length)]!;

            // Wireframe material with glowing effect
            const material = new THREE.MeshBasicMaterial({
                color: i % 4 === 0 ? 0xff0040 :
                    i % 4 === 1 ? 0x00d4ff :
                        i % 4 === 2 ? 0x8000ff : 0x00ff80,
                transparent: true,
                opacity: 0.15,
                wireframe: true,
            });

            const shape = new THREE.Mesh(geometry, material);
            shape.position.set(
                (Math.random() - 0.5) * 25,
                (Math.random() - 0.5) * 25,
                (Math.random() - 0.5) * 25
            );

            // Random rotation speeds
            (shape as any).rotationSpeed = {
                x: (Math.random() - 0.5) * 0.02,
                y: (Math.random() - 0.5) * 0.02,
                z: (Math.random() - 0.5) * 0.02,
            };

            shapes.push(shape);
            scene.add(shape);
        }

        // Data streams (lines connecting points)
        const createDataStream = () => {
            const points = [];
            for (let i = 0; i < 20; i++) {
                points.push(new THREE.Vector3(
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20
                ));
            }

            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const material = new THREE.LineBasicMaterial({
                color: 0xff0040,
                transparent: true,
                opacity: 0.3,
            });

            return new THREE.Line(geometry, material);
        };

        const dataStreams: THREE.Line[] = [];
        for (let i = 0; i < 5; i++) {
            const stream = createDataStream();
            dataStreams.push(stream);
            scene.add(stream);
        }

        camera.position.z = 12;

        // Animation loop
        let time = 0;
        const animate = () => {
            const animationId = requestAnimationFrame(animate);
            time += 0.01;

            // Update particle systems
            particleSystems.forEach((system, systemIndex) => {
                const positionAttribute = system.geometry.attributes.position;
                if (!positionAttribute) return;
                
                const positions = positionAttribute.array as Float32Array;
                const velocities = (system as any).velocities as THREE.Vector3[];
                const count = positions.length / 3;

                for (let i = 0; i < count; i++) {
                    const velocity = velocities[i];
                    if (!velocity) continue;
                    
                    positions[i * 3] += velocity.x;
                    positions[i * 3 + 1] += velocity.y;
                    positions[i * 3 + 2] += velocity.z;

                    // Boundary wrapping
                    if (positions[i * 3]! > 15) positions[i * 3] = -15;
                    if (positions[i * 3]! < -15) positions[i * 3] = 15;
                    if (positions[i * 3 + 1]! > 15) positions[i * 3 + 1] = -15;
                    if (positions[i * 3 + 1]! < -15) positions[i * 3 + 1] = 15;
                    if (positions[i * 3 + 2]! > 15) positions[i * 3 + 2] = -15;
                    if (positions[i * 3 + 2]! < -15) positions[i * 3 + 2] = 15;
                }

                positionAttribute.needsUpdate = true;
                system.rotation.y += 0.001 * (systemIndex + 1);
                system.rotation.x += 0.0005 * (systemIndex + 1);
            });

            // Animate geometric shapes
            shapes.forEach((shape) => {
                const rotSpeed = (shape as any).rotationSpeed;
                shape.rotation.x += rotSpeed.x;
                shape.rotation.y += rotSpeed.y;
                shape.rotation.z += rotSpeed.z;

                // Floating motion
                shape.position.y += Math.sin(time + shape.position.x) * 0.002;
            });

            // Animate data streams
            dataStreams.forEach((stream, index) => {
                stream.rotation.x += 0.002 * (index + 1);
                stream.rotation.y += 0.001 * (index + 1);

                // Pulse effect
                const material = stream.material as THREE.LineBasicMaterial;
                material.opacity = 0.2 + Math.sin(time * 2 + index) * 0.2;
            });

            // Camera gentle movement
            camera.position.x = Math.sin(time * 0.1) * 2;
            camera.position.y = Math.cos(time * 0.15) * 1;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
            sceneRef.current = { scene, camera, renderer, particles: particleSystems, shapes, animationId };
        };

        animate();

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (sceneRef.current) {
                cancelAnimationFrame(sceneRef.current.animationId);
            }
            renderer.dispose();

            // Clean up geometries and materials
            geometries.forEach(geometry => geometry.dispose());
            particleSystems.forEach(system => {
                system.geometry.dispose();
                (system.material as THREE.Material).dispose();
            });
            shapes.forEach(shape => {
                shape.geometry.dispose();
                (shape.material as THREE.Material).dispose();
            });
            dataStreams.forEach(stream => {
                stream.geometry.dispose();
                (stream.material as THREE.Material).dispose();
            });
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-10"
            style={{ pointerEvents: 'none' }}
        />
    );
};

export default ParticleSystem;
import * as THREE from 'three';


export interface Project {
    id: string;
    title: string;
    category: 'Web Development' | 'Networking' | 'Graphic Design';
    description: string;
    technologies: string[];
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
    color: string;
}

export interface Skill {
    name: string;
    level: number;
    category: 'frontend' | 'backend' | 'design' | 'networking';
}

export interface MousePosition {
    x: number;
    y: number;
}

export interface ThreeScene {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
}
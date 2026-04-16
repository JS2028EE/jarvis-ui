import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.161/build/three.module.js";

let scene, camera, renderer, globe;

export function initWorld(canvas) {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true
  });

  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry = new THREE.SphereGeometry(5, 64, 64);
  const material = new THREE.MeshBasicMaterial({
    color: 0x00f5ff,
    wireframe: true
  });

  globe = new THREE.Mesh(geometry, material);
  scene.add(globe);

  camera.position.z = 12;

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  globe.rotation.y += 0.002;
  globe.rotation.x += 0.001;

  renderer.render(scene, camera);
}

// CLICK INTERACTION (future expansion hook)
export function worldClick() {
  return "WORLD NODE SELECTED: DATA STREAM ACTIVE";
}

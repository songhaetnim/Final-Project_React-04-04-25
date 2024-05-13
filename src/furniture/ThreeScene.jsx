import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mount = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, cube;

    // Scene, camera, renderer 생성
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);

    // 가구 모델을 위한 geometry와 material 생성
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // 애니메이션 루프
    const animate = () => {
      requestAnimationFrame(animate);

      // 가구 회전
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // 컴포넌트가 unmount될 때 정리
    return () => {
      mount.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mount} />;
};

export default ThreeScene;

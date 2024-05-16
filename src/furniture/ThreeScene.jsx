import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const mount = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, cube, sphere, triangle, square;

    // 씬, 카메라, 렌더러 초기화
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);

    // BoxGeometry를 사용하여 큐브 생성
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // SphereGeometry를 사용하여 동그라미 생성
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    
    // BufferGeometry를 사용하여 세모 생성
    const triangleGeometry = new THREE.BufferGeometry();
    const vertices = [
      new THREE.Vector3(-1, -1, 0),
      new THREE.Vector3(1, -1, 0),
      new THREE.Vector3(0, 1, 0),
    ];
    triangleGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
    const triangleMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    triangle = new THREE.Mesh(triangleGeometry, triangleMaterial);
    scene.add(triangle);

    // BoxGeometry를 사용하여 네모 생성
    const squareGeometry = new THREE.BoxGeometry(2, 2, 2); // 크기 지정
    const squareMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 }); // 노란색
    square = new THREE.Mesh(squareGeometry, squareMaterial);
    scene.add(square);

    camera.position.z = 5;

    // 애니메이션 함수 정의
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01; // 큐브 회전
      cube.rotation.y += 0.01;
      sphere.rotation.x += 0.01; // 동그라미 회전
      sphere.rotation.y += 0.01;
      triangle.rotation.z += 0.01; // 세모 회전
      square.rotation.x += 0.01; // 네모도 회전
      renderer.render(scene, camera);
    };

    animate(); // 애니메이션 실행

    // 컴포넌트가 언마운트될 때 정리
    return () => {
      mount.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mount} />; // 씬을 렌더링할 DOM 요소
};

export default ThreeScene;

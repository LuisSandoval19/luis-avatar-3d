import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import Avatar from './Avatar';

function AvatarScene({ animationState }) {
  const groupRef = useRef();
  const avatarRef = useRef();

  useFrame(({ camera }) => {
    if (groupRef.current) {
      if (animationState === 'idle') {
        groupRef.current.rotation.y += 0.002;
      }
    }
  });

  const handleExportGLB = async () => {
    try {
      const { GLTFExporter } = await import('three/examples/jsm/exporters/GLTFExporter.js');
      const exporter = new GLTFExporter();
      
      exporter.parse(
        avatarRef.current,
        (gltf) => {
          const json = JSON.stringify(gltf, null, 2);
          const blob = new Blob([json], { type: 'application/octet-stream' });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'luis-avatar-3d.glb';
          link.click();
        },
        (error) => {
          console.error('Error exportando GLB:', error);
          alert('Error al exportar el avatar');
        }
      );
    } catch (error) {
      console.error('Error:', error);
      alert('Por favor, instala three para la exportación');
    }
  };

  return (
    <>
      {/* Iluminación */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 7]} intensity={1} />
      <pointLight position={[-5, 5, -5]} intensity={0.5} />

      {/* Environment para mejor reflejo */}
      <Environment preset="sunset" />

      {/* Controles de órbita */}
      <OrbitControls
        autoRotate
        autoRotateSpeed={2}
        enableZoom={true}
        enablePan={false}
        minDistance={2}
        maxDistance={8}
      />

      {/* Grupo del avatar */}
      <group ref={groupRef}>
        <Avatar animationState={animationState} ref={avatarRef} />
      </group>

      {/* Plano base */}
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>
    </>
  );
}

export default AvatarScene;

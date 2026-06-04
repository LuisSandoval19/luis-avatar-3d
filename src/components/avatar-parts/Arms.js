import React from 'react';

function Arms({ position }) {
  return (
    <group position={position}>
      {/* Brazo izquierdo */}
      <group position={[-0.2, 0.25, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.12, 0.35, 0.14]} />
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>
        <mesh position={[0, -0.35, 0]}>
          <boxGeometry args={[0.1, 0.3, 0.12]} />
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>
        <mesh position={[0, -0.65, 0]}>
          <boxGeometry args={[0.08, 0.1, 0.1]} />
          <meshStandardMaterial
            color="#f5a080"
            metalness={0}
            roughness={0.8}
          />
        </mesh>
        <mesh position={[0, -0.52, 0]}>
          <boxGeometry args={[0.12, 0.05, 0.14]} />
          <meshStandardMaterial
            color="#e8e8e8"
            metalness={0}
            roughness={0.7}
          />
        </mesh>
      </group>

      {/* Brazo derecho */}
      <group position={[0.2, 0.25, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.12, 0.35, 0.14]} />
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>
        <mesh position={[0, -0.35, 0]}>
          <boxGeometry args={[0.1, 0.3, 0.12]} />
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>
        <mesh position={[0, -0.65, 0]}>
          <boxGeometry args={[0.08, 0.1, 0.1]} />
          <meshStandardMaterial
            color="#f5a080"
            metalness={0}
            roughness={0.8}
          />
        </mesh>
        <mesh position={[0, -0.52, 0]}>
          <boxGeometry args={[0.12, 0.05, 0.14]} />
          <meshStandardMaterial
            color="#e8e8e8"
            metalness={0}
            roughness={0.7}
          />
        </mesh>
      </group>
    </group>
  );
}

export default Arms;

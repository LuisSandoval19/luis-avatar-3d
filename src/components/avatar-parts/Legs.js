import React from 'react';

function Legs({ position }) {
  return (
    <group position={position}>
      {/* Pierna izquierda */}
      <group position={[-0.12, 0.3, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.12, 0.4, 0.14]} />
          <meshStandardMaterial
            color="#0a0a0a"
            metalness={0}
            roughness={0.9}
          />
        </mesh>
        <mesh position={[0, -0.4, 0]}>
          <boxGeometry args={[0.1, 0.35, 0.12]} />
          <meshStandardMaterial
            color="#0a0a0a"
            metalness={0}
            roughness={0.9}
          />
        </mesh>
        <mesh position={[0, -0.75, 0.02]}>
          <boxGeometry args={[0.1, 0.08, 0.16]} />
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.3}
            roughness={0.5}
          />
        </mesh>
      </group>

      {/* Pierna derecha */}
      <group position={[0.12, 0.3, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.12, 0.4, 0.14]} />
          <meshStandardMaterial
            color="#0a0a0a"
            metalness={0}
            roughness={0.9}
          />
        </mesh>
        <mesh position={[0, -0.4, 0]}>
          <boxGeometry args={[0.1, 0.35, 0.12]} />
          <meshStandardMaterial
            color="#0a0a0a"
            metalness={0}
            roughness={0.9}
          />
        </mesh>
        <mesh position={[0, -0.75, 0.02]}>
          <boxGeometry args={[0.1, 0.08, 0.16]} />
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.3}
            roughness={0.5}
          />
        </mesh>
      </group>
    </group>
  );
}

export default Legs;

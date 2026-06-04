import React from 'react';

function Body({ position }) {
  return (
    <group position={position}>
      {/* Torso - Chaqueta negra */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.35, 0.55, 0.22]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>

      {/* Pecho - Camisa gris claro */}
      <mesh position={[0, 0.05, 0.11]}>
        <boxGeometry args={[0.22, 0.35, 0.15]} />
        <meshStandardMaterial
          color="#c8c8c8"
          metalness={0}
          roughness={0.7}
        />
      </mesh>

      {/* Corbata azul marino */}
      <mesh position={[0, -0.05, 0.16]}>
        <boxGeometry args={[0.06, 0.25, 0.08]} />
        <meshStandardMaterial
          color="#001a4d"
          metalness={0.2}
          roughness={0.6}
        />
      </mesh>

      {/* Botones de chaqueta */}
      {[0.15, -0.15].map((offset, i) => (
        <mesh key={i} position={[offset, 0.1, 0.18]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial
            color="#333333"
            metalness={0.5}
            roughness={0.4}
          />
        </mesh>
      ))}

      {/* Cintura - Cinturón negro */}
      <mesh position={[0, -0.35, 0]}>
        <boxGeometry args={[0.38, 0.05, 0.24]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.3}
          roughness={0.6}
        />
      </mesh>

      {/* Hebilla del cinturón */}
      <mesh position={[0, -0.35, 0.12]}>
        <boxGeometry args={[0.06, 0.04, 0.02]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

export default Body;

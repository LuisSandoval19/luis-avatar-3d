import React from 'react';

function Accessories({ position }) {
  return (
    <group position={position}>
      {/* Maletín en la mano derecha */}
      <group position={[0.25, -0.5, 0.05]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.15, 0.12, 0.25]} />
          <meshStandardMaterial
            color="#6b4423"
            metalness={0.1}
            roughness={0.7}
          />
        </mesh>
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[0.15, 0.04, 0.25]} />
          <meshStandardMaterial
            color="#5a3a1f"
            metalness={0.1}
            roughness={0.6}
          />
        </mesh>
        <mesh position={[0, 0.12, 0]}>
          <boxGeometry args={[0.02, 0.15, 0.08]} />
          <meshStandardMaterial
            color="#4a2a1f"
            metalness={0}
            roughness={0.8}
          />
        </mesh>
        <mesh position={[0, 0.08, 0]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial
            color="#d4af37"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* Pañuelo de bolsillo blanco */}
      <mesh position={[0.18, 0.55, 0.15]}>
        <boxGeometry args={[0.03, 0.04, 0.06]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={0}
          roughness={0.5}
        />
      </mesh>

      {/* Reloj en muñeca izquierda */}
      <group position={[-0.22, -0.5, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.08, 0.04, 0.12]} />
          <meshStandardMaterial
            color="#4a4a4a"
            metalness={0.2}
            roughness={0.6}
          />
        </mesh>
        <mesh position={[0, 0.02, 0.08]}>
          <cylinderGeometry args={[0.04, 0.04, 0.02, 32]} />
          <meshStandardMaterial
            color="#e8e8e8"
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>
      </group>
    </group>
  );
}

export default Accessories;

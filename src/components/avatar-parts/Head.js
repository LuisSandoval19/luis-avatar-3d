import React from 'react';

function Head({ position }) {
  return (
    <group position={position}>
      {/* Cara */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial
          color="#f5a080"
          metalness={0}
          roughness={0.8}
        />
      </mesh>

      {/* Barba */}
      <mesh position={[0, -0.15, 0.25]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color="#3d2817"
          metalness={0}
          roughness={0.9}
        />
      </mesh>

      {/* Pelo rizado oscuro */}
      <group>
        {/* Parte superior del cabello */}
        <mesh position={[0, 0.35, 0]}>
          <sphereGeometry args={[0.38, 32, 32]} />
          <meshStandardMaterial
            color="#1a1410"
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>

        {/* Rizos adicionales */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const x = Math.cos(angle) * 0.35;
          const z = Math.sin(angle) * 0.35;
          return (
            <mesh key={i} position={[x, 0.25, z]}>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshStandardMaterial
                color="#0d0a07"
                metalness={0}
                roughness={0.95}
              />
            </mesh>
          );
        })}
      </group>

      {/* Ojos */}
      <mesh position={[-0.12, 0.1, 0.32]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#5a7a4a" metalness={0.3} roughness={0.6} />
      </mesh>

      <mesh position={[0.12, 0.1, 0.32]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#5a7a4a" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* Pupilas */}
      <mesh position={[-0.12, 0.1, 0.38]}>
        <sphereGeometry args={[0.025, 12, 12]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      <mesh position={[0.12, 0.1, 0.38]}>
        <sphereGeometry args={[0.025, 12, 12]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Nariz */}
      <mesh position={[0, 0.05, 0.35]}>
        <boxGeometry args={[0.06, 0.08, 0.08]} />
        <meshStandardMaterial color="#e89060" metalness={0} roughness={0.85} />
      </mesh>

      {/* Boca */}
      <mesh position={[0, -0.1, 0.32]}>
        <boxGeometry args={[0.12, 0.04, 0.04]} />
        <meshStandardMaterial color="#a85040" metalness={0} roughness={0.8} />
      </mesh>

      {/* Orejas */}
      <mesh position={[-0.35, 0.1, 0]}>
        <boxGeometry args={[0.08, 0.2, 0.12]} />
        <meshStandardMaterial
          color="#f5a080"
          metalness={0}
          roughness={0.8}
        />
      </mesh>

      <mesh position={[0.35, 0.1, 0]}>
        <boxGeometry args={[0.08, 0.2, 0.12]} />
        <meshStandardMaterial
          color="#f5a080"
          metalness={0}
          roughness={0.8}
        />
      </mesh>
    </group>
  );
}

export default Head;

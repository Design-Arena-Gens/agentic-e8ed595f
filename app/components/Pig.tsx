import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Pig({ position }: { position: [number, number, number] }) {
  const pigRef = useRef<THREE.Group>(null)
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    timeRef.current += delta

    if (pigRef.current) {
      // Scared shaking animation
      const shake = Math.sin(timeRef.current * 12) * 0.03
      pigRef.current.rotation.y = Math.PI + shake
      pigRef.current.position.y = position[1] + Math.abs(Math.sin(timeRef.current * 10)) * 0.05
    }
  })

  return (
    <group ref={pigRef} position={position}>
      {/* Body */}
      <mesh castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#FFB6C1" roughness={0.6} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.3, 0.5]} castShadow>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#FFB6C1" roughness={0.6} />
      </mesh>

      {/* Snout */}
      <mesh position={[0, 0.25, 0.75]} castShadow>
        <cylinderGeometry args={[0.15, 0.18, 0.15]} />
        <meshStandardMaterial color="#FF69B4" roughness={0.5} />
      </mesh>

      {/* Nostrils */}
      <mesh position={[-0.06, 0.25, 0.82]} castShadow>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[0.06, 0.25, 0.82]} castShadow>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Eyes - scared wide open */}
      <mesh position={[-0.15, 0.4, 0.65]} castShadow>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      <mesh position={[-0.15, 0.4, 0.7]} castShadow>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.15, 0.4, 0.65]} castShadow>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      <mesh position={[0.15, 0.4, 0.7]} castShadow>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Ears */}
      <mesh position={[-0.2, 0.55, 0.4]} rotation={[0.5, -0.5, -0.3]} castShadow>
        <coneGeometry args={[0.12, 0.2, 4]} />
        <meshStandardMaterial color="#FFB6C1" />
      </mesh>
      <mesh position={[0.2, 0.55, 0.4]} rotation={[0.5, 0.5, 0.3]} castShadow>
        <coneGeometry args={[0.12, 0.2, 4]} />
        <meshStandardMaterial color="#FFB6C1" />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.25, -0.4, 0.2]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.3]} />
        <meshStandardMaterial color="#FFB6C1" />
      </mesh>
      <mesh position={[0.25, -0.4, 0.2]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.3]} />
        <meshStandardMaterial color="#FFB6C1" />
      </mesh>
      <mesh position={[-0.25, -0.4, -0.2]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.3]} />
        <meshStandardMaterial color="#FFB6C1" />
      </mesh>
      <mesh position={[0.25, -0.4, -0.2]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.3]} />
        <meshStandardMaterial color="#FFB6C1" />
      </mesh>

      {/* Curly tail */}
      <mesh position={[0, 0.1, -0.5]} rotation={[0, 0, Math.PI / 4]} castShadow>
        <torusGeometry args={[0.1, 0.03, 8, 16, Math.PI * 1.5]} />
        <meshStandardMaterial color="#FFB6C1" />
      </mesh>
    </group>
  )
}

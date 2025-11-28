import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function WoodenHouse({ position }: { position: [number, number, number] }) {
  const houseRef = useRef<THREE.Group>(null)
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    timeRef.current += delta
    if (houseRef.current) {
      // House shaking from wind
      const shake = Math.sin(timeRef.current * 8) * 0.02
      houseRef.current.rotation.z = shake
      houseRef.current.position.x = position[0] + shake * 0.5
    }
  })

  return (
    <group ref={houseRef} position={position}>
      {/* Main house body */}
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 3.5, 0]} castShadow receiveShadow>
        <coneGeometry args={[2.5, 2, 4]} />
        <meshStandardMaterial color="#654321" roughness={0.7} />
      </mesh>

      {/* Door */}
      <mesh position={[0, 0.8, 1.51]} castShadow>
        <boxGeometry args={[0.8, 1.6, 0.1]} />
        <meshStandardMaterial color="#5C4033" />
      </mesh>

      {/* Window - left */}
      <mesh position={[-0.8, 1.8, 1.51]} castShadow>
        <boxGeometry args={[0.6, 0.6, 0.05]} />
        <meshStandardMaterial
          color="#ADD8E6"
          transparent
          opacity={0.6}
          emissive="#FFD700"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Window - right */}
      <mesh position={[0.8, 1.8, 1.51]} castShadow>
        <boxGeometry args={[0.6, 0.6, 0.05]} />
        <meshStandardMaterial
          color="#ADD8E6"
          transparent
          opacity={0.6}
          emissive="#FFD700"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Wood planks details */}
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[0, 0.5 + i * 0.6, 1.52]} castShadow>
          <boxGeometry args={[3, 0.1, 0.05]} />
          <meshStandardMaterial color="#6B4423" />
        </mesh>
      ))}
    </group>
  )
}

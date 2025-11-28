import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Wolf({ position }: { position: [number, number, number] }) {
  const wolfRef = useRef<THREE.Group>(null)
  const headRef = useRef<THREE.Group>(null)
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    timeRef.current += delta

    if (headRef.current) {
      // Head bobbing and blowing animation
      const blow = Math.sin(timeRef.current * 4) * 0.15
      headRef.current.scale.x = 1 + blow * 0.3
      headRef.current.position.x = 0.6 + blow * 0.2
    }

    if (wolfRef.current) {
      // Slight body movement
      wolfRef.current.position.y = position[1] + Math.sin(timeRef.current * 2) * 0.05
    }
  })

  return (
    <group ref={wolfRef} position={position}>
      {/* Body */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[1.5, 1, 1]} />
        <meshStandardMaterial color="#4A4A4A" roughness={0.9} />
      </mesh>

      {/* Head group */}
      <group ref={headRef} position={[0, 0, 0]}>
        {/* Head */}
        <mesh position={[0.8, 1.2, 0]} castShadow>
          <boxGeometry args={[0.8, 0.7, 0.7]} />
          <meshStandardMaterial color="#3A3A3A" roughness={0.9} />
        </mesh>

        {/* Snout */}
        <mesh position={[1.3, 1.1, 0]} castShadow>
          <boxGeometry args={[0.5, 0.4, 0.5]} />
          <meshStandardMaterial color="#2A2A2A" roughness={0.9} />
        </mesh>

        {/* Nose */}
        <mesh position={[1.55, 1.15, 0]} castShadow>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>

        {/* Eyes */}
        <mesh position={[1.05, 1.35, 0.25]} castShadow>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#FF0000" emissive="#FF0000" emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[1.05, 1.35, -0.25]} castShadow>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#FF0000" emissive="#FF0000" emissiveIntensity={0.5} />
        </mesh>

        {/* Ears */}
        <mesh position={[0.6, 1.6, 0.3]} rotation={[0, 0, -0.3]} castShadow>
          <coneGeometry args={[0.2, 0.4, 4]} />
          <meshStandardMaterial color="#3A3A3A" />
        </mesh>
        <mesh position={[0.6, 1.6, -0.3]} rotation={[0, 0, -0.3]} castShadow>
          <coneGeometry args={[0.2, 0.4, 4]} />
          <meshStandardMaterial color="#3A3A3A" />
        </mesh>
      </group>

      {/* Legs */}
      <mesh position={[-0.4, 0.3, 0.3]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.6]} />
        <meshStandardMaterial color="#3A3A3A" />
      </mesh>
      <mesh position={[-0.4, 0.3, -0.3]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.6]} />
        <meshStandardMaterial color="#3A3A3A" />
      </mesh>
      <mesh position={[0.4, 0.3, 0.3]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.6]} />
        <meshStandardMaterial color="#3A3A3A" />
      </mesh>
      <mesh position={[0.4, 0.3, -0.3]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.6]} />
        <meshStandardMaterial color="#3A3A3A" />
      </mesh>

      {/* Tail */}
      <mesh position={[-0.8, 1, 0]} rotation={[0, 0, -0.5]} castShadow>
        <cylinderGeometry args={[0.1, 0.15, 0.8]} />
        <meshStandardMaterial color="#4A4A4A" />
      </mesh>
    </group>
  )
}

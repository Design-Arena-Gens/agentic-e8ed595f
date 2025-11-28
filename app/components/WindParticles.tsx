import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function WindParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = 100

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = Math.random() * 10 - 8
      positions[i * 3 + 1] = Math.random() * 4
      positions[i * 3 + 2] = Math.random() * 4 - 2
      velocities[i] = Math.random() * 0.5 + 0.5
    }

    return { positions, velocities }
  }, [])

  useFrame((state, delta) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += particles.velocities[i] * delta * 8

        // Reset particle when it goes too far
        if (positions[i * 3] > 3) {
          positions[i * 3] = -8
          positions[i * 3 + 1] = Math.random() * 4
          positions[i * 3 + 2] = Math.random() * 4 - 2
        }
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#FFFFFF"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

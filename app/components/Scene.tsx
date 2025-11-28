import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import WoodenHouse from './WoodenHouse'
import Wolf from './Wolf'
import Pig from './Pig'
import WindParticles from './WindParticles'
import Ground from './Ground'

export default function Scene() {
  return (
    <group>
      <Ground />
      <WoodenHouse position={[0, 0, 0]} />
      <Pig position={[0, 1.2, 0.5]} />
      <Wolf position={[-5, 0, 0]} />
      <WindParticles />
    </group>
  )
}

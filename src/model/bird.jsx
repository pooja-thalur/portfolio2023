import {useEffect, useRef} from 'react'
import birdScene from '../assets/3d/bird.glb'
import { useGLTF, useAnimations } from '@react-three/drei'
import {useFrame } from '@react-three/fiber'

const Bird = () => {
    const {scene, animations} = useGLTF(birdScene);
    const birdRef = useRef();
    const {actions} = useAnimations(animations, birdRef);

    useEffect(() => {
      actions['Take 001'].play();

    }, []);

    useFrame(({clock, camera}) => {
      //update y position to simulate moving in sine wave
      // to depict the movement of a bird

      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.5 + 0.2;
      //check if an endpoint is reached
      if(birdRef.current.position.x > camera.position.x +10) {
        birdRef.current.rotation.y = Math.PI; //change dir backward by 180 deg
      }
      else if(birdRef.current.position.x < camera.position.x - 10){
        birdRef.current.rotation.y = 0;
      }
      
      if(birdRef.current.rotation.y === 0) {
        //move forward
        birdRef.current.position.x += 0.02;
        birdRef.current.position.z -= 0.02;
      }
      else{
        birdRef.current.position.x -= 0.02;
        birdRef.current.position.z += 0.02;
      }
    });

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref = {birdRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Bird
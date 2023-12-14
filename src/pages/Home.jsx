import React, { Suspense, useState } from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../model/island'
import Sky from '../model/sky'
import Plane from '../model/plane'
import Bird from '../model/bird'
import HomeInfo from '../components/HomeInfo'

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screeScale= null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    console.log("window.innerWidth", window.innerWidth);
    if(window.innerWidth <= 768) {
      screeScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
    }
    else{
      screeScale = [1, 1, 1];
      screenPosition = [0, -9.5, -43];
    }

    return [screeScale, screenPosition, rotation];

  }

  const adjustPlaneForScreenSize = () => {
    let screeScale, screenPosition;
    // let screenPosition = [0, -6.5, -43];

    if(window.innerWidth < 768) {
      screeScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    }
    else{
      screeScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screeScale, screenPosition];

  }

  const adjustBirdForScreenSize = () => {
    let screeScale= null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768) {
      screeScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
    }
    else{
      screeScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43];
    }

    return [screeScale, screenPosition, rotation];

  }

  const [ islandScale, islandPosition, rotation ] = adjustIslandForScreenSize();  
  const [ planeScale, planePosition ] = adjustPlaneForScreenSize();
  console.log("planePosition", planePosition );
  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-8 left-0 right-0 z-10 flex items-center justify-center'>
          {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas className={"w-full h-screen bg-transparent ${isRotating ? cursor-grabbing : cursor-grab}"}
      camera={{ near: 0.1, far: 1000}}>

      <Suspense fullback={<Loader />}>
        <directionalLight position={[1,1,1]} intensity ={ 1.7} />
        <ambientLight intensity={0.75}/>
        {/* <pointLight /> */} 
        {/* <spotLight /> */}
        <hemisphereLight skyColor="#b1e1ff" groundColor={"#000000"} intensity={0.5}/>
        <Bird />
        <Sky isRotating = {isRotating}/>

        <Island 
          position = {islandPosition}
          scale = {islandScale}
          rotation = {rotation}
          isRotating = {isRotating}
          setIsRotating = {setIsRotating}
          setCurrentStage = {setCurrentStage}
        />
        <Plane 
          isRotating = {isRotating}
          scale = {planeScale}
          position = {planePosition}
          rotation = {[0, 20, 0]}
        />
        
      </Suspense>
     
      </Canvas>
      <p>Made this with lot of effort, Please do go around and explore</p>
    </section>
  )
}

export default Home
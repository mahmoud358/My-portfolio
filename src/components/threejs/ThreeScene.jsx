import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, OrbitControls, Float, Text3D, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useCamera } from '../../context/camera-context';

// مكون التحكم في الكاميرا المحسن
const CameraController = () => {
  const { camera } = useThree();
  const { cameraState } = useCamera();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    // إعدادات الكاميرا من السياق
    const targetPosition = new THREE.Vector3(...cameraState.position);
    const currentPosition = camera.position;
    // انتقال سلس للكاميرا
    currentPosition.lerp(targetPosition, 0.02);
    // تحديث FOV
    camera.fov = THREE.MathUtils.lerp(camera.fov, cameraState.fov, 0.02);
    camera.updateProjectionMatrix();
    // حركة إضافية بناءً على الماوس
    const mouseOffset = new THREE.Vector3(
      mousePosition.x * 5,
      mousePosition.y * 5,
      0
    );
    camera.position.add(mouseOffset.multiplyScalar(0.01));
    // النظر إلى الهدف
    const target = new THREE.Vector3(...cameraState.target);
    camera.lookAt(target);
  });
  return null;
};

// مكون النجوم المتحركة المحسنة
const AnimatedStars = () => {
  const starsRef = useRef();
  
  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0003;
      starsRef.current.rotation.x += 0.0001;
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={150}
      depth={80}
      count={8000}
      factor={6}
      saturation={0.2}
      fade
      speed={0.8}
    />
  );
};

// مكون السحب الكونية
const CosmicClouds = () => {
  const cloudsRef = useRef();
  const [clouds] = useState(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 300,
        (Math.random() - 0.5) * 300,
        (Math.random() - 0.5) * 300
      ],
      size: Math.random() * 15 + 5,
      opacity: Math.random() * 0.3 + 0.1,
      color: new THREE.Color(
        Math.random() * 0.3 + 0.7,
        Math.random() * 0.2 + 0.3,
        Math.random() * 0.4 + 0.6
      )
    }));
  });

  // طباعة القيم لمرة واحدة فقط
  useEffect(() => {
    if (clouds && clouds.length > 0) {
      console.log('CosmicClouds materials:', clouds.map(c => ({ color: c.color, opacity: c.opacity })));
    }
  }, []);

  useFrame((state) => {
    if (cloudsRef.current) {
      cloudsRef.current.children.forEach((cloud, i) => {
        cloud.rotation.y += 0.001;
        cloud.position.y += Math.sin(state.clock.elapsedTime * 0.2 + i) * 0.05;
      });
    }
  });

  return (
    <group ref={cloudsRef}>
      {clouds.map((cloud) => (
        <Float
          key={cloud.id}
          speed={0.5}
          rotationIntensity={0.5}
          floatIntensity={1}
        >
          <mesh position={cloud.position}>
            <sphereGeometry args={[cloud.size, 16, 16]} />
            <meshBasicMaterial
              color={cloud.color || '#ffffff'}
              transparent={true}
              opacity={typeof cloud.opacity === 'number' ? cloud.opacity : 0.2}
              blending={THREE.AdditiveBlending || THREE.NormalBlending}
              side={THREE.FrontSide}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

// مكون الكواكب المتحركة المحسنة
const FloatingPlanets = () => {
  const planetsRef = useRef();
  const [planets] = useState(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 250,
        (Math.random() - 0.5) * 250,
        (Math.random() - 0.5) * 250
      ],
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.008 + 0.003,
      color: new THREE.Color(
        Math.random() * 0.6 + 0.4,
        Math.random() * 0.4 + 0.2,
        Math.random() * 0.8 + 0.2
      ),
      hasRing: Math.random() > 0.7
    }));
  });

  // طباعة القيم لمرة واحدة فقط
  useEffect(() => {
    if (planets && planets.length > 0) {
      console.log('FloatingPlanets materials:', planets.map(p => ({ color: p.color })));
    }
  }, []);

  useFrame((state) => {
    if (planetsRef.current) {
      planetsRef.current.children.forEach((planet, i) => {
        planet.rotation.y += planets[i].speed;
        planet.rotation.x += planets[i].speed * 0.3;
        planet.position.y += Math.sin(state.clock.elapsedTime * 0.3 + i) * 0.08;
      });
    }
  });

  return (
    <group ref={planetsRef}>
      {planets.map((planet) => (
        <Float
          key={planet.id}
          speed={1.5}
          rotationIntensity={1}
          floatIntensity={2.5}
        >
          <group position={planet.position}>
            <mesh>
              <sphereGeometry args={[planet.size, 32, 32]} />
              <meshStandardMaterial
                color={planet.color || '#ffffff'}
                emissive={planet.color || '#ffffff'}
                emissiveIntensity={0.3}
                metalness={0.9}
                roughness={0.1}
                side={THREE.FrontSide}
              />
            </mesh>
            {planet.hasRing && (
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[planet.size * 1.5, planet.size * 2, 32]} />
                <meshBasicMaterial
                  color={planet.color || '#ffffff'}
                  transparent={true}
                  opacity={0.4}
                  side={THREE.DoubleSide}
                  blending={THREE.AdditiveBlending || THREE.NormalBlending}
                />
              </mesh>
            )}
          </group>
        </Float>
      ))}
    </group>
  );
};

// مكون النيازك المتحركة
const ShootingStars = () => {
  const meteorsRef = useRef();
  const [meteors] = useState(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      startPosition: [
        (Math.random() - 0.5) * 400,
        (Math.random() - 0.5) * 400,
        (Math.random() - 0.5) * 400
      ],
      endPosition: [
        (Math.random() - 0.5) * 400,
        (Math.random() - 0.5) * 400,
        (Math.random() - 0.5) * 400
      ],
      speed: Math.random() * 0.02 + 0.01,
      delay: Math.random() * 10
    }));
  });

  useFrame((state) => {
    if (meteorsRef.current) {
      meteorsRef.current.children.forEach((meteor, i) => {
        const time = (state.clock.elapsedTime + meteors[i].delay) % 10;
        const progress = (time / 10) % 1;
        
        meteor.position.x = THREE.MathUtils.lerp(
          meteors[i].startPosition[0],
          meteors[i].endPosition[0],
          progress
        );
        meteor.position.y = THREE.MathUtils.lerp(
          meteors[i].startPosition[1],
          meteors[i].endPosition[1],
          progress
        );
        meteor.position.z = THREE.MathUtils.lerp(
          meteors[i].startPosition[2],
          meteors[i].endPosition[2],
          progress
        );
      });
    }
  });

  return (
    <group ref={meteorsRef}>
      {meteors.map((meteor) => (
        <group key={meteor.id} position={meteor.startPosition}>
          <mesh>
            <sphereGeometry args={[0.5, 8, 8]} />
            <meshBasicMaterial
              color="#FFD700"
            />
          </mesh>
          <mesh position={[0, 0, -2]}>
            <cylinderGeometry args={[0.1, 0.1, 4, 8]} />
            <meshBasicMaterial
              color="#FFD700"
              transparent
              opacity={0.6}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};

// مكون الكرات الملونة المتحركة (تقنيات البرمجة)
const TechSpheres = () => {
  const spheresRef = useRef();
  const [spheres] = useState([
    { position: [-60, 40, -60], color: "#61DAFB", size: 4, name: "React" },
    { position: [60, -40, -60], color: "#000000", size: 4, name: "Node.js" },
    { position: [-60, -40, 60], color: "#F7DF1E", size: 4, name: "JavaScript" },
    { position: [60, 40, 60], color: "#FF6B6B", size: 4, name: "Python" },
    { position: [0, 60, 0], color: "#4ECDC4", size: 4, name: "MongoDB" },
    { position: [0, -60, 0], color: "#45B7D1", size: 4, name: "Express" },
    { position: [80, 0, 0], color: "#FF6B35", size: 4, name: "HTML/CSS" },
    { position: [-80, 0, 0], color: "#8B5CF6", size: 4, name: "Tailwind" }
  ]);

  useFrame((state) => {
    if (spheresRef.current) {
      spheresRef.current.children.forEach((sphere, i) => {
        sphere.rotation.y += 0.008;
        sphere.rotation.x += 0.004;
        sphere.position.y += Math.sin(state.clock.elapsedTime * 0.4 + i) * 0.03;
      });
    }
  });

  return (
    <group ref={spheresRef}>
      {spheres.map((item, index) => (
        <Float
          key={index}
          speed={2.5}
          rotationIntensity={1.5}
          floatIntensity={4}
        >
          <group position={item.position}>
            <mesh>
            <sphereGeometry args={[item.size, 32, 32]} />
            <meshStandardMaterial
              color={item.color}
              emissive={item.color}
                emissiveIntensity={0.4}
                metalness={0.9}
                roughness={0.1}
              />
            </mesh>
            {/* هالة حول الكرة */}
            <mesh>
              <sphereGeometry args={[item.size * 1.3, 16, 16]} />
              <meshBasicMaterial
                color={item.color}
                transparent
                opacity={0.2}
                side={THREE.BackSide}
            />
          </mesh>
          </group>
        </Float>
      ))}
    </group>
  );
};

// مكون الجزيئات المتحركة المحسنة
const ParticleField = () => {
  const particlesRef = useRef();
  const [particles] = useState(() => {
    return Array.from({ length: 1500 }, () => ({
      position: [
        (Math.random() - 0.5) * 500,
        (Math.random() - 0.5) * 500,
        (Math.random() - 0.5) * 500
      ],
      velocity: [
        (Math.random() - 0.5) * 0.08,
        (Math.random() - 0.5) * 0.08,
        (Math.random() - 0.5) * 0.08
      ],
      size: Math.random() * 1.5 + 0.3,
      color: new THREE.Color(
        Math.random() * 0.5 + 0.5,
        Math.random() * 0.3 + 0.7,
        Math.random() * 0.8 + 0.2
      )
    }));
  });

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.children.forEach((particle, i) => {
        particle.position.x += particles[i].velocity[0];
        particle.position.y += particles[i].velocity[1];
        particle.position.z += particles[i].velocity[2];

        // إعادة تعيين الجزيئات التي تخرج من الحدود
        if (Math.abs(particle.position.x) > 250) {
          particle.position.x = -particle.position.x * 0.9;
        }
        if (Math.abs(particle.position.y) > 250) {
          particle.position.y = -particle.position.y * 0.9;
        }
        if (Math.abs(particle.position.z) > 250) {
          particle.position.z = -particle.position.z * 0.9;
        }
      });
    }
  });

  return (
    <group ref={particlesRef}>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial
            color={particle.color}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
};

// المكون الرئيسي للخلفية
const ThreeScene = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 60], fov: 75 }}
        style={{ 
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
          transition: 'background 1s ease-in-out'
        }}
      >
        {/* إضاءة محسنة */}
        <ambientLight intensity={0.4} />
        <pointLight position={[20, 20, 20]} intensity={1.2} color="#4ECDC4" />
        <pointLight position={[-20, -20, -20]} intensity={0.8} color="#FF6B6B" />
        <pointLight position={[0, 50, 0]} intensity={0.6} color="#45B7D1" />
        <spotLight
          position={[0, 100, 0]}
          angle={0.4}
          penumbra={1}
          intensity={1}
          color="#8B5CF6"
        />

        {/* تفعيل جميع المؤثرات */}
        <AnimatedStars />
        <CosmicClouds />
        <FloatingPlanets />
        <ShootingStars />
        <TechSpheres />
        <ParticleField />
        {/* <CameraController /> */}

        {/* تحكم الكاميرا */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;

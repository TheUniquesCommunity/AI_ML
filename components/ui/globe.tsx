"use client";

import { useEffect, useRef, useState } from "react";
import { Color, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/components/data/globe.json";

extend({ ThreeGlobe });

interface GlobeProps {
  globeConfig: Partial<typeof defaultProps>;
  data: ArcData[];
}

interface ArcData {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string;
  order?: number;
  arcAlt?: number;
}

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

const defaultProps = {
  pointSize: 1,
  atmosphereColor: "#ffffff",
  showAtmosphere: true,
  atmosphereAltitude: 0.1,
  polygonColor: "rgba(255,255,255,0.7)",
  globeColor: "#1d072e",
  emissive: "#000000",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  arcTime: 2000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
};

export function Globe({ globeConfig, data }: GlobeProps) {
  const [globeData, setGlobeData] = useState<ArcData[] | null>(null);
  const globeRef = useRef<any>(null);

  const _buildMaterial = () => {
    if (!globeRef.current) return;
    const globeMaterial = globeRef.current.globeMaterial?.();
    if (!globeMaterial) return;
  
    globeMaterial.color = new Color(defaultProps.globeColor);
    globeMaterial.emissive = new Color(defaultProps.emissive);
    globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity || 0.1;
    globeMaterial.shininess = defaultProps.shininess || 0.9;
  };
  useEffect(() => {
    if (!globeRef.current) return;
    _buildData();
    _buildMaterial();
  }, [globeRef.current]);

  

  const _buildData = () => {
    const arcs = data || [];
    const points: any[] = [];

    for (let arc of arcs) {
      const rgb = hexToRgb(arc.color);
      points.push({
        size: globeConfig.pointSize || defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: globeConfig.pointSize || defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }

    setGlobeData(points);
  };

  useEffect(() => {
    if (!globeRef.current || !globeData) return;
    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(globeConfig.showAtmosphere ?? defaultProps.showAtmosphere)
      .atmosphereColor(globeConfig.atmosphereColor || defaultProps.atmosphereColor)
      .atmosphereAltitude(globeConfig.atmosphereAltitude || defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => globeConfig.polygonColor || defaultProps.polygonColor);
    startAnimation();
  }, [globeData]);

  const startAnimation = () => {
    if (!globeRef.current || !globeData) return;
    globeRef.current
      .arcsData(data)
      .arcStartLat((d: ArcData) => d.startLat)
      .arcStartLng((d: ArcData) => d.startLng)
      .arcEndLat((d: ArcData) => d.endLat)
      .arcEndLng((d: ArcData) => d.endLng)
      .arcColor((d: ArcData) => d.color)
      .arcAltitude((d: ArcData) => d.arcAlt || 0.2)
      .arcDashLength(globeConfig.arcLength || defaultProps.arcLength)
      .arcDashAnimateTime(globeConfig.arcTime || defaultProps.arcTime);
  };

  return <primitive object={new ThreeGlobe()} ref={globeRef} />;
}

export function hexToRgb(hex: string) {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) hex = hex.split("").map((h) => h + h).join("");
  const intVal = parseInt(hex, 16);
  return {
    r: (intVal >> 16) & 255,
    g: (intVal >> 8) & 255,
    b: intVal & 255,
  };
}

export function World({ globeConfig, data }: GlobeProps) {
  return (
    <Canvas
      camera={{
        position: [0, 0, cameraZ],
        fov: 50,
        aspect: aspect,
        near: 180,
        far: 1800,
      }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[-400, 100, 400]} />
      <directionalLight position={[-200, 500, 200]} />
      <pointLight position={[-200, 500, 200]} intensity={0.8} />
      <Globe globeConfig={globeConfig} data={data} />
      <OrbitControls autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}

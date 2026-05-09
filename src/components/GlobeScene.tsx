import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import type { Wonder } from "@/data/wonders";
import { wonders } from "@/data/wonders";
import { useLang } from "@/context/LanguageContext";

type GlobeProps = { onHover?: (w: Wonder | null) => void };

export function GlobeScene({ onHover }: GlobeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const globeRef = useRef<any>(null);
  const [GlobeComp, setGlobeComp] = useState<any>(null);
  const [size, setSize] = useState({ w: 600, h: 600 });
  const navigate = useNavigate();
  const { lang } = useLang();

  // dynamic import to keep it client-only
  useEffect(() => {
    let mounted = true;
    import("react-globe.gl").then((mod) => {
      if (mounted) setGlobeComp(() => mod.default);
    });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const measure = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setSize({ w: rect.width, h: rect.height });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [GlobeComp]);

  useEffect(() => {
    if (!globeRef.current) return;
    const controls = globeRef.current.controls();
    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.45;
      controls.enableZoom = true;
    }
    globeRef.current.pointOfView({ lat: 18, lng: 30, altitude: 2.4 }, 0);
  }, [GlobeComp]);

  if (!GlobeComp) {
    return (
      <div ref={containerRef} className="w-full h-full grid place-items-center">
        <div className="text-muted-foreground text-sm">Spinning up the planet…</div>
      </div>
    );
  }

  const points = wonders.map((w) => ({
    ...w,
    lat: w.coordinates.lat,
    lng: w.coordinates.lng,
    color: w.accent,
  }));

  return (
    <div ref={containerRef} className="w-full h-full">
      <GlobeComp
        ref={globeRef}
        width={size.w}
        height={size.h}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        atmosphereColor="#fbbf24"
        atmosphereAltitude={0.22}
        showGraticules={false}
        pointsData={points}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointAltitude={0.02}
        pointRadius={0.55}
        pointsMerge={false}
        ringsData={points}
        ringLat="lat"
        ringLng="lng"
        ringColor={() => (t: number) => `rgba(251, 191, 36, ${1 - t})`}
        ringMaxRadius={4}
        ringPropagationSpeed={2}
        ringRepeatPeriod={1400}
        labelsData={points}
        labelLat="lat"
        labelLng="lng"
        labelText={(d: any) => `${d.flag} ${lang === "en" ? d.englishName : d.indonesianName}`}
        labelSize={0.9}
        labelDotRadius={0.3}
        labelColor={() => "rgba(255, 230, 170, 0.9)"}
        labelResolution={2}
        labelAltitude={0.025}
        onPointHover={(d: any) => onHover?.(d ?? null)}
        onPointClick={(d: any) => {
          if (!d) return;
          const controls = globeRef.current?.controls();
          if (controls) controls.autoRotate = false;
          globeRef.current?.pointOfView({ lat: d.lat, lng: d.lng, altitude: 1.0 }, 1400);
          setTimeout(() => navigate({ to: "/wonder/$id", params: { id: d.id } }), 1200);
        }}
      />
    </div>
  );
}

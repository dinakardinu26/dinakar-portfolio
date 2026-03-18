"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const FRAME_COUNT = 120; // 0 to 119

export default function ScrollyCanvas({ children }: { children?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        const frameIndex = i.toString().padStart(3, "0");
        img.src = `/sequence/frame_${frameIndex}_delay-0.066s.webp`;
        img.onload = () => {
            loadedCount++;
            if (loadedCount === FRAME_COUNT) {
                setImages(loadedImages);
            }
        };
        loadedImages.push(img);
    }
  }, []);

  // Frame Index Mapping (0 to 119)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    if (images.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
        const index = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(frameIndex.get())));
        const img = images[index];
        if (img) {
            // Object-fit: cover logic
            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.width / img.height;
            let drawWidth, drawHeight, offsetX = 0, offsetY = 0;

            if (canvasRatio > imgRatio) {
                drawWidth = canvas.width;
                drawHeight = canvas.width / imgRatio;
                offsetY = (canvas.height - drawHeight) / 2;
            } else {
                drawHeight = canvas.height;
                drawWidth = canvas.height * imgRatio;
                offsetX = (canvas.width - drawWidth) / 2;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
    };

    const updateCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render(); // render current frame on resize
    };

    window.addEventListener("resize", updateCanvasSize);
    updateCanvasSize(); // initial calculation

    const unsubscribe = frameIndex.on("change", () => {
        render();
    });

    return () => {
        window.removeEventListener("resize", updateCanvasSize);
        unsubscribe();
    };
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="h-[500vh] relative bg-[#121212]">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
         <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
      {children}
    </div>
  );
}

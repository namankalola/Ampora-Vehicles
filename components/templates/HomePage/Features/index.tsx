"use client";

import Icon from "@/components/comman/Icon";
import { features } from "@/components/mocks/features";
import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Features = () => {
  const container = useRef<HTMLDivElement>(null);

  const [videoOpen, setVideoOPen] = useState(false);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".animate").forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          scale: 0.96,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="overflow-hidden bg-neutral-100 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="animate font-figtree font-medium text-xs tracking-[.12em] uppercase text-neutral-950">
          CORE FEATURES
        </div>
        <h1 className="animate mt-4 font-onest text-5xl font-medium leading-[1.2] text-neutral-950 lg:text-7xl">
          Pure Electric Precision
        </h1>
        <p className="animate mt-4 max-w-3xl font-figtree text-lg text-neutral-500">
          From battery breakthroughs to AI-enhanced safety, every feature is
          designed to elevate your experience behind the wheel.
        </p>

        <dl className="mt-12 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-4">
          <div className="animate relative overflow-hidden lg:col-span-2">
            <div className="relative w-full h-80 lg:h-full">
              <Image
                src="/images/racing.webp"
                alt="About Image"
                objectFit="cover"
                layout="fill"
              />
            </div>

            <button
              onClick={() => setVideoOPen(true)}
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              aria-label="Play video"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-bg hover:bg-white transition">
                <Icon name="play" weight="fill" color="text-black" />
              </div>
            </button>
          </div>

          {features.map((item) => (
            <div key={item.name} className="animate bg-white p-8">
              <dt className="font-figtree text-xs text-neutral-500 uppercase">
                {item.label}
              </dt>
              <dt className="mt-2 font-onest text-2xl font-medium text-neutral-950">
                {item.name}
              </dt>
              <dd className="mt-20 font-figtree text-base text-neutral-500">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {videoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setVideoOPen(false)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/MhVpNSC9zR8?si=nPpUFZdj9taGU_0Q"
              title="Demo Video"
              className="w-full h-full rounded-xl"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setVideoOPen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;

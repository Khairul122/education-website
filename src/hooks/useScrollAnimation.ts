import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useRevealOnScroll(selector: string) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.batch(selector, {
        onEnter: (elements) => {
          gsap.from(elements, {
            opacity: 0,
            y: 50,
            stagger: 0.15,
            duration: 0.8,
            ease: "power2.out",
          });
        },
        once: true,
      });
    });
    return () => ctx.revert();
  }, [selector]);
}

export function useHeroAnimation(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { opacity: 0, y: 60, duration: 1, ease: "power3.out" });
      gsap.from(".hero-subtitle", { opacity: 0, y: 30, duration: 0.8, delay: 0.3 });
      gsap.from(".hero-cta", { opacity: 0, scale: 0.9, duration: 0.6, delay: 0.5 });
    }, containerRef);
    return () => ctx.revert();
  }, [containerRef]);
}

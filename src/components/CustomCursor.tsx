import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [lerpPosition, setLerpPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, [isVisible]);

  // Lerping for the ring
  useEffect(() => {
    let active = true;
    const tick = () => {
      if (!active) return;
      setLerpPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.13,
          y: prev.y + dy * 0.13,
        };
      });
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    return () => {
      active = false;
    };
  }, [position]);

  // Check for hover states
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.project-item') || 
        target.closest('.skill-card') || 
        target.closest('.case-card') || 
        target.closest('.testimonial-card') || 
        target.closest('.tool-pill') ||
        target.closest('input') ||
        target.closest('textarea');

      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible || reducedMotion) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-violet rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 will-change-transform transition-opacity duration-300 hidden md:block"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
      <div
        className="fixed top-0 left-0 rounded-full border border-violet pointer-events-none z-9998 -translate-x-1/2 -translate-y-1/2 will-change-transform transition-all duration-200 ease-out-expo hidden md:block"
        style={{
          transform: `translate3d(${lerpPosition.x}px, ${lerpPosition.y}px, 0)`,
          width: isHovering ? '56px' : '36px',
          height: isHovering ? '56px' : '36px',
          opacity: isHovering ? 0.8 : 0.5,
          backgroundColor: isHovering ? 'rgba(123, 97, 255, 0.12)' : 'transparent',
        }}
      />
    </>
  );
}

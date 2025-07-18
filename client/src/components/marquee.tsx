interface MarqueeProps {
  children: React.ReactNode;
}

export default function Marquee({ children }: MarqueeProps) {
  return (
    <div className="marquee">
      <div className="scroll-text">{children}</div>
    </div>
  );
}

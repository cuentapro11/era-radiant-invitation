interface WaveDividerProps {
  className?: string;
  flip?: boolean;
}

export const WaveDivider = ({ className = "", flip = false }: WaveDividerProps) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className={`w-full h-16 ${flip ? 'transform rotate-180' : ''}`}
        fill="white"
      >
        <path 
          d="M1200 120L0 16.48V0h1200v120z" 
          className="fill-current"
        />
      </svg>
    </div>
  );
};
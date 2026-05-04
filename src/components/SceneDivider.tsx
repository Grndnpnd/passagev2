import { DividerLine } from './DividerLine';

interface SceneDividerProps {
  className?: string;
}

export default function SceneDivider({ className = "" }: SceneDividerProps) {
  return (
    <div className={`py-6 ${className}`}>
      <DividerLine />
    </div>
  );
}

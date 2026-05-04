import { Link } from 'react-router';
import { Diamond } from 'lucide-react';

interface BreadcrumbSegment {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  segments: BreadcrumbSegment[];
}

export default function Breadcrumb({ segments }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 py-2 text-caption text-[#5a5650]" aria-label="Breadcrumb">
      {segments.map((segment, idx) => (
        <span key={idx} className="flex items-center gap-1.5">
          {idx > 0 && <Diamond className="w-2 h-2 text-[#5a5650]/50" />}
          {segment.path ? (
            <Link
              to={segment.path}
              className={`hover:text-[#d4a853] transition-colors ${
                idx === segments.length - 1 ? 'text-[#d4a853]' : ''
              }`}
            >
              {segment.label}
            </Link>
          ) : (
            <span className={idx === segments.length - 1 ? 'text-[#d4a853]' : ''}>
              {segment.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

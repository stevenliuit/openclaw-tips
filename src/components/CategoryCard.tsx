import Link from 'next/link';
import { Category } from '@/types/article';

function getCategoryColor(name: string): string {
  const colors = ['#22d3ee', '#818cf8', '#34d399', '#fb923c', '#f472b6', '#60a5fa'];
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = (Math.imul(31, h) + name.charCodeAt(i)) | 0;
  }
  return colors[Math.abs(h) % colors.length];
}

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const accentColor = getCategoryColor(category.name);

  return (
    <Link
      href={`/categories/${encodeURIComponent(category.name)}`}
      className="group flex items-center gap-3 bg-[#0d1421] border border-[#1b2840] rounded-xl p-3.5 transition-all duration-200 hover:border-[#253650] hover:bg-[#111d2e] cursor-pointer"
    >
      {/* Color dot */}
      <div
        className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-lg"
        style={{ background: `${accentColor}15` }}
      >
        <span>{category.icon}</span>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h3
            className="text-[#dce5f0] text-sm font-medium truncate transition-colors duration-200"
            style={{ '--hover-color': accentColor } as React.CSSProperties}
          >
            <span className="group-hover:text-[var(--hover-color)] transition-colors duration-200">
              {category.name}
            </span>
          </h3>
          <span
            className="text-[10px] font-medium px-1.5 py-0.5 rounded whitespace-nowrap flex-shrink-0"
            style={{ color: accentColor, background: `${accentColor}15` }}
          >
            {category.count}
          </span>
        </div>
        <p className="text-[11px] text-[#4c6070] line-clamp-1 leading-relaxed mt-0.5">
          {category.description}
        </p>
      </div>
    </Link>
  );
}

function getCategoryColor(name: string): string {
  const colors = ['#22d3ee', '#818cf8', '#34d399', '#fb923c', '#f472b6', '#60a5fa'];
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = (Math.imul(31, h) + name.charCodeAt(i)) | 0;
  }
  return colors[Math.abs(h) % colors.length];
}

interface CategoryBadgeProps {
  category: string;
  size?: 'sm' | 'md';
}

export default function CategoryBadge({ category, size = 'sm' }: CategoryBadgeProps) {
  const color = getCategoryColor(category);
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm';

  return (
    <span
      className={`inline-block ${sizeClasses} font-medium rounded-md`}
      style={{ color, background: `${color}15` }}
    >
      {category}
    </span>
  );
}

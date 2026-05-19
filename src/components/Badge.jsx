export default function Badge({
  children,
  type = "primary",
}) {
  const styles = {
    primary:
      "bg-blue-50 text-blue-600 border-blue-200",

    success:
      "bg-green-50 text-green-600 border-green-200",

    danger:
      "bg-red-50 text-red-600 border-red-200",

    warning:
      "bg-amber-50 text-amber-600 border-amber-200",

    secondary:
      "bg-slate-100 text-slate-600 border-slate-200",

    bronze:
      "bg-orange-50 text-orange-600 border-orange-200",

    silver:
      "bg-slate-100 text-slate-600 border-slate-200",

    gold:
      "bg-amber-50 text-amber-600 border-amber-200",
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center
        min-w-[80px]
        px-3 py-1
        rounded-xl
        border
        text-xs font-bold
        capitalize
        ${styles[type]}
      `}
    >
      {children}
    </span>
  );
}
export default function Button({
  children,
  type = "primary",
  className = "",
  ...props
}) {
  const types = {
    primary:
      "bg-blue-500 hover:bg-blue-600 text-white",

    secondary:
      "bg-white border border-slate-200 hover:bg-slate-50 text-slate-700",

    success:
      "bg-green-500 hover:bg-green-600 text-white",

    danger:
      "bg-red-500 hover:bg-red-600 text-white shadow-sm shadow-red-500/20 hover:shadow-md",

    warning:
      "bg-yellow-500 hover:bg-yellow-600 text-white",
  };

  return (
    <button
      className={`
        flex items-center justify-center gap-2
        px-4 py-3 rounded-xl
        font-semibold
        transition-all duration-200
        hover:-translate-y-0.5
        active:scale-[0.98]
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${types[type]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
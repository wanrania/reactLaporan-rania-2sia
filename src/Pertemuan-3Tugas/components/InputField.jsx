export default function InputField({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <div className="mb-3">
      <label className="block text-gray-700 font-medium mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}
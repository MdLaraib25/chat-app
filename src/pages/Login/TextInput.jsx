function TextInput({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`w-full rounded-md border border-gray-300 text-base outline-none
      focus:border-orange-300 focus:ring-1 focus:ring-pink-300 transition ${className}`}
    />
  );
}

export default TextInput;

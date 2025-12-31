import { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function TextArea({
  label,
  error,
  className,
  required,
  id,
  ...props
}: TextAreaProps) {
  const textareaId = id || props.name;

  return (
    <div>
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label} {required && "*"}
        </label>
      )}
      <textarea
        id={textareaId}
        required={required}
        className={cn(
          "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

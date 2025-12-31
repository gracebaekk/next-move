import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/Button";

interface SuccessMessageProps {
  title: string;
  message: string;
  buttonText?: string;
  buttonHref?: string;
}

export function SuccessMessage({
  title,
  message,
  buttonText = "Return to Home",
  buttonHref = "/",
}: SuccessMessageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-6">{message}</p>
          <Link href={buttonHref}>
            <Button>{buttonText}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

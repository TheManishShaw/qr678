import Image from "next/image";
import { Check } from "lucide-react";

export function ScientificPublications() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="relative h-[400px]">
        <Image
          src="/placeholder.svg"
          alt="Scientific Publication"
          fill
          className="object-contain"
        />
      </div>
      <div className="space-y-6">
        <h3 className="text-lg font-semibold">
          14+ clinical studies published in top scientific journals
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-sm">
              High and well-qualified study (PK after light sedation)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-sm">
              Clinical assessment score jumped from 6.5-7.5/European
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-sm">
              Effective hair count, thickness and density
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-sm">
              Safe high effectiveness to prevent signs
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-sm">
              Long-term follow-up has side effects, can guide
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

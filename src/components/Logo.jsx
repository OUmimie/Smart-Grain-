import { images } from "../data/images";

export default function Logo({ className = "w-10 h-10", alt = "SmartGrain — Transformation du Sable en Verre" }) {
  return (
    <img
      src={images.logo}
      alt={alt}
      className={`object-cover rounded-xl shadow-md ${className}`}
      loading="eager"
    />
  );
}

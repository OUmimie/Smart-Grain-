import { images } from "../data/images";

import { company } from "../data/company";

export default function Logo({ className = "w-10 h-10", alt = `${company.name} — ${company.slogan}` }) {
  return (
    <img
      src={images.logo}
      alt={alt}
      className={`object-cover rounded-xl shadow-md ${className}`}
      loading="eager"
    />
  );
}

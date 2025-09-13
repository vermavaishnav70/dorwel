import Image from "next/image";

export default function Logo() {
  return (
    <Image
      className="mx-auto"
      src="/logo.svg"
      alt="Logo"
      width={50}
      height={50}
    />
  );
}

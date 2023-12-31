import Image from "next/image";

export default function AddressIcon ({width=32, height=32}) {
  return (
    <Image
      src="/icons/address.svg"
      alt='Адрес'
      width={width}
      height={height}
    />
  );
}

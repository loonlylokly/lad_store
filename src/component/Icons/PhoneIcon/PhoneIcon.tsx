import Image from "next/image";

export default function PhoneIcon ({width=32, height=32}) {
  return (
    <Image
      src="/icons/phone.svg"
      alt='Телефон'
      width={width}
      height={height}
    />
  );
}

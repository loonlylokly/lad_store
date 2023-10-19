import Image from 'next/image';

export default function EmailIcon({
  width = 32,
  height = 32,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Image src="/icons/email.svg" alt="email" width={width} height={height} />
  );
}

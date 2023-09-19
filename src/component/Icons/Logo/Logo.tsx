import Link from "next/link";
import Image from "next/image";

export default function Logo ({width=56, height=40}) {
  return (
    <Link href="/">
      <Image 
        src="/icons/logo.png"
        alt='Логотип Lad Fashion'
        width={width}
        height={height}
        loading = 'eager'
      />
    </Link>
  )
}

import Link from "next/link";

export default function VkIcon ({width=32, height=32}) {
  return (
    <Link className="icon" href="https://vk.com/" target="_blank" rel="nofollow" aria-label="Вконтакте">
      <svg version="1.0"fill="#fff" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 128.000000 128.000000">
        <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" stroke="none">
        <path d="M461 987 c-34 -17 -36 -32 -6 -45 14 -7 30 -23 35 -38 13 -33 13
        -195 0 -228 -25 -66 -84 -8 -175 171 l-61 118 -122 3 c-108 2 -123 1 -129 -14
        -8 -23 109 -255 190 -378 80 -120 173 -212 261 -256 62 -31 79 -35 169 -38
        113 -5 127 2 127 65 0 40 23 88 45 97 12 4 42 -18 99 -74 46 -43 94 -82 107
        -85 13 -3 78 -4 143 -3 100 3 121 6 130 20 16 27 -16 77 -116 185 -49 51 -88
        97 -88 103 0 19 20 51 91 145 72 97 119 177 119 205 0 26 -19 30 -160 30
        l-128 0 -51 -102 c-50 -102 -111 -192 -143 -212 -12 -7 -21 -6 -32 3 -13 11
        -16 38 -16 157 0 188 3 184 -152 184 -70 0 -122 -5 -137 -13z"></path>
        </g>
      </svg>
    </Link>
  );
}

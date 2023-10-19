'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import styles from './FilterCard.module.css';

export default function FilterCard({
  name,
  category,
}: {
  name: string;
  category: string;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);
  const currentCategory = searchParams.get('category');
  params.set('category', category);
  return (
    <button
      className={`${styles.filter} ${
        currentCategory === category && styles.current
      }`}
      onClick={() => router.push(`/catalog?${params.toString()}`)}
    >
      {name}
    </button>
  );
}

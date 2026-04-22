import type { ReactNode } from 'react';

type Props = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function CvFeatureCard({ title, children, className = '' }: Props) {
  return (
    <div className={`morph-card p-8 rounded-3xl ${className}`}>
      {title ? <div className="text-4xl font-black text-secondary mb-4 font-headline">{title}</div> : null}
      {children}
    </div>
  );
}

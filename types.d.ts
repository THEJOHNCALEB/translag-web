/// <reference types="next" />
/// <reference types="next/image-types/global" />

import { ReactNode } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module 'next' {
  export interface Metadata {
    title?: string;
    description?: string;
  }
}

declare module 'lucide-react' {
  export interface IconProps {
    className?: string;
    size?: number | string;
    strokeWidth?: number | string;
  }
} 
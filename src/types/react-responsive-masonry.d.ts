declare module 'react-responsive-masonry' {
    import React from 'react';
  
    export interface MasonryProps {
      columnsCount?: number;
      gutter?: string;
      className?: string;
      children: React.ReactNode;
    }
  
    export interface ResponsiveMasonryProps {
      columnsCountBreakPoints?: { [key: number]: number };
      className?: string;
      children: React.ReactNode;
    }
  
    export const Masonry: React.FC<MasonryProps>;
    export const ResponsiveMasonry: React.FC<ResponsiveMasonryProps>;
  
    export default Masonry;
  }
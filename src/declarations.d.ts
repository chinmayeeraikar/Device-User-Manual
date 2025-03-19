// src/declarations.d.ts
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
  }

  declare module '*.jsx' {
    import React from 'react';
    const Component: React.ComponentType<any>;
    export default Component;
  }
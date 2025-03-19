declare module './components/Model.jsx' {
    import React from 'react';
    
    // Define the props interface based on what your component accepts
    interface ModelProps {
      // Add your props here, for example:
      modelPath?: string;
      position?: [number, number, number];
      rotation?: [number, number, number];
      // Add other props as needed
    }
    
    const Model: React.FC<ModelProps>;
    
    export default Model;
  }
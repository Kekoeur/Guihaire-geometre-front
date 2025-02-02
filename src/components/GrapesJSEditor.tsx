'use client';

import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';

const GrapesJSEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      grapesjs.init({
        container: editorRef.current,
      });
    }
  }, []);

  return <div ref={editorRef} style={{ height: '100vh' }} />;
};

export default GrapesJSEditor;

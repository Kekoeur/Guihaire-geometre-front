import dynamic from 'next/dynamic';

const GrapesJSEditor = dynamic(() => import('./GrapesJSEditor'), {
  ssr: false, // Désactiver le rendu côté serveur pour ce composant
});

const Editor: React.FC = () => {
  return <GrapesJSEditor />;
};

export default Editor;

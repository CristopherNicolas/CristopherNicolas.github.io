import React from 'react';
import '../styles/SketchfabGrid.css'; // Para los estilos de la grilla

const SketchfabEmbed = ({ modelUrl, title, author, modelId }) => {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title={title}
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        webShare
        src={modelUrl}
      ></iframe>
      <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
        <a
          href={`https://sketchfab.com/3d-models/${modelId}?utm_medium=embed&utm_campaign=share-popup&utm_content=${modelId}`}
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          {title}
        </a>{' '}
        by{' '}
        <a
          href={`https://sketchfab.com/${author}?utm_medium=embed&utm_campaign=share-popup&utm_content=${modelId}`}
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          {author}
        </a>{' '}
        on{' '}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=${modelId}"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
};

const SketchfabGrid = () => {
  const models = [
    {
      modelUrl: 'https://sketchfab.com/models/d69501fb953349a7ad5e1843d2aabf33/embed?ui_theme=dark',
      title: 'Japanese female shoe',
      author: 'Cris',
      modelId: 'd69501fb953349a7ad5e1843d2aabf33',
    },
    // Puedes añadir más modelos aquí...
    {
        modelUrl: 'https://sketchfab.com/models/842bc7f9b13044dd92dd7dc326705dde/embed',
        title: 'Mai Sakurajima model',
        author: 'Cris',
        modelId: '842bc7f9b13044dd92dd7dc326705dde',
      },
      {
  modelUrl: 'https://sketchfab.com/models/764418d352d0450fa79370bd6c339115/embed',
  title: 'Triana',
  author: 'Cris',
  modelId: '764418d352d0450fa79370bd6c339115',
}
  ];

  return (
    <div className="sketchfab-grid">
      {models.map((model) => (
        <SketchfabEmbed
          key={model.modelId}
          modelUrl={model.modelUrl}
          title={model.title}
          author={model.author}
          modelId={model.modelId}
        />
      ))}
    </div>
  );
};

export default SketchfabGrid;

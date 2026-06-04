import React from 'react';
import './Controls.css';

function Controls({ onAnimationChange, onExport, onToggleInfo }) {
  return (
    <div className="controls-container">
      {/* Panel de animaciones */}
      <div className="controls-panel">
        <h2>Animaciones</h2>
        <div className="button-group">
          <button 
            className="control-btn idle"
            onClick={() => onAnimationChange('idle')}
          >
            🧍 Reposo
          </button>
          <button 
            className="control-btn wave"
            onClick={() => onAnimationChange('wave')}
          >
            👋 Saludar
          </button>
          <button 
            className="control-btn dance"
            onClick={() => onAnimationChange('dance')}
          >
            💃 Bailar
          </button>
        </div>
      </div>

      {/* Panel de exportación */}
      <div className="controls-panel">
        <h2>Exportar</h2>
        <button 
          className="control-btn export"
          onClick={onExport}
        >
          📥 Exportar GLB
        </button>
        <p className="export-info">Compatible con Decentraland, Spatial y otros metaversos</p>
      </div>

      {/* Botón de información */}
      <button 
        className="info-toggle"
        onClick={onToggleInfo}
        title="Mostrar/Ocultar información"
      >
        ℹ️
      </button>

      {/* Créditos */}
      <div className="credits">
        <p>Luis Avatar 3D</p>
        <p>React • Three.js • WebGL</p>
      </div>
    </div>
  );
}

export default Controls;

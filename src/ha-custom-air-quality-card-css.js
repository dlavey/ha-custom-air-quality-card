
    export default function getStyle()
    {
        return `
        body {
    font-family: 'Google Sans', Roboto, system-ui, -apple-system, sans-serif;
    background: #0a1929;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
  }
  .header {
    color: #a8c0e0;
    font-size: 13px;
    margin-bottom: 24px;
    text-align: center;
    max-width: 480px;
    line-height: 1.6;
  }
  .header strong { color: #ffffff; font-weight: 500; }
  .card {
    background: #0f2845;
    border-radius: 22px;
    width: 480px;
    max-width: 100%;
    padding: 0;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  }
  .header-section {
    padding: 20px 20px 14px 20px;
  }
  .header-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 18px;
  }
  .room-title { font-size: 15px; color: #ffffff; font-weight: 500; }
  .room-subtitle { font-size: 11px; color: #6e87a8; margin-top: 2px; }
  .status-badge {
    background: rgba(253, 230, 138, 0.12);
    border: 1px solid rgba(253, 230, 138, 0.35);
    border-radius: 999px;
    padding: 5px 12px;
    font-size: 11px;
    color: #fde68a;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .status-dot {
    width: 6px;
    height: 6px;
    background: #fde68a;
    border-radius: 50%;
  }
  .main-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .score-block {
    display: flex;
    align-items: baseline;
    gap: 6px;
  }
  .score-number { font-size: 54px; font-weight: 400; color: #fde68a; line-height: 1; }
  .score-max { font-size: 14px; color: #a8c0e0; }
  .advice { font-size: 12px; color: #a8c0e0; margin-top: 6px; }
  .climate-row { display: flex; gap: 14px; margin-top: 14px; }
  .climate-value { display: flex; align-items: baseline; gap: 4px; }
  .climate-number { font-size: 24px; font-weight: 400; color: #ffffff; }
  .climate-unit { font-size: 11px; color: #a8c0e0; }
  .climate-label { font-size: 10px; color: #6e87a8; margin-top: 2px; }
  .divider-vertical { width: 1px; background: #1e3a5f; }
  .ring-container {
    position: relative;
    width: 100px;
    height: 100px;
    flex-shrink: 0;
  }
  .ring-svg {
    transform: rotate(-90deg);
    width: 100%;
    height: 100%;
  }
  .ring-inner {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .ring-label { font-size: 11px; color: #a8c0e0; }
  .ring-percent { font-size: 11px; color: #fde68a; font-weight: 500; }
  .graph-section {
    padding: 0 14px;
    margin: 0 6px 14px 6px;
    height: 60px;
    position: relative;
  }
  .graph-section svg {
    width: 100%;
    height: 100%;
    display: block;
  }
  .graph-legend {
    position: absolute;
    top: -2px;
    left: 14px;
    display: flex;
    gap: 14px;
    font-size: 10px;
  }
  .legend-item { display: flex; align-items: center; gap: 4px; }
  .legend-dot { width: 8px; height: 8px; border-radius: 2px; }
  .tiles-section {
    padding: 0 20px 20px 20px;
    border-radius: 0 0 22px 22px;
  }
  .tiles-divider {
    padding-top: 14px;
    border-top: 1px solid #1e3a5f;
  }
  .tile-grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-bottom: 14px;
  }
  .tile-grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .tile { padding: 0 6px; min-width: 0; overflow: hidden; }
  .tile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
    gap: 4px;
  }
  .tile-name {
    font-size: 11px;
    color: #a8c0e0;
    font-weight: 500;
    white-space: nowrap;
  }
  .tile-status {
    font-size: 9px;
    white-space: nowrap;
  }
  .tile-value-row {
    display: flex;
    align-items: baseline;
    gap: 4px;
  }
  .tile-value {
    font-size: 22px;
    font-weight: 400;
    color: #ffffff;
    line-height: 1;
    white-space: nowrap;
  }
  .tile-unit {
    font-size: 10px;
    color: #6e87a8;
    white-space: nowrap;
  }
  .tile-bar {
    height: 3px;
    background: #1e3a5f;
    border-radius: 2px;
    overflow: hidden;
    margin-top: 8px;
  }
  .tile-bar-fill {
    height: 100%;
    border-radius: 2px;
  }
  .footer {
    margin-top: 32px;
    color: #6e87a8;
    font-size: 12px;
    text-align: center;
    line-height: 1.6;
    max-width: 480px;
  }
  .footer a { color: #a8c0e0; text-decoration: none; }
  .footer a:hover { color: #ffffff; }
  .badge-row {
    display: flex;
    gap: 8px;
    margin-top: 12px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .tech-badge {
    background: rgba(255, 255, 255, 0.06);
    color: #a8c0e0;
    font-size: 11px;
    padding: 4px 10px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
    `;
    }



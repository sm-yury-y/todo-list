import React from 'react';

import './ItemStatusFilter.css';

const ItemStatusFilter = () => {
  return (
    <div className="btn-group">
      <button type="button"
              className="btn btn-info">Все</button>
      <button type="button"
              className="btn btn-outline-secondary">Активные</button>
      <button type="button"
              className="btn btn-outline-secondary">Завершенные</button>
    </div>
  );
};

export default ItemStatusFilter;

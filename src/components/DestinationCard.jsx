import React from 'react';
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function DestinationCard({ item, onSelect }) {
  return (
    <div className="card">
      <div className="card-img-wrapper">
        <img src={item.image} alt={item.title} className="card-img" />
        <span className="card-badge">{item.category}</span>
        <div className="card-price-badge">{item.price}</div>
      </div>
      <div className="card-body">
        <div className="card-meta">
          <div className="card-meta-item">
            <MapPin size={14} color="var(--primary)" /> {item.location}
          </div>
          <div className="card-meta-item">
            <Clock size={14} color="var(--primary)" /> {item.duration}
          </div>
          <div className="card-meta-item" style={{ marginLeft: 'auto', fontWeight: 'bold', color: '#eab308' }}>
            <Star size={14} fill="#eab308" color="#eab308" /> {item.rating}
          </div>
        </div>
        <h3 className="card-title">{item.title}</h3>
        <p className="card-text">{item.description}</p>
        <div className="card-footer">
          <span style={{ fontSize: '0.85rem', color: '#64748b' }}>({item.reviews} reviews)</span>
          <button className="btn btn-outline" onClick={() => onSelect(item)}>
            Explore Tour <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

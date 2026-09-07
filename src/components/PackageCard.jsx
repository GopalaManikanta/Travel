import React from 'react';
import { Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export default function PackageCard({ pkg, onBook }) {
  return (
    <div className="card" style={{ flexDirection: 'column' }}>
      <div className="card-img-wrapper" style={{ height: '240px' }}>
        <img src={pkg.image} alt={pkg.title} className="card-img" />
        <span className="card-badge" style={{ background: 'var(--secondary)' }}>{pkg.badge}</span>
        <div className="card-price-badge">${pkg.price} <span style={{ fontSize: '0.75rem', fontWeight: 'normal', color: '#64748b' }}>/person</span></div>
      </div>
      <div className="card-body">
        <div className="card-meta">
          <div className="card-meta-item">
            <Calendar size={14} color="var(--primary)" /> {pkg.days} Days / {pkg.nights} Nights
          </div>
        </div>
        <h3 className="card-title">{pkg.title}</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700', marginBottom: '12px' }}>
          📍 {pkg.destinations}
        </p>
        <p className="card-text">{pkg.overview}</p>
        
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', color: '#64748b', marginBottom: '8px' }}>
            Package Highlights:
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {pkg.inclusions.map((inc, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--dark-muted)' }}>
                <CheckCircle2 size={14} color="#10b981" /> {inc}
              </div>
            ))}
          </div>
        </div>

        <div className="card-footer">
          <span style={{ fontSize: '0.85rem', color: '#64748b' }}>All taxes included</span>
          <button className="btn btn-primary" onClick={() => onBook(pkg)}>
            Book Package <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

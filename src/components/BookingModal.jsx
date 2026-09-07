import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Users, Mail, User, Phone } from 'lucide-react';

export default function BookingModal({ item, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '2'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <h3 className="font-heading" style={{ fontSize: '1.8rem', marginBottom: '6px' }}>
              Reserve Your Trip
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px' }}>
              {item ? `Booking for: ${item.title}` : 'Select your trip details below.'}
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label"><User size={14} /> Full Name</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="e.g. Manikanta Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label className="form-label"><Mail size={14} /> Email Address</label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label"><Phone size={14} /> Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="form-control"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label className="form-label"><Calendar size={14} /> Travel Date</label>
                  <input
                    type="date"
                    required
                    className="form-control"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label"><Users size={14} /> Travelers</label>
                  <select
                    className="form-control"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3-5">3 - 5 Persons</option>
                    <option value="6+">6+ Group Travel</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
                Confirm Reservation Request
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <CheckCircle size={64} color="#10b981" style={{ margin: '0 auto 16px auto' }} />
            <h3 className="font-heading" style={{ fontSize: '1.8rem', marginBottom: '8px' }}>
              Booking Request Received!
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '24px' }}>
              Thank you, <strong>{formData.name}</strong>! Our travel concierge has received your request for <strong>{item?.title || 'your trip'}</strong> and will send confirmation details to <strong>{formData.email}</strong> shortly.
            </p>
            <button className="btn btn-primary" onClick={onClose}>
              Back to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

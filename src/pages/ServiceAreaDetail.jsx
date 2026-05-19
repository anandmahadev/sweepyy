import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { Truck, Road, ParkingCircle, Construction, Waves, CheckCircle, Send } from 'lucide-react';

const ServiceAreaDetail = () => {
  const { area } = useParams();

  /**
   * Formats the area slug into a human-readable state name.
   * @param {string} slug 
   * @returns {string}
   */
  const formatStateName = (slug) => {
    if (!slug) return 'Local';
    return slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ');
  };

  const stateName = formatStateName(area);

  return (
    <div className="area-detail-page">
      <PageHero title={`${stateName} Sweeping Services`} />
      
      <section className="section-padding">
        <div className="container area-grid">
          <div className="area-content">
            <SectionHeader 
              eyebrow="Local Expertise" 
              title={`Professional Power Sweeping & JetVac in ${stateName}`} 
              centered={false} 
            />
            <p>
              SCA provides comprehensive environmental solutions across {stateName}. Our local teams understand 
              the unique requirements of the region, from municipal street cleaning to industrial site maintenance.
            </p>
            
            <div className="services-list-simple">
              <h3>Services Available in This Area:</h3>
              <div className="service-items-grid">
                <div className="service-item-simple"><Truck size={20} /> Street Sweeping</div>
                <div className="service-item-simple"><Road size={20} /> Highway Sweeping</div>
                <div className="service-item-simple"><ParkingCircle size={20} /> Parking Lot Sweeping</div>
                <div className="service-item-simple"><Construction size={20} /> Construction Sweeping</div>
                <div className="service-item-simple"><Waves size={20} /> JetVac Services</div>
              </div>
            </div>

            <div className="nearby-cities">
              <h4>Major Cities Served:</h4>
              <div className="city-chips">
                {['Metro Area 1', 'Metro Area 2', 'Regional Hub 1', 'Regional Hub 2', 'City Center'].map(city => (
                  <span key={city} className="city-chip">{city}</span>
                ))}
              </div>
            </div>

            <div className="seasonal-scheduling-guide bg-light">
              <h3>{stateName} Seasonal Sweeping Schedule</h3>
              <p>
                Our sweeping frequency and operations adjust dynamically to match seasonal weather, leaf accumulation, 
                and road runoff variables across the state.
              </p>
              <div className="table-responsive">
                <table className="scheduling-table">
                  <thead>
                    <tr>
                      <th>Season</th>
                      <th>Primary Operations</th>
                      <th>Typical Frequency</th>
                      <th>Focus Area</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Spring</strong></td>
                      <td>Post-winter sand/debris removal</td>
                      <td>Weekly / Bi-weekly</td>
                      <td>Highway & Curb Runoffs</td>
                    </tr>
                    <tr>
                      <td><strong>Summer</strong></td>
                      <td>Dust control & litter removal</td>
                      <td>Bi-weekly / Monthly</td>
                      <td>Retail & Commercial Lots</td>
                    </tr>
                    <tr>
                      <td><strong>Autumn</strong></td>
                      <td>Heavy leaf collection & storm prep</td>
                      <td>2x Weekly / Dynamic</td>
                      <td>Drainage Catch Basins</td>
                    </tr>
                    <tr>
                      <td><strong>Winter</strong></td>
                      <td>Emergency salt clearing & sand sweeps</td>
                      <td>As needed / Standby</td>
                      <td>Main Transport Arteries</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(244, 121, 32, 0.05)', borderLeft: '4px solid var(--accent-orange)', borderRadius: '0 4px 4px 0', textAlign: 'left' }}>
                <span style={{ fontSize: '13.5px', color: 'var(--primary-blue)', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>Need emergency seasonal coverage in {stateName}?</span>
                <p style={{ fontSize: '13px', color: 'var(--medium-gray)', margin: '0 0 10px', lineHeight: '1.4' }}>Our local dispatch crews adjust active sweep routes based on current stormwater runoff alerts.</p>
                <Link 
                  to="/contact" 
                  state={{ preselectedState: stateName, preselectedService: 'Municipal Street Sweeping' }} 
                  className="btn btn-orange"
                  style={{ display: 'inline-block', padding: '8px 16px', fontSize: '12px', fontWeight: 'bold', textDecoration: 'none' }}
                >
                  Schedule Seasonal Review →
                </Link>
              </div>
            </div>

            <div className="area-hiring bg-light">
              <h3>We're Hiring in {stateName}!</h3>
              <p>Join the SCA family and start your career in environmental services today.</p>
              <ul>
                <li><CheckCircle size={16} /> Sweeper Operators</li>
                <li><CheckCircle size={16} /> Diesel Mechanics</li>
                <li><CheckCircle size={16} /> Driver Helpers</li>
              </ul>
              <Link to="/careers" className="btn btn-orange">View Open Positions</Link>
            </div>
          </div>

          <aside className="area-sidebar">
            <div className="sidebar-form">
              <h3>Get a Local Quote</h3>
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" required />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" />
                </div>
                <div className="form-group">
                  <label>Service</label>
                  <select>
                    <option>Select a service</option>
                    <option>Street Sweeping</option>
                    <option>Highway Sweeping</option>
                    <option>JetVac Services</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-orange w-100">Send Message <Send size={14} /></button>
              </form>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <SectionHeader title="City Fun Facts & History" />
          <p className="fun-fact-text">
            {stateName} has a rich industrial history and a commitment to environmental sustainability. 
            SCA is proud to support the local communities by maintaining clean and safe infrastructure 
            for residents and businesses alike. Our presence in the region has grown significantly, 
            providing hundreds of local jobs and supporting major infrastructure projects.
          </p>
        </div>
      </section>

      <style jsx>{`
        .area-grid {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 60px;
        }

        .area-content p {
          margin-bottom: 30px;
          color: var(--medium-gray);
        }

        .services-list-simple {
          margin-bottom: 40px;
        }

        .services-list-simple h3 {
          font-size: 20px;
          margin-bottom: 20px;
        }

        .service-items-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .service-item-simple {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          color: var(--primary-blue);
        }

        .nearby-cities {
          margin-bottom: 40px;
        }

        .nearby-cities h4 {
          margin-bottom: 15px;
        }

        .city-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .city-chip {
          background: #eee;
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          color: var(--medium-gray);
        }

        .area-hiring {
          padding: 40px;
          border-radius: 4px;
          border-left: 5px solid var(--accent-orange);
        }

        .area-hiring h3 {
          margin-bottom: 15px;
        }

        .area-hiring ul {
          margin: 20px 0 30px;
        }

        .area-hiring li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .sidebar-form {
          background: white;
          padding: 30px;
          border-radius: 4px;
          box-shadow: var(--box-shadow);
          position: sticky;
          top: 100px;
        }

        .sidebar-form h3 {
          margin-bottom: 25px;
          text-align: center;
        }

        .sidebar-form .form-group {
          margin-bottom: 15px;
        }

        .sidebar-form label {
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 5px;
          display: block;
        }

        .sidebar-form input, .sidebar-form select {
          width: 100%;
          padding: 10px;
          border: 1px solid var(--border-gray);
          border-radius: 4px;
        }

        .w-100 { width: 100%; }

        .fun-fact-text {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          color: var(--medium-gray);
          line-height: 1.8;
        }

        .seasonal-scheduling-guide {
          margin-bottom: 40px;
          padding: 30px;
          border-radius: 4px;
          border-top: 5px solid var(--primary-blue);
        }
        
        .seasonal-scheduling-guide h3 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .seasonal-scheduling-guide p {
          font-size: 14px;
          margin-bottom: 20px !important;
        }

        .table-responsive {
          overflow-x: auto;
        }

        .scheduling-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          background: white;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }

        .scheduling-table th, .scheduling-table td {
          padding: 12px 15px;
          border-bottom: 1px solid var(--border-gray);
          font-size: 14px;
        }

        .scheduling-table th {
          background-color: var(--primary-blue);
          color: white;
          font-weight: 700;
        }

        .scheduling-table tr:hover {
          background-color: rgba(0,0,0,0.02);
        }

        @media (max-width: 992px) {
          .area-grid {
            grid-template-columns: 1fr;
          }
          .area-sidebar {
            order: -1;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceAreaDetail;

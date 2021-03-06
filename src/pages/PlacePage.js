import React from 'react';
import { places } from '../store';
import './PlacePage.css';
import AppStarRating from '../components/AppStarRating';
import AppFooter from '../components/AppFooter.js';
import { Subscribe, State } from '../store';

export default function PlacePage() {
  return (
    <Subscribe to={[State]}>
      {$ => (
        <React.Fragment>
          <main className="PlaceMain">
            <div className="places">
              <p className="top">{$.selectedUser().name}'s Places</p>
              <h1>{places[0].name}</h1>
              <p>
                <strong>Rating: {places[0].rating}</strong>
              </p>
              <div className="stars">
                <AppStarRating />
              </div>

              <div className="main-img" />
              <p>{places[0].description}</p>
            </div>

            <aside className="sidebar">
              <h3>Other Trips</h3>
              {places.map(place => {
                return (
                  <div className="placelocation" key={place.name}>
                    <img src={place.img} alt={place.name} />
                    <p className="top">
                      <strong>{place.name}</strong>
                    </p>
                    <p>{place.description}</p>
                    <hr />
                  </div>
                );
              })}
            </aside>
          </main>
          <AppFooter />
        </React.Fragment>
      )}
    </Subscribe>
  );
}

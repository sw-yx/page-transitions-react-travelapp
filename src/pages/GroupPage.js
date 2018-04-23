
import React from 'react'
import IconBase from '../components/IconBase'
// import IconMapPin from '../components/IconMapPin'
import {IconCalendar} from '../components/AppNavTransition'
// import { WithState, places, users } from '../store';
import './GroupPage.css'
export default class extends React.Component {

  render() {
    return (
      <main>
        <div className="places">
          <p className="top">Group Activities</p>
          <h1>4 Person Trip to Hawaii</h1>
          <hr />
          <div className="wrapper">
            <div className="box item1"></div>
            <div className="box item2"></div>
            <div className="box item3"></div>
            <div className="box item4"></div>
            <div className="box item5"></div>
          </div>
        </div>

        <aside className="sidebar">
          <h3><IconBase iconName="calendar"><IconCalendar /></IconBase> Schedule</h3>
          <p className="top">Sunday</p>
          <p>Arrival: We settled in and decided to go snorkeling. We saw spotted dolphins, tons of whales - one whale went right under the boat, and, of course, plenty of sea turtles. The snorkeling area is a little small and can get crowded, but we still had great opportunities to watch the turtles. The crew was terrific - Jason, Jackson, and Shane. We would definitely recommend this activity, and will do it again if we ever get back to Hawaii!</p>
          <p className="top">Monday</p>
          <p>After such an exciting first day, we decided to take it a bit easier and just get a nice lunch as our day activity. Had a wonderful time getting an opportunity to walk around a few blocks of Ala Moana and sampling some of the local eats that you can't really get back home. Every stop had something new and interesting to try, and there wasn't a single thing I tried that I really disliked.</p>
        </aside>
      </main>
    )
  }
}
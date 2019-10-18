import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div>
      <h1>Well this is akward...</h1>
      <p>Not sure how you got here? Neither are we, but we are sending off anything to help our devs get to the bottom of this right away!</p>
      <p>This is why we keep a dragon in the basement... I mean <i>dungeon</i> of course.</p>
      <h3>
        While we are getting to the bottom of this issue, and feeding fresh Jr Devs to our pet dragon, follow this&nbsp; 
        <Link to='/' >
          friendly link back to safety!
        </Link>
      </h3>
    </div>
  );
}
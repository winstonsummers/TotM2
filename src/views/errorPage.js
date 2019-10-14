import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div>
      <h1>Well this is ackward...</h1>
      <p>Not sure how you got here? Neither are we, but we are sending off anyhting to help our devs get to the bottom of this right away!</p>
      <p>This is why we keep a dragon in the basement... I mean Dungeon of course. </p>
      <p>While we are getting to the bottom of this issue, and feeding out pet Dragon fresh Jr Devs, follow this <Link to='/' >friendly link</Link> back to safety!</p>
    </div>
  );
}
import React from 'react';
import Image1 from '../../images/lesson/img1.jpg';

const english = () => {
  return (
    <div>
      <div id="lessonEnglish" style={{ backgroundColor: "bisque" }} className="text-center">
        <div className="container">
          <div>
            <h2 style={{
              color: "brown",
              fontFamily: 'Arial, sans-serif',
              fontSize: '28px',
              fontWeight: 'bold',
              padding: '10px'
            }}>MOTION</h2>
            <img
              src={Image1}
              alt="img1"
              style={{
                borderRadius: "50%",
                height: "40vh",
                marginBottom: "20px",
                marginTop: "20px"
              }}
            />
          </div>
          <div>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>Introduction to Motion</strong><br />
              Motion is a fundamental concept in physics that describes the change in position of an object over time. Understanding motion involves several key concepts: distance, displacement, speed, velocity, and acceleration. Additionally, equations of motion provide mathematical descriptions of how objects move.
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>Distance</strong><br />
              Distance is a scalar quantity that represents the total path length traveled by an object. It is always positive and does not take direction into account.<br />
              <em>Example:</em> If you walk 3 meters forward and then 4 meters backward, the total distance you walked is 3 + 4 = 7 meters.
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>Displacement</strong><br />
              Displacement is a vector quantity that represents the change in position of an object. It has both magnitude and direction, measuring the shortest path from the initial to the final position.<br />
              <em>Example:</em> If you walk 3 meters forward and then 4 meters backward, your displacement is 3 - 4 = -1 meter (the negative sign indicates direction).
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>Speed</strong><br />
              Speed is a scalar quantity that measures how fast an object is moving. It is the rate of change of distance with respect to time.<br />
              Speed = Distance / Time<br />
              <em>Example:</em> If a car travels 100 kilometers in 2 hours, its speed is 100 km / 2 hr = 50 km/hr.
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>Velocity</strong><br />
              Velocity is a vector quantity that measures the rate of change of displacement with respect to time. It includes both speed and direction.<br />
              Velocity = Displacement / Time<br />
              <em>Example:</em> If a car travels 100 kilometers north in 2 hours, its velocity is 100 km / 2 hr = 50 km/hr north.
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>Acceleration</strong><br />
              Acceleration is a vector quantity that measures the rate of change of velocity with respect to time. It can be positive (speeding up), negative (slowing down), or zero (constant velocity).<br />
              Acceleration = Change in Velocity / Time<br />
              <em>Example:</em> If a car's velocity increases from 0 to 60 km/hr in 5 seconds, its acceleration is 60 km/hr / 5 s = 12 km/hr/s.
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>Equations of Motion</strong><br />
              The equations of motion describe the relationship between displacement, velocity, acceleration, and time. These equations apply to objects moving with constant acceleration.<br />
              1. First Equation of Motion: v = u + at<br />
              2. Second Equation of Motion: s = ut + 1/2 at²<br />
              3. Third Equation of Motion: v² = u² + 2as
            </p>
            <p style={{
              textAlign: 'left',
              margin: '10px 0',
              padding: '10px',
              backgroundColor: '#fff5e1',
              borderRadius: '10px'
            }}>
              <strong>Example Problems</strong><br />
              <em>Problem 1:</em> A car starts from rest (initial velocity u = 0) and accelerates at 2 m/s² for 10 seconds. What is its final velocity?<br />
              v = u + at<br />
              v = 0 + (2 m/s² × 10 s) = 20 m/s<br />
              <em>Problem 2:</em> How far does the car travel in the above example?<br />
              s = ut + 1/2 at^2<br />
              s = 0 × 10 s + 1/2 × 2 m/s² × (10 s)²<br />
              s = 0 + 100 m = 100 m
            </p>
          </div>
        </div>
        <h3>Related Videos</h3>
        <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/your-video-id"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style={{
                display: 'block',
                margin: '20px auto',
                borderRadius: '10px',
                border: '2px solid #ddd'
              }}
            ></iframe>
              <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/your-video-id"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style={{
                display: 'block',
                margin: '20px auto',
                borderRadius: '10px',
                border: '2px solid #ddd'
              }}
            ></iframe>
              <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/your-video-id"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style={{
                display: 'block',
                margin: '20px auto',
                borderRadius: '10px',
                border: '2px solid #ddd'
              }}
            ></iframe>
      </div>
    </div>
  );
}

export default english;

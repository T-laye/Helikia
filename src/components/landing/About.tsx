import React from "react";

export default function About() {
  return (
    <section id="about" className="pb-[56px] sm:pb-[100px]">
      <div className="myContainer">
        <h2
          data-aos="flip-up"
          className="text-center mt-10 sm:mt-20 sm:text-2xl"
        >
          About
        </h2>
        <p data-aos="fade-up" className="mt-5 text-justify sm:text-xl">
          Helikia is a 2-day youth Word and Prayer Retreat, focused on raising
          young people into spiritual stature through intense fellowship,
          teaching, and prayer. Inspired by Acts 6, Ephesians 1:15-18, and
          Philippians 2:9, this retreat is designed to help youths grow in
          understanding, walk in power, and stand in spiritual authority.
          <br />
          <br />
          Attendees will stay within the church premises for the duration of the
          retreat, creating a focused atmosphere for transformation.{" "}
          <strong>
            Accommodation, registration, and feeding are completely free
          </strong>
          — all you need is a heart hungry for God.
          <br />
          <br />
          Come and be built. Come and grow.
          <br />
          <strong>This is Helikia — rise into stature.</strong>
        </p>
      </div>
    </section>
  );
}

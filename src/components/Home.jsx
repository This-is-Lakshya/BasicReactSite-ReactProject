import React from 'react'
import vg from "../assets/webillustrate.svg"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

export const Home = () => {
  return (
    <>
      <div className="home" id='home'>
        <main>
            <h1>MeStar</h1>
            <p>Solution to all your Problems!</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
          Explore and add your first skill to get started. HackerRank offers a variety of skills, tracks and tutorials for you to learn and improve.
          Explore and add your first skill to get started.
          </p>
        </div>
      </div>

      <div className="home3" id='about'>
        <div>
          <h1>What's that?</h1>
          <p>
          Explore and add your first skill to get started. HackerRank offers a variety of skills, tracks and tutorials for you to learn and improve.
          Explore and add your first skill to get started. HackerRank offers a variety of skills, tracks and tutorials for you to learn and improve.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay:"0.3s", }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay:"0.5s", }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay:"0.7s", }}>
              <AiFillYoutube />
              <p>YouTube</p>
            </div>

            <div style={{ animationDelay:"1.0s", }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}


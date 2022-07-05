import './assets/styles/App.css';
import Header from './assets/components/Header';
import HeroCard from './assets/components/Hero-card';
import { useState, useEffect } from "react";

import {heroesList} from './data/data.js';


function App() {
  return (
    <div className="App">
        <Header 
          title="This page has been created to try React and show the info about some superheroes"
        />
        <div className='main'>
          { 
            heroesList.map( ( {heroId, heroName, heroDescription, imagePath} ) => (
              <HeroCard
                key={heroId}
                title={heroName}
                imgPath={imagePath}
                heroDescription={heroDescription}
              />
            ) 
            )
          }
        </div>
    </div>
  );

  // return (
  //   <div className="App">
  //     <Header 
  //       title="This page has been created to try React and show the info about some superheroes"
  //     />
  //     <HeroCard
  //       title="Superman"
  //       heroDescription="the best superhero ever, I must admit, I have no idea about him. All I want to do is to fill this field to try using props of my React component (HeroCard)."
  //       imgPath="https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"
  //     />
  //   </div>
  // );
}

export default App;

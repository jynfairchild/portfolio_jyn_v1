import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/app.scss';
import { Footer } from '../components/footer';
import { Header } from '../components/header_home';
import { ProjectCard } from '../components/projectcard';
import projectOrder from "../json/_projectOrder.json";

//svgs
import herolines from "../illustrations/home_lines.svg";
import namelines from "../illustrations/name_lines.svg";
import flurish from "../illustrations/flurish_lines.svg";

function Home() {


  return (

    <div className="container">
      <Header />

      <div className='row hero-banner'>
        <div className='d-md-flex flex-md-equal w-100'>
          <img className='svglines' src={herolines} alt='bglines' />
          <h1 className='name top-absolute'>Jyn Fairchild</h1>
          <img className='namelines mid-absolute' src={namelines} alt='namelines' />
          <h3 className='role bot-absolute'>DESIGNER</h3>
        </div>
      </div>

      {/* Project Links */}
      <div className='row'>
        <img className='flurish-horizontal' src={flurish} alt='flurish' />
        <h3 className='flurish-text'>PROJECTS</h3>
      </div>
      <div className='row'>
        <div className="col-12 d-md-flex flex-parent">

        <Link className='flex-child-66' to={'./project/' + projectOrder.mostRecent[0]}>
          <ProjectCard projectName={projectOrder.mostRecent[0]}/>
        </Link>

        {/* Space Between a row on mobile (when vertical) */}
        <div className='d-lg-none phone-between-padding'></div>

        <Link className='flex-child-33' to={'./project/' + projectOrder.mostRecent[2]}>
          <ProjectCard projectName={projectOrder.mostRecent[2]}/>
        </Link>

        </div>
      </div>

      {/* 2 Recent Reviews */}

      <div className='row'>
        <div className="col-12 d-md-flex flex-parent">

          <Link className='flex-child-33' to={'./project/google' + projectOrder.mostRecent[1]}>
            <ProjectCard projectName={projectOrder.mostRecent[1]}/>
          </Link>

          <div className='d-lg-none phone-between-padding'></div>
          
          <Link className='flex-child-66' to={'./project/bantam' + projectOrder.mostRecent[3]}>
            <ProjectCard projectName={projectOrder.mostRecent[3]}/>
          </Link>

        </div>
      </div>

      <div className='row'>
        <div className="d-md-flex flex-md-equal w-100">

          <Link to={{pathname:'./project/flow' + projectOrder.mostRecent[5]}}>
            <ProjectCard projectName={projectOrder.mostRecent[5]}/>
          </Link>

          {/* <div className='d-lg-none phone-between-padding'></div>

          <Link to={'./project/flow' + projectOrder.mostRecent[4]}>
            <ProjectCard projectName={projectOrder.mostRecent[4]}/>
          </Link>

          <div className='d-lg-none phone-between-padding'></div>

          <Link to={'./project/flow' + projectOrder.mostRecent[0]}>
            <ProjectCard projectName={projectOrder.mostRecent[0]}/>
          </Link> */}

        </div>
      </div>


      {/* long boi + all */}
      <div className='row justify-content-center pt-50 pt-lg-50'>
        <div className='col-lg-6 pt-5 pt-md-5'>
          <p className='line-spacing-paragraph'>
            Without design, the world sucks.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

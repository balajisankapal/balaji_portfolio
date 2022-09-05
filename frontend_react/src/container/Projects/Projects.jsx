import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Projects.scss';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projects, setProjects] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "projects"]';
    //const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setProjects(data);
    });

    // client.fetch(brandsQuery).then((data) => {
    //   setBrands(data);
    // });
  }, []);

  return (
    <>
      <h2 className="head-text">MY PROJECTS</h2>
      {projects.length && (
        <>
          <div className="app__projects-item app__flex">
            {/* <img src={urlFor(courses[currentIndex].imgurl)} alt={courses[currentIndex].name} /> */}
            <div className="app_projects-content">
              {/* <p className="p-text">{courses[currentIndex].feedback}</p> */}
              <div>
                <h4 className="bold-text">{projects[currentIndex].name}</h4>
                <h5 className="p-text">{projects[currentIndex].description}</h5>
              </div>
            </div>
          </div>

          <div className="app__projects-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? projects.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === projects.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      {/* <div className="app__projects-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div> */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Projects, 'app__projects'),
  'projects',
  'app__primarybg',
);
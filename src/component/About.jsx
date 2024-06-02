const About = () => {
  return (
    <>
      <div
        name="About"
        className="text-white max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 "
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">About</h1>
          <p className="text-green-200">
            Hello, I'm Priyanshu Bhardwaj, a passionate Web developer with a
            keen eye for MERN Stack . With a background in IT, I strive to
            create impactful and visually stunning Software solutions that leave
            a lasting impression.
          </p>
          <br />

          <h1 className="text-blue-500 font-semibold text-xl">
            Education & Training
          </h1>
          <span className="text-green-200">
            [Master of Computer Applications], [LNCT], [2022-2024] [Bachelour of
            Computer Applications],[Birla Institute of Technology], [2019-2022]
          </span>
          <br />
          <br />
          <h1 className="text-blue-500 font-semibold text-xl">
            Skills & Expertise
          </h1>

          <span className="text-green-200 text-justify">
            <strong>Proficient in:</strong>
            <ul className="list-disc list-inside">
              <li>Programming Languages: JavaScript, HTML, CSS, SQL</li>
              <li>Frameworks and Libraries: React, Node.js</li>
            </ul>

            <strong>Experienced with:</strong>
            <ul className="list-disc list-inside">
              <li>Development Tools: Git, GitHub, Visual Studio Code</li>
              <li>Databases: MySQL, PostgreSQL, MongoDB</li>
              <li>Operating Systems: Windows</li>
            </ul>

            <strong>Strong grasp of:</strong>
            <ul className="list-disc list-inside">
              <li>Software Development Methodologies: Waterfall</li>
              <li>UI/UX Design: Figma</li>
            </ul>

            <strong>Excellent problem-solving skills</strong>
            <br />
            <strong>Effective communicator and collaborator</strong>
          </span>

          <br />
          <br />
          <h1 className="text-blue-500 font-semibold text-xl">Experience</h1>
          <span className="text-green-200 text-justify">
            As a recent graduate with a Master's degree, I bring expertise in
            MERN stack development. Over the course of my studies, I have
            completed projects demonstrating proficiency in full-stack web
            development, utilizing MongoDB, Express.js, React.js, and Node.js to
            build dynamic applications. I excel in problem-solving and thrive in
            collaborative team environments. Committed to ongoing learning, I
            stay updated with the latest industry trends and technologies to
            continually enhance my skills.
          </span>
          <br />
          <br />
          <h1 className="text-blue-500 font-semibold text-xl">
            Mission Statement
          </h1>
          <span className="text-green-200">
            My mission is to harness my skills and creativity in [Software
            Engineering] to pioneer innovative solutions that surpass client
            expectations and enrich the digital realm. Dedicated to perpetual
            growth, I actively pursue fresh challenges and opportunities, driven
            by a relentless quest for knowledge and advancement.
          </span>
        </div>
      </div>
    </>
  );
};

export default About;

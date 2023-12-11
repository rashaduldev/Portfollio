import { Link } from "react-router-dom";

const Education = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <h1 className="text-3xl lg:text-5xl font-bold">EDUCATION & SKILL</h1>
        <p className="text-2xl lg:text-4xl my-5 mb-10">
          Showcasing your talent <br /> amplifying your impact
        </p>
      </div>
      <p className="text-2xl ml-16 font-bold"> Education</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:text-left mx-10 text-center">
        <div className="shadow-2xl p-3 rounded-lg">
          <Link to={"https://green.edu.bd"}>
            <button className="btn btn-outline btn-warning text-3xl">
              2022-Running(3rd Year)
            </button>
            <h1 className="text-4xl font-bold mt-3">
              Green University of Bangladesh
            </h1>
            <p className="text-2xl">BSc in CSE</p>
            <p className="my-5 text-2xl">Location:Purbachal,Narayangang</p>
            <ul className="flex gap-5 font-bold">
              <li>Email: admission@green.edu.bd</li>
              <li>Phone: +880 9614482482</li>
            </ul>
          </Link>
        </div>
        <div className="shadow-2xl p-3 rounded-lg text-center lg:text-right">
          <Link to={"https://dpi.gov.bd"}>
            <button className="btn btn-outline btn-warning text-3xl">
              2019-2021
            </button>
            <h1 className="text-4xl font-bold mt-3">
              Dhaka Polytechnic Institute
            </h1>
            <p className="text-2xl">Computer Technology</p>
            <p className="my-5">
              Location:Shahid Tajuddin Ahmed Sorony, Tejgaon Industrial Area,
              Dhaka – 1208
            </p>
            <ul className="flex gap-5 justify-end font-bold">
              <li>Email: principal_dpi54@yahoo.com</li>
              <li>Phone: 02-58151880</li>
            </ul>
          </Link>
        </div>
        <div className="shadow-2xl p-3 rounded-lg">
          <Link
            to={
              "https://en.wikipedia.org/wiki/Cox%27s_Bazar_Polytechnic_Institute"
            }
          >
            <button className="btn btn-outline btn-warning text-3xl">
              2017-2018
            </button>
            <h1 className="text-4xl font-bold mt-3">
              CoxsBazar Polytechnic Institute
            </h1>
            <p className="text-2xl">Computer Technology</p>
            <p className="my-5">
              Location:Link Road, Zhilanja, Coxs Bazar, 4701, Bangladesh
            </p>
            <ul className="flex gap-5 font-bold">
              <li>Email: coxspoly@yahoo.com</li>
              <li>Phone: 0000-00001</li>
            </ul>
          </Link>
        </div>
        <div className="shadow-2xl p-3 rounded-lg text-center lg:text-right">
          <Link
            to={
              "https://www.sohopathi.com/nawda-bash-high-school/?GoogleAutoSignIn"
            }
          >
            <button className="btn btn-outline btn-warning text-3xl">
              2013-2017
            </button>
            <h1 className="text-4xl font-bold mt-3">Nawdabash High School</h1>
            <p className="text-2xl">Science</p>
            <p className="my-5 text-2xl">Kurigram</p>
            <ul className="flex gap-5 justify-end font-bold">
              <li>Email: nawdabash.edu.bd</li>
              <li>Phone: +880 93456782</li>
            </ul>
          </Link>
        </div>
      </div>
      <p className="text-2xl ml-16 font-bold my-7">Skills</p>
      <div className="mx-10">
      <div className="collapse collapse-arrow shadow-2xl my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
           Javascript
          </div>
          <div className="collapse-content">
            <p>Certainly! In the context of JavaScript, problem-solving skills involve the ability to approach coding challenges or issues logically and systematically. Heres an expansion on how problem-solving skills can be applied in JavaScript:
              <ul>
                <li>Problem-Solving Skills</li>
                <li>Asynchronous Programming and Problem Solving</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow shadow-2xl">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium">
          React
          </div>
          <div className="collapse-content">
            <p>React.js ,JavaScript (ES6+) ,JSX, Component-based Architecture , State Management, React Router, RESTful APIs/GraphQL , Frontend Build Tools</p>
          </div>
        </div>
        <div className="collapse collapse-arrow shadow-2xl">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Firebase
          </div>
          <div className="collapse-content">
            <p>Firebase is a popular platform developed by Google, offering various tools and services for building and scaling web and mobile applications. Heres an explanation of the skills needed to work effectively with Firebase:
              <ul>
                <li>1.Firebase Authentication</li>
                <li>2.Firestore/Realtime Database</li>
                <li>3.Firebase Storage</li>
                <li>4.Firebase Cloud Functions</li>
                <li>5.Firebase Hosting</li>
                <li>6.Firebase Cloud Messaging (FCM)</li>
                <li>7.Firebase Analytics</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow shadow-2xl my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          Express.js
          </div>
          <div className="collapse-content">
            <p>Proficiency in using Express.js, a backend framework for Node.js, to build robust server-side applications, create APIs, and handle HTTP requests.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow shadow-2xl">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          Node.js
          </div>
          <div className="collapse-content">
            <p>Strong proficiency in Node.js for server-side development, event-driven architecture, and working with npm packages.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow shadow-2xl">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          MongoDB
          </div>
          <div className="collapse-content">
            <p>Understanding of NoSQL databases and proficiency in MongoDB, including data modeling, querying, and CRUD operations.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow shadow-2xl">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          Authentication and Authorization(JWT)
          </div>
          <div className="collapse-content">
            <p>Implementing user authentication using libraries like JWT (JSON Web Tokens), OAuth, or Passport.js for secure access to web applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

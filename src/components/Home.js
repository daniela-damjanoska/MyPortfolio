import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="Home">
            <div className="Navigation">
                <p>
                    <b>
                        Want to see some of my{' '}
                        <span
                            onClick={() => navigate('/projects')}
                            className="text-purple"
                        >
                            Projects
                        </span>{' '}
                    </b>
                </p>
            </div>
            <div className="overall-cont-wrapper">
                <div className="img-box">
                    <img src="/img/profile.jpg" alt="" />
                    <p>Daniela Damjanoska</p>
                    <p>
                        <span className="text-purple">Front-end</span> Developer
                    </p>
                </div>
                <div className="cont-box">
                    <h2>About me</h2>
                    <p>
                        <b>
                            An ambitious, novice front-end developer, passionate
                            about web development and designing attractive user
                            experiences. Creative, detail-oriented and
                            imaginative with developing skills in{' '}
                            <span>
                                <u>
                                    JavaScript, React.js, jQuery, CSS,
                                    Bootstrap, HTML, Git.
                                </u>{' '}
                            </span>
                            I am seeking a front-end developer position in a
                            company which prides itself in providing clients
                            with outstanding web solutions.
                        </b>
                    </p>
                </div>
            </div>
            <div className="Navigation bottom">
                <a href="mailto:daniela_damjanoska@yahoo.com" target="_blank">
                    <i className="far fa-envelope"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/daniela-damjanoska-b1165120a/"
                    target="_blank"
                >
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/daniela-damjanoska" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
    );
}

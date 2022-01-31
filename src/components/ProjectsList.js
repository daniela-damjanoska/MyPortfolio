import React from 'react';
import ProjectCard from './ProjectCard';
import sites from '../data';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

export default function ProjectsList() {
    const navigate = useNavigate();

    return (
        <div className="ProjectList">
            <Header>
                <p onClick={() => navigate('/')} className="right text-purple">
                    <i className="fas fa-arrow-left"></i> <b>Go back</b>
                </p>
            </Header>
            <div className="ProjectList-wrapper">
                {sites.map(({ id, title, url, desc, tech }) => (
                    <ProjectCard
                        key={id}
                        id={id}
                        title={title}
                        url={url}
                        desc={desc}
                        tech={tech}
                    />
                ))}
            </div>
        </div>
    );
}

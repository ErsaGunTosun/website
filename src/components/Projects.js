import React from 'react'
import { Octokit } from "octokit";


const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_TOKEN,
});

export default function Projects(props) {
    const [repos, setRepos] = React.useState([]);
    const [isRender, setIsRender] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    // get github repo data func
    const gitGetData = async () => {
        octokit.request("GET /users/{owner}/repos", {
            owner: "ErsaGunTosun",
        })
            .then(rslt => {
                if (rslt.data.length > 0) {
                    setRepos(rslt.data)
                    setIsRender(true);
                    console.log(rslt.data)
                }
            })
    }

    // get repo data
    React.useEffect(() => {
        gitGetData();
    }, [])

    // repo data check
    React.useEffect(() => {
        if (isRender) {
            if (repos.length > 0) {
                setIsError(false);
            } else {
                setIsError(true);
            }
        } else {
            setIsError(true);
        }
    }, [repos])

    return (
        <div>
            <div className="col-12 row m-0 p-0 justify-content-center projects">
                {isRender ? (
                    // Error div
                    isError ? (<div className='w-100 h-100 text-center justify-content-center d-flex align-items-center'>
                        <div className='text-align-center'>
                            <h4 className='fst-italic fw-bold' style={{ color: "#881798" }}>Projects could not be uploaded</h4>
                            <h5 className=' fst-italic' style={{ color: "#881798" }}>Try again later</h5>
                        </div>
                    </div>) :
                        // Projects div
                        repos.map((repo, index) => {
                            if (repo.description) {
                                if (repo.description.indexOf('#project') > -1) {
                                    return (
                                        <div key={index} className="col-md-4 col-12 row d-flex justify-content-center mx-md-4 px-l-5 px-sm-0">
                                            <div className={`card project-div bg-transparent project-div align-self-center `}>
                                                <div className='card-body'>

                                                    {/* Project Name */}
                                                    <p className={`card-title project-title h5 ${props.theme === "dark" ? "text-light" : "text-dark"}`}>{repo.name.charAt(0).toUpperCase() + repo.name.slice(1)}</p>

                                                    {/* Project Tags */}
                                                    <p className="card-subtitle project-tags mb-1 mt-1 text-start">
                                                        {repo.topics.map((item, index) => {
                                                            return (<span key={index} className='mx-1 project-tag'>{item}</span>)
                                                        })}
                                                    </p>
                                                    
                                                    {/* Project Description */}
                                                    <p className={`card-subtitle project-description ${props.theme === 'dark' ? 'project-light-description' : 'project-dark-description'} mb-2 mt-2 text-start`}>
                                                        {repo.description.split('#project')[0]}
                                                    </p>

                                                    {/* Project Status */}
                                                    <p className={`card-subtitle project-status ${props.theme === "light" ? "project-status-dark" : "project-status-light"} mb-2 mt-2 text-start`}>
                                                        Status:<span className="project-status">{repo.description.split('!')[1].charAt(0).toUpperCase() + repo.description.split('!')[1].slice(1)}</span>
                                                    </p>

                                                    {/* Project Link */}
                                                    <a href={`${repo.html_url}`} className="card-link project-link">Project Link</a>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        })
                ) : (
                    // Loading div
                    <div className='w-100 h-100 text-center justify-content-center d-flex align-items-center'>
                        <div className="spinner-border" style={{ color: "#881798" }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

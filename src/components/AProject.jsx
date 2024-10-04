import { useRef, useEffect } from "react";
import styled from "styled-components";

export default function AProject({ aProject, showModal, modalOnClick }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    let observer;

    if (videoElement) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !showModal) {
            // Play the video when it's in the viewport and modal is not open
            videoElement.play();
          } else {
            // Pause the video when it's out of the viewport or modal is open
            videoElement.pause();
          }
        },
        {
          threshold: 0.8, // Controls how much video needs to show to play
        }
      );

      observer.observe(videoElement);
    }

    return () => {
      if (observer && videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [showModal]);

  const projectWidth = aProject.width;

  return (
    <AProjectWrapper projectWidth={projectWidth}>
      <div className="project-container">
        <h3 className="heading-secondary">{aProject.name}</h3>
        <div className="image-container">
          <video
            playsInline
            muted
            loop
            ref={videoRef}
            className="project"
            preload="metadata"
            src={aProject.video}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="btn-container">
          <div className="btn-position">
            <a
              href={aProject.github}
              className="button-visit"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              &nbsp; Github
            </a>
          </div>
          <div className="btn-position">
            <button
              className="button-details"
              onClick={() => modalOnClick(aProject.details)}
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
              </svg>
              &nbsp; Details
            </button>
          </div>
        </div>
      </div>
    </AProjectWrapper>
  );
}

const AProjectWrapper = styled.div`
  .project-container {
    width: 65%;
    height: auto;
    background: white;
    border-radius: 20px;
    margin: 0 auto 5rem auto;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.25);
    padding: 2rem 1rem;
    max-width: 125rem;
    animation: liftOff 2s ease-out;
    animation-delay: 0.2s;
    animation-fill-mode: backwards;

    @media (max-width: 56.25em) {
      width: 95%;
    }

    @keyframes liftOff {
      0% {
        box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
        border: 1px lightgray solid;
      }

      50% {
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
      }

      100% {
        box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.25);
        border: 1px white solid;
      }
    }
  }

  .heading-secondary {
    font-size: 2.5rem;
    text-transform: uppercase;
    text-align: center;
    color: black;
    font-weight: 300;

    @media (max-width: 56.25em) {
      font-size: 2.5rem;
    }
  }

  .image-container {
    height: auto;
    width: ${props => props.projectWidth}%;
    margin: 0 auto 0 auto;
    position: relative;
  }

  .project {
    border-radius: 10px;
    border: solid 1px lightgrey;
    height: auto;
    width: 100%;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1rem 5rem 0 5rem;
  }

  .btn-position {
    justify-self: center;
  }

  .button-visit {
    font-size: 2rem;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid rgb(120, 139, 249);
    padding: 0.5rem 1rem;
    transition: all 0.2s;

    color: black;
    background: -webkit-linear-gradient(
      left,
      rgb(102, 201, 255),
      rgb(120, 139, 249)
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    display: flex;
    align-items: center;

    svg {
      fill: rgb(120, 139, 249);
    }
  }

  @media (hover: hover) {
    .button-visit:hover {
      -webkit-background-clip: unset;
      -webkit-text-fill-color: white;
      color: white;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
      border-radius: 4px;

      svg {
        fill: white;
      }
    }
  }

  .button-visit:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(0);
  }

  .button-details {
    font-size: 2rem;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid rgb(120, 139, 249);
    padding: 0.5rem 1rem;
    transition: all 0.2s;
    cursor: pointer;
    line-height: 1.7;

    display: flex;
    align-items: center;

    color: black;
    background: -webkit-linear-gradient(
      left,
      rgb(102, 201, 255),
      rgb(120, 139, 249)
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    svg {
      fill: rgb(120, 139, 249);
    }
  }

  @media (hover: hover) {
    .button-details:hover,
    .button-details:focus {
      -webkit-background-clip: unset;
      -webkit-text-fill-color: white;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
      border-radius: 4px;
      svg {
        fill: white;
      }
    }
  }

  .button-details:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(0);
  }
`

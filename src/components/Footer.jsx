import styled from "styled-components";
import Resume from "./Resume";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure client-side rendering happens consistently
  }, []);

  return (
    <FooterWrapper>
      <Resume />
      <div className="icon-container">
        {isMounted && (
          <>
            <a
              href="https://www.linkedin.com/in/jared-rothenberg"
              className="footer-icon"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
            </a>

            <a
              href="https://github.com/jaredar1232"
              className="footer-icon"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>
            <a
              href="mailto:jaredar@gmail.com"
              className="footer-icon"
              aria-label="Email-Me"
            >
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
            </a>
          </>
        )}
      </div>

      <div className="u-center-text">
        Copyright &copy; {new Date().getFullYear()}, &nbsp; Jared Rothenberg.
        &nbsp; All Rights Reserved
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: rgb(24, 30, 46);
  padding: 1.5rem 0 1rem 0;
  color: white;

  @media (max-width: 56.25em) {
    padding: 2rem 0 2rem 0;
  }

  .icon-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 40%;
    height: auto;
    margin: 0 auto;

    @media (max-width: 56.25em) {
      width: 100%;
    }
  }

  .footer-icon {
    justify-self: center;
    width: 4rem;
    height: 4rem;
    border: solid 2px white;
    border-radius: 6px;
    text-align: center;
    color: white;
    transition: all 0.3s;
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        border: solid 2px rgb(102, 201, 255);
        color: rgb(102, 201, 255);
        box-shadow: 0 0.5rem 1rem rgba(255, 255, 255, 0.4);
        transform: translateY(-2px);
      }
    }

    &:active {
      box-shadow: 0 0.25rem 0.5rem rgba(255, 255, 255, 0.2);
      transform: translateY(0);
    }

    @media (max-width: 56.25em) {
      margin: 1rem;
    }
  }

  .anchor-tag {
    width: 100%;
  }

  .icon-link {
    width: 100%;
  }

  .footer-icon i {
    font-size: 2.6rem;
    padding-top: 0.6rem;
  }

  .icon {
    font-size: 2.6rem;
    padding-top: 0.6rem;
  }

  .u-center-text {
    margin-top: 2rem;
    text-align: center;
    font-size: 1.2rem;
  }
`;
"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Script from "next/script";

export default function Cookies() {
  const [isVisible, setIsVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    if (consent === "accepted") {
      setAccepted(true);
    } else if (consent !== "rejected") {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setAccepted(true);
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setAccepted(false);
    setIsVisible(false);
  };

  return (
    <>
      {accepted && (
        <Script id="matomo" strategy="afterInteractive">
          {`
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);

            (function() {
              var u="//matomo.bokobelin.top/";
              _paq.push(['setTrackerUrl', u + 'matomo.php']);
              _paq.push(['setSiteId', '1']);

              var d=document,
                  g=d.createElement('script'),
                  s=d.getElementsByTagName('script')[0];

              g.async=true;
              g.src=u+'matomo.js';
              s.parentNode.insertBefore(g,s);
            })();
          `}
        </Script>
      )}

      {isVisible && (
        <StyledWrapper>
          <div className="card">
            <div className="content">
              <span className="icon">{/* Your SVG here */}</span>

              <p className="title">Your privacy is important to us</p>

              <p className="description">
                We collect basic cookies. To opt out, use a reputable ad blocker
                such as uBlock Origin/uBlock Origin Lite.
              </p>

              <div className="actions">
                <button
                  className="reject-button"
                  type="button"
                  onClick={handleReject}
                >
                  Reject optional
                </button>

                <button
                  className="accept-button"
                  type="button"
                  onClick={handleAccept}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </StyledWrapper>
      )}
    </>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;

  .card {
    --shadow:
      rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 2px 6px 2px;

    width: 80%;
    max-width: 300px;
    background-color: white;
    border-radius: 1.5rem;
    box-shadow: var(--shadow);
    margin: 20px auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 2rem 1.5rem;
  }

  .icon {
    position: relative;
    margin: -4rem auto 2rem;
  }

  .title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #4b5563;
  }

  .description {
    margin-bottom: 1.5rem;
    font-size: 0.875rem;
    text-align: justify;
    color: #4b5563;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
  }

  .accept-button,
  .reject-button {
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
    font-weight: 600;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition:
      background-color 0.3s,
      color 0.3s;
  }

  .accept-button {
    color: #634647;
    background-color: #ddad81;
  }

  .accept-button:hover {
    background-color: #634647;
    color: #ddad81;
  }

  .reject-button {
    color: #634647;
    background-color: #f3f4f6;
  }

  .reject-button:hover {
    background-color: #d1d5db;
  }
`;

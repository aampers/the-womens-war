import React from 'react';
import './style.scss';

const Episode = (props) => {
  const { number, title, description, pdf, epub, link } = props.data.frontmatter;
  const formattedLink = link[link.length - 1] === '/' ? link : link + '/';
  return (
    <div className="episode">
      <h1 className="episode__number">Episode {number}</h1>
      <h2 className="episode__title">{title}</h2>
      {description && <p className="episode__description">{description}</p>}
      {(pdf || epub) && (
        <div className="episode__scrips">
          <a href={pdf} className="episode__scripts-pdf" download>
            Download PDF
          </a>
          <a href={epub} className="episode__scripts-epub" download>
            Download ePUB
          </a>
        </div>
      )}
      {link && (
        <iframe
          style={{ maxWidth: '100%' }}
          allow="autoplay"
          title={title}
          width="500"
          height="125"
          src={`${formattedLink}?embed=true`}
          frameBorder="0"
        ></iframe>
      )}
    </div>
  );
};

export default Episode;

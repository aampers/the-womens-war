import React from 'react';
import './style.scss';

const Episode = (props) => {
  const { number, title, description, pdf, epub, link } = props.data.frontmatter;
  const formattedLink = link[link.length - 1] === '/' ? link : link + '/';
  return (
    <div className="episode">
      <h2 className="episode__number">Episode {number}</h2>
      <h1 className="episode__title">{title}</h1>
      {description && <p className="episode__description">{description}</p>}
      {(pdf || epub) && (
        <div className="episode__scrips">
          {pdf && (
            <a href={pdf} className="episode__scripts-pdf" download>
              Download PDF
            </a>
          )}
          {epub && (
            <a href={epub} className="episode__scripts-epub" download>
              Download ePUB
            </a>
          )}
        </div>
      )}
      {link && (
        <iframe
          style={{ maxWidth: '100%' }}
          allow="autoplay"
          title={title}
          width="500"
          height="150"
          src={`${formattedLink}?embed=true`}
          frameBorder="0"
        ></iframe>
      )}
    </div>
  );
};

export default Episode;

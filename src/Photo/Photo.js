/** @format */

import index from '../index.css';

export default function Photo({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) {
  portfolio_url;
  return (
    <main>
      <article className="photo">
        <img src={regular} alt={alt_description} />
        <div className="photo-info">
          <div>
            <h4>{name}</h4>
            <p>{likes}</p>
          </div>
          <a href={portfolio_url}>
            <img src={medium} className="user-img" alt="" />
          </a>
        </div>
      </article>
    </main>
  );
}

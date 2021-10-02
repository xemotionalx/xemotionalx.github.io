import Image from "next/image";

export default function Card({
  image,
  title,
  description,
  siteLink,
  githubLink,
}) {
  return (
    <div className="card">
      <div class="card">
        {image}
        <div class="card__text-container">
          <div className="card__text-copy">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

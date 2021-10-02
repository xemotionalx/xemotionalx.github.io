import Image from "next/image";
import Card from "../components/Card";
import UnicornSkull from "../images/unicorn-skull-logo.png";

export default function Projects() {
  return (
    <main>
      <div className="projects">
        <div className="projects__heading">
          <h1>Projects</h1>
        </div>
          <div>
            <Card
              image={<Image src={UnicornSkull} alt="pic" />}
              title="Pairigy"
              description="pairigy is a website"
              primaryLink="a"
              secondaryLink="b"
            />
          </div>
          <div>
            <Card
              image={<Image src={UnicornSkull} alt="pic" />}
              title="Pairigy"
              description="pairigy is a website"
              primaryLink="a"
              secondaryLink="b"
            />
          </div>
          <div>
            <Card
              image={<Image src={UnicornSkull} alt="pic" />}
              title="Pairigy"
              description="pairigy is a website"
              primaryLink="a"
              secondaryLink="b"
            />
          </div>
      </div>
    </main>
  );
}

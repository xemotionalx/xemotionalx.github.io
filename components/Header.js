import Image from "next/image";
import Portrait from "../images/xemocornx-portrait.gif";
import TextLogo from "../images/xemotionalunicornx-text-logo.GIF";

export default function Header() {
  return (
    <div className="header">
    <header className="text-center">
      <div>
        <Image
          src={Portrait}
          alt="illustrated portrait of MaiAda Carpano"
          height={300}
          width={300}
        />
      </div>
      <div>
        <Image
          src={TextLogo}
          alt="heading: emotional unicorn"
          height={30}
          width={266}
        />
      </div>
    </header>
    </div>
  );
}

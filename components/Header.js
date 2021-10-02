import Portrait from '../images/xemocornx-portrait.gif'
import TextLogo from '../images/xemotionalunicornx-text-logo.GIF'
import Image from 'next/image'

export default function Header() {
  return (
    <div>
      <header>
        <Image
          src={Portrait}
          alt="illustrated portrait of MaiAda Carpano"
          height={300}
          width={300}
        />
        <Image
          src={TextLogo}
          alt="heading: emotional unicorn"
          height={30}
          width={350}
        />
      </header>
    </div>
  );
}

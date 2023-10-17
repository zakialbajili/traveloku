import Image from "next/image";
import Container from "components/Container";
import traveloLogo from "public/assets/travelo-logo-header.png";
const Header = () => {
  return (
    <header className="h-[85] bg-white shadow-lg p-4">
      <Container>
        <div className="flex justify-betwen items-center">
          <Image
            src={traveloLogo}
            alt="TraveloLogo"
            placeholder="blur"
            height="48"
            width="182"
          />
        </div>
      </Container>
    </header>
  );
};
export default Header;

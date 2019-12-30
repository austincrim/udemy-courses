import Link from "next/link";
import Button from "@material-ui/core/Button";
import { ButtonGroup } from "@material-ui/core";

const Navbar = () => {
  return (
    <div className="navbar">
      <ButtonGroup variant="text">
        <Button>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </Button>
        <Button>
          <Link href="./users">
            <a>USERS</a>
          </Link>
        </Button>
      </ButtonGroup>

      <style jsx>{`
        .navbar {
          margin-bottom: 20px;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Navbar;

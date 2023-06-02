import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="w-full bg-primary mx-auto paddingY font-light text-[16px]">
      <div className="w-full flex items-center justify-between">
        <small className="font-brandonLight text-secondary">
          &copy; 2023 Talia Levy
        </small>
        <Link
          to="/imprint"
          className="text-secondary font-helvetica text-[16px] cursor-pointer"
        >
          IMPRINT
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

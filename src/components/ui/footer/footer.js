import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <h1>Footer</h1>
      <FontAwesomeIcon icon="fa-brands fa-github" />
      <FontAwesomeIcon icon={faCodeBranch} />
    </footer>
  );
}

export default Footer;

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons from the free solid/regular/brand icon sets
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

const MyComponent = () => {
  return (
    <div>
      {/* Use the icon like this */}
      <h1>Enjoy your <FontAwesomeIcon icon={faCoffee} />!</h1>
      <p><FontAwesomeIcon icon={faSmile} /> Have a nice day!</p>
      <FontAwesomeIcon className="text-2xl" icon={faStopwatch} />
      <FontAwesomeIcon icon="fa-solid fa-stopwatch" />
      <p>Follow us on <FontAwesomeIcon icon={faGithub} /> GitHub!</p>
    </div>
  );
};

export default MyComponent;
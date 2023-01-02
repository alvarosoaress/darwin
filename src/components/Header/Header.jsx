import './Header.css';
import empresa from '../../imgs/empresa.png';
import './vanilla-tilt.js';

function Header() {
  return (
    <section class="sec-header">
      <script type="text/javascript" src="./vanilla-tilt.js" defer></script>
      <div class="header-container" data-tilt>
        <img src={empresa} alt="" class="logo" />
        <h1>DARWIN</h1>
      </div>
    </section >
  );
}

export default Header;
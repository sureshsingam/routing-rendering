
import NavLinks from "./nav-links";

export default function MainHeader() {

    return (
        <header id="main-header">
            <div id="logo">
                <NavLinks navlinkhref="/">NextNews</NavLinks>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLinks navlinkhref="/news"> News</NavLinks>
                    </li>
                    <li>
                        <NavLinks navlinkhref="/archive">Archive</NavLinks>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
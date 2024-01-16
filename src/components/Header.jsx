export default function Nav({ links }) {
    return (
        <div className="header">
            <nav className="navbar">
                <div className="container-fluid">
                    <div className="" id="">
                        <ul className="">
                            {links.map((link) => link)}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
  }
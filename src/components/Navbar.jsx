export default function Nav({ links }) {
    return (
        <div className="">
            <nav className="">
                <div className="">
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
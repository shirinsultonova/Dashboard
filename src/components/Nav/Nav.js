import { Logo } from "../../assets/images/icons";
import { Items } from "../Items";
import { NavLink } from "react-router-dom";

export const Nav = (arr) => {
	return (
		<div className='navigation'>
			<div className='d-flex slign-items-center logo-wrapper'>
				<Logo />
				<p className='logo-title'>Dashboard Kit</p>
			</div>
			<nav>
				<ul className='list-unstyled site-nav-list'>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "site-nav-item-active d-flex site-nav-item align-items-center"
									: "d-flex site-nav-item align-items-center"
							}
							to='/'
						>
							<Items arr={arr.obg[0]} />
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "site-nav-item-active d-flex site-nav-item align-items-center"
									: "d-flex site-nav-item align-items-center"
							}
							to='/tickets'
						>
							<Items arr={arr.obg[1]} />
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "site-nav-item-active d-flex site-nav-item align-items-center"
									: "d-flex site-nav-item align-items-center"
							}
							to='/ideas'
						>
							<Items arr={arr.obg[2]} />
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "site-nav-item-active d-flex site-nav-item align-items-center"
									: "d-flex site-nav-item align-items-center"
							}
							to='/contacts'
						>
							<Items arr={arr.obg[3]} />
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "site-nav-item-active d-flex site-nav-item align-items-center"
									: "d-flex site-nav-item align-items-center"
							}
							to='/agents'
						>
							<Items arr={arr.obg[4]} />
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "site-nav-item-active d-flex site-nav-item align-items-center"
									: "d-flex site-nav-item align-items-center"
							}
							to='/articles'
						>
							<Items arr={arr.obg[5]} />
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "site-nav-item-active d-flex site-nav-item align-items-center"
									: "d-flex site-nav-item align-items-center"
							}
							to='/settings'
						>
							<Items arr={arr.obg[6]} />
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive
									? "site-nav-item-active d-flex site-nav-item align-items-center"
									: "d-flex site-nav-item align-items-center"
							}
							to='/subscription'
						>
							<Items arr={arr.obg[7]} />
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

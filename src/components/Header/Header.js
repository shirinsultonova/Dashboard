import { SearchImg, NotificationImg } from "../../assets/images/icons";
import Profil from "../../../src/assets/images/photo.png";

export const Header = (title) => {
	return (
		<div className='overview-inner d-flex justify-content-between'>
			<h2 className='site-top-title'>{title.title}</h2>
			<div className='d-flex align-items-start'>
				<div className='search-img-wrapper d-flex align-items-center'>
					<SearchImg />
					<span className='search-img'></span>
					<NotificationImg />
				</div>
				<div className='d-flex align-items-center'>
					<p className='mb-0 me-3'>Jones Ferdinand</p>
					<img src={Profil} alt='' />
				</div>
			</div>
		</div>
	);
};

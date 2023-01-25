import "./main.item.css";
export function MainItems(children) {
	return children.obg.map((item) => (
		<li key={item.id} className='main-item'>
			<p className="main-item-title">{item.title}</p>
			<p className='main-item-num'>{item.num}</p>
		</li>
	));
}

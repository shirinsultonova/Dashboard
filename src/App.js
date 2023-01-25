import "./main.css";
import {
	OverviewImg,
	TicketsImg,
	IdeasImg,
	ContactsImg,
	AgentsImg,
	ArticlesImg,
	SettingsImg,
	SubscriptionImg,
} from "../src/assets/images/icons";
import { Routes, Route } from "react-router-dom";

import { MainItems } from "./components/MainItem";
import { DiogramCard} from "./components/DiogramBody";
import { Nav } from "./components/Nav";
import { Header } from "./components/Header";


function App() {
	const navigation = [
		{
			id: 1,
			img: <OverviewImg />,
			text: "Overview",
		},
		{
			id: 2,
			img: <TicketsImg />,
			text: "Tickets",
		},
		{
			id: 3,
			img: <IdeasImg />,
			text: "Ideas",
		},
		{
			id: 4,
			img: <ContactsImg />,
			text: "Contacts",
		},
		{
			id: 5,
			img: <AgentsImg />,
			text: "Agents",
		},
		{
			id: 6,
			img: <ArticlesImg />,
			text: "Articles",
		},
		{
			id: 7,
			img: <SettingsImg />,
			text: "Settings",
		},
		{
			id: 8,
			img: <SubscriptionImg />,
			text: "Subscription",
		},
	];
	const arr = [
		{
			title: "Unresolved",
			num: 60,
		},
		{
			title: "Overdue",
			num: 16,
		},
		{
			title: "Open",
			num: 43,
		},
		{
			title: "On hold",
			num: 64,
		},
	];

	return (
		<div className='App'>
			<div className='site-wrapper d-flex'>
				<Nav obg={navigation} />
				<Routes>
					<Route
						path='/'
						element={
							<div className='site-overview flex-grow-1'>
								<Header title={"Overview"} />
								<ul className='list-unstyled d-flex align-items-center justify-content-between'>
									<MainItems obg={arr} />
								</ul>
								<DiogramCard />
							</div>
						}
					/>
					<Route
						path='/tickets'
						element={
							<div className='site-overview flex-grow-1'>
								<Header title="Tickets" />
								
							</div>
						}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;

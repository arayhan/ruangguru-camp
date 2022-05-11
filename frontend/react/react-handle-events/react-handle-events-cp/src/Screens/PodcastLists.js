import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

import PodcastFormModal from "../components/PodcastFormModal";
import Header from "../components/Header";
import PodcastListItem from "../components/PodcastListItem";
import Constants from "../Constants";

const PodcastLists = () => {
	const [podcastList, setPodcastList] = useState([]);
	const [showFormModal, setShowFormModal] = useState(false);
	const [formModalType, setFormModalType] = useState("ADD");
	const [podcastId, setPodcastId] = useState(0);

	const getPodcastListData = async () => {
		const response = await axios.get(Constants.API_URL);
		setPodcastList(response.data);
	};

	useEffect(() => {
		getPodcastListData();
	}, []);

	return (
		<div>
			<Header headerText={"My Top Podcasts"} />
			<div>
				<Button
					style={{ marginTop: 10, marginLeft: 10, alignSelf: "flex-end" }}
					variant="primary"
					onClick={() => {
						setShowFormModal(true);
						setFormModalType("ADD");
					}}
				>
					+ Add Podcasts
				</Button>
				{podcastList.map((item) => {
					return (
						<PodcastListItem
							key={item.id}
							id={item.id}
							podcastItem={item}
							setPodcastId={(id) => setPodcastId(id)}
							setFormModalType={(type) => setFormModalType(type)}
							setShowFormModal={(show) => setShowFormModal(show)}
						/>
					);
				})}
			</div>
			<PodcastFormModal
				podcastList={podcastList}
				setPodcastList={setPodcastList}
				showFormModal={showFormModal}
				setShowFormModal={setShowFormModal}
				setFormModalType={setFormModalType}
				formModalType={formModalType}
				podcastId={podcastId}
				onSuccess={getPodcastListData}
			/>
		</div>
	);
};

export default PodcastLists;

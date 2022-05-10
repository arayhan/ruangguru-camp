import React from "react";

export const Item = ({ id, image, title, showAlert, onChangeTotal }) => {
	const [item, setItem] = React.useState(0);

	return (
		<div className="each-box">
			<img src={image} alt="each-item" />
			<p>{title}</p>
			<div>
				<button
					aria-label={`minus-button-${id}`}
					onClick={() => {
						if (item > 0) {
							setItem(item - 1);
							onChangeTotal("MINUS");
						}
					}}
				>
					-
				</button>
				<input
					type="text"
					aria-label={`item-${id}`}
					className={`item-${id}`}
					value={item}
					disabled
				></input>
				<button
					aria-label={`add-button-${id}`}
					onClick={() => {
						if (item < 10) {
							setItem(item + 1);
							onChangeTotal("ADD");
						} else showAlert(true);
					}}
				>
					+
				</button>
			</div>
		</div>
	);
};

function App() {
	const [itemsAmount, setItemsAmount] = React.useState([]);
	const [total, setTotal] = React.useState(0);

	const dataDummy = [
		{
			id: "1",
			image: "https://picsum.photos/id/0/150/",
			title: "Laptop",
		},
		{
			id: "2",
			image: "https://picsum.photos/id/1010/150/",
			title: "Buku",
		},
		{
			id: "3",
			image: "https://picsum.photos/id/103/150/",
			title: "Sepatu",
		},
	];

	const showAlert = (isShow) => {
		if (isShow) {
			alert("Ups, udah kelebihan yaa");
		}
	};

	const handleChangeTotal = (TYPE) => {
		switch (TYPE) {
			case "ADD":
				setTotal(total + 1);
				break;
			case "MINUS":
				setTotal(total - 1);
				break;
			default:
				break;
		}
	};

	return (
		<div className="state-props-2" aria-label="AppRoot">
			<h3>Keranjang Belanja</h3>
			<div className="box-container">
				{dataDummy.map((element) => (
					<Item
						key={element.id}
						id={element.id}
						image={element.image}
						title={element.title}
						showAlert={showAlert}
						onChangeTotal={handleChangeTotal}
					/>
				))}
			</div>
			<div className="end-section">
				<h4>
					Kamu udah masukin&nbsp;
					<span className="total-item" aria-label="total-item">
						{total}
					</span>
					&nbsp; barang
				</h4>
			</div>
		</div>
	);
}

export default App;

import React from "react";

export default function App() {
	return <RandomQuote />;
}

export function RandomQuote() {
	const [quote, setQuote] = React.useState({});
	const [loading, setLoading] = React.useState(true);

	function getQuote() {
		setLoading(true);
		fetch("https://api.quotable.io/random")
			.then((res) => res.json())
			.then((data) => setQuote(data))
			.finally(() => setLoading(false));
	}

	React.useEffect(() => getQuote(), []);

	return (
		<div className="wrapper">
			<h1>Random Quote</h1>
			<h1 className="quote" data-testid="quote">
				{loading ? "Loading..." : quote.content}
			</h1>
			<button
				onClick={() => getQuote()}
				className="button"
				data-testid="button"
			>
				Get another quote
			</button>
		</div>
	);
}

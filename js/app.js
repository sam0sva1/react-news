var News = React.createClass({
	render: function() {
		return (
			<div className="news">
				К сожалению, новостей нет.
			</div>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				Всем привет, я компонент App!
				<News />
			</div>
		)
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
var react_news = [
	{
		author: 'Валерон',
		text: 'Реакт ваще по масти. От души парняги замутили.'
	},
	{
		author: 'Всеволод Володарчанских',
		text: 'Истинное эстетическое и профессиональное удовольствие доставить способна небезызвестная библиотека Реакт, анонсированная нашими заморскими коллегами.'
	},
	{
		author: 'Дима Юшкин',
		text: 'Только недавно начал писать на фреймвокре реакт. Очень нравиться стили в ней писать.'
	}
];

var News = React.createClass({
	render: function() {
		var data = this.props.data;
		var newsPack;

		if (data.length > 0) {
			newsPack = data.map(function(item, index) {
				return (
					<div key={index}>
						<p className="news__author">{item.author}:</p>
						<p className="news__text">{item.text}</p>
					</div>
				)
			});
			newsPack.push(<strong>Всего новостей: {data.length}</strong>);
		} else {
			newsPack = <p>К сожалению новостей нет</p>;
		}

		return (
			<div className="news">
				{newsPack}
				{/*К сожалению, новостей нет.*/}
				 
			</div>
		);
	}
});

var Comments = React.createClass({
	render: function() {
		return (
			<div className="comments">
				Нет новостей - комментировать нечего.
			</div>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				Всем привет, я компонент App!
				<News data={react_news} />
				<Comments />
			</div>
		)
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
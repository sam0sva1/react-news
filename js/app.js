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

var Article = React.createClass({
	render: function () {
		var index = this.props.key;
		var article = this. props.item;
		return (
			<div className="news" key={index}>
				<p className="news__author">{article.author}:</p>
				<p className="news__text">{article.text}</p>
			</div>
		)
	}
});

var News = React.createClass({
	render: function() {
		var data = this.props.data;
		var newsPack;

		if (data.length > 0) {
			newsPack = data.map(function(item, index) {
				return (
					<Article key={index} item={item} />
				)
			});
			newsPack.push(<strong className="news__count">Всего новостей: {data.length}</strong>);
		} else {
			newsPack = <p>К сожалению новостей нет</p>;
		}

		return (
			<div className="news">
				{newsPack}
			</div>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				<h3>Новости React</h3>
				<News data={react_news} />
			</div>
		)
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
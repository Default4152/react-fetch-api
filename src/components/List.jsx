var React = require('react');
var ListItem = require('./ListItem.jsx');
var Http = require('../services/httpservice');

var List = React.createClass({
    getInitialState: function() {
        return {
            ingredients: []
        }
    },
    componentWillMount: function() {
        Http.get('/ingredients')
            .then(function(res) {
                this.setState({
                    ingredients: res
                })
            }.bind(this));
    },
    render: function() {
        var listItems = this.state.ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;

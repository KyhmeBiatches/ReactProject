class SelectItem extends React.Component {

    render() {
        return (<div className="col-md-12">
            <label><input type="checkbox" value="" />{this.props.priceString}</label>
        </div>
        )
    }

}

class ToggleArrow extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <img src="images/Arrow.svg" className={this._arrowDirection()} onClick={this._toggleBtn.bind(this)}></img>
        )
    }

    _toggleBtn() {
        this.props.toggle()
    }

    _arrowDirection() {
        var classes = "pull-right"
        if(this.props.isHidden) {
            return classes + " arrow";
        }else {
            return classes + " arrow-down";
        }
    }
}

class DeliveryList extends React.Component {
    render() {
        return (
            <div></div>
        );
    }

}

class DeliveryToggle extends React.Component {

    render() {
        return (
            <div>
                <DeliveryList />
            </div>
        )
    }

}

class LocationFromForm extends React.Component {

    render() {
        return (
            <form id="location-from-form" className="form-group clearfix" onSubmit={this._handleClick.bind(this)}>
                <div className="col-md-4 form-input">
                <input id="from-form-km" type="text" placeholder="km" className="form-control"></input>
                </div>
                <div className="col-md-4">
                <p className="text-center">fra</p>
                </div>
                <div className="col-md-4 form-input">
                <input id="from-form-postal"type="text" placeholder="9000" className="form-control"></input>
                </div>
                <div className="text-center">
                <input id="from-form-btn" className="btn btn-default form-control locaiton-btn" type="submit" value="Søg"></input>
                </div>
            </form>
        );
    }
    
        _handleClick(e) {
        e.preventDefault();

        var input = document.getElementById("location-from-form");
            input.reset();
            document.getElementById("from-form-km").blur();
            document.getElementById("from-form-postal").blur();
            document.getElementById("from-form-btn").blur();
        }

}

class LocationList extends React.Component {
    render() {
        return (
            <div></div>
        );
    }

}

class LocationPostalForm extends React.Component {

    render() {
        return (
            <form id="location-postal-form" className="form-group clearfix" onSubmit={this._handleClick.bind(this)}>
                <div className="col-md-8 form-input">
                <input id="postal-form-postal" type="text" placeholder="Postnr." className="form-control"></input>
                </div>
                <div className="col-md-4 form-input">
                    <input id="postal-form-btn" className="btn btn-default form-control" type="submit" value="Vis"></input>
                </div>
            </form>
        );
    }

        _handleClick(e) {
        e.preventDefault();

        var input = document.getElementById("location-postal-form");
            input.reset();
            document.getElementById("postal-form-postal").blur();
            document.getElementById("postal-form-btn").blur();
        }

}

class LocationToggle extends React.Component {

    render() {
        return (
            <div>
                <LocationFromForm />
                <LocationPostalForm />
                <LocationList />
            </div>
        );
    }

}

class PriceForm extends React.Component {

    render() {
        return (
            <form id="price-form" className="form-group clearfix" onSubmit={this._handleClick.bind(this)}>
                <div className="form-input col-md-6">
                    <input id="price-input" type="text" placeholder="km" className="form-control"></input>
                </div>
                <div className="col-md-6">
                    <input id="price-btn" className="btn btn-default form-control" type="submit" value="Vis"></input>
                </div>

            </form>
        );
    }

        _handleClick(e) {
        e.preventDefault();

        var input = document.getElementById("price-form");
            input.reset();
            document.getElementById("price-input").blur();
            document.getElementById("price-btn").blur();
        }

}

class PriceList extends React.Component {

    constructor() {
        super();

        this.state = ({items: []})
    }

    render(){
        return(
            <form>
                {this._getSelectItems()}
            </form>
        )
    }

    _getSelectItems() {
        return this.state.items.map((item) => {
            return (
          <SelectItem onSelect={this._handleChanges.bind(this)}
                      priceString=""
                      index={this.state.items.indexOf(item)} />
            );
        });
    }

    _handleChanges(event, index, value) {

    }


}

class PriceToggle extends React.Component {

    render() {
        return (
            <div>
                <PriceForm />
            </div>
        );
    }

}

class TypeList extends React.Component {
    render() {
        return (
            <div></div>
        );
    }

}

class TypeToggle extends React.Component {

    render() {
        return (
            <div>
                <TypeList />
            </div>
        )
    }


}

class CategoryBox extends React.Component {

    constructor(){
        super();

        this.state = ({ isHidden: true });
    }

    componentWillMount() {
        if(this.props.isHidden != null){
            if(this.props.isHidden == 'false'){
                this.state = ({ isHidden: false });
            }
        }
    }

    render() {
        return (
            <div className="clearfix">
                    <div className="clearfix">
                        <h4 className="pull-left">Kategori</h4>
                        <ToggleArrow toggle={this._toggleBtn.bind(this)} isHidden={this.state.isHidden} />
                    </div>
                <span>

                </span>
                <hr></hr>
            </div>
        )
    }

    _toggleBtn() {
        this.setState({isHidden: !this.state.isHidden})
    }

}

class DeliveryBox extends React.Component {

    constructor() {
        super();

        this.state = ({ isHidden: true });
    }

    componentWillMount() {
        if(this.props.isHidden != null){
            if(this.props.isHidden == 'false'){
                this.state = ({ isHidden: false });
            }
        }
    }

    render() {
        return (
            <div className="clearfix">
                    <div className="clearfix">
                        <h4 className="pull-left">Overdragelse</h4>
                        <ToggleArrow toggle={this._toggleBtn.bind(this)}
                                     isHidden={this.state.isHidden} />
                    </div>
                {!this.state.isHidden && <DeliveryToggle />}
                <hr></hr>
            </div>
        );
    }

    _toggleBtn() {
        this.setState({isHidden: !this.state.isHidden})
    }

}

class LocationBox extends React.Component {

    constructor() {
        super();

        this.state = ({ isHidden: true });
    }

    componentWillMount() {
        if(this.props.isHidden != null){
            if(this.props.isHidden == 'false'){
                this.state = ({ isHidden: false });
            }
        }
    }

    render() {
        return (
            <div className="clearfix">
                    <div className="clearfix">
                        <h4 className="pull-left">Område</h4>
                        <ToggleArrow toggle={this._toggleBtn.bind(this)}
                                     isHidden={this.state.isHidden} />
                    </div>
                {!this.state.isHidden && <LocationToggle />}
                <hr></hr>
            </div>
        );
    }

    _toggleBtn() {
        this.setState({isHidden: !this.state.isHidden})
    }

}

class TypeBox extends React.Component {

    constructor() {
        super();

        this.state = ({ isHidden: false });
    }

    componentWillMount() {
        if(this.props.isHidden != null){
            if(this.props.isHidden == 'false'){
                this.state = ({ isHidden: false });
            }
        }
    }

    render() {
        return (
            <div className="clearfix">
                    <div className="clearfix">
                        <h4 className="pull-left">Type</h4>
                        <ToggleArrow toggle={this._toggleBtn.bind(this)} isHidden={this.state.isHidden} />
                    </div>
                {!this.state.isHidden && <TypeToggle />}
                <hr></hr>
            </div>
        );
    }

    _toggleBtn() {
        this.setState({isHidden: !this.state.isHidden})
    }


}

class PriceBox extends React.Component {

    constructor() {
        super();

        this.state = ({ isHidden: true });
    }

    componentWillMount() {
        if(this.props.isHidden != null){
            if(this.props.isHidden == 'false'){
                this.state = ({ isHidden: false });
            }
        }
    }

    render() {
        return (
            <div className="clearfix">
                    <div className="clearfix">
                        <h4 className="pull-left">Pris</h4>
                        <ToggleArrow toggle={this._toggleBtn.bind(this)} isHidden={this.state.isHidden} />
                    </div>
                {!this.state.isHidden && <PriceToggle />}
                <hr></hr>
            </div>
        );
    }

    _toggleBtn() {
        this.setState({isHidden: !this.state.isHidden})
    }

}

class FilterBox extends React.Component {

    constructor(atts) {
        super(atts);

    }

    render() {
        return(
            <div className="panel panel-default">
                <h1> FilterBox </h1>
                <hr></hr>
                <CategoryBox isHidden={'false'} />
                <LocationBox isHidden={'false'} />
                <PriceBox  />
                <DeliveryBox isHidden={'false'} />
                <TypeBox isHidden={'false'} />
            </div>
        );
    }


}

ReactDOM.render(
  <FilterBox />,
  document.getElementById('left-container')
);

class Comment extends React.Component {
    render() {
        return (
                <div className="panel panel-default clearfix">
                    <div className="">
                       <strong> {this.props.created_at} </strong>
                    </div>
                <hr></hr>
                    <div>
                        <p>{this.props.comment}</p>
                    </div>
                    <div className="pull-right">
                        <em>Bruger: {this.props.author}</em>
                    </div>
                </div>
               )
    }
}

class CommentForm extends React.Component {
    render() {

        return (
            <div className="panel panel-default clearfix">
                <form id="createForm" onSubmit={this._handleClick.bind(this)}>
                        <h3>Skriv til sælger</h3>
                        <div>
                            <input id="comment-input"type="text" className="form-control" placeholder="Besked" ref={(input) => this.comment = input}></input>
                        </div>
                        <input className="btn btn-default create-comment-btn pull-right" type="submit" value="Send" />
                </form>
            </div>)
    }

    _handleClick(e) {
        e.preventDefault();
        let comment = this.comment;
        var input = document.getElementById("comment-input");
        this.props.addComment(comment.value);
        input.value = "";
        input.blur();
    }

}

class CommentBox extends React.Component {

    constructor(atts) {
        super(atts);

        this.state = ({comments: [], commentCount: 0});
    }

    render () {
        return <div>
                    <h1>Beskeder</h1>
            {this._getComments()}
                    <CommentForm addComment={this._addComment.bind(this)} />
        </div>
    }

    componentWillUnmount() {
    alert('ComponentWillMount');
    }

    _getComments() {
        return this.state.comments.map((comment) => {
            return (
                <Comment author={comment.author}
                         comment={comment.comment}
                         created_at={comment.created_at}
                         key={comment.id} />
            );
        });
    }

    _addComment(comment) {
        const element = {id: this.state.comments.length +1,
                         author: "Marck Jensen",
                         created_at: "6. november kl. 19.38",
                         comment: comment}
        this.setState({ comments: this.state.comments.concat([element]), commentCount: this.state.comments.length +1})
    }
}


ReactDOM.render(
    <CommentBox />,
    document.getElementById("content")
);



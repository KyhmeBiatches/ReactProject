class SelectItem extends React.Component {
    
    render() {
        return (<div className="col-md-12">
            <label><input type="checkbox" value="" />{this.props.priceString}</label>
        </div> 
        )
    }
    
}

window.SelectItem = SelectItem;
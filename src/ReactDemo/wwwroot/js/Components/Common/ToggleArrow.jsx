class ToggleArrow extends React.Component {
    
    constructor() {
        super();
    }
    
    render() {
        return ( 
            <img src="Resources/Arrow.svg" className={this._arrowDirection()} onClick={this._toggleBtn.bind(this)}></img>
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

window.ToggleArrow = ToggleArrow;
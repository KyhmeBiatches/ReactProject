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
                        <ToggleArrow toggle={this._toggleBtn.bind(this)} isHidden={this.state.isHidden}/>
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

window.CategoryBox = CategoryBox;


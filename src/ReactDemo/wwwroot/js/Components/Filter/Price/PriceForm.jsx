class PriceForm extends React.Component {
    
    render() {
        return (
            <form className="form-group clearfix">
                <div className="form-input col-md-6">
                    <input type="text" placeholder="km" className="form-control"></input>
                </div>
                <div className="col-md-6">
                    <input className="btn btn-default form-control" type="submit" value="Vis"></input>
                </div>
                
            </form>
        );
    }
    
}

window.PriceForm = PriceForm;
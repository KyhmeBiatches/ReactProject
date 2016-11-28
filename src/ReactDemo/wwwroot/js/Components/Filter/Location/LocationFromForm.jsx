class LocationFromForm extends React.Component {
    
    render() {
        return (
            <form className="form-group clearfix">
                <div className="col-md-4 form-input">
                <input type="text" placeholder="km" className="form-control"></input>
                </div>
                <div className="col-md-4">
                <p className="text-center">fra</p>
                </div>
                <div className="col-md-4 form-input">
                <input type="text" placeholder="9000" className="form-control"></input>
                </div>
                <div className="text-center">
                <input className="btn btn-default form-control locaiton-btn" type="submit" value="Søg"></input>
                </div>
            </form>
        );
    }
    
}

window.LocationFromForm = LocationFromForm;
class FilterBox extends React.Component {
    
    constructor(atts) {
        super(atts);
        
    }
    
    render() {
        return(
            <div className="panel panel-default">
                <h1> TEST </h1>
                <hr></hr>
                <CategoryBox isHidden={'false'}/>
                <LocationBox isHidden={'false'}/>
                <PriceBox isHidden={'false'}/>
                <DeliveryBox isHidden={'false'} />
                <TypeBox isHidden={'false'}/>
            </div>
        );
    }
    
    
}

ReactDOM.render(
  <FilterBox />,
  document.getElementById('left-container')
);
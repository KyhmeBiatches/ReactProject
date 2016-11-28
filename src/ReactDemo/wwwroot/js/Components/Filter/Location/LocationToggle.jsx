class LocationToggle extends React.Component {
    
    render() {
        return (
            <div>
                <LocationFromForm />
                <LocationPostalForm />
                <LocationList />
            </div>
        )
    }
    
    
}

window.LocationToggle = LocationToggle;
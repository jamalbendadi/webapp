export default class Country {
    constructor(id, name, fullname, dateOfIndependence, populationInMillions, image) {
        this.id = id
        this.name = name
        this.fullname = fullname
        this.dateOfIndependence = dateOfIndependence
        this.populationInMillions = populationInMillions
        this.image = image
    }
    get _id() {
        return this.id;
    }
    get _name() {
        return this.name;
    }
    get _fullname() {
        return this.fullname;
    }
    get _dateOfIndependence() {
        return this.dateOfIndependence;
    }
    get _populationInMillions() {
        return this.populationInMillions;
    }
    get _image() {
        return this.image;
    }
    set _id(id) {
        this.id = id;
    }
    set _name(name) {
        this.name = name;
    }
    set _fullname(fullname) {
        this.fullname = fullname;
    }
    set _dateOfIndependence(dateOfIndependence) {
        this.dateOfIndependence = dateOfIndependence;
    }
    set _populationInMillions(populationInMillions) {
        this.populationInMillions = populationInMillions;
    }
    set _image(image) {
        this.image = image;
    }
}

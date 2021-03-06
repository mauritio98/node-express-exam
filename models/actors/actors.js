import { ManagerFs } from '../../managers/manager-fs.js';

//'./data/actors.json'

class Actors {

    constructor() {
        this.mgfl = new ManagerFs('./data/actors.json');
        this.actors = this.mgfl.getData();

    }
    getActors() {
        console.log(`---> EX:actor::getActors`); 

        return this.actors;
    }
    getActorsById(id) {
        console.log(`---> EX:actor::getActorsById = ${id}`);

        return this.actors.find(element => element.id == id);
    }

    getActorsBy(elem) {
        console.log(`---> EX:actor::getActorsBy = ${elem.value}`);

        return this.actors.filter(element => element[elem.key] == elem.value);
    }

    removeActors(id) {
        console.log(`---> EX:actor::removeActors = ${id}`);

        const index = this.actors.findIndex(element => element.id == id);
        if (index != -1) this.actors.splice(index, 1);
        return index;
    }

    createActors(req) {
        console.log(`---> EX:actor::createActors = ${req.id}`);

        this.actors.push(req);
        return req;
    }

    addActorToMovie(req) {
        console.log(`---> EX:actor::addActorToMovie = ${req.id}`);

        const index = this.actors.findIndex(element => element.id == req.id);
        if (index != -1) this.actors[index].actors.push(req.value);

    }

    updateActors(req) {
        console.log(`---> EX:actor::updateActors = ${req.id}`);

        const actor = this.getActorsById(req.id);
        if (typeof actor != 'undefined') {
            this.removeActors(req.id);
            this.createActors(req);
        }
        return actor;
    }

    getIDFromActor(req) {
        console.log(`---> EX:actor::getIDFromActor = ${req.value}`);

        return this.actors.filter(element => element.actors.find(e => e == req.value));
    }

}

export default new Actors()

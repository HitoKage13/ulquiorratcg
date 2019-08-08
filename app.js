import * from vue-app

class Deck {
    constructor(name, id, sprites, tournament, date) {
        this.name = name;
        this.id = id;
        this.sprites = sprites;
        this.tournament = tournament;
        this.date = date;
    }
};

class List {
    constructor(id, Pokemon, Trainers, Energy) {
        this.id = id;
        this.Pokemon = Pokemon;
        this.Trainers = Trainers;
        this.Energy = Energy;
    }
};

class Post {
    constructor(id, date, title, text, tags) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.text = text;
        this.tags = tags;
    }
};

// Search query data bind
let data = {
    search: ""
}

Vue.component('modal', {
    template: `<div id="root" class="container">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">
                        <slot name="header"></slot>
                    </p>
                    <button class="delete" aria-label="close" @click="$emit('close')"></button>
                </header>
                <section class="modal-card-body">
                    <slot name="body"></slot>
                </section>
                <!-- <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button">Cancel</button>
                </footer> -->
            </div>
        </div>
    </div>`,
    data: function() {
        return {};
    }
});

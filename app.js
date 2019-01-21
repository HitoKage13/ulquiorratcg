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

Vue.component('achievement',{
    template: `<slot></slot>`
});

var app = new Vue({
    el: '#root',
    data: {
        id: -1,
        showModal: false,
        search: "",
        toShow: "home",
        achievements: ["2015 Finalist Nationals","2015 Top 16 World Championships",
        "2016 Top 8 Melbourne Regionals", "2017 Top 16 Sydney Regionals",
        "2018 Top 16 Brisbane Regionals","2019 Top 16 Brisbane Regionals"],
        deckCol: [
            new Deck('Zoroark-GX / Lycanroc-GX', 0, ["PokemonShuffleSprites/637.png","PokemonShuffleSprites/1079.png"],
            "Top 8 Q1 Newcastle Cup", "08/09/18"),
            new Deck('Zoroark-GX / Lycanroc-GX', 1, ["PokemonShuffleSprites/637.png","PokemonShuffleSprites/1079.png"],
            "1st Q2 Top Ryde Challenge", "24/11/18"),
            new Deck('Zoroark-GX / Lycanroc-GX', 2, ["PokemonShuffleSprites/637.png","PokemonShuffleSprites/1079.png"],
            "2019 Brisbane Regionals", "01/12/18"),
            new Deck('Zoroark-GX / Garbodor', 3, ["PokemonShuffleSprites/637.png","PokemonShuffleSprites/635.png"],
            "Top 4 Q1 Penrith Cup", "15/09/18"),
            new Deck('Malamar / Necrozma-GX', 4, ["PokemonShuffleSprites/811.png","PokemonShuffleSprites/1134.png"],
            "Q1 Penrith Challenge", "14/10/18"),
            new Deck('Zoroark-GX / Alolan Ninetales-GX / Decidueye-GX', 5, ["PokemonShuffleSprites/637.png","PokemonShuffleSprites/1041.png", "PokemonShuffleSprites/1055.png"],
            "N/A", "N/A"),
            new Deck('Quad Mega Manectric-EX', 6, ["PokemonShuffleSprites/882.png"],
            "2015 World Championships", "N/A"),
        ],
        deckList: [
            new List(0,["4 Zorua","4 Zoroark-GX","3 Rockruff","3 Lycanroc-GX",
            "3 Tapu Lele-GX","1 Latios","1 Diancie Prism Star","1 Buzzwole","1 Tapu Koko","1 Oranguru","---"],
            ["3 Cynthia","3 Guzma","2 Acerola","2 Lillie","2 Judge","1 Professor Kukui",
            "1 Pokemon Fan Club","1 Mallow","4 Ultra Ball","4 Nest Ball","2 Timer Ball",
            "1 Field Blower","3 Choice Band","1 Rescue Stretcher","1 Multi Switch","1 Pal Pad","---"],
            ["4 Fighting Energy","4 Double Colorless Energy"]),
            new List(1,["4 Zorua","4 Zoroark-GX","3 Rockruff","2 Lycanroc-GX",
            "3 Tapu Lele-GX","1 Giratina","1 Ditto Prism Star","---"],
            ["3 Professor Elm's Lecture","3 Cynthia","3 Guzma","2 Professor Kukui","1 Acerola","1 Judge",
            "1 Mallow","4 Ultra Ball","3 Timer Ball","2 Max Potion",
            "1 Field Blower","3 Choice Band","1 Rescue Stretcher","1 Multi Switch",
            "1 Switch","1 Counter Gain","2 Devoured Field","---"],
            ["5 Fighting Energy","4 Double Colorless Energy"]),
            new List(2,["4 Zorua","4 Zoroark-GX","3 Rockruff","2 Lycanroc-GX",
            "3 Tapu Lele-GX","1 Giratina","1 Ditto Prism Star","---"],
            ["3 Professor Elm's Lecture","3 Cynthia","3 Guzma","2 Professor Kukui","1 Acerola","1 Judge",
            "1 Mallow","4 Ultra Ball","3 Timer Ball","2 Enhanced Hammer","1 Max Potion",
            "1 Field Blower","3 Choice Band","1 Rescue Stretcher","1 Multi Switch",
            "1 Switch","1 Counter Gain","2 Devoured Field","---"],
            ["4 Fighting Energy","4 Double Colorless Energy"]),
            new List(3,["4 Zorua","4 Zoroark-GX","3 Trubbish","3 Garbodor","2 Tapu Lele-GX",
            "2 Latios","1 Marshadow","1 Slugma","1 Magcargo","---"],
            ["3 Cynthia","3 Guzma","2 Acerola","2 Lillie","2 Judge","1 Pokemon Fan Club","4 Ultra Ball",
            "2 Nest Ball","2 Mysterious Treasure","1 Timer Ball","2 Field Blower","2 Choice Band","1 Rescue Stretcher",
            "2 Pal Pad","2 Devoured Field","---"],["4 Psychic Energy","4 Double Colorless Energy"]),
            new List(4,["4 Inkay","4 Malamar","2 Deoxys","1 Necrozma-GX","2 Marshadow-GX","1 Chimecho",
            "1 Marshadow","1 Mimikyu","1 Tapu Lele-GX","1 Dawn Wings Necrozma-GX","---"],
            ["4 Cynthia","4 Guzma","3 Lillie","1 Pokemon Fan Club","4 Ultra Ball",
            "4 Mysterious Treasure","1 Friend Ball","1 Nest Ball","3 Acro Bike",
            "2 Rescue Stretcher","1 Pal Pad","3 Escape Board","1 Escape Rope","---"],
            ["10 Psychic Energy"]),
            new List(5, ["3 Zorua","3 Zoroark-GX","3 Rowlet","3 Decidueye-GX","3 Alolan Vulpix",
            "2 Alolan- Ninetales-GX LOT","1 Alolan Ninetales-GX GRI",
            "1 Ditto Prism Star","2 Tapu Lele-GX","---"],
            ["4 Professor Elm's Lecture","4 Cynthia","3 Guzma","1 Judge","1 Acerola",
            "4 Ultra Ball","3 Rare Candy","1 Timer Ball","1 Counter Catcher",
            "1 Enhanced Hammer","1 Field Blower","1 Max Potion","1 Rescue Stretcher",
            "2 Choice Band","2 Counter Gain","---"],
            ["4 Double Colorless Energy","3 Fairy Energy","2 Rainbow Energy"]),
            new List(6, ["4 Manectric-EX","4 M Manectric-EX","2 Keldeo-EX","2 Shaymin-EX",
            "2 Zapdos","1 Mr. Mime","1 Bunnelby","---"],
            ["4 Professor Sycamore","4 N","2 Colress","2 Lysandre","4 Ultra Ball",
            "4 Manectric Spirit Link","3 VS Seeker","2 Enhanced Hammer","2 Float Stone",
            "1 Escape Rope","1 Startling Megaphone","1 Computer Search","4 Rough Seas","---"],
            ["6 Lightning Energy","4 Water Energy"])
        ]
    },
    computed: {
        filteredList() {
            return this.deckCol.filter(deck => {
                return deck.name.toLowerCase().includes(this.search.toLowerCase())
            })
        },
    }
})

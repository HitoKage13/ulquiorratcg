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
        blogColours: ["is-dark","is-primary","is-link","is-info","is-success",
        "is-warning","is-danger"],
        achievements: ["2015 Finalist Nationals","2015 Top 16 World Championships",
        "2016 Top 8 Melbourne Regionals", "2017 Top 16 Sydney Regionals",
        "2018 Top 16 Brisbane Regionals","2019 Top 16 Brisbane Regionals"],
        deckCol: [
            new Deck('Malamar / Necrozma-GX', 10, ["PokemonShuffleSprites/811.png","PokemonShuffleSprites/1134.png"],
            "Q2 Cup Testing", "N/A"),
            new Deck('Zoroark-GX / Lycanroc-GX', 9, ["PokemonShuffleSprites/637.png","PokemonShuffleSprites/1079.png"],
            "Q2 Cup Testing", "N/A"),
            new Deck('Passimian Spread', 8, ["PokemonShuffleSprites/1100.png","PokemonShuffleSprites/1119.png"],
            "Q2 Cup Testing", "N/A"),
            new Deck('Malamar Spread', 7, ["PokemonShuffleSprites/811.png","PokemonShuffleSprites/1119.png"],
            "Top 4 Q2 Newcastle Challenge", "12/01/19"),
            new Deck('Quad Mega Manectric-EX', 6, ["PokemonShuffleSprites/882.png"],
            "2015 World Championships", "N/A"),
            new Deck('Zoroark-GX / Alolan Ninetales-GX / Decidueye-GX', 5, ["PokemonShuffleSprites/637.png","PokemonShuffleSprites/1041.png", "PokemonShuffleSprites/1055.png"],
            "N/A", "N/A"),
            new Deck('Malamar / Necrozma-GX', 4, ["PokemonShuffleSprites/811.png","PokemonShuffleSprites/1134.png"],
            "Q1 Penrith Challenge", "14/10/18"),
            new Deck('Zoroark-GX / Garbodor', 3, ["PokemonShuffleSprites/637.png","PokemonShuffleSprites/635.png"],
            "Top 4 Q1 Penrith Cup", "15/09/18"),
            new Deck('Zoroark-GX / Lycanroc-GX', 2, ["PokemonShuffleSprites/637.png","PokemonShuffleSprites/1079.png"],
            "2019 Brisbane Regionals", "01/12/18"),
            new Deck('Zoroark-GX / Lycanroc-GX', 1, ["PokemonShuffleSprites/637.png","PokemonShuffleSprites/1079.png"],
            "1st Q2 Top Ryde Challenge", "24/11/18"),
            new Deck('Zoroark-GX / Lycanroc-GX', 0, ["PokemonShuffleSprites/637.png","PokemonShuffleSprites/1079.png"],
            "Top 8 Q1 Newcastle Cup", "08/09/18")
        ],
        deckList: [
            new List(10,["4 Inkay","4 Malamar","2 Necrozma-GX","1 Dawn Wings Necrozma-GX","1 Marshadow-GX",
            "1 Giratina","1 Deoxys","1 Mimikyu","1 Tapu Lele-GX","1 Marshadow SLG","1 Chimecho","---"],
            ["4 Lillie","3 Guzma","3 Cynthia","4 Ultra Ball",
            "4 Mysterious Treasure","2 Nest Ball","4 Acro Bike",
            "2 Rescue Stretcher","4 Escape Board","1 Escape Rope","1 Altar of the Moone","---"],
            ["10 Psychic Energy"]),
            new List(9,["4 Zorua","4 Zoroark-GX","3 Rockruff","3 Lycanroc-GX",
            "3 Tapu Lele-GX","1 Giratina","1 Ditto Prism Star","1 Alolan Muk","---"],
            ["4 Professor Elm's Lecture","3 Cynthia","3 Guzma","2 Professor Kukui","1 Acerola","1 Judge",
            "1 Mallow","4 Ultra Ball","3 Timer Ball","1 Max Potion",
            "3 Choice Band","1 Rescue Stretcher","1 Multi Switch",
            "1 Switch","1 Counter Gain","2 Devoured Field","---"],
            ["4 Fighting Energy","4 Double Colorless Energy"]),
            new List(8, ["4 Tapu Koko","2 Passimian SUM","2 Passimian UPR","1 Slugma CES","1 Slugma LOT",
            "2 Magcargo","1 Oranguru SUM","1 Marshadow SLG","1 Latios SLG","1 Tapu Lele SMPR","---"],
            ["4 Guzma","4 Lillie","3 Guzma","2 Professor Kukui","4 Ultra Ball",
            "4 Nest Ball","4 Acro Bike","3 Rescue Stretcher","1 Escape Rope","1 Switch",
            "3 Choice Band","3 Shrine of Punishment","---"],
            ["4 Counter Energy", "4 Double Colorless Energy"]),
            new List(7, ["4 Inkay","4 Malamar","2 Tapu Koko","2 Giratina","1 Onix","1 Oranguru SUM",
            "1 Marshadow SLG","1 Necrozma-GX","1 Tapu Lele SMPR","---"],
            ["4 Cynthia","4 Guzma","4 Lillie","4 Ultra Ball",
            "4 Mysterious Treasure","2 Nest Ball","4 Acro Bike",
            "2 Rescue Stretcher","3 Shrine of Punishment","---"],
            ["8 Psychic Energy", "4 Double Colorless Energy"]),
            new List(6, ["4 Manectric-EX","4 M Manectric-EX","2 Keldeo-EX","2 Shaymin-EX",
            "2 Zapdos","1 Mr. Mime","1 Bunnelby","---"],
            ["4 Professor Sycamore","4 N","2 Colress","2 Lysandre","4 Ultra Ball",
            "4 Manectric Spirit Link","3 VS Seeker","2 Enhanced Hammer","2 Float Stone",
            "1 Escape Rope","1 Startling Megaphone","1 Computer Search","4 Rough Seas","---"],
            ["6 Lightning Energy","4 Water Energy"]),
            new List(5, ["3 Zorua","3 Zoroark-GX","3 Rowlet","3 Decidueye-GX","3 Alolan Vulpix",
            "2 Alolan- Ninetales-GX LOT","1 Alolan Ninetales-GX GRI",
            "1 Ditto Prism Star","2 Tapu Lele-GX","---"],
            ["4 Professor Elm's Lecture","4 Cynthia","3 Guzma","1 Judge","1 Acerola",
            "4 Ultra Ball","3 Rare Candy","1 Timer Ball","1 Counter Catcher",
            "1 Enhanced Hammer","1 Field Blower","1 Max Potion","1 Rescue Stretcher",
            "2 Choice Band","2 Counter Gain","---"],
            ["4 Double Colorless Energy","3 Fairy Energy","2 Rainbow Energy"]),
            new List(4,["4 Inkay","4 Malamar","2 Deoxys","1 Necrozma-GX","2 Marshadow-GX","1 Chimecho",
            "1 Marshadow","1 Mimikyu","1 Tapu Lele-GX","1 Dawn Wings Necrozma-GX","---"],
            ["4 Cynthia","4 Guzma","3 Lillie","1 Pokemon Fan Club","4 Ultra Ball",
            "4 Mysterious Treasure","1 Friend Ball","1 Nest Ball","3 Acro Bike",
            "2 Rescue Stretcher","1 Pal Pad","3 Escape Board","1 Escape Rope","---"],
            ["10 Psychic Energy"]),
            new List(3,["4 Zorua","4 Zoroark-GX","3 Trubbish","3 Garbodor","2 Tapu Lele-GX",
            "2 Latios","1 Marshadow","1 Slugma","1 Magcargo","---"],
            ["3 Cynthia","3 Guzma","2 Acerola","2 Lillie","2 Judge","1 Pokemon Fan Club","4 Ultra Ball",
            "2 Nest Ball","2 Mysterious Treasure","1 Timer Ball","2 Field Blower","2 Choice Band","1 Rescue Stretcher",
            "2 Pal Pad","2 Devoured Field","---"],["4 Psychic Energy","4 Double Colorless Energy"]),
            new List(2,["4 Zorua","4 Zoroark-GX","3 Rockruff","2 Lycanroc-GX",
            "3 Tapu Lele-GX","1 Giratina","1 Ditto Prism Star","---"],
            ["3 Professor Elm's Lecture","3 Cynthia","3 Guzma","2 Professor Kukui","1 Acerola","1 Judge",
            "1 Mallow","4 Ultra Ball","3 Timer Ball","2 Enhanced Hammer","1 Max Potion",
            "1 Field Blower","3 Choice Band","1 Rescue Stretcher","1 Multi Switch",
            "1 Switch","1 Counter Gain","2 Devoured Field","---"],
            ["4 Fighting Energy","4 Double Colorless Energy"]),
            new List(1,["4 Zorua","4 Zoroark-GX","3 Rockruff","2 Lycanroc-GX",
            "3 Tapu Lele-GX","1 Giratina","1 Ditto Prism Star","---"],
            ["3 Professor Elm's Lecture","3 Cynthia","3 Guzma","2 Professor Kukui","1 Acerola","1 Judge",
            "1 Mallow","4 Ultra Ball","3 Timer Ball","2 Max Potion",
            "1 Field Blower","3 Choice Band","1 Rescue Stretcher","1 Multi Switch",
            "1 Switch","1 Counter Gain","2 Devoured Field","---"],
            ["5 Fighting Energy","4 Double Colorless Energy"]),
            new List(0,["4 Zorua","4 Zoroark-GX","3 Rockruff","3 Lycanroc-GX",
            "3 Tapu Lele-GX","1 Latios","1 Diancie Prism Star","1 Buzzwole","1 Tapu Koko",
            "1 Oranguru UPR","---"],
            ["3 Cynthia","3 Guzma","2 Acerola","2 Lillie","2 Judge","1 Professor Kukui",
            "1 Pokemon Fan Club","1 Mallow","4 Ultra Ball","4 Nest Ball","2 Timer Ball",
            "1 Field Blower","3 Choice Band","1 Rescue Stretcher","1 Multi Switch","1 Pal Pad","---"],
            ["4 Fighting Energy","4 Double Colorless Energy"]),
        ],
        blogPosts: [
            new Post(1,"22/01/19","Q2 Cups",`I have 4 League Cups coming up,
            all of which are important to my Germany IC goal. With an excess of 2 tournaments,
            I can afford to play a complex deck in one of them to try and squeeze out a stronger run.
            Some decks I've considered are: Passimian Spread, Malamar Spread,
            GasKan and Zoroark/Lycanroc.
            </br>
            </br> Cup 1: Maitland - Buzzwole, Lost March
            </br> Cup 2: Penrith - Zoroark, Blacephalon, Gardevoir
            </br> Cup 3: Newcastle - Buzzwole, Lost March
            </br> Cup 4: Top Ryde - Zoroark, Malamar, Blacephalon
            </br>
            </br> Passimian Spread: Great matchups against Zoroark variants, Blacephalon
            and GasKan; decks I believe will be popular in the first cup. My teammate,
            Christian Hasbani, showed me the deck and list late in December
            and has been popular in Queensland tournament this month.
            </br>
            </br> Malamar Spread: The deck is great against the Newcastle meta and
            has a lot of ways to cheese out wins against every matchup.
            </br>
            </br> GasKan: Christian built the list and is a strong
            and safe contender for an easy Top 8. It has some weaknesses to Spread unfortunately,
            but it should be enough to get wins against top decks.
            </br>
            </br> Zoroark/Lycanroc: A very safe deck that has 50-50 against the field
            and a deck I am truly comfortable with from a top 16 finish at Brisbane
            Regionals this season.
            The new list runs Alolan Muk to provide a favourable matchup vs GasKan,
            Granbull, mill; but struggles against the new Wailord & Magikarp Tag Team.
            </br>
            </br> The lists will be added to the decks tab soon. Stay tuned!`, ["Testing"]),
            new Post(0,"22/01/19","Launch",`I spent the past 12 hours working on building this
            website from scratch and I hope to produce some of my observations,
            tournament runs and tidbits soon!`, ["Personal"])
        ]
    },
    methods: {
        getClass(id) {
            return this.blogColours[id % 7];
        }
    },
    computed: {
        filteredList() {
            return this.deckCol.filter(deck => {
                return deck.name.toLowerCase().includes(this.search.toLowerCase())
            })
        },
    }
})

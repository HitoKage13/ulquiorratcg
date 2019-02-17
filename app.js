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
            new Deck('Pikachu & Zekrom-GX', 12, ["PokemonShuffleSprites/31.png","PokemonShuffleSprites/720.png"],
            "IC Testing", "N/A"),
            new Deck('Malamar / Ultra-Necrozma-GX', 11, ["PokemonShuffleSprites/637.png","PokemonShuffleSprites/1079.png"],
            "IC Testing", "N/A"),
            new Deck('Malamar Spread', 10, ["PokemonShuffleSprites/811.png","PokemonShuffleSprites/1119.png"],
            "Q2 Week 2 Cups", "09/02/19"),
            new Deck('Malamar / Necrozma-GX', 9, ["PokemonShuffleSprites/811.png","PokemonShuffleSprites/1134.png"],
            "Q2 Cup Testing", "N/A"),
            new Deck('Passimian Spread', 8, ["PokemonShuffleSprites/1100.png","PokemonShuffleSprites/1119.png"],
            "Q2 Cup Testing", "N/A"),
            new Deck('Zoroark-GX / Lycanroc-GX', 7, ["PokemonShuffleSprites/637.png","PokemonShuffleSprites/1079.png"],
            "Q2 Week 1 Cups", "02/02/19"),
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
            new List(12,["2 Raikou","2 Pikachu & Zekrom-GX","2 Zeraora-GX","2 Zapdos",
            "2 Tapu Lele-GX","1 Tapu Koko-GX","1 Tapu Koko Prism Star","---"],
            ["4 Guzma","3 Lillie","3 Cynthia","3 Volkner","1 Erika's Hospitality",
            "4 Ultra Ball","4 Electropower","4 Nest Ball","4 Energy Switch",
            "3 Choice Band","2 Aether Paradise Conservation Area","1 Thunder Mountain Prism Star","---"],
            ["12 Lightning Energy"]),
            new List(11,["4 Inkay","4 Malamar", "2 Ultra Necrozma-GX", "2 Giratina",
            "2 Jirachi","1 Marshadow-GX","1 Tapu Lele-GX","---"],
            ["4 Lillie","3 Guzma","3 Cynthia","1 Erika's Hospitality","4 Ultra Ball",
            "4 Mysterious Treasure","3 Nest Ball","2 Rescue Stretcher","2 Choice Band",
            "2 Escape Board","2 Switch","1 Escape Rope","2 Viridian Forest","---"],
            ["7 Psychic Energy","3 Metal Energy","1 Beast Energy Prism Star"]),
            new List(10, ["4 Inkay","4 Malamar","3 Tapu Koko","2 Giratina","1 Onix","1 Oranguru SUM",
            "1 Marshadow SLG","1 Necrozma-GX","1 Tapu Lele SMPR","---"],
            ["4 Cynthia","4 Guzma","4 Lillie","4 Ultra Ball",
            "4 Mysterious Treasure","2 Nest Ball","3 Acro Bike",
            "2 Rescue Stretcher","3 Shrine of Punishment","---"],
            ["8 Psychic Energy", "4 Double Colorless Energy"]),
            new List(9,["4 Inkay","4 Malamar","2 Necrozma-GX","1 Dawn Wings Necrozma-GX","1 Marshadow-GX",
            "1 Giratina","1 Deoxys","1 Mimikyu","1 Tapu Lele-GX","1 Marshadow SLG","1 Chimecho","---"],
            ["4 Lillie","3 Guzma","3 Cynthia","4 Ultra Ball",
            "4 Mysterious Treasure","2 Nest Ball","4 Acro Bike",
            "2 Rescue Stretcher","4 Escape Board","1 Escape Rope","1 Altar of the Moone","---"],
            ["10 Psychic Energy"]),
            new List(8, ["4 Tapu Koko","2 Passimian SUM","2 Passimian UPR","1 Slugma CES","1 Slugma LOT",
            "2 Magcargo","1 Oranguru SUM","1 Marshadow SLG","1 Latios SLG","1 Tapu Lele SMPR","---"],
            ["4 Guzma","4 Lillie","3 Guzma","2 Professor Kukui","4 Ultra Ball",
            "4 Nest Ball","4 Acro Bike","3 Rescue Stretcher","1 Escape Rope","1 Switch",
            "3 Choice Band","3 Shrine of Punishment","---"],
            ["4 Counter Energy", "4 Double Colorless Energy"]),
            new List(7,["4 Zorua","4 Zoroark-GX","3 Rockruff","2 Lycanroc-GX",
            "3 Tapu Lele-GX","1 Giratina","1 Ditto Prism Star","1 Alolan Muk","---"],
            ["4 Professor Elm's Lecture","3 Cynthia","3 Guzma","2 Professor Kukui","2 Acerola","1 Judge",
            "1 Mallow","4 Ultra Ball","3 Timer Ball","1 Max Potion",
            "3 Choice Band","1 Rescue Stretcher","1 Multi Switch",
            "1 Switch","1 Counter Gain","2 Devoured Field","---"],
            ["4 Fighting Energy","4 Double Colorless Energy"]),
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
            new Post(3,"17/02/19","(Psychic) Recharging the Mind",`As I am waiting
            for my flight at Melbourne Airport back to reality, I reflect on my past
            weekend competing at the 2019 Oceania International Championships.
            It was an incredibly important event for my competitive career, and one
            of the worst feelings I felt was to overcome any regret or disappointment
            of failing my own set expectations and milestones. I was underprepared,
            picking a deck other Australians did simply to have a sense of security of CP.
            What was the point of picking a secure deck, when it flopped throughout the
            whole country? It was great when the Australian contingent selected a deck with
            a spicy tech, which evoked a sense of collectivity. Ultra Malamar with
            Acerola joined the ranks of American and European Zapdos (although we
            definitely could've created our own version of Zapdos). </br>
            </br> My matchups were as follows: </br> Ultra Malamar WW
            </br> Tool Drop LWT </br> Ultra Malamar WLT </br> Ultra Malamar LWL
            </br> Ultra Malamar WW </br> Ultra Malamar WW </br> Granbull WW
            </br> Zapdos/Jirachi/Jolteon LWL </br> Ultra Malamar LWL </br>
            </br> I started to pick up steam around rounds 5-7, getting a strong
            win streak and placing myself with a great chance to get at least
            Top 64. Unfortunately, I dropped a card after round 7, which meant
            that I was getting a game loss in round 8. I had a great lead in
            game 1, which could’ve allowed me to easily win both games and went
            onto my win-and-in, however an extremely unlucky case of starting
            Tapu Lele-GX and having Acerola prized in game 3 of round 8 removed
            any chances of me winning (unless my opponent dead drew, of course).
            Round 9 was also unfortunate, playing an unflavoured mirror match and
            getting donked in game 3 with a very anti-climactic turn of events.
            This meant I had no chance at going to the Berlin IC in late April,
            a failure I must learn from, in order to do well in Perth and Sydney
            Regionals. Starting 4-1-2 is quite a strong run, as winning round 8
            would have meant I was safe to play out the last round, a luxury
            often not open to others around my table. </br>
            </br> Going forwards, I am unlikely to continue playing Ultra
            Malamar, as the mirror match with Acerola or Koko is very stressful
            to play against; not because of my chances but rather it can come
            down to luck of the draw at times and whoever draws the cards at the
            right time can outright win the game. I am much more confident in
            playing a comfortable deck such as Zoroark/Lycanroc or Zapdos/Jirachi,
            with a higher skill ceiling and a more aggressive start to many games.
            I will have to see if I am going for the NAIC stipends or continue
            my quest to gain strong placings in the 2019 season, but it should
            test my resillience and will at improving in the game. It is not
            about winning all the time, sometimes simply gaining the pleasure
            of working with a group of friends on a decklist to take tournaments
            by storm or even supporting them in their successes, which is why I
            still play the game with no second thoughts. With Top 2, Top 8 and
            Top 16 placings within my team, it can be considered a huge victory,
            even if I wasn't the one behind the win. Next time, my friends
            could be the ones supporting my victories. Who knows?`,["Tournament Report"]),
            new Post(2,"05/02/19","A Dangerous Rogue Away From Victory",`The past weekend,
            I was lucky enough to gain a top 8 and top 4 placing at Maitland and Penrith
            respectively. At both tournaments, I played two variants of the tried-and-true
            Zoroark/Lycanroc deck; each to counter the expected meta. It is clear that
            Zoroark/Lycanroc is the BDIF of the SUM-LOT format, having innate consistency
            and strong mid-game and late-game potential. My base list will be up on my decks
            profile very soon, with each tech change explained below. </br> </br>
            <b>Maitland Cup</b> </br> </br> Tech Changes: </br> -1 Max Potion </br> -1 Multi Switch
            </br> +1 Oranguru </br> +1 Bodybuilding Dumbbells </br> </br> Expectations:
            Lost March, Spread Malamar, GasKan </br> </br> Lost March WW </br> ZoroRoc/Vile WLT
            </br> GasKan WW </br> ZoroRoc/Vile WLW </br> ID </br> T8: BuzzGarb Shrine LL </br>
            </br> From my experiences at Newcastle LC the month prior, I believed
            that these decks will come in larger numbers due to their popularity
            in the Central Coast region. The decks were very easy to play, with
            Spread Malamar more of a counter brought by Sydney players to deal
            with the low HP single prize meta. I was fortunate enough to make
            top cut safely through a combination of luck and knowledge of the matchups.
            Unfortunately, my tournament run ended with a hard counter in top 8 with
            no outs to winning (mostly due to the fact that I didn't run Weavile).
            </br> </br> The Bodybuilding Dumbbells came in clutch in round 1 to Lost March,
            which enabled Zoroark-GXs to survive a 240 damage Lost March attack.
            However, its primary purpose was against GasKan; as with Alolan Muk
            and Dumbbells on a Zoroark-GX, it walled Marshadow-GX from attacking
            and required Necrozma-GX to have 5 Psychic Energies to OHKO. Although
            I played against 1 GasKan, I wasn't able to abuse this combo and instead
            had to play out the prize race. The Oranguru was added as a last minute
            call to counter Mill brought by two top Sydney players, however proved
            to be a useless card in the tournament.
            </br> </br> </b>Penrith Cup</b> </br>
            </br> Tech Changes: </br> -1 Rockruff </br> -1 Tapu Lele-GX
            </br> -1 Giratina </br> -1 Max Potion </br> -4 Fighting Energy
            </br> +1-1 Weavile </br> +1 Sableye </br> +1 Oranguru
            </br> +4 Unit Energy FDY </br> </br> Expectations: Mill,
            ZoroRoc, Spread Malamar </br> </br> ZoroRoc WW </br> ZoroDeciTales WW
            </br> Spread Malamar WLW </br> ID </br> ID </br> T4: Spread Malamar LWL
            </br> </br> After the success of Mill (winning the tournament),
            Brent and my focus changed to finding a way to beat it; which came in the
            form of Sableye and Oranguru. The win condition was quite convoluted,
            which required Sableye to use Limitation to lock the opponent from using
            Supporters (disabling many of the Energy removal and win conditions).
            Furthermore, Oranguru could be used late game alongside a Judge to
            recover the Energies lost to removal and set up the Sableye lock again.
            The purpose of Oranguru with Sableye was very strong against Mill, as
            they would very likely deck out at that point. In the scenario they
            played Switch to use Unown HAND to win, Alolan Muk can be a counterplay
            in order to block that win condition. I also used Weavile to increase my
            matchups against GasKan, mirror and Buzz Shrine, yet it came in handy
            against ZoroDeciTales too. I managed to make it into top 4, whilst Brent
            failed with the same 60 due to variance and dead draws, but once again,
            I fail to make it past the first round of top cut; even though the mistake
            was due to my own misplays. My opponent deserved to win regardless and went
            on to win the tournament. </br> </br> It may be the time to retire ZoroRoc,
            due to my excessive usage of it this season. Although it's easily a strong
            play, I may still consider it for Top Ryde; playing a variety of decks
            can also help improve my analytical skills and achieve better results
            than I would hope. In terms of the Germany IC race, I am now ranked
            7th or 8th going into the second weekend of cups, with 2 placings
            secured. It is now a matter of getting further into top cut (first
            or second) in order to improve my standing, but I'm definitely
            feeling the effects of 'every point matters'. We'll see how
            it goes soon enough!`, ["Tournament Report"]),
            new Post(1,"22/01/19","Q2 Cups",`I have 4 League Cups coming up,
            all of which are important to my Germany IC goal. With an excess of 2 tournaments,
            I can afford to play a complex deck in one of them to try and squeeze out a stronger run.
            Some decks I've considered are: Passimian Spread, Malamar Spread,
            GasKan and Zoroark/Lycanroc.
            </br> </br> Cup 1: Maitland - Buzzwole, Lost March
            </br> Cup 2: Penrith - Zoroark, Blacephalon, Gardevoir
            </br> Cup 3: Newcastle - Buzzwole, Lost March
            </br> Cup 4: Top Ryde - Zoroark, Malamar, Blacephalon
            </br> </br> Passimian Spread: Great matchups against Zoroark variants, Blacephalon
            and GasKan; decks I believe will be popular in the first cup. My teammate,
            Christian Hasbani, showed me the deck and list late in December
            and has been popular in Queensland tournament this month.
            </br> </br> Malamar Spread: The deck is great against the Newcastle meta and
            has a lot of ways to cheese out wins against every matchup.
            </br> </br> GasKan: Christian built the list and is a strong
            and safe contender for an easy Top 8. It has some weaknesses to Spread unfortunately,
            but it should be enough to get wins against top decks.
            </br> </br> Zoroark/Lycanroc: A very safe deck that has 50-50 against the field
            and a deck I am truly comfortable with from a top 16 finish at Brisbane
            Regionals this season.
            The new list runs Alolan Muk to provide a favourable matchup vs GasKan,
            Granbull, mill; but struggles against the new Wailord & Magikarp Tag Team.
            </br> </br> The lists will be added to the decks tab soon. Stay tuned!`, ["Testing"]),
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

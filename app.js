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
        "2018 Top 16 Brisbane Regionals","2019 Top 16 Brisbane Regionals",
        "2019 Top 8 Perth Regionals"],
        deckCol: [
            new Deck('Malamar / Ultra-Necrozma-GX', 13, ["PokemonShuffleSprites/637.png","PokemonShuffleSprites/1079.png"],
            "2019 Perth Regionals", "16/03/19"),
            new Deck('Pikachu & Zekrom-GX', 12, ["PokemonShuffleSprites/31.png","PokemonShuffleSprites/720.png"],
            "IC Testing", "N/A"),
            new Deck('Malamar / Ultra-Necrozma-GX', 11, ["PokemonShuffleSprites/637.png","PokemonShuffleSprites/1079.png"],
            "2019 OCIC", "15/02/19"),
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
            new List(13,["4 Inkay","4 Malamar", "2 Ultra Necrozma-GX", "2 Giratina",
            "2 Jirachi","1 Marshadow-GX","1 Tapu Lele-GX","---"],
            ["4 Lillie","3 Cynthia","3 Guzma","1 Acerola","4 Ultra Ball",
            "4 Mysterious Treasure","3 Nest Ball","1 Rescue Stretcher","2 Choice Band",
            "2 Escape Board","3 Switch","3 Viridian Forest","---"],
            ["7 Psychic Energy","3 Metal Energy","1 Beast Energy Prism Star"]),
            new List(12,["2 Raikou","2 Pikachu & Zekrom-GX","2 Zeraora-GX","2 Zapdos",
            "2 Tapu Lele-GX","1 Tapu Koko-GX","1 Tapu Koko Prism Star","---"],
            ["4 Guzma","3 Lillie","3 Cynthia","3 Volkner","1 Erika's Hospitality",
            "4 Ultra Ball","4 Electropower","4 Nest Ball","4 Energy Switch",
            "3 Choice Band","2 Aether Paradise Conservation Area","1 Thunder Mountain Prism Star","---"],
            ["12 Lightning Energy"]),
            new List(11,["4 Inkay","4 Malamar", "2 Ultra Necrozma-GX", "2 Giratina",
            "2 Jirachi","1 Marshadow-GX","1 Tapu Lele-GX","---"],
            ["4 Lillie","4 Cynthia","3 Guzma","1 Acerola","4 Ultra Ball",
            "4 Mysterious Treasure","2 Nest Ball","1 Rescue Stretcher","2 Choice Band",
            "2 Escape Board","3 Switch","3 Viridian Forest","---"],
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
            new Post(5,"19/03.19","Stellar Wishes of Competition",`Perth Regionals
            has come and gone, and I am very happy about my tournament run the
            past weekend. It was my first Top 8 in a modern-era Regional and was
            a huge boost to my confidence as a competitive player. Despite this,
            I never would've fathomed myself using Ultra Malamar again, especially
            after the shock loss at the Oceania Internationals. Despite the success
            I had, I'm likely to use Zapdos or ZoroRoc for the next few tournaments,
            unless Ultra Malamar becomes more of a safety net for me. Before I
            get into the tournament insights, I'd have to say that this weekend
            pushes me into the Day 2 race, even if it was only a slight bump in
            the rankings to 22nd. This is also a boost into the Columbus stipend
            race, which means I could potential go for that. The biggest win this
            weekend, although it was inevitable, was my Worlds invite, as I can
            now look forward to attending the 2019 World Championships in
            Washington DC! I still have to sort out my Term 2 university exams,
            in order to make it, but miracles can happen, so fingers crossed!
            </br> </br> Why did I choose Ultra Malamar despite my comfort in
            Zoroark decks? It was moreso the discovery that everyone tended towards
            ZoroRoc as a safe pick for the tournament, especially since they all
            expected Zapdos to be prevalent. This again feeds into the stigma
            that Australia, and by that respect Oceania, is always 2-3 events
            behind other regions in terms of the metagame, and this is no different.
            I wanted a strong matchup against Zoroark, and the only clear deck that
            would do exactly my request was Ultra Malamar. Of course, the other deck
            that can fulfil it was Buzzwole/Lucario-GX, however I believe it just
            concedes to most decks and would never be a great play in a tournament
            of this magnitude and scale. Furthermore, I didn’t expect many Ultra
            Malamar decks, and so I didn’t have to worry about the mirror as much;
            it was a good thing I didn’t encounter any at all in the tournament. I
            played the same 60 as Christian, and switched only a card from both
            our IC lists (the Cynthia for a 3rd Nest Ball). This was great, as it
            surprisingly boosts the consistency a lot turn 1, and had increased
            chances of 3 Inkays favourably. Starting Jirachi turn 1 is also often
            a great guarantee of a strong setup, and I would even argue that playing
            3 Jirachi would be amazing in the deck. </br> </br> My matchups over
            the weekend were: </br> R1 ZoroRoc WW </br> R2 Blacephalon LL
            </br> R3 Zapdos/Jolteon/Buzzwole-GX WW </br> R4 ZoroRoc LWT
            </br> R5 Blacephalon WW </br> R6 ZoroRoc/Cario LWW </br>
            R7 Zapdos/Buzzwole/Nihilego WW </br> T8 ZoroRoc/Cario WLL </br>
            </br> I did have to highlight an amazing line of play I made in Round
            1, as I believe it would inevitably ended up in a tie if I wasn't
            committed to it. I had an amazing start in game 2, but fizzled out in
            my draw after turn 1. I had an Ultra Necrozma benched and 3 Malamars
            out. I had managed to charge up my Ultra Necrozma with basic Psychic
            every turn, holding onto a Beast Energy for when it mattered. My opponent
            assumed going for the Malamars would cripple my chain of attackers, but
            it simply allowed me to create a checkmate position in two turns. When
            I was ready, I attacked into the Zoroark with Beast Energy taking 2 prizes.
            Now, with 1 Malamar benched, he went for it, leaving me with a lone Ultra
            Necrozma and a Beast Energy attached to it. Because of game 1, where I
            opted for using Guzma to end the game rather than Sky Scorching Light
            (meaning he would likely do it again in game 2), my opponent clumsily
            played more Pokemon than needed, which played right into my 2 prize
            turn alongside a Guzma on Alolan Muk. With a 2 prize equaliser and an
            Alolan Muk active, this meant that my opponent had to use Acerola to
            remove it from play in order to attack into the Ultra Necrozma. This
            safely allows me to chain a second Guzma for the set on Tapu Lele-GX
            the next turn. </br> </br> I also got a bit lucky in my last round,
            where I played the top Oceanic player in my win-and-in. Unfortunately,
            my opponent was docked and dead drew completely, meaning I had a
            guaranteed entry into Day 2! The win was huge for me, because over
            the past 5 Regionals in the modern era, I have had 3 Top 16s
            (losing 2 win-and-ins). The Top 8 run was overdue! Due to my excitement,
            I had a great night partying with friends and having a celebratory
            dinner and drinks. </br> </br> In Top 8, game 1 went as perfect as it should,
            as I hit almost everything I need to clean up the game in around 6 turns.
            Game 2 was a clumsier one, as I may have made a misplay to get a Psychic over
            a Metal in order to set up attackers. However, in hindsight, I probably
            made the right play, as I had the Viridian Forest in play and didn't
            anticipate using Cynthia into a dead hand. Game 3, I started
            Marshadow-GX, and my opponent had a strong turn 2, meaning I had
            nearly no chance at winning. Again I believe I may have made a tiny
            misplay, which I shouldn’t have attached the Psychic Energy on the
            Marshadow (which was sort of a blunder knowing that Alolan Muk would've
            hit the field), but it couldn't be stopped anyways. </br> </br>
            My next tournaments after Perth would be the League Challenge this
            upcoming Saturday, which is nothing to write home about, and the
            League Cups coming up in April. It is nice to take a break from the
            competitive circuit, but all Perth has done is fuel my competitive
            drive to do well and maintain my consistency at Regionals. Luckily,
            Sydney Regionals is fast approaching, and I will hopefully be prepared
            for when the new format is legal for the tournament!`,
            ["Tournament Report","Meta Analysis"]),
            new Post(4,"14/03/19","Teaming Up for Perth",`I'm writing this while
            on my 5-hour flight to Perth, and have had a lengthy break from
            Pokemon ever since the Oceania IC. It seemed like ages since I
            have competed as a large-scale event, and I am beyond excited to
            clinch another strong placing at a major event. The meta has shifted
            quite drastically between the 3 major tournaments in the SUM-TEU
            format, and I am writing now to anticipate what might be strong
            contenders for Perth and even the Berlin IC. </br> </br>
            The Oceania IC was positioned very favourably for Zapdos/Jirachi to
            take the win, as I believed Team DDG had legitimately found a gap in
            the metagame to exploit the weaknesses of other top decks. This was
            also in combination with the assumption that Zapdos was a weak play
            due to Japan results completely dominated Pikachu/Zekrom. I believe
            this was further from the truth, as Zapdos had a strong matchup to
            Pikachu/Zekrom, especially with its amazing prize trade. It was a
            close matchup against Ultra Malamar, due to Giratina pulling the
            weight and a late Sky-Scorching Light allowing a prize lead. I think
            with the addition of multiple Escape Ropes, this allowed Zapdos to
            take multiple Malamar knockouts, which will weaken their board state.
            </br> </br> I expected much more Zoroark/Lycanroc at the IC, but it was
            scared off by all the Ultra Malamar AND Pikachu/Zekrom players, which
            meant only the few who used it were likely to do well due to the
            abundance of Zapdos/Jirachi. One notable tech I considered and
            dismissed almost a day later, was Lucario-GX. It was a very efficient
            way to handle the Pikachu/Zekrom decks, however I thought that you
            needed to have 2 Riolus benched at all times to threaten the KO,
            which left less room for Zoroarks and Lycanrocs. Furthermore, it
            wasn't compatible with Ditto, which meant that its utility was
            acking even more. Finally, it had a Psychic weakness, which only
            served to make the Ultra Malamar matchup worse. These factors led
            me to believe that Lucario was simply Trade fodder at best, with
            occasional uses against weaker Pikachu/Zekrom players. In hindsight,
            Zoroark/Lycanroc WAS the play for the Oceania IC, but was it a good
            play for the next few tournaments? </br> </br>
            Cannes SPE and Collinsville Regionals both highlighted a different
            shift in the metagame, and events that Australians will look towards
            to finalise their plays. Cannes SPE showed that Vileplume was a
            viable anti-meta call against all the Zapdos, Ultra Malamar and
            Pikachu/Zekrom decks running around, with Hoopa to handle Zoroark
            variants. My US friend showed me a Vileplume list before its inception,
            in which I agreed that it would be a secret call. Now that the archetype
            is out, I believe that there will be a higher usage rate for cards
            like Jolteon-GX to counter it. This, of course, makes Lycanroc a lot
            stronger. Furthermore, Cannes SPE showed an interesting anomaly that
            Europeans did not use Zoroark variants (as EU is often associated with
            Zoroark due to its consistency and ability to play many complex
            techs and strategies). Instead, Collinsville Regionals had a very
            high Zoroark usage rate, which led to Blacephalon winning the event.
            </br> </br> Does this make Blacephalon a strong contender in the meta?
            No, I don't believe so. Blacephalon simply exploited another gap in
            the metagame in which Zoroark had such a large usage rate and Zapdos
            being less used. This is also shown with players, such as Daniel
            Altavilla, who used the Zoroark/Lycanroc/Lucario over the Zapdos/Jirachi
            list. Even Zach Lesage noted that he played Blacephalon not because
            it was an amazing metacall, but because it was his pet deck.
            Zoroark/Lycanroc can very much win against Blacephalon using either
            a Giratina tech or Garbodor to capitalise on skipping Beast Ring
            turns or cementing the prize race in your favour. </br> </br>
            With these analysis, it can be noted that the rise and fall of Zoroark
            is due to the good players opting to use other decks, Ultra Malamar
            becoming a less of a strong play (due to its horrible mirrors often
            ending in ties) and the threat of Vileplume imminent. I don't think
            anyone in Oceania would use Mill, besides Aaron van der Kolk, although
            I would still have a one card tech for that matchup just in case.
            Brent Tonisson proposed a secret play for Perth, rather a different
            take at Zoroark. Splitting off into Garbodor and Lycanroc, this means
            that it will allow you to handle the meta decks through a toolbox-like
            manner, using Garbodor for late game prize trades against Lucario,
            Ultra Malamar and Zapdos, whilst Lycanroc stilll destroys Pikachu/Zekrom
            and opposing Zoroarks. With Giratina still in the list, this gives you
            an out to Blacephalon, while Alolan Muk can be used against Zapdos,
            Granbull and Pikachu/Zekrom. Oranguru is included as an out to mill,
            but can definitely be a flexible spot in case other matchups are needed
            to be improved. Suggestions include: Switch, Cynthia, 3rd Rockruff.
            However, there is a glaring weakness in the deck in that there is no
            Prism Star Stadium removal, which means Wondrous Labyrinth completely
            destroys this deck, Thunder Mountain will exist to make the matchup
            a lot harder and Heat Factory can allow Blacephalon to maintain its
            consistency. The deck is by no means heavily tested, but I believe it
            may be a strong rogue for the event, given the power of Garbodor when
            no one else is expecting it. </br> </br> The matchup spreads are listed
            below: </br> Mirror w/o Lucario 45/55 </br> Mirror w/ Lucario 55/45
            </br> Ultra Malamar 60-40 </br> Zapdos/Jirachi 65-35 </br>
            Pikachu/Zekrom 55-45 </br> Blacephalon 50-50 </br> Vileplume Mill 45-55
            </br> Lost March 40-60 </br> Buzzwole/Lucario 40-60 </br> </br>
            This is a larger piece of writing than what I am accustomed to, but long
            flights like what I am on, it is a pleasure to write out my thoughts and
            observations into the hobby I enjoy and to document my journey and
            progression as a competitor. Thanks for reading, and I will write a
            report at the conclusion of the Regionals! (on the flight home probably)`,
            ["Deck Analysis", "Meta Analysis"]),
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
            game 1, which could've allowed me to easily win both games and went
            onto my win-and-in, however an extremely unlucky case of starting
            Tapu Lele-GX and having Acerola prized in game 3 of round 8 removed
            any chances of me winning (unless my opponent dead drew, of course).
            Round 9 was also unfortunate, playing an unfavoured mirror match and
            getting donked in game 3 with a very anti-climactic turn of events.
            This meant I had no chance at going to the Berlin IC in late April,
            a failure I must learn from, in order to do well in Perth and Sydney
            Regionals. Starting 4-1-2 is quite a strong run, as winning round 8
            would have meant I was safe to play out the last round, a luxury
            not open to others around my table. </br>
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
            </br> </br> The lists will be added to the decks tab soon. Stay tuned!`,
            ["Meta Analysis","Testing"]),
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

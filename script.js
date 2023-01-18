const magazines = {
    id: "magazines",
    logo: "newspaper",
    button: "Subscribe here",
    cards: [
        {
            title: "California Sunday",
            sub: "39.99",
            text: "California Sunday's premise is simple: stories about California, the American West, Latin America and Asia. That's it. Sounds simple enough, but the key is that each piece is done exceptionally well, from the reporting to the writing to the photography. I may be biased as a California native, but I don't know if I've read another publication whose quality consistently blows me away from top to bottom. From the first story I came across on the disappearance of a contestant on a Peruvian gameshow, I was hooked. Other standouts include a piece on the aftermath of the Vegas shooting and the story of a Mormon town on the border of Utah and Arizona, but it's all good — and worth experiencing in print."
        },
        {
            title: "Huck",
            sub: "46.00",
            text: "Its piece on “How a Frantic Dance Craze is Uniting Brazilians” is not only a striking photo essay, but also a deep dive into the Bregafunk subculture that`s sweeping the country. There are more gripping articles as well relating to politics, activism and even sports, but they`re all geared towards subjects you won`t find from the more mainstream mags. Huck is a great book to collect too even if just for the extremely-engaging pictures."
        },
        {
            title: "MacGuffin",
            sub: "42.00",
            text: "Taking its name from a Hitchcockian term for an otherwise inessential object that furthers a film`s plot, MacGuffin is a biannual magazine that celebrates would-be mundane objects. Its 8 issues have covered ropes, desks, cabinets and windows, considering the effect each has imparted upon the arts, history, culture, our lives. Mark Z. Danielewski`s House of Leaves used buildings as a starting point to explore physical minutiae and metaphysical metaphors in relation to structures; so too does MacGuffin stretch its themes to cover far-flung antecedents. For instance, MacGuffin 7 - The Trousers doesn`t merely list denim brands and famous fashion editorials; it explores manufacturing costs, men in skirts, tents made of trousers, the legacy of tartan plaid and sturdy leg coverings worn by real life workers. "
        },
        {
            title: "Magazine B",
            sub: "140.00",
            text: "Do you love nerding out over brand history? Like, do you really really love nerding out over brand history? If yes, then Magazine B is your jam. Magazine B`s longest ongoing series hones in on just one company (or sometimes city) per issue, extensively delving into its history, products, business model and the people behind the magic. What I love most about Magazine B is its curation, which makes complete sense and is totally bizarre all at the same time. Porter, Michelin Guide, Häagen-Dazs, Snow Peak, Netflix, Leica and Aesop are just a few covered in the collection. Each issue includes endless nuggets of knowledge for brand enthusiasts and marketing specialists alike, plus the photos are epic. Magazine B receives no financial support from the companies it features, so each issue is purely for the love of — or fascination with — the brand.  "
        },
        {
            title: "Civilization",
            sub: "120.00",
            text: "My current favorite magazine is Civilization. Junya Watanabe fans may recognize the mag from his Spring 2020 collection. It`s printed on newspaper stock, the content is total bonkers yet refreshingly heartfelt. The people that make it are solidly great individuals, and they make it simply because they want to. It`s literally everything an independent magazine should be, inside and out. "
        },
        {
            title: "Real Review",
            sub: "46.00",
            text: "London-based The Real Review describes itself as the journal of “what it means to be alive today,” with a particular focus on the mix between culture, politics and architecture. The publication was founded by writer and architect Jack Self in 2016, and since then has gone on to feature contributions from Juergen Teller, Ai Weiwei and Hans Ulrich Obrist. The most recent issue, which arrived back in Spring 2019, was a bumper issue including photography from Wolfgang Tillmans, an essay by Virgil Abloh and images of Nicole McLaughlin`s work. Similar to Civilization — chosen by Megan above — The Real Review collaborated with Junya Watanabe as part of his Spring/Summer 2020 collection last year, shining a light on the magazine`s look at the world."
        },
        {
            title: "CEREAL",
            sub: "45.00",
            text: "Rosa Park and Rich Stapleton`s home-grown publication CEREAL is my mood board, thesaurus, style inspiration and so much more. It was one of the first magazines that I truly connected with. Ten years ago, it came onto the literary scene with a fresh approach, transcending genres and strict editorial guidelines by covering travel, design, style, art and even producing city guides, each under its own minimalistic vision. What makes the mag so special is that it offers so much insight into the crossover of different worlds, diving into interior design, conversations with artists, and basically just anything and everything that inspires Park and Stapleton. Oh, and it`s a great coffee table book, too. "
        },
        {
            title: "New Order",
            sub: "36.00",
            text: "There`s something intriguing about THE NEW ORDER magazine. For a publication that`s been running for over a decade, it still, somehow, continues to produce some 250 pages of quality content with each issue — including exclusive interviews, beautiful fashion editorials and photo essays. Since its inception, the biannual publication has worked with some of the most elusive people in the industry, like Mark Gonzales, Goldie and Takahiro Miyashita, as well as big names like Matthew M. Williams and Hiroki Nakamura. In a time where the world is focused on maximizing the output of digital content, THE NEW ORDER faithfully remains devoted to in-depth journalism, while encouraging slower digestion of information. Its founder, James Oliver, produces the magazine out of Tokyo and believes being a foreigner in Japan has enabled him to become “more observant,” which seems to be a large chunk of the print`s successful recipe."
        }
    ]
}

const root = document.getElementById("root")
const main = document.getElementById("main")

for (let card of magazines.cards) {
    main.innerHTML += `
        <section class="card">
            <div class="price">$ ${card.sub} / YEAR</div>
            <h1>${card.title}</h1>
            <p>${card.text}</p>
            <button class="sub">Subscribe here</button>
        </section>
    `
}


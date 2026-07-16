/* ============================================================
   ALL COUNTRIES DATA
============================================================ */
var countries = {

    japan: {
        name: "Japan",
        flag: "🇯🇵",
        region: "East Asia",
        color1: "#bc002d",
        color2: "#e85d04",
        video: "dPWzHMLEoYA",
        recipes: 5,
        stories: 24,
        facts: 8,
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6524496.146114!2d131.259!3d37.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2seg!4v1700000000000",
        cultureTitle: "Traditions, Rituals & Daily Life",
        cultureText: "Japanese culture is built on a deep respect for harmony, nature, and community. From the tea ceremony that turns a simple drink into a meditation, to the concept of 'ikigai' — a reason for being — every aspect of Japanese life carries intention. The Japanese concept of 'ma' values the beauty of empty space and silence, which influences everything from architecture to conversation.",
        cultureFacts: [
            { icon: "🍵", title: "Tea Ceremony", desc: "The 'chado' ceremony is a 600-year-old ritual of preparing and serving matcha tea as a spiritual practice." },
            { icon: "🌸", title: "Hanami", desc: "Cherry blossom viewing parties happen every spring — families gather under blooming sakura trees to celebrate life." },
            { icon: "🏯", title: "Samurai Code", desc: "Bushido, the samurai code of honor, still influences Japanese values of discipline and respect today." },
            { icon: "🎎", title: "Festivals", desc: "Japan holds over 300,000 festivals per year — nearly one in every city, every day of the year." }
        ],
        foodTitle: "The Stories Behind Japanese Food",
        foodIntro: "Japanese food is not just about taste — it is about the philosophy of 'ichiju sansai' (one soup, three sides) and the art of presenting food as beautiful as it is nourishing. Every dish tells a story of seasons, regions, and centuries of refinement.",
        dishes: [
            {
                emoji: "🍣",
                name: "Sushi",
                subtitle: "The most iconic Japanese dish worldwide",
                story: "Sushi was originally street food in 19th century Tokyo — quick, cheap, and eaten standing up. The idea of it being a fine dining experience only happened after it traveled to America in the 1960s. In Japan, the best sushi chefs train for over 10 years just to learn how to cook the rice.",
                ingredients: ["Sushi rice", "Rice vinegar", "Fresh fish (salmon, tuna)", "Nori seaweed", "Wasabi", "Soy sauce", "Pickled ginger"],
                steps: ["Cook Japanese short-grain rice with a 1:1.2 water ratio.", "Mix rice vinegar, sugar, and salt. Fold gently into warm rice.", "Let rice cool to body temperature — never in a fridge.", "Place nori on a bamboo mat, spread rice leaving 2cm at top.", "Add fish in a line. Roll tightly using the mat.", "Slice with a wet knife into 8 equal pieces.", "Serve with soy sauce and wasabi on the side."]
            },
            {
                emoji: "🍜",
                name: "Ramen",
                subtitle: "A bowl with 100 years of soul",
                story: "Ramen is often called Japan's national comfort food, but it actually came from China. After World War II, American wheat flooded Japan, and street vendors started making cheap noodle soups. Each region developed its own style — Sapporo's rich miso, Hakata's creamy tonkotsu, Tokyo's clear soy broth. A bowl of ramen tells you exactly where you are in Japan.",
                ingredients: ["Ramen noodles", "Pork broth or chicken broth", "Miso paste or soy sauce", "Chashu pork belly", "Soft-boiled egg", "Nori", "Green onions", "Bamboo shoots"],
                steps: ["Simmer pork bones for 6-8 hours to make a rich tonkotsu broth.", "Season broth with soy sauce or miso to taste.", "Cook ramen noodles separately for 2-3 minutes.", "Slice chashu pork and warm in the broth.", "Soft-boil eggs for exactly 6.5 minutes, peel and halve.", "Place noodles in bowl, pour hot broth over them.", "Top with pork, egg, nori, and green onions."]
            }
        ],
        communityTitle: "What Japanese people want you to know",
        communityDesc: "These are real stories and insights shared by people from Japan — things you won't find in a travel guide.",
        didYouKnow: "Japan has vending machines that sell everything from umbrellas to fresh eggs to neckties. There are over 5 million vending machines in the country — one for every 23 people.",
        quickFacts: [
            { label: "Capital", value: "Tokyo" },
            { label: "Population", value: "125 million" },
            { label: "Language", value: "Japanese" },
            { label: "Currency", value: "Yen (¥)" },
            { label: "Religion", value: "Shinto, Buddhism" },
            { label: "Famous for", value: "Technology, anime, cuisine" }
        ],
        defaultStories: [
            { name: "Yuki Tanaka", city: "Kyoto", avatar: "🇯🇵", avatarBg: "linear-gradient(135deg, #bc002d, #ff6b6b)", text: "The tea ceremony isn't just about tea — it's about the entire moment. Every movement is deliberate, every silence intentional. It took me three years to truly understand why." },
            { name: "Kenji Mori", city: "Tokyo", avatar: "🇯🇵", avatarBg: "linear-gradient(135deg, #bc002d, #ff6b6b)", text: "In Japan we say 'itadakimasu' before every meal — it means 'I humbly receive.' We thank the animal, the farmer, the chef, and the earth. It is not a prayer, it is gratitude." }
        ],
        exploreMore: ["morocco", "india", "france"]
    },

    morocco: {
        name: "Morocco",
        flag: "🇲🇦",
        region: "North Africa",
        color1: "#c4522a",
        color2: "#d4a843",
        video: "3c7mZe734J0",
        recipes: 8,
        stories: 31,
        facts: 10,
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6814496.146114!2d-6.299!3d31.791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b88619651f0c3%3A0x7969e4cbf1aaef1b!2sMorocco!5e0!3m2!1sen!2seg!4v1700000000000",
        cultureTitle: "Colors, Souks & Ancient Traditions",
        cultureText: "Morocco sits at the crossroads of Africa, Europe, and the Arab world — and its culture reflects every one of these influences. The imperial cities of Marrakech, Fes, Rabat, and Meknes each have their own character. Moroccan hospitality is legendary: a guest is never allowed to leave hungry or empty-handed. The souks, the call to prayer, the hammam steam, and the smell of cumin and saffron — Morocco is a sensory experience unlike any other.",
        cultureFacts: [
            { icon: "🕌", title: "The Medina", desc: "Fes el-Bali is the world's largest car-free urban area. Donkeys are still used for transport inside its ancient walls." },
            { icon: "🫖", title: "Mint Tea", desc: "Moroccan mint tea is poured from a height to create foam — the higher the pour, the more respect shown to the guest." },
            { icon: "🧿", title: "Hamsa", desc: "The Hand of Fatima is hung in homes across Morocco to ward off the evil eye and bring blessings to the household." },
            { icon: "🎶", title: "Gnawa Music", desc: "Gnawa is a 1000-year-old music tradition brought by West African enslaved people. It is now a UNESCO-recognized art form." }
        ],
        foodTitle: "The Flavors of Morocco",
        foodIntro: "Moroccan cuisine is one of the most complex in the world — a blend of Arab, Berber, Andalusian, and French influences. The spice blend 'ras el hanout' can contain up to 35 different spices. Food here is always shared, always slow, and always served with intention.",
        dishes: [
            {
                emoji: "🍲",
                name: "Tagine",
                subtitle: "Named after the clay pot it is cooked in",
                story: "The tagine pot was invented by the Berbers thousands of years ago — the conical lid traps steam and returns moisture to the meat, making it incredibly tender without much water. Tagine is not one recipe but hundreds: lamb with prunes and almonds, chicken with preserved lemons, vegetables with argan oil. In Moroccan homes, it sits on coals for hours while the family gathers around it.",
                ingredients: ["Lamb shoulder or chicken", "Preserved lemons", "Green olives", "Onions, garlic", "Saffron, ginger, cumin, turmeric", "Fresh cilantro and parsley", "Olive oil", "Ras el hanout spice mix"],
                steps: ["Heat olive oil in tagine pot. Brown meat on all sides.", "Add sliced onions and crushed garlic, cook until soft.", "Add all spices and stir to coat the meat.", "Pour in 1 cup water or broth. Add preserved lemons.", "Cover with the conical lid and cook on low heat for 2 hours.", "Add olives in the last 20 minutes.", "Serve directly from the tagine with Moroccan bread."]
            },
            {
                emoji: "🥣",
                name: "Harira",
                subtitle: "The soup that breaks the Ramadan fast",
                story: "Harira is more than soup — it is the sound of a cannon at sunset during Ramadan, the smell that fills every alley in Moroccan cities, the bowl that appears on every table when the fast breaks. It is thick with tomatoes, lentils, chickpeas, lamb, and a handful of fresh herbs added at the last second. Every family has their own recipe, passed down and guarded carefully.",
                ingredients: ["Lamb pieces", "Tomatoes (fresh and canned)", "Chickpeas (soaked overnight)", "Red lentils", "Onion, celery", "Fresh cilantro and parsley", "Ginger, turmeric, cinnamon", "Lemon juice", "Flour and water (for thickening)"],
                steps: ["Brown lamb with onions, celery, ginger, and turmeric.", "Add tomatoes and cook down for 10 minutes.", "Add chickpeas, lentils, and 2 liters of water.", "Simmer for 45 minutes until chickpeas are soft.", "Mix 2 tablespoons flour with water, stir into soup.", "Add fresh herbs and lemon juice. Simmer 5 more minutes.", "Serve hot with dates and chebakia on the side."]
            }
        ],
        communityTitle: "Stories from Moroccans",
        communityDesc: "Real voices from people who grew up in Morocco — the details that make this culture unforgettable.",
        didYouKnow: "The University of al-Qarawiyyin in Fes, Morocco, founded in 859 AD, is considered the oldest continuously operating university in the world — 600 years before Oxford.",
        quickFacts: [
            { label: "Capital", value: "Rabat" },
            { label: "Population", value: "37 million" },
            { label: "Language", value: "Arabic, Tamazight, French" },
            { label: "Currency", value: "Moroccan Dirham" },
            { label: "Religion", value: "Islam" },
            { label: "Famous for", value: "Medinas, spices, architecture" }
        ],
        defaultStories: [
            { name: "Fatima Benali", city: "Marrakech", avatar: "🇲🇦", avatarBg: "linear-gradient(135deg, #c4522a, #d4a843)", text: "In our family, you don't eat tagine — you share tagine. The clay pot stays in the center and everyone reaches in together. That's the whole point." },
            { name: "Youssef Alami", city: "Fes", avatar: "🇲🇦", avatarBg: "linear-gradient(135deg, #c4522a, #d4a843)", text: "The first time a guest enters your home, you serve them the best you have. It doesn't matter if you are poor. A guest is a gift from God — that is what my grandmother always said." }
        ],
        exploreMore: ["egypt", "turkey", "nigeria"]
    },

    brazil: {
        name: "Brazil",
        flag: "🇧🇷",
        region: "South America",
        color1: "#009c3b",
        color2: "#fedf00",
        video: "1WO8OGG_pgE",
        recipes: 6,
        stories: 18,
        facts: 7,
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13914496.146114!2d-51.9253!3d-14.235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrazil!5e0!3m2!1sen!2seg!4v1700000000000",
        cultureTitle: "Rhythm, Soul & the Amazon",
        cultureText: "Brazil is a country of extremes — the largest rainforest on Earth, the most biodiversity, the wildest carnival, and one of the most joyful cultures in the world. The concept of 'jeitinho brasileiro' — the Brazilian way of finding a creative solution to any problem — defines how Brazilians navigate life. Music is not entertainment here; it is a language.",
        cultureFacts: [
            { icon: "🎉", title: "Carnival", desc: "Rio Carnival is the largest party on Earth with over 2 million people per day dancing in the streets for 5 days straight." },
            { icon: "⚽", title: "Football", desc: "Brazil has won the FIFA World Cup 5 times — more than any other nation. Football here is a religion, not a sport." },
            { icon: "🌴", title: "The Amazon", desc: "The Amazon rainforest produces 20% of the world's oxygen and contains 10% of all species on Earth." },
            { icon: "🎵", title: "Samba & Bossa Nova", desc: "Both music genres were born in Brazil. Bossa Nova changed global jazz forever when 'The Girl from Ipanema' was released in 1962." }
        ],
        foodTitle: "Brazilian Food is a Conversation",
        foodIntro: "Brazilian food is as diverse as its people — indigenous, Portuguese, African, German, Italian, and Japanese influences all show up on the plate. The north eats fish from the Amazon, the south grills beef like gauchos, and Rio has its own street food language entirely.",
        dishes: [
            {
                emoji: "🥘",
                name: "Feijoada",
                subtitle: "Brazil's national dish — a story of resistance",
                story: "Feijoada was born from the cruelest part of Brazilian history. Enslaved Africans were given the leftover pork parts that plantation owners didn't want — the feet, ears, and tail. They combined them with black beans and created something so rich and deeply flavored that it became the dish every Brazilian, regardless of wealth, now eats on Saturdays. Feijoada is served with rice, farofa, orange slices, and the whole family around the table.",
                ingredients: ["Black beans (soaked overnight)", "Pork ribs, pork belly", "Smoked sausage (linguiça)", "Garlic, onion, bay leaves", "Orange peel", "Farofa (toasted cassava flour)", "White rice", "Chopped greens (couve)"],
                steps: ["Soak black beans overnight. Drain and rinse.", "Brown the pork and sausage in a large pot.", "Add onions, garlic, and bay leaves. Cook 5 minutes.", "Add beans and enough water to cover by 5cm.", "Simmer for 2 hours until beans are very soft and broth is thick.", "Season with salt. Add orange peel in the last 10 minutes.", "Serve with white rice, farofa, and sautéed greens."]
            },
            {
                emoji: "🧆",
                name: "Acarajé",
                subtitle: "A sacred Afro-Brazilian street food",
                story: "Acarajé is sold by women dressed in traditional white Candomblé clothing on the streets of Salvador, Bahia. It is a fritter made from black-eyed peas, deep-fried in palm oil, and filled with shrimp, vatapá, and caruru. But acarajé is also a religious offering — it is given to Iansã, the Afro-Brazilian goddess of wind and storms. When you eat acarajé, you are eating centuries of African culture that survived slavery.",
                ingredients: ["Black-eyed peas (peeled)", "Onion", "Palm oil for frying", "Dried shrimp", "Vatapá (bread, shrimp, peanut paste)", "Hot peppers", "Salt"],
                steps: ["Soak black-eyed peas overnight. Rub to remove skins.", "Blend peas with onion and salt into a thick paste.", "Heat palm oil in a deep pan to 180°C.", "Shape paste into balls using two spoons.", "Fry for 4-5 minutes until golden and crispy.", "Split open and fill with vatapá and shrimp.", "Add hot pepper sauce to taste."]
            }
        ],
        communityTitle: "Voices from Brazil",
        communityDesc: "Stories shared by Brazilians about the culture, the food, and the way of life that makes Brazil unlike anywhere else.",
        didYouKnow: "Brazil is the only Portuguese-speaking country in the Americas. When Portuguese explorer Pedro Álvares Cabral arrived in 1500, the land was home to over 2,000 indigenous tribes speaking hundreds of different languages.",
        quickFacts: [
            { label: "Capital", value: "Brasília" },
            { label: "Population", value: "215 million" },
            { label: "Language", value: "Portuguese" },
            { label: "Currency", value: "Brazilian Real" },
            { label: "Religion", value: "Mainly Catholic" },
            { label: "Famous for", value: "Carnival, football, Amazon" }
        ],
        defaultStories: [
            { name: "Carlos Oliveira", city: "Rio de Janeiro", avatar: "🇧🇷", avatarBg: "linear-gradient(135deg, #009c3b, #fedf00)", text: "Carnival is not a party. It's a year of sacrifice, creativity, and community — and then three days of pure joy." },
            { name: "Ana Lima", city: "Salvador, Bahia", avatar: "🇧🇷", avatarBg: "linear-gradient(135deg, #009c3b, #fedf00)", text: "In Bahia, food is spiritual. When my grandmother cooks acarajé, she prays over the palm oil first. You are not just eating — you are receiving a blessing." }
        ],
        exploreMore: ["mexico", "peru", "nigeria"]
    },

    egypt: {
        name: "Egypt",
        flag: "🇪🇬",
        region: "North Africa / Middle East",
        color1: "#d4a843",
        color2: "#7a3a0f",
        video: "7Oy9mLQ9zjo",
        recipes: 7,
        stories: 42,
        facts: 12,
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7248496.146114!2d30.8025!3d26.8206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368886866c26ad%3A0x5dc26c3e6db4f2e8!2sEgypt!5e0!3m2!1sen!2seg!4v1700000000000",
        cultureTitle: "Civilization, Faith & the Nile",
        cultureText: "Egypt is not just a country — it is one of the oldest continuous civilizations on Earth. For over 7,000 years, life in Egypt has centered on the Nile. Egyptian culture blends ancient Pharaonic heritage with deep Islamic tradition, Mediterranean influence, and a uniquely Egyptian sense of humor and warmth. Egyptians call their country 'Umm al-Dunya' — Mother of the World.",
        cultureFacts: [
            { icon: "🔺", title: "The Pyramids", desc: "The Great Pyramid of Giza is the only one of the Seven Wonders of the Ancient World still standing — built over 4,500 years ago." },
            { icon: "🌊", title: "The Nile", desc: "The Nile is the world's longest river. For thousands of years, its annual flood deposited rich soil that made Egypt the breadbasket of the ancient world." },
            { icon: "📜", title: "Hieroglyphics", desc: "Ancient Egyptians developed one of the first writing systems — over 700 symbols used for 3,500 years until the Arab conquest." },
            { icon: "🎭", title: "Eid Celebrations", desc: "Egyptian Eid celebrations are famous across the Arab world — streets fill with music, lights, and special sweets like kahk and basbousa." }
        ],
        foodTitle: "Egyptian Food — 7,000 Years on the Table",
        foodIntro: "Egyptian cuisine is one of the oldest in the world — some dishes eaten today were eaten by the Pharaohs. Food in Egypt is generous, communal, and always accompanied by bread. The Egyptian table is never empty.",
        dishes: [
            {
                emoji: "🫓",
                name: "Koshari",
                subtitle: "Egypt's street food crown",
                story: "Koshari is a miracle of culinary history — Italian pasta, Indian lentils, Egyptian rice, Arab chickpeas, and a spicy tomato sauce all layered in one bowl. It was born in the 19th century when Egypt was a crossroads of cultures under Ottoman rule. Today it is sold from carts on every Egyptian street corner, eaten by presidents and schoolchildren alike. It is the most Egyptian thing that was never originally Egyptian.",
                ingredients: ["Egyptian rice", "Brown lentils", "Elbow macaroni", "Chickpeas (canned)", "Crispy fried onions", "Tomato sauce (garlic, cumin, chili, vinegar)", "Garlic vinegar sauce (dakka)", "Chili sauce"],
                steps: ["Cook lentils until just tender. Set aside.", "Cook rice with lentils together in broth.", "Cook macaroni separately until al dente.", "Make tomato sauce: fry garlic, add tomatoes, cumin, and chili. Simmer 20 minutes.", "Make crispy onions: fry thin onion slices in oil until golden.", "Layer in bowl: rice and lentils, then macaroni, then chickpeas.", "Top with tomato sauce, crispy onions, and a drizzle of vinegar sauce."]
            },
            {
                emoji: "🍲",
                name: "Molokhia",
                subtitle: "The dish of Pharaohs",
                story: "Molokhia — the jute plant — has been eaten in Egypt since the time of the Pharaohs. The name itself comes from 'mulukiyya' meaning 'royal.' According to legend, it was so beloved by a Fatimid Caliph that he banned common people from eating it to keep it only for himself. Today it is the most homesick dish for every Egyptian abroad — the smell of molokhia being cooked means you are home.",
                ingredients: ["Fresh or frozen molokhia leaves", "Chicken or rabbit (for broth)", "Garlic (generous amount)", "Ground coriander", "Ghee or butter", "Chicken broth", "Lemon juice", "Egyptian bread"],
                steps: ["Boil chicken to make a rich broth. Season with salt and spices.", "Remove chicken. Keep broth hot.", "Chop molokhia finely or use frozen chopped leaves.", "Fry crushed garlic with coriander in ghee until golden — this is 'ta'leyya'.", "Add hot broth to molokhia and stir.", "Pour in the hot garlic immediately — you will hear a sizzle.", "Serve over rice with chicken on the side and lemon wedges."]
            }
        ],
        communityTitle: "What Egyptians want the world to know",
        communityDesc: "Egypt has the most stories on Cultura. Real voices, real memories, real culture — shared by Egyptians from Cairo to Aswan.",
        didYouKnow: "The ancient Egyptians invented many things we use today — paper (papyrus), the 365-day calendar, toothpaste, locks and keys, and even breath mints made from cinnamon, frankincense, and myrrh.",
        quickFacts: [
            { label: "Capital", value: "Cairo" },
            { label: "Population", value: "105 million" },
            { label: "Language", value: "Arabic" },
            { label: "Currency", value: "Egyptian Pound" },
            { label: "Religion", value: "Islam (mainly), Christianity" },
            { label: "Famous for", value: "Pyramids, Nile, ancient history" }
        ],
        defaultStories: [
            { name: "Amira Hassan", city: "Cairo", avatar: "🇪🇬", avatarBg: "linear-gradient(135deg, #d4a843, #7a3a0f)", text: "In Egypt, hospitality is not a choice — it is an obligation. If someone visits your home and leaves hungry, the whole family feels shame. We always cook for ten even when expecting three." },
            { name: "Mohamed Farouk", city: "Alexandria", avatar: "🇪🇬", avatarBg: "linear-gradient(135deg, #d4a843, #7a3a0f)", text: "Koshari has no single origin — it was created by Egypt's chaos and creativity. That is the most Egyptian thing about it." }
        ],
        exploreMore: ["morocco", "turkey", "india"]
    },

    india: {
        name: "India",
        flag: "🇮🇳",
        region: "South Asia",
        color1: "#ff9933",
        color2: "#138808",
        video: "bBRIdii2jGg",
        recipes: 10,
        stories: 38,
        facts: 14,
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7560000!2d78.9629!3d20.5937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2seg!4v1700000000000",
        cultureTitle: "Diversity, Spirituality & Ancient Wisdom",
        cultureText: "India is not one culture — it is 28 states, over 1600 languages, and thousands of years of civilization layered on top of each other. The concept of 'Atithi Devo Bhava' — the guest is God — shapes how every visitor is treated. From the Himalayas to the Kerala backwaters, from Rajasthan's palaces to Mumbai's streets, India overwhelms every sense simultaneously.",
        cultureFacts: [
            { icon: "🪔", title: "Diwali", desc: "The Festival of Lights lasts five days. Families clean their homes, light oil lamps, exchange sweets, and celebrate the victory of light over darkness." },
            { icon: "🧘", title: "Yoga & Meditation", desc: "Yoga originated in India over 5,000 years ago. It is not exercise — it is a complete philosophy for living." },
            { icon: "🎨", title: "Rangoli", desc: "Colorful floor patterns made from colored powder, flowers, and rice are created at the entrance of homes to welcome guests and deities." },
            { icon: "🐄", title: "Sacred Cows", desc: "Cows are considered sacred in Hinduism and roam freely in many Indian cities. They represent abundance and non-violence." }
        ],
        foodTitle: "India's Incredible Food Universe",
        foodIntro: "Indian food varies so dramatically by region that the cuisine of Kerala shares almost nothing with the food of Punjab. The common thread is spice — not just chili heat, but the complex layering of turmeric, cardamom, cumin, and dozens of other aromatics that build depth and meaning in every dish.",
        dishes: [
            {
                emoji: "🍛",
                name: "Biryani",
                subtitle: "A royal dish with a thousand versions",
                story: "Biryani was brought to India by Persian and Mughal traders along the Silk Road. The word comes from Persian 'birian' meaning fried before cooking. Each Indian city has its own jealously guarded biryani style — Hyderabadi with its dum slow-cooking, Lucknowi with its delicate fragrance, Kolkata's slightly sweet version. Biryani wars between cities are taken completely seriously.",
                ingredients: ["Basmati rice", "Chicken or lamb", "Yogurt, onions", "Ghee", "Whole spices: cardamom, cloves, cinnamon, bay leaf", "Saffron soaked in warm milk", "Fresh mint and cilantro", "Fried onions (birista)"],
                steps: ["Marinate meat in yogurt, ginger-garlic paste, and spices for 2 hours.", "Fry sliced onions until deep golden brown. Set aside.", "Half-cook basmati rice with whole spices. Drain.", "Layer: meat at the bottom, half the rice, mint, fried onions.", "Add saffron milk. Top with remaining rice.", "Seal pot with dough or foil. Cook on dum (very low heat) 45 minutes.", "Open at the table for the full fragrant reveal."]
            },
            {
                emoji: "🥘",
                name: "Dal Tadka",
                subtitle: "The humble soul of Indian cooking",
                story: "Dal is eaten by a billion people every day in India — from the poorest villages to the finest homes. It is the great equalizer of Indian food. The magic is in the tadka — hot ghee poured over spices (mustard seeds, dried chili, curry leaves) that explodes in your face with aroma when it hits the lentils. Every home has its own tadka. Every grandmother's version is the best one.",
                ingredients: ["Red or yellow lentils (dal)", "Tomatoes, onions, garlic, ginger", "Turmeric, cumin, coriander powder", "Ghee", "Mustard seeds", "Dried red chilies", "Curry leaves", "Fresh lemon juice"],
                steps: ["Boil lentils with turmeric until completely soft and mushy.", "Fry onions until golden, add ginger-garlic paste.", "Add tomatoes and all ground spices. Cook until oil separates.", "Mix this masala into the lentils. Simmer 10 minutes.", "Make tadka: heat ghee, add mustard seeds until they pop.", "Add dried chili and curry leaves — they will sizzle loudly.", "Pour hot tadka over dal. Serve with rice or bread."]
            }
        ],
        communityTitle: "India through Indian eyes",
        communityDesc: "Stories from people across India's many states — the traditions, rituals, and daily moments that define life here.",
        didYouKnow: "India invented the number zero. The mathematician Brahmagupta formalized the concept and rules for using zero in the 7th century AD — a discovery that made all modern mathematics and computing possible.",
        quickFacts: [
            { label: "Capital", value: "New Delhi" },
            { label: "Population", value: "1.4 billion" },
            { label: "Languages", value: "22 official languages" },
            { label: "Currency", value: "Indian Rupee" },
            { label: "Religion", value: "Hindu, Muslim, Sikh, Christian" },
            { label: "Famous for", value: "Spices, yoga, ancient civilization" }
        ],
        defaultStories: [
            { name: "Priya Nair", city: "Kerala", avatar: "🇮🇳", avatarBg: "linear-gradient(135deg, #ff9933, #138808)", text: "In Kerala, sadya — the banana leaf feast — is not a meal. It is a statement. 28 dishes on one leaf, and you eat with your right hand. The left hand is never used at the table. Every dish has a position on the leaf that has not changed in 500 years." },
            { name: "Arjun Sharma", city: "Jaipur", avatar: "🇮🇳", avatarBg: "linear-gradient(135deg, #ff9933, #138808)", text: "Atithi Devo Bhava — the guest is God. This is not a saying in India, it is a way of life. You will never leave an Indian home without being fed, even if they had nothing." }
        ],
        exploreMore: ["japan", "egypt", "turkey"]
    },

    mexico: {
        name: "Mexico",
        flag: "🇲🇽",
        region: "North America",
        color1: "#006847",
        color2: "#ce1126",
        video: "MvG6NeANb5Q",
        recipes: 9,
        stories: 27,
        facts: 9,
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7860000!2d-102.5528!3d23.6345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b671e29!2sMexico!5e0!3m2!1sen!2seg!4v1700000000000",
        cultureTitle: "Ancient Roots & Vibrant Traditions",
        cultureText: "Mexico is the meeting point of ancient Mesoamerican civilizations and Spanish colonial history. The Aztec, Maya, and Zapotec cultures laid the foundation — their calendar, their architecture, their food, and their gods all live on in modern Mexican identity. Mexican culture is loud, colorful, deeply family-oriented, and profoundly connected to the dead.",
        cultureFacts: [
            { icon: "💀", title: "Día de Muertos", desc: "The Day of the Dead is not a sad holiday — it is a joyful reunion with deceased loved ones. Families build altars, bring food, and spend the night at the cemetery." },
            { icon: "🎨", title: "Frida Kahlo", desc: "Frida Kahlo is Mexico's most iconic artist. Her paintings of pain, identity, and Mexican culture made her a global symbol of strength." },
            { icon: "🏛️", title: "Ancient Pyramids", desc: "Chichen Itza's pyramid is aligned so perfectly that on the spring equinox, a serpent shadow slithers down its steps at sunset." },
            { icon: "🌽", title: "Corn is Sacred", desc: "The Maya believed humans were made from corn. Maize has been cultivated in Mexico for over 9,000 years and is still the foundation of every meal." }
        ],
        foodTitle: "Mexican Food is a UNESCO Heritage",
        foodIntro: "Mexican cuisine is one of only two in the world recognized by UNESCO as an Intangible Cultural Heritage of Humanity. It is built on three pillars — corn, beans, and chili — and enriched by chocolate, vanilla, avocado, and tomato, all of which Mexico gave to the world.",
        dishes: [
            {
                emoji: "🌮",
                name: "Tacos al Pastor",
                subtitle: "The Lebanese-Mexican food miracle",
                story: "Tacos al pastor were invented by Lebanese immigrants who came to Mexico in the early 20th century. They brought their shawarma technique — vertical spit-roasting — and swapped lamb for pork, added dried chilies and pineapple, and created something entirely new. The taquero skills of slicing meat from a spinning trompo while catching it on a tortilla with a piece of pineapple is considered a high art form in Mexico City.",
                ingredients: ["Pork shoulder", "Dried guajillo and ancho chilies", "Pineapple", "Achiote paste", "Garlic, onion, oregano", "White corn tortillas", "Cilantro, white onion (for serving)", "Salsa verde or roja"],
                steps: ["Toast dried chilies, soak in hot water 20 minutes. Blend smooth.", "Add achiote paste, garlic, pineapple juice, and oregano. Blend.", "Marinate sliced pork in this mixture for at least 4 hours.", "Layer pork on a vertical spit or bake in oven at 200°C for 90 minutes.", "Warm corn tortillas on a hot comal until slightly charred.", "Slice or chop meat. Place on tortillas.", "Top with cilantro, white onion, pineapple chunks, and salsa."]
            },
            {
                emoji: "🫔",
                name: "Mole Poblano",
                subtitle: "The most complex sauce in the world",
                story: "Mole is not a sauce — it is a ceremony. The most famous mole poblano contains over 30 ingredients including multiple types of chili, chocolate, pumpkin seeds, tomatoes, raisins, and spices, ground and cooked for hours. Legend says it was invented by a nun in Puebla who, panicking when the Archbishop arrived unexpectedly, threw everything in the convent into a pot. The Archbishop wept with joy at the first taste.",
                ingredients: ["Mulato, ancho, pasilla, chipotle chilies", "Mexican chocolate (dark)", "Tomatoes, tomatillos", "Plantain, raisins", "Pumpkin seeds, sesame seeds", "Peanuts, almonds", "Cinnamon, cumin, cloves", "Turkey or chicken pieces"],
                steps: ["Toast and soak all dried chilies. Blend smooth.", "Fry tomatoes, tomatillos, and onions until charred.", "Toast all nuts and seeds separately until golden.", "Blend everything together in batches until very smooth.", "Fry the blended mole in hot oil, stirring constantly.", "Add broth gradually, simmer 45 minutes until thick.", "Break in the chocolate and stir until melted. Serve over turkey."]
            }
        ],
        communityTitle: "Mexico through Mexican voices",
        communityDesc: "From Mexico City apartments to Oaxacan villages — real stories that show the soul of Mexican culture.",
        didYouKnow: "Mexico is the birthplace of chocolate. The Aztecs used cacao beans as currency and drank chocolate as a bitter, spicy liquid mixed with chili and water — they would not recognize the sweet bar we eat today.",
        quickFacts: [
            { label: "Capital", value: "Mexico City" },
            { label: "Population", value: "130 million" },
            { label: "Language", value: "Spanish" },
            { label: "Currency", value: "Mexican Peso" },
            { label: "Religion", value: "Mainly Catholic" },
            { label: "Famous for", value: "Ancient ruins, tacos, Día de Muertos" }
        ],
        defaultStories: [
            { name: "Gabriela Torres", city: "Oaxaca", avatar: "🇲🇽", avatarBg: "linear-gradient(135deg, #006847, #ce1126)", text: "Día de Muertos is not about death — it is about love. We laugh at the cemetery. We bring my grandfather his favorite mezcal. Death in Mexico is just another part of the conversation." },
            { name: "Rodrigo Mendez", city: "Mexico City", avatar: "🇲🇽", avatarBg: "linear-gradient(135deg, #006847, #ce1126)", text: "Every Mexican family has a secret mole recipe. My great-grandmother's takes three days to make and uses 34 ingredients. She only taught it to my mother, who only taught it to my sister. It is more protected than any bank account." }
        ],
        exploreMore: ["brazil", "peru", "italy"]
    },

    italy: {
        name: "Italy",
        flag: "🇮🇹",
        region: "Southern Europe",
        color1: "#009246",
        color2: "#ce2b37",
        video: "pF8wRICy2Ug",
        recipes: 11,
        stories: 29,
        facts: 10,
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5860000!2d12.5674!3d41.8719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d4fe8311498637%3A0x6e2386df1fc27d7!2sItaly!5e0!3m2!1sen!2seg!4v1700000000000",
        cultureTitle: "Art, Beauty & the Art of Living",
        cultureText: "Italy invented the concept of 'la dolce vita' — the sweet life. For Italians, food is not fuel, coffee is not caffeine, and a meal is not just eating — it is an event. Italy gave the world the Renaissance, opera, espresso, Ferrari, and pizza. But the greatest Italian invention might be their ability to turn every ordinary moment into something beautiful.",
        cultureFacts: [
            { icon: "☕", title: "Coffee Culture", desc: "Cappuccino after 11am is considered a social crime. Italians stand at the bar counter to drink espresso — sitting costs more." },
            { icon: "🎭", title: "Opera", desc: "Italy gave the world opera — Verdi, Puccini, and Rossini created music that still fills the world's great concert halls." },
            { icon: "🏛️", title: "Ancient Rome", desc: "Italy has the most UNESCO World Heritage Sites in the world — 58 sites including the Colosseum, Venice, and the Amalfi Coast." },
            { icon: "👨‍👩‍👧‍👦", title: "Family First", desc: "Sunday lunch with the whole family is still sacred in Italy. Nothing is scheduled on Sunday until after the family meal is finished." }
        ],
        foodTitle: "Italian Food is a Religion",
        foodIntro: "Italian food rules are not suggestions — they are sacred laws enforced by grandmothers. Never put cream in carbonara. Never break spaghetti before cooking. Never serve pasta as a side dish. These rules exist because Italian food has been perfected over centuries and does not need improvement.",
        dishes: [
            {
                emoji: "🍝",
                name: "Cacio e Pepe",
                subtitle: "Only 3 ingredients. Infinitely difficult.",
                story: "Cacio e Pepe is Rome's most iconic pasta — made with only pasta, Pecorino Romano cheese, and black pepper. No cream, no butter, no garlic. The technique is everything: the cheese must be grated ultra-fine, the pasta water must be starchy, and the mixing must happen off the heat to create a silky sauce and not scrambled eggs. Roman chefs say it takes years to master. Three ingredients, infinite respect.",
                ingredients: ["Spaghetti or tonnarelli pasta", "Pecorino Romano cheese (finely grated)", "Parmesan cheese (optional)", "Black pepper (freshly cracked)", "Pasta cooking water (very starchy)", "Salt for boiling water"],
                steps: ["Bring water to boil with less salt than usual — the cheese is very salty.", "Toast cracked black pepper in a dry pan for 2 minutes. Set aside.", "Cook pasta until just before al dente. Reserve 2 cups pasta water.", "Add starchy pasta water to the pepper pan.", "Add pasta. Toss vigorously.", "Remove from heat. Add grated Pecorino gradually while tossing.", "Add pasta water little by little until sauce is creamy. Never clumpy."]
            },
            {
                emoji: "🍕",
                name: "Pizza Napoletana",
                subtitle: "The original — protected by Italian law",
                story: "Neapolitan pizza is so important to Italian culture that it has its own EU protection status. The rules are strict: San Marzano tomatoes, Fior di Latte or Mozzarella di Bufala, double-zero flour, and a wood-fired oven at 485°C for exactly 60-90 seconds. The result is a soft, slightly charred, perfectly chewy crust that has never been improved upon. Pizza Margherita was named after Queen Margherita of Savoy in 1889 — its colors match the Italian flag.",
                ingredients: ["'00' flour", "Fresh yeast or sourdough starter", "Salt, water", "San Marzano tomatoes (crushed by hand)", "Fresh mozzarella or buffalo mozzarella", "Fresh basil", "Extra virgin olive oil"],
                steps: ["Mix flour, yeast, salt, and water. Knead 10 minutes until smooth.", "Let dough rise for 8-24 hours in the fridge.", "Stretch dough by hand — never use a rolling pin.", "Crush San Marzano tomatoes by hand. Season with salt only.", "Spread sauce, leaving 2cm border. Add torn mozzarella.", "Bake at the highest oven temperature possible for 8-12 minutes.", "Add fresh basil and olive oil immediately after baking."]
            }
        ],
        communityTitle: "Stories from Italy",
        communityDesc: "Italians share the rules, traditions, and beautiful contradictions of living in the world's most passionate food culture.",
        didYouKnow: "Italy is shaped like a boot and has been kicking since 753 BC. The Roman Empire, at its height, controlled 5 million square kilometers and 70 million people — roughly 21% of the world's population at the time.",
        quickFacts: [
            { label: "Capital", value: "Rome" },
            { label: "Population", value: "60 million" },
            { label: "Language", value: "Italian" },
            { label: "Currency", value: "Euro" },
            { label: "Religion", value: "Catholic" },
            { label: "Famous for", value: "Art, food, fashion, history" }
        ],
        defaultStories: [
            { name: "Giulia Rossi", city: "Naples", avatar: "🇮🇹", avatarBg: "linear-gradient(135deg, #009246, #ce2b37)", text: "In Naples, pizza is not a meal — it is a birthright. We eat it folded in half, standing in a tiny shop. Anyone who eats pizza with a fork and knife in Naples will be stared at." },
            { name: "Marco Ferrari", city: "Rome", avatar: "🇮🇹", avatarBg: "linear-gradient(135deg, #009246, #ce2b37)", text: "My grandmother cries if you put cream in carbonara. She says it is not crying — it is mourning. For her, carbonara with cream is not a different recipe. It is an insult." }
        ],
        exploreMore: ["france", "morocco", "egypt"]
    },

    korea: {
        name: "South Korea",
        flag: "🇰🇷",
        region: "East Asia",
        color1: "#003478",
        color2: "#cd2e3a",
        video: "0H2UGoZbvCA",
        recipes: 7,
        stories: 22,
        facts: 8,
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4860000!2d127.7669!3d35.9078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b09a7aea1e9bb%3A0x3375fc2f0e8e4bf9!2sSouth%20Korea!5e0!3m2!1sen!2seg!4v1700000000000",
        cultureTitle: "Tradition Meets Hypermodernity",
        cultureText: "South Korea is one of the most fascinating cultural contradictions in the world — ancient Confucian values of respect, hierarchy, and collective harmony coexist with one of the planet's most wired, fast-paced, technologically advanced societies. The same country that practices 600-year-old tea ceremonies also invented the world's fastest internet and K-Pop.",
        cultureFacts: [
            { icon: "🌸", title: "Hanbok", desc: "The traditional Korean dress is worn during major holidays. Its vibrant colors represent nature — blue for water, red for fire, yellow for earth." },
            { icon: "🎵", title: "K-Pop", desc: "K-Pop is a global industry that earns South Korea billions yearly. BTS sold out stadiums in 2 minutes. The government has a Minister of K-Pop." },
            { icon: "🏯", title: "Confucian Respect", desc: "Koreans use different verb forms when speaking to elders. You cannot speak casually to someone older — even by one year." },
            { icon: "🛁", title: "Jjimjilbang", desc: "Korean public bathhouses are cultural institutions — families spend entire days there, eating eggs, watching TV, and sleeping in communal rooms." }
        ],
        foodTitle: "Korean Food: Fermented, Spicy, Shared",
        foodIntro: "Korean food is built on fermentation — kimchi alone has hundreds of varieties. Every meal comes with banchan (small side dishes) that are refilled for free. Eating alone in Korea is culturally strange — food is meant to be shared, loudly.",
        dishes: [
            {
                emoji: "🥢",
                name: "Kimchi",
                subtitle: "Korea's national food — fermented culture",
                story: "Kimchi is not just food — it is Korean identity in a jar. Every November, families gather for kimjang — the ritual of making hundreds of kimchi jars together before winter. This tradition is so important it was inscribed on UNESCO's Intangible Cultural Heritage list. There are over 200 varieties of kimchi. The oldest recipe dates to the 7th century. Every Korean grandmother's kimchi is different, and every Korean believes their grandmother's is the best.",
                ingredients: ["Napa cabbage", "Korean red pepper flakes (gochugaru)", "Garlic, fresh ginger", "Salted shrimp or fish sauce", "Green onions, radish", "Sugar", "Salt for salting the cabbage"],
                steps: ["Cut cabbage into quarters. Rub generously with salt. Wait 2 hours.", "Rinse salt off cabbage. Squeeze out all water tightly.", "Mix gochugaru, garlic, ginger, fish sauce, and sugar into paste.", "Add green onions and radish to the paste.", "Wear gloves. Rub paste into every leaf of cabbage.", "Pack tightly into glass jars. Leave 3cm of space at the top.", "Ferment at room temperature 1-5 days, then refrigerate."]
            },
            {
                emoji: "🍲",
                name: "Bibimbap",
                subtitle: "Everything in one bowl, mixed with intention",
                story: "Bibimbap means 'mixed rice' but it is really a philosophy — each ingredient keeps its own color, flavor, and identity, but when mixed together they become one harmonious thing. It originated as a royal court dish where the king's leftover side dishes were mixed together. Today it is one of the most recognizable Korean dishes globally, and airlines always run out of the bibimbap option first.",
                ingredients: ["Steamed white rice", "Beef mince or mushrooms", "Spinach, bean sprouts, carrots", "Zucchini, shiitake mushrooms", "Fried egg (sunny side up)", "Gochujang (Korean chili paste)", "Sesame oil", "Soy sauce, garlic"],
                steps: ["Cook each vegetable separately with garlic, sesame oil, and soy sauce.", "Season beef mince with soy sauce, garlic, and sesame oil. Cook until done.", "Place hot rice in a stone bowl if available (dolsot).", "Arrange vegetables and beef in sections on top of rice.", "Place a fried egg in the center.", "Add a spoon of gochujang on top.", "At the table, mix everything together vigorously with a spoon."]
            }
        ],
        communityTitle: "Korea through Korean eyes",
        communityDesc: "Stories from Koreans about the beauty, the pressure, and the warmth of Korean culture.",
        didYouKnow: "South Korea has the world's fastest average internet speed. The country is so connected that 'PC bangs' — internet cafés open 24 hours — are a core part of youth culture, where people play games, eat ramen, and socialize overnight.",
        quickFacts: [
            { label: "Capital", value: "Seoul" },
            { label: "Population", value: "52 million" },
            { label: "Language", value: "Korean" },
            { label: "Currency", value: "South Korean Won" },
            { label: "Religion", value: "Buddhism, Christianity" },
            { label: "Famous for", value: "K-Pop, technology, kimchi" }
        ],
        defaultStories: [
            { name: "Jisoo Park", city: "Seoul", avatar: "🇰🇷", avatarBg: "linear-gradient(135deg, #003478, #cd2e3a)", text: "In Korea, age matters in every conversation. When I meet someone new, the first question after names is always: 'How old are you?' It determines whether I use formal or informal speech. It is not rude — it is how we know how to respect each other." },
            { name: "Hyun Kim", city: "Busan", avatar: "🇰🇷", avatarBg: "linear-gradient(135deg, #003478, #cd2e3a)", text: "Kimjang is the day our whole family comes together to make kimchi for winter. My grandmother directs everyone. It takes all day. We eat together at the end. It is the most important day of the year." }
        ],
        exploreMore: ["japan", "india", "italy"]
    },

    nigeria: {
        name: "Nigeria",
        flag: "🇳🇬",
        region: "West Africa",
        color1: "#008751",
        color2: "#1a1a1a",
        video: "tSdYTqPVzAc",
        recipes: 6,
        stories: 19,
        facts: 8,
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5160000!2d8.6753!3d9.082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6b2a2a33fcb97%3A0x60b8a6d5cbb8c8e!2sNigeria!5e0!3m2!1sen!2seg!4v1700000000000",
        cultureTitle: "500 Languages, One Spirit",
        cultureText: "Nigeria is the most populous country in Africa and one of the most culturally diverse in the world. Over 250 ethnic groups, 500 languages, and a creative energy that has produced Afrobeat, Nollywood, and some of Africa's greatest literature. Nigerians call their country 'the Giant of Africa' — and when you experience its culture, you understand why.",
        cultureFacts: [
            { icon: "🎵", title: "Afrobeat", desc: "Fela Kuti invented Afrobeat in Lagos in the 1970s — a fusion of jazz, funk, and Yoruba music that became a global movement. Burna Boy and Wizkid carry it forward today." },
            { icon: "🎬", title: "Nollywood", desc: "Nigeria's film industry is the second largest in the world by volume — producing over 2,500 movies per year, more than Hollywood." },
            { icon: "🎭", title: "Festivals", desc: "The Osun-Osogbo festival in Osun State is a 2,000-year-old river goddess celebration that draws thousands from across the world every August." },
            { icon: "👗", title: "Ankara Fabric", desc: "The colorful wax print fabric worn across Africa was actually invented in the Netherlands — but Nigeria made it its own cultural identity." }
        ],
        foodTitle: "Nigerian Food is Unapologetically Bold",
        foodIntro: "Nigerian food does not whisper. It shouts with palm oil, crayfish, scotch bonnet peppers, and fermented locust beans. Every pot on a Nigerian stove smells like a celebration. The food varies dramatically between the Yoruba south, the Hausa north, and the Igbo east — but richness and generosity are constant everywhere.",
        dishes: [
            {
                emoji: "🍲",
                name: "Jollof Rice",
                subtitle: "West Africa's most contested dish",
                story: "The Jollof Wars between Nigeria, Ghana, and Senegal are fought online and in person with complete seriousness. Nigerian Jollof is party Jollof — made in large pots over firewood at celebrations, where the slight smokiness from the fire is considered the highest quality. The secret is the tomato base and the patience to let the rice steam until each grain is separate and deeply flavored. Whoever makes the best Jollof at a party gains status.",
                ingredients: ["Long grain parboiled rice", "Canned tomatoes, red bell peppers, scotch bonnet", "Chicken or beef stock", "Onions, garlic, ginger", "Tomato paste", "Bay leaves, thyme, curry powder", "Palm oil or vegetable oil", "Chicken pieces (for serving)"],
                steps: ["Blend tomatoes, peppers, and half the onions. Set aside.", "Fry remaining onions in oil until golden.", "Add tomato paste and fry for 5 minutes until darkened.", "Add blended tomato mixture. Fry for 30 minutes until oil rises to top.", "Add stock, spices, and washed rice. Stir well.", "Cover tightly. Cook on medium heat 20 minutes without lifting the lid.", "Reduce heat very low. Steam 15 more minutes for the smoky base."]
            },
            {
                emoji: "🍜",
                name: "Egusi Soup",
                subtitle: "The soul of Nigerian cooking",
                story: "Egusi is ground melon seeds — creamy, nutty, and deeply savory when fried in palm oil. Every Nigerian mother has her own egusi technique: some fry it dry first, others drop it in wet. The soup is finished with bitter leaf, crayfish, and stockfish that has been soaking since yesterday. Eaten with pounded yam, eba, or fufu, egusi soup is what every Nigerian craves when they are far from home.",
                ingredients: ["Egusi (ground melon seeds)", "Palm oil", "Assorted meat (beef, goat, tripe)", "Stockfish and dried shrimp", "Ground crayfish", "Bitter leaf or spinach", "Scotch bonnet pepper", "Onions, seasoning cubes"],
                steps: ["Boil assorted meat with onions and seasoning until tender.", "Heat palm oil in a pot. Fry sliced onions.", "Mix egusi with water into a paste. Add to hot oil.", "Fry egusi for 15 minutes, stirring, until golden and fragrant.", "Add cooked meat and its stock. Stir together.", "Add ground crayfish, pepper, and stockfish.", "Add washed bitter leaf. Simmer 10 minutes. Adjust seasoning."]
            }
        ],
        communityTitle: "Nigeria through Nigerian voices",
        communityDesc: "Stories from across Nigeria — from Lagos hustle to northern traditions to southern village life.",
        didYouKnow: "Nigeria is home to Nok Terracotta sculptures dating to 1500 BC — some of the oldest human figurative sculptures in Sub-Saharan Africa, showing a sophisticated civilization that thrived 3,500 years ago.",
        quickFacts: [
            { label: "Capital", value: "Abuja" },
            { label: "Population", value: "220 million" },
            { label: "Languages", value: "500+ (English official)" },
            { label: "Currency", value: "Nigerian Naira" },
            { label: "Religion", value: "Islam, Christianity" },
            { label: "Famous for", value: "Afrobeat, Nollywood, Jollof rice" }
        ],
        defaultStories: [
            { name: "Chidi Okafor", city: "Lagos", avatar: "🇳🇬", avatarBg: "linear-gradient(135deg, #008751, #fedf00)", text: "In Nigeria, we greet loudly. We hug people we just met. We argue about Jollof rice with total strangers. Energy is not just something we have — it is who we are." },
            { name: "Amaka Eze", city: "Enugu", avatar: "🇳🇬", avatarBg: "linear-gradient(135deg, #008751, #fedf00)", text: "My mother's egusi soup recipe is not written anywhere. It lives in her hands. I watch her every time she cooks it and I still cannot make it taste the same." }
        ],
        exploreMore: ["morocco", "egypt", "brazil"]
    },

    turkey: {
        name: "Turkey",
        flag: "🇹🇷",
        region: "Middle East / Europe",
        color1: "#e30a17",
        color2: "#1a1a2e",
        video: "hdZ6oDqzyvs",
        recipes: 8,
        stories: 21,
        facts: 9,
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5860000!2d35.2433!3d38.9637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b8b2f8c95f9dcd%3A0x32e3d5af81e74bdc!2sTurkey!5e0!3m2!1sen!2seg!4v1700000000000",
        cultureTitle: "The Bridge Between Worlds",
        cultureText: "Turkey is the only country that sits on two continents — Europe and Asia — and its culture reflects both. Istanbul was once Constantinople, capital of three great empires: Roman, Byzantine, and Ottoman. Turkish culture is a layering of all these histories, expressed through its architecture, its bazaars, its music, and most of all its food and coffee.",
        cultureFacts: [
            { icon: "☕", title: "Turkish Coffee", desc: "Turkish coffee is brewed unfiltered. After drinking, the cup is turned upside down and the grounds are read to tell fortunes — a tradition called tasseography." },
            { icon: "🕌", title: "Hagia Sophia", desc: "Built in 537 AD, Hagia Sophia was the world's largest cathedral for nearly 1,000 years. It then became a mosque, then a museum, and is now a mosque again." },
            { icon: "🛁", title: "Hammam", desc: "The Turkish bath tradition is 600 years old. Hammams were social centers where deals were made, gossip was shared, and brides were prepared for their weddings." },
            { icon: "💃", title: "Whirling Dervishes", desc: "The Sufi spinning meditation — Sema — was created by the poet Rumi in the 13th century. Dervishes spin for hours as a form of prayer to reach God." }
        ],
        foodTitle: "Ottoman Heritage on Every Plate",
        foodIntro: "Turkish cuisine is one of the world's great culinary traditions — a legacy of the Ottoman Empire that ruled three continents and absorbed food cultures from the Balkans to North Africa to the Middle East. Turkish cooking is built on patience, layers of flavor, and the concept that food is an expression of love.",
        dishes: [
            {
                emoji: "🥙",
                name: "Doner Kebab",
                subtitle: "Turkey's gift to the whole world",
                story: "The doner kebab changed the world. Invented in 19th century Istanbul, it traveled to Germany with Turkish workers in the 1970s where it became a completely new food — the Döner — now Germany's most popular fast food. The original Turkish doner is nothing like the German version: it is served on a plate with rice, grilled vegetables, and yogurt sauce, eaten slowly at a table, never in bread while walking.",
                ingredients: ["Lamb or beef (thinly sliced)", "Onion, yogurt, olive oil", "Cumin, paprika, oregano, black pepper", "Tomatoes, green peppers", "Flatbread or rice for serving", "Yogurt-garlic sauce", "Tomato paste sauce"],
                steps: ["Marinate meat in yogurt, onion juice, and all spices for 4 hours.", "Stack meat slices tightly on a vertical skewer.", "Roast in oven at 220°C for 90 minutes, turning every 30 minutes.", "Slice thin layers off the outside as they become crispy.", "Grill tomatoes and peppers alongside the meat.", "Serve on flatbread or rice with both sauces and a fresh salad."]
            },
            {
                emoji: "🍮",
                name: "Baklava",
                subtitle: "The sweetest legacy of the Ottoman Empire",
                story: "Baklava is the most famous dessert of the Ottoman Empire — so important that on the 15th day of Ramadan, the Sultan would parade through Istanbul with trays of baklava for the Janissary soldiers, a ceremony called the Baklava Procession. The city of Gaziantep in southeastern Turkey holds a protected geographical indication for its pistachio baklava — like how Champagne is only from Champagne. Turkish bakers say the secret is in the clarified butter and the paper-thin yufka dough.",
                ingredients: ["Phyllo dough (yufka)", "Clarified butter (lots)", "Pistachios or walnuts (finely chopped)", "Sugar, water, lemon juice (for syrup)", "Rose water or orange blossom water (optional)"],
                steps: ["Make syrup: boil sugar and water 10 minutes, add lemon juice. Cool completely.", "Brush every sheet of phyllo generously with clarified butter.", "Layer 10 sheets in the pan, butter each one.", "Spread thin layer of nuts. Add more phyllo sheets.", "Continue layering. Finish with 10 sheets on top.", "Cut into diamonds before baking. Bake at 180°C for 45 minutes until golden.", "Pour cold syrup over hot baklava immediately. Wait 4 hours before serving."]
            }
        ],
        communityTitle: "Turkey through Turkish voices",
        communityDesc: "Stories from Istanbul to Anatolia — the traditions and moments that make Turkish culture so deeply human.",
        didYouKnow: "Turkey is the world's largest producer of hazelnuts — responsible for 75% of the global supply. The hazelnut in your Nutella jar almost certainly grew in Turkey's Black Sea coast.",
        quickFacts: [
            { label: "Capital", value: "Ankara" },
            { label: "Population", value: "85 million" },
            { label: "Language", value: "Turkish" },
            { label: "Currency", value: "Turkish Lira" },
            { label: "Religion", value: "Islam (majority)" },
            { label: "Famous for", value: "Istanbul, kebab, baklava, hammam" }
        ],
        defaultStories: [
            { name: "Elif Demir", city: "Istanbul", avatar: "🇹🇷", avatarBg: "linear-gradient(135deg, #e30a17, #1a1a2e)", text: "Turkish tea is not optional. When you visit anyone — a shop, a home, an office — the first thing that happens is tea appears. Refusing tea is the only truly rude thing you can do in Turkey." },
            { name: "Mehmet Yilmaz", city: "Gaziantep", avatar: "🇹🇷", avatarBg: "linear-gradient(135deg, #e30a17, #1a1a2e)", text: "In Gaziantep, we say our baklava is not a dessert — it is an art form. We have bakers whose only job for 40 years has been to stretch the dough thinner than paper. That skill cannot be taught from a recipe." }
        ],
        exploreMore: ["egypt", "morocco", "india"]
    },

    france: {
        name: "France",
        flag: "🇫🇷",
        region: "Western Europe",
        color1: "#002395",
        color2: "#ed2939",
        video: "5sgYFwvJYs4",
        recipes: 9,
        stories: 25,
        facts: 9,
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5360000!2d2.2137!3d46.2276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e69d97f1b3bbc9%3A0x1adb39d3917e6701!2sFrance!5e0!3m2!1sen!2seg!4v1700000000000",
        cultureTitle: "Liberty, Art & the Joy of Eating Well",
        cultureText: "France has shaped Western civilization more than almost any other country — in philosophy, art, cuisine, fashion, and political thought. The French concept of 'savoir-vivre' — knowing how to live — is an entire philosophy built around pleasure, beauty, and taking the time to enjoy both. France is the most visited country in the world every year, and it does not need to advertise.",
        cultureFacts: [
            { icon: "🗼", title: "The Eiffel Tower", desc: "When it was built in 1889, Parisians hated it. They called it an eyesore. It was supposed to be temporary. Today it is the most visited paid monument in the world." },
            { icon: "🎨", title: "Art Capital", desc: "The Louvre is the world's most visited art museum. It would take 9 months to look at every piece for 30 seconds each." },
            { icon: "💄", title: "Fashion", desc: "Paris Fashion Week sets global trends twice a year. The concept of haute couture — high fashion — was entirely invented in France." },
            { icon: "🥖", title: "The Baguette", desc: "French law regulates what can be called a baguette: only flour, water, yeast, and salt. No preservatives. Baked fresh twice daily in over 33,000 boulangeries." }
        ],
        foodTitle: "French Cuisine — The World's Standard",
        foodIntro: "French cuisine was declared a UNESCO Intangible Cultural Heritage in 2010 — the first national cuisine to receive this honor. French cooking techniques — sautéing, braising, en papillote, flambéing — are the foundation of professional cooking schools worldwide. But at home, it is simpler: good butter, good wine, and taking the time to sit down together.",
        dishes: [
            {
                emoji: "🥐",
                name: "Croissant",
                subtitle: "Actually Austrian. Perfected by France.",
                story: "The croissant was invented in Vienna in the 13th century as a crescent-shaped bread to celebrate victory over the Ottoman siege. Austrian-born Marie Antoinette brought it to France. French bakers transformed it using laminated dough with hundreds of butter layers, creating the flaky, buttery masterpiece recognized worldwide. A proper French croissant has exactly 27 layers of butter. The test: when you squeeze it, it should crackle and shatter.",
                ingredients: ["Bread flour", "Butter (unsalted, very cold)", "Milk, sugar, salt", "Fresh yeast", "Extra butter for lamination (250g per batch)"],
                steps: ["Make dough with flour, yeast, milk, sugar, and salt. Rest overnight in fridge.", "Pound cold butter into a flat square between parchment paper.", "Encase butter block in the dough. Roll out into rectangle.", "Fold in thirds (like a letter). Chill 30 minutes. Repeat 6 times.", "Roll final dough into large rectangle. Cut into triangles.", "Roll each triangle from base to point. Curve into crescent shape.", "Egg wash and bake at 200°C for 18 minutes until deeply golden."]
            },
            {
                emoji: "🧅",
                name: "French Onion Soup",
                subtitle: "Peasant food that became Parisian luxury",
                story: "French onion soup was originally the food of the poor — cheap onions slowly cooked in whatever stock was available. It became famous as the midnight soup at Les Halles, Paris's old food market, where market workers would eat it at 4am after unloading trucks. Today it is served in the finest Parisian bistros. The secret is patience — onions must caramelize for a full hour until deeply sweet and mahogany brown.",
                ingredients: ["Yellow onions (many — they shrink a lot)", "Beef stock", "Dry white wine or cognac", "Butter, olive oil", "Fresh thyme, bay leaf", "Baguette slices", "Gruyère cheese (grated generously)", "Salt, black pepper"],
                steps: ["Slice onions very thinly. Cook in butter on low heat for 1 full hour.", "Stir every few minutes. They must turn deep caramel brown.", "Add wine or cognac. Cook until evaporated.", "Add beef stock, thyme, and bay leaf. Simmer 20 minutes.", "Season with salt and pepper.", "Pour into oven-safe bowls. Top with baguette slices.", "Cover with generous Gruyère. Broil until bubbly and golden brown."]
            }
        ],
        communityTitle: "La Vie Française",
        communityDesc: "Stories from the French about the beauty of slowing down, eating well, and the art of everyday life.",
        didYouKnow: "France has more Nobel Literature Prize winners than any other country in the world — 15 laureates. French is spoken on 5 continents by 300 million people, making it the 5th most spoken language on Earth.",
        quickFacts: [
            { label: "Capital", value: "Paris" },
            { label: "Population", value: "68 million" },
            { label: "Language", value: "French" },
            { label: "Currency", value: "Euro" },
            { label: "Religion", value: "Secular (mainly Catholic)" },
            { label: "Famous for", value: "Art, fashion, cuisine, philosophy" }
        ],
        defaultStories: [
            { name: "Camille Dupont", city: "Lyon", avatar: "🇫🇷", avatarBg: "linear-gradient(135deg, #002395, #ed2939)", text: "In France, lunch is two hours. Not because we are lazy — because we believe that eating well is one of the serious responsibilities of being human." },
            { name: "Antoine Moreau", city: "Paris", avatar: "🇫🇷", avatarBg: "linear-gradient(135deg, #002395, #ed2939)", text: "My baker knows my name. He knows I take two baguettes on weekdays and three on Sunday. This relationship with your baker, your butcher, your fromager — this is what makes a neighborhood a home." }
        ],
        exploreMore: ["italy", "morocco", "turkey"]
    },

    peru: {
        name: "Peru",
        flag: "🇵🇪",
        region: "South America",
        color1: "#d91023",
        color2: "#ffffff",
        video: "yP5Dvj76vpA",
        recipes: 6,
        stories: 15,
        facts: 7,
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7060000!2d-75.0152!3d-9.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f4a5b1ba05%3A0x4af172f9d3a83d33!2sPeru!5e0!3m2!1sen!2seg!4v1700000000000",
        cultureTitle: "The Inca Empire & Living Culture",
        cultureText: "Peru is home to one of the greatest empires the world has ever seen — the Inca, who built Machu Picchu without wheels, metal tools, or mortar. The Quechua people, descendants of the Inca, still live in the Andes and speak the same language. Peru's culture is a living conversation between its ancient past and its vibrant present — nowhere is this more visible than on its extraordinary plates.",
        cultureFacts: [
            { icon: "🏔️", title: "Machu Picchu", desc: "The Inca city built at 2,430 meters altitude was unknown to the outside world until 1911. Its stones fit so perfectly that you cannot slide a piece of paper between them." },
            { icon: "🌽", title: "Biodiversity", desc: "Peru is home to over 3,000 varieties of potato and 55 varieties of corn in colors from black to purple to blue." },
            { icon: "🎨", title: "Textiles", desc: "Andean weaving is among the most complex in the world — Quechua weavers can create fabrics with over 200 threads per inch by hand." },
            { icon: "🎵", title: "Marinera", desc: "Peru's national dance is a courtship dance with handkerchiefs — declared a Cultural Heritage of Peru and performed at festivals across the country." }
        ],
        foodTitle: "The World's Best Kitchen",
        foodIntro: "Lima has been named the World's Leading Culinary Destination multiple years running. Peruvian food combines Inca, Spanish, African, Japanese, and Chinese influences into something completely unique. The secret weapon is the aji pepper — in dozens of varieties — and the cold Pacific Ocean delivering some of the world's best seafood.",
        dishes: [
            {
                emoji: "🍋",
                name: "Ceviche",
                subtitle: "Peru's national dish — no heat required",
                story: "Ceviche is the most important dish in Peru — the country has a national holiday for it on June 28th. Raw fish is 'cooked' purely by the acid in lime juice, a technique that dates back 2,000 years to the pre-Inca Moche civilization. The key is leche de tigre — 'tiger's milk' — the leftover citrus-fish liquid in the bowl, which Peruvians drink as a hangover cure and an aphrodisiac. The Japanese community in Lima refined it in the early 20th century, creating the tiradito variant still served today.",
                ingredients: ["Fresh white fish (sea bass or flounder)", "Lime juice (lots — freshly squeezed)", "Red onion (thinly sliced)", "Aji amarillo (Peruvian yellow pepper) or substitute", "Fresh cilantro", "Garlic", "Salt, black pepper", "Corn and sweet potato for serving"],
                steps: ["Cut fish into 2cm cubes. Salt generously.", "Soak onion in cold water 10 minutes to remove sharpness. Drain.", "Mix lime juice, garlic, aji amarillo paste, and salt in a bowl.", "Add fish. Toss well. Let sit for exactly 3 minutes only.", "Add onion and cilantro. Toss again.", "Taste and adjust lime and salt immediately.", "Serve right away with corn and sweet potato on the side."]
            },
            {
                emoji: "🥔",
                name: "Papa a la Huancaína",
                subtitle: "The most Peruvian starter",
                story: "The legend says this dish was created by a woman selling food along the Lima-Huancayo railway line in the Andes — she made a spicy cheese sauce to serve with the local potatoes, and workers loved it so much they asked for her by the name of her region: Huancaína. Today it is served at every Peruvian celebration, with bright yellow aji amarillo sauce poured over sliced potatoes on a bed of lettuce with black olives and hard-boiled eggs.",
                ingredients: ["Yellow potatoes (boiled)", "Aji amarillo (yellow pepper) paste", "Fresh cheese (queso fresco) or feta", "Soda crackers", "Evaporated milk", "Garlic", "Vegetable oil", "Lettuce, black olives, hard-boiled eggs to serve"],
                steps: ["Blend aji amarillo paste with garlic and oil until smooth.", "Add crumbled fresh cheese and blend again.", "Add evaporated milk gradually until sauce is smooth and creamy.", "Add crackers one at a time and blend — they thicken the sauce.", "Season with salt. The sauce should be thick and pourable.", "Slice boiled potatoes. Arrange on lettuce.", "Pour sauce generously. Top with black olives and egg halves."]
            }
        ],
        communityTitle: "Peru through Peruvian voices",
        communityDesc: "Stories from the Andes to the Amazon to the Lima coast — the heart of a culture 2,000 years in the making.",
        didYouKnow: "The potato — one of the world's most important food crops, feeding billions — was domesticated in Peru's Andes over 8,000 years ago. Peru is still home to over 3,000 varieties in colors, shapes, and sizes that most of the world has never seen.",
        quickFacts: [
            { label: "Capital", value: "Lima" },
            { label: "Population", value: "33 million" },
            { label: "Language", value: "Spanish, Quechua, Aymara" },
            { label: "Currency", value: "Peruvian Sol" },
            { label: "Religion", value: "Catholic" },
            { label: "Famous for", value: "Machu Picchu, ceviche, biodiversity" }
        ],
        defaultStories: [
            { name: "Sofia Quispe", city: "Cusco", avatar: "🇵🇪", avatarBg: "linear-gradient(135deg, #d91023, #d4a843)", text: "In Cusco, we still speak Quechua — the language of the Inca. When I walk past Machu Picchu, I do not think of tourists. I think of my ancestors who built it without machines, without iron, without the wheel. And I feel proud." },
            { name: "Carlos Vargas", city: "Lima", avatar: "🇵🇪", avatarBg: "linear-gradient(135deg, #d91023, #d4a843)", text: "Peruvian food is an argument waiting to happen. Every ceviche recipe is the best ceviche recipe. Every chef thinks they found the perfect leche de tigre. The competition is what makes it so extraordinary." }
        ],
        exploreMore: ["brazil", "mexico", "italy"]
    }

};

/* ============================================================
   LOAD COUNTRY FROM URL
============================================================ */
function getParam(name) {
    var url = window.location.search;
    var params = new URLSearchParams(url);
    return params.get(name);
}

var countryKey = getParam("c") || "egypt";
var c = countries[countryKey];
console.log(c)

if (!c) {
    window.location.href = "explore.html";
}

// Page title
document.title = c.name + " — Cultura";

// Hero
document.getElementById("heroBg").style.background = "linear-gradient(135deg, " + c.color1 + ", " + c.color2 + ")";

// Hero video (loops forever, fades in smoothly instead of popping in)
if (c.video) {
    var heroVideoFrame = document.getElementById("heroVideoFrame");
    var heroVideoWrap = document.getElementById("heroVideoWrap");
    var videoParams = [
        "autoplay=1",
        "mute=1",
        "loop=1",
        "playlist=" + c.video,
        "controls=0",
        "showinfo=0",
        "rel=0",
        "modestbranding=1",
        "iv_load_policy=3",
        "disablekb=1",
        "playsinline=1"
    ].join("&");
    heroVideoFrame.addEventListener("load", function () {
        heroVideoWrap.classList.add("is-loaded");
    });
    heroVideoFrame.src = "https://www.youtube.com/embed/" + c.video + "?" + videoParams;
}

document.getElementById("heroFlag").textContent = c.flag;
document.getElementById("heroName").textContent = c.name;
document.getElementById("heroRegion").textContent = c.region;
document.getElementById("heroRecipes").textContent = c.recipes;
document.getElementById("heroStories").textContent = c.stories;
document.getElementById("heroFacts").textContent = c.facts;

// Map
document.getElementById("mapTitle").textContent = "Explore " + c.name + " on the map";
document.getElementById("mapFrame").src = c.mapSrc;

// Culture
document.getElementById("cultureTitle").textContent = c.cultureTitle;
document.getElementById("cultureText").textContent = c.cultureText;

var factsHTML = "";
for (var i = 0; i < c.cultureFacts.length; i++) {
    var f = c.cultureFacts[i];
    factsHTML += '<div class="fact-card">';
    factsHTML += '<span class="fact-icon">' + f.icon + '</span>';
    factsHTML += '<div class="fact-title">' + f.title + '</div>';
    factsHTML += '<div class="fact-desc">' + f.desc + '</div>';
    factsHTML += '</div>';
}
document.getElementById("factsRow").innerHTML = factsHTML;

// Food
document.getElementById("foodTitle").textContent = c.foodTitle;
document.getElementById("foodIntro").textContent = c.foodIntro;

var dishesHTML = "";
for (var d = 0; d < c.dishes.length; d++) {
    var dish = c.dishes[d];
    var ingHTML = "";
    for (var x = 0; x < dish.ingredients.length; x++) {
        ingHTML += "<li>" + dish.ingredients[x] + "</li>";
    }
    var stepsHTML = "";
    for (var s = 0; s < dish.steps.length; s++) {
        stepsHTML += '<li><span class="step-num">' + (s + 1) + '</span>' + dish.steps[s] + '</li>';
    }
    dishesHTML += '<div class="dish-card">';
    dishesHTML += '<div class="dish-header">';
    dishesHTML += '<div class="dish-top"><span class="dish-emoji">' + dish.emoji + '</span><div><div class="dish-name">' + dish.name + '</div><div class="dish-subtitle">' + dish.subtitle + '</div></div></div>';
    dishesHTML += '<p class="dish-story">' + dish.story + '</p>';
    dishesHTML += '</div>';
    dishesHTML += '<button class="recipe-toggle" onclick="toggleRecipe(this)"><i class="fa-solid fa-chevron-down"></i> View Recipe</button>';
    dishesHTML += '<div class="recipe-body">';
    dishesHTML += '<div class="recipe-cols">';
    dishesHTML += '<div><div class="recipe-subtitle">Ingredients</div><ul class="ingredient-list">' + ingHTML + '</ul></div>';
    dishesHTML += '<div><div class="recipe-subtitle">Steps</div><ol class="steps-list">' + stepsHTML + '</ol></div>';
    dishesHTML += '</div></div></div>';
}
document.getElementById("dishesContainer").innerHTML = dishesHTML;

// Community
document.getElementById("communityTitle").textContent = c.communityTitle ;
document.getElementById("communityDesc").textContent = c.communityDesc;

// Did you know
document.getElementById("didYouKnow").textContent = c.didYouKnow;

// Quick facts
var qfHTML = "";
for (var q = 0; q < c.quickFacts.length; q++) {
    var qf = c.quickFacts[q];
    qfHTML += '<div class="quick-fact-row"><span class="qf-label">' + qf.label + '</span><span class="qf-value">' + qf.value + '</span></div>';
}
document.getElementById("quickFactsList").innerHTML = qfHTML;

// Explore more
var emHTML = "";
for (var e = 0; e < c.exploreMore.length; e++) {
    var key = c.exploreMore[e];
    var em = countries[key];
    emHTML += '<li><a href="country.html?c=' + key + '">' + em.flag + ' ' + em.name + '<i class="fa-solid fa-arrow-right"></i></a></li>';
}
document.getElementById("exploreMoreList").innerHTML = emHTML;

/* ============================================================
   RECIPE TOGGLE
============================================================ */
function toggleRecipe(btn) {
    var body = btn.nextElementSibling;
    var isOpen = body.classList.contains("open");
    body.classList.toggle("open");
    btn.innerHTML = isOpen
        ? '<i class="fa-solid fa-chevron-down"></i> View Recipe'
        : '<i class="fa-solid fa-chevron-up"></i> Hide Recipe';
}

// /* ============================================================
//    COMMUNITY STORIES
// ============================================================ */
// function renderStories(list) {
//     var html = "";
//     for (var i = 0; i < list.length; i++) {
//         var s = list[i];
//         html += '<div class="story-card">';
//         html += '<div class="story-header">';
//         html += '<div class="story-avatar" style="background:' + s.avatarBg + '">' + s.avatar + '</div>';
//         html += '<div><div class="story-author">' + s.name + '</div><div class="story-loc">📍 ' + s.city + '</div></div>';
//         html += '</div>';
//         html += '<p class="story-text">"' + s.text + '"</p>';
//         html += '</div>';
//     }
//     document.getElementById("storiesList").innerHTML = html;
// }

// function submitStory() {
//     var name = document.getElementById("inputName").value.trim();
//     var city = document.getElementById("inputCity").value.trim();
//     var text = document.getElementById("inputStory").value.trim();

//     if (!name || !city || !text) {
//         alert("Please fill in all three fields before submitting.");
//         return;
//     }

//     var newStory = {
//         name: name,
//         city: city,
//         avatar: c.flag,
//         avatarBg: "linear-gradient(135deg, " + c.color1 + ", " + c.color2 + ")",
//         text: text
//     };

//     c.defaultStories.unshift(newStory);
//     renderStories(c.defaultStories);

//     document.getElementById("inputName").value = "";
//     document.getElementById("inputCity").value = "";
//     document.getElementById("inputStory").value = "";
// }


/* ============================================================
   COMMUNITY STORIES + LOCAL STORAGE PER COUNTRY
============================================================ */

// Unique key for each country
var storageKey = "communityStories_" + c.name;

// Load stories for current country
var savedStories = localStorage.getItem(storageKey);

if (savedStories) {
    c.defaultStories = JSON.parse(savedStories);
} else {
    // Save default stories first time only
    localStorage.setItem(
        storageKey,
        JSON.stringify(c.defaultStories)
    );
}



function renderStories(list) {
    var html = "";

    for (var i = 0; i < list.length; i++) {
        var s = list[i];

        html += '<div class="story-card">';
        html += '<div class="story-header">';

        html +=
            '<div class="story-avatar" style="background:' +
            s.avatarBg +
            '">' +
            s.avatar +
            "</div>";

        html +=
            '<div><div class="story-author">' +
            s.name +
            '</div><div class="story-loc">📍 ' +
            s.city +
            "</div></div>";

        html += "</div>";

        html += '<p class="story-text">"' + s.text + '"</p>';

        html += "</div>";
    }

    document.getElementById("storiesList").innerHTML = html;
}

function submitStory() {
    var name = document.getElementById("inputName").value.trim();
    var city = document.getElementById("inputCity").value.trim();
    var text = document.getElementById("inputStory").value.trim();

    if (!name || !city || !text) {
        alert("Please fill in all three fields before submitting.");
        return;
    }

    var newStory = {
        name: name,
        city: city,
        avatar: c.flag,
        avatarBg:
            "linear-gradient(135deg, " +
            c.color1 +
            ", " +
            c.color2 +
            ")",
        text: text
    };

    // Add new story
    c.defaultStories.unshift(newStory);

    // Save ONLY for this country
    localStorage.setItem(
        storageKey,
        JSON.stringify(c.defaultStories)
    );

    // Re-render
    renderStories(c.defaultStories);

    // Clear fields
    document.getElementById("inputName").value = "";
    document.getElementById("inputCity").value = "";
    document.getElementById("inputStory").value = "";
}
// Render stories on page load
renderStories(c.defaultStories);
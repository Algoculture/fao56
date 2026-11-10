const REV1_THERMAL_SOURCE = Object.freeze({
  edition: 'FAO-56 Rev.1',
  year: 2025,
  license: 'CC BY 4.0',
  doi: '10.4060/cd6621en',
})

const RAW_THRESHOLDS = [
  {
    "label": "Asparagus (Asparagus officinalis)",
    "tBaseC": 4.5,
    "tUpperC": 35,
    "table": "6.10",
    "id": "asparagus"
  },
  {
    "label": "Carrots (Daucus carota)",
    "tBaseC": 6,
    "tUpperC": 30,
    "table": "6.10",
    "id": "carrots"
  },
  {
    "label": "Cassava (Manihot esculenta)",
    "tBaseC": 10,
    "tUpperC": 40,
    "table": "6.10",
    "id": "cassava"
  },
  {
    "label": "Celery (Apium graveolens)",
    "tBaseC": 4,
    "tUpperC": 24,
    "table": "6.10",
    "id": "celery"
  },
  {
    "label": "Garlic (Allium sativum)",
    "tBaseC": 4,
    "tUpperC": 30,
    "table": "6.10",
    "id": "garlic"
  },
  {
    "label": "Onions (Allium cepa)",
    "tBaseC": 4.5,
    "tUpperC": 35,
    "table": "6.10",
    "id": "onions"
  },
  {
    "label": "Potato (Solanum tuberosum)",
    "tBaseC": 2,
    "tUpperC": 30,
    "table": "6.10",
    "id": "potato"
  },
  {
    "label": "Radish (Raphanus sativus)",
    "tBaseC": 4.5,
    "tUpperC": 30,
    "table": "6.10",
    "id": "radish"
  },
  {
    "label": "Sweet potato (Ipomoea batatas)",
    "tBaseC": 12,
    "tUpperC": 30,
    "table": "6.10",
    "id": "sweet-potato"
  },
  {
    "label": "Table beets (Beta vulgaris)",
    "tBaseC": 4.5,
    "tUpperC": 30,
    "table": "6.10",
    "id": "table-beets"
  },
  {
    "label": "Turnip (Brassica rapa)",
    "tBaseC": 4,
    "tUpperC": 35,
    "table": "6.10",
    "id": "turnip"
  },
  {
    "label": "Yam, Taro (Colocasia esculenta)",
    "tBaseC": 10,
    "tUpperC": 35,
    "table": "6.10",
    "id": "yam-taro"
  },
  {
    "label": "Artichoke (Cynara scolymus)",
    "tBaseC": 5,
    "tUpperC": 32,
    "table": "6.10",
    "id": "artichoke"
  },
  {
    "label": "Broccoli (Brassica oleracea var. italica)",
    "tBaseC": 4.5,
    "tUpperC": 30,
    "table": "6.10",
    "id": "broccoli"
  },
  {
    "label": "Brussel sprouts (B. oleracea cv. gemmifera)",
    "tBaseC": 4.5,
    "tUpperC": 30,
    "table": "6.10",
    "id": "brussel-sprouts"
  },
  {
    "label": "Cabbage (B. oleracea)",
    "tBaseC": 4.5,
    "tUpperC": 30,
    "table": "6.10",
    "id": "cabbage"
  },
  {
    "label": "Cauliflower (B. oleracea cv. botrytis)",
    "tBaseC": 4.5,
    "tUpperC": 30,
    "table": "6.10",
    "id": "cauliflower"
  },
  {
    "label": "Lettuce (Lactuca sativa)",
    "tBaseC": 4,
    "tUpperC": 28,
    "table": "6.10",
    "id": "lettuce"
  },
  {
    "label": "Spinach (Spinacia oleracea)",
    "tBaseC": 4,
    "tUpperC": 25,
    "table": "6.10",
    "id": "spinach"
  },
  {
    "label": "Banana (Musa accuminata)",
    "tBaseC": 14,
    "tUpperC": 37,
    "table": "6.10",
    "id": "banana"
  },
  {
    "label": "Bell & Chili pepper (Capsicum annuum)",
    "tBaseC": 10,
    "tUpperC": 35,
    "table": "6.10",
    "id": "bell-chili-pepper"
  },
  {
    "label": "Cucumber (Cucumis sativus)",
    "tBaseC": 10,
    "tUpperC": 32,
    "table": "6.10",
    "id": "cucumber"
  },
  {
    "label": "Eggplant (Solanum melongena)",
    "tBaseC": 10,
    "tUpperC": 35,
    "table": "6.10",
    "id": "eggplant"
  },
  {
    "label": "Melon (Cucumis melo)",
    "tBaseC": 10,
    "tUpperC": 38,
    "table": "6.10",
    "id": "melon"
  },
  {
    "label": "Melon, cantaloupe (Cucumis melo)",
    "tBaseC": 10,
    "tUpperC": 38,
    "table": "6.10",
    "id": "melon-cantaloupe"
  },
  {
    "label": "Okra (Abelmoschus esculentus)",
    "tBaseC": 10,
    "tUpperC": 35,
    "table": "6.10",
    "id": "okra"
  },
  {
    "label": "Pineapple (Ananas comosus)",
    "tBaseC": 13,
    "tUpperC": 25,
    "table": "6.10",
    "id": "pineapple"
  },
  {
    "label": "Pumpkin (Cucurbita argyrosperma)",
    "tBaseC": 10,
    "tUpperC": 32,
    "table": "6.10",
    "id": "pumpkin"
  },
  {
    "label": "Squash, Zucchini (Cucurbita pepo)",
    "tBaseC": 10,
    "tUpperC": 32,
    "table": "6.10",
    "id": "squash-zucchini"
  },
  {
    "label": "Strawberries (Fragaria × ananassa)",
    "tBaseC": 3,
    "tUpperC": 30,
    "table": "6.10",
    "id": "strawberries"
  },
  {
    "label": "Tomato (Solanum lycopersicum)",
    "tBaseC": 7,
    "tUpperC": 28,
    "table": "6.10",
    "id": "tomato"
  },
  {
    "label": "Watermelon (Citrullus lanatus)",
    "tBaseC": 10,
    "tUpperC": 35,
    "table": "6.10",
    "id": "watermelon"
  },
  {
    "label": "Basil (Ocimum basilicum)",
    "tBaseC": 10,
    "tUpperC": 30,
    "table": "6.10",
    "id": "basil"
  },
  {
    "label": "Black cumin (Nigella sativa)",
    "tBaseC": 5,
    "tUpperC": 30,
    "table": "6.10",
    "id": "black-cumin"
  },
  {
    "label": "Black pepper (Piper nigrum)",
    "tBaseC": 10,
    "tUpperC": 40,
    "table": "6.10",
    "id": "black-pepper"
  },
  {
    "label": "Coriander (Coriandrum sativum)",
    "tBaseC": 4,
    "tUpperC": 30,
    "table": "6.10",
    "id": "coriander"
  },
  {
    "label": "Fenugreek (Trigonella foenum-graecum)",
    "tBaseC": 4,
    "tUpperC": 35,
    "table": "6.10",
    "id": "fenugreek"
  },
  {
    "label": "Lemon balm (Melissa officinalis)",
    "tBaseC": 5,
    "tUpperC": 35,
    "table": "6.10",
    "id": "lemon-balm"
  },
  {
    "label": "Mint (Mentha spicata)",
    "tBaseC": 4,
    "tUpperC": 35,
    "table": "6.10",
    "id": "mint"
  },
  {
    "label": "Oregano (Origanum vulgare)",
    "tBaseC": 5,
    "tUpperC": 30,
    "table": "6.10",
    "id": "oregano"
  },
  {
    "label": "Parsley (Petroselinum crispum)",
    "tBaseC": 4,
    "tUpperC": 27,
    "table": "6.10",
    "id": "parsley"
  },
  {
    "label": "Saffron (Crocus sativus)",
    "tBaseC": 10,
    "tUpperC": 30,
    "table": "6.10",
    "id": "saffron"
  },
  {
    "label": "Bean (Phaseolus vulgaris)",
    "tBaseC": 10,
    "tUpperC": 32,
    "table": "6.10",
    "id": "bean"
  },
  {
    "label": "Mungbean (Vigna radiata)",
    "tBaseC": 8,
    "tUpperC": 40,
    "table": "6.10",
    "id": "mungbean"
  },
  {
    "label": "Black and green gram (Vigna mungo)",
    "tBaseC": 10,
    "tUpperC": 40,
    "table": "6.10",
    "id": "black-and-green-gram"
  },
  {
    "label": "Chickpea, garbanzo (Cicer arietinum)",
    "tBaseC": 5,
    "tUpperC": 32,
    "table": "6.10",
    "id": "chickpea-garbanzo"
  },
  {
    "label": "Cowpea (Vigna unguiculata)",
    "tBaseC": 10,
    "tUpperC": 35,
    "table": "6.10",
    "id": "cowpea"
  },
  {
    "label": "Fava bean (Vicia faba)",
    "tBaseC": 5,
    "tUpperC": 30,
    "table": "6.10",
    "id": "fava-bean"
  },
  {
    "label": "Groundnut, peanut (Arachis hypogaea)",
    "tBaseC": 10,
    "tUpperC": 35,
    "table": "6.10",
    "id": "groundnut-peanut"
  },
  {
    "label": "Lentil (Lens culinaris)",
    "tBaseC": 2,
    "tUpperC": 35,
    "table": "6.10",
    "id": "lentil"
  },
  {
    "label": "Pea (Pisum sativum)",
    "tBaseC": 5,
    "tUpperC": 27,
    "table": "6.10",
    "id": "pea"
  },
  {
    "label": "Soybean (Glycine max)",
    "tBaseC": 10,
    "tUpperC": 40,
    "table": "6.10",
    "id": "soybean"
  },
  {
    "label": "Cotton (Gossypium hirsutum)",
    "tBaseC": 12.5,
    "tUpperC": 35,
    "table": "6.10",
    "id": "cotton"
  },
  {
    "label": "Flax, Linseed (Linum usitatissimum)",
    "tBaseC": 0,
    "tUpperC": 36,
    "table": "6.10",
    "id": "flax-linseed"
  },
  {
    "label": "Sisal (Agave sisalana)",
    "tBaseC": 10,
    "tUpperC": 35,
    "table": "6.10",
    "id": "sisal"
  },
  {
    "label": "Camelina (Camelina sativa)",
    "tBaseC": 4,
    "tUpperC": 30,
    "table": "6.10",
    "id": "camelina"
  },
  {
    "label": "Canola (Brassica napus)",
    "tBaseC": 2,
    "tUpperC": 30,
    "table": "6.10",
    "id": "canola"
  },
  {
    "label": "Castorbean (Ricinus communis)",
    "tBaseC": 10,
    "tUpperC": 30,
    "table": "6.10",
    "id": "castorbean"
  },
  {
    "label": "Guar (Cyamopsis tetragonoloba)",
    "tBaseC": 15,
    "tUpperC": 40,
    "table": "6.10",
    "id": "guar"
  },
  {
    "label": "Mustard (Brassica juncea)",
    "tBaseC": 5,
    "tUpperC": 40,
    "table": "6.10",
    "id": "mustard"
  },
  {
    "label": "Safflower (Carthamus tinctorius)",
    "tBaseC": 5,
    "tUpperC": 35,
    "table": "6.10",
    "id": "safflower"
  },
  {
    "label": "Sesame (Sesamum indicum)",
    "tBaseC": 10,
    "tUpperC": 40,
    "table": "6.10",
    "id": "sesame"
  },
  {
    "label": "Sunflower (Helianthus annuus)",
    "tBaseC": 8,
    "tUpperC": 30,
    "table": "6.10",
    "id": "sunflower"
  },
  {
    "label": "Sugar beet (Beta vulgaris)",
    "tBaseC": 5,
    "tUpperC": 30,
    "table": "6.10",
    "id": "sugar-beet"
  },
  {
    "label": "Sugar cane (Saccharum officinarum)",
    "tBaseC": 10,
    "tUpperC": 45,
    "table": "6.10",
    "id": "sugar-cane"
  },
  {
    "label": "Amaranth grain (Amaranthus sp.)",
    "tBaseC": 7,
    "tUpperC": 40,
    "table": "6.10",
    "id": "amaranth-grain"
  },
  {
    "label": "Barley (Hordeum vulgare)",
    "tBaseC": 0,
    "tUpperC": 30,
    "table": "6.10",
    "id": "barley"
  },
  {
    "label": "Maize (Zea mays)",
    "tBaseC": 10,
    "tUpperC": 32,
    "table": "6.10",
    "id": "maize"
  },
  {
    "label": "Oats (Avena sativa)",
    "tBaseC": 0,
    "tUpperC": 30,
    "table": "6.10",
    "id": "oats"
  },
  {
    "label": "Pearl Millet (Pennisetum glaucum)",
    "tBaseC": 10,
    "tUpperC": 40,
    "table": "6.10",
    "id": "pearl-millet"
  },
  {
    "label": "Quinoa (Chenopodium quinoa)",
    "tBaseC": 2,
    "tUpperC": 25,
    "table": "6.10",
    "id": "quinoa"
  },
  {
    "label": "Rye (Secale cereale)",
    "tBaseC": 4,
    "tUpperC": 35,
    "table": "6.10",
    "id": "rye"
  },
  {
    "label": "Sorghum (Sorghum bicolor)",
    "tBaseC": 10,
    "tUpperC": 30,
    "table": "6.10",
    "id": "sorghum"
  },
  {
    "label": "Teff (Eragrostis tef)",
    "tBaseC": 10,
    "tUpperC": 30,
    "table": "6.10",
    "id": "teff"
  },
  {
    "label": "Wheat, common (Triticum aestivum)",
    "tBaseC": 0,
    "tUpperC": 35,
    "table": "6.10",
    "id": "wheat-common"
  },
  {
    "label": "Wheat, durum (Triticum durum)",
    "tBaseC": 0,
    "tUpperC": 35,
    "table": "6.10",
    "id": "wheat-durum"
  },
  {
    "label": "Rice (Oryza sativa)",
    "tBaseC": 12,
    "tUpperC": 35,
    "table": "6.10",
    "id": "rice"
  },
  {
    "label": "Alfalfa (Medicago sativa)",
    "tBaseC": 0,
    "tUpperC": 30,
    "table": "6.10",
    "id": "alfalfa"
  },
  {
    "label": "Bermuda (Cynodon dactylon)",
    "tBaseC": 10,
    "tUpperC": 30,
    "table": "6.10",
    "id": "bermuda"
  },
  {
    "label": "Berseem clover (Trifolium alexandrinum)",
    "tBaseC": 4,
    "tUpperC": 30,
    "table": "6.10",
    "id": "berseem-clover"
  },
  {
    "label": "Common vetch (Vicia sativa)",
    "tBaseC": 0,
    "tUpperC": 30,
    "table": "6.10",
    "id": "common-vetch"
  },
  {
    "label": "Elephant grass (Pennisetum sp.)",
    "tBaseC": 15,
    "tUpperC": 40,
    "table": "6.10",
    "id": "elephant-grass"
  },
  {
    "label": "Grass pastures",
    "tBaseC": 4,
    "tUpperC": 30,
    "table": "6.10",
    "id": "grass-pastures"
  },
  {
    "label": "Guinea grass (Panicum maximum)",
    "tBaseC": 14,
    "tUpperC": 40,
    "table": "6.10",
    "id": "guinea-grass"
  },
  {
    "label": "Hairy vetch (Vicia villosa)",
    "tBaseC": 2,
    "tUpperC": 25,
    "table": "6.10",
    "id": "hairy-vetch"
  },
  {
    "label": "Italian ryegrass (Lolium multiflorum)",
    "tBaseC": 2,
    "tUpperC": 25,
    "table": "6.10",
    "id": "italian-ryegrass"
  },
  {
    "label": "Persian clover (Trifolium resupinatum)",
    "tBaseC": 6,
    "tUpperC": 35,
    "table": "6.10",
    "id": "persian-clover"
  },
  {
    "label": "Sudan grass (Sorghum × drummondii)",
    "tBaseC": 10,
    "tUpperC": 35,
    "table": "6.10",
    "id": "sudan-grass"
  },
  {
    "label": "Olive (Olea europaea)",
    "tBaseC": 7,
    "tUpperC": 35,
    "table": "6.10",
    "id": "olive"
  },
  {
    "label": "Wine and table grapes (Vitis vinifera)",
    "tBaseC": 10,
    "tUpperC": 35,
    "table": "6.10",
    "id": "wine-and-table-grapes"
  },
  {
    "label": "Citrus (Citrus sp.)",
    "tBaseC": 13,
    "tUpperC": 30,
    "table": "6.10",
    "id": "citrus"
  },
  {
    "label": "Avocado (Persea americana)",
    "tBaseC": 6,
    "tUpperC": 33,
    "table": "6.10",
    "id": "avocado"
  },
  {
    "label": "Loquat (Eriobotrya japonica)",
    "tBaseC": 4,
    "tUpperC": 42,
    "table": "6.10",
    "id": "loquat"
  },
  {
    "label": "Pomegranate (Punica granatum)",
    "tBaseC": 10,
    "tUpperC": 35,
    "table": "6.10",
    "id": "pomegranate"
  },
  {
    "label": "Apple (Malus domestica)",
    "tBaseC": 4,
    "tUpperC": 35,
    "table": "6.10",
    "id": "apple"
  },
  {
    "label": "Pear (Pyrus communis)",
    "tBaseC": 4,
    "tUpperC": 35,
    "table": "6.10",
    "id": "pear"
  },
  {
    "label": "Apricot (Prunus armeniaca)",
    "tBaseC": 7,
    "tUpperC": 25,
    "table": "6.10",
    "id": "apricot"
  },
  {
    "label": "Cherry (Prunus avium)",
    "tBaseC": 4.5,
    "tUpperC": 30,
    "table": "6.10",
    "id": "cherry"
  },
  {
    "label": "Peach and nectarine (Prunus persica)",
    "tBaseC": 7,
    "tUpperC": 35,
    "table": "6.10",
    "id": "peach-and-nectarine"
  },
  {
    "label": "Plum (P. domestica and P. salicina)",
    "tBaseC": 4.5,
    "tUpperC": 25,
    "table": "6.10",
    "id": "plum"
  },
  {
    "label": "Almond (Prunus dulcis)",
    "tBaseC": 4.5,
    "tUpperC": 35,
    "table": "6.10",
    "id": "almond"
  },
  {
    "label": "Pistachio (Pistacia vera)",
    "tBaseC": 9,
    "tUpperC": 35,
    "table": "6.10",
    "id": "pistachio"
  },
  {
    "label": "Walnut (Juglans regia)",
    "tBaseC": 4.5,
    "tUpperC": 30,
    "table": "6.10",
    "id": "walnut"
  },
  {
    "label": "Kiwifruit (Actinidia deliciosa)",
    "tBaseC": 6,
    "tUpperC": 30,
    "table": "6.10",
    "id": "kiwifruit"
  },
  {
    "label": "Hop (Humulus lupulus)",
    "tBaseC": 5,
    "tUpperC": 30,
    "table": "6.10",
    "id": "hop"
  },
  {
    "label": "Berries (Vaccinium sp.)",
    "tBaseC": 6,
    "tUpperC": 30,
    "table": "6.10",
    "id": "berries"
  },
  {
    "label": "Coffee (Coffea arabica)",
    "tBaseC": 10,
    "tUpperC": 32,
    "table": "6.10",
    "id": "coffee"
  },
  {
    "label": "Guava (Psidium guajava)",
    "tBaseC": 12,
    "tUpperC": 35,
    "table": "6.10",
    "id": "guava"
  },
  {
    "label": "Papaya (Carica papaya)",
    "tBaseC": 15,
    "tUpperC": 35,
    "table": "6.10",
    "id": "papaya"
  },
  {
    "label": "Passionfruit (Passiflora edulis)",
    "tBaseC": 10,
    "tUpperC": 35,
    "table": "6.10",
    "id": "passionfruit"
  },
  {
    "label": "Lychee (Litchi chinensis)",
    "tBaseC": 10,
    "tUpperC": 30,
    "table": "6.10",
    "id": "lychee"
  },
  {
    "label": "Mango (Mangifera indica)",
    "tBaseC": 12,
    "tUpperC": 32,
    "table": "6.10",
    "id": "mango"
  },
  {
    "label": "Date palm (Phoenix dactylifera)",
    "tBaseC": 10,
    "tUpperC": 35,
    "table": "6.10",
    "id": "date-palm"
  },
  {
    "label": "Oil palm (Elaeis guineensis)",
    "tBaseC": 15,
    "tUpperC": 40,
    "table": "6.10",
    "id": "oil-palm"
  }
]

const RAW_GDD_STAGES = [
  {
    "label": "Carrots (Daucus carota)",
    "season": "common",
    "stages": {
      "initial": 320,
      "development": 465,
      "midSeason": 500,
      "lateSeason": 290
    },
    "totalGdd": 1575,
    "table": "6.11",
    "id": "carrots-common"
  },
  {
    "label": "Garlic (Allium sativum)",
    "season": "short season",
    "stages": {
      "initial": 150,
      "development": 340,
      "midSeason": 335,
      "lateSeason": 315
    },
    "totalGdd": 1140,
    "table": "6.11",
    "id": "garlic-short-season"
  },
  {
    "label": "Garlic (Allium sativum)",
    "season": "long season",
    "stages": {
      "initial": 580,
      "development": 615,
      "midSeason": 315,
      "lateSeason": 240
    },
    "totalGdd": 1750,
    "table": "6.11",
    "id": "garlic-long-season"
  },
  {
    "label": "Onions (Allium cepa)",
    "season": "common",
    "stages": {
      "initial": 460,
      "development": 470,
      "midSeason": 880,
      "lateSeason": 480
    },
    "totalGdd": 2290,
    "table": "6.11",
    "id": "onions-common"
  },
  {
    "label": "Potato (Solanum tuberosum)",
    "season": "short season",
    "stages": {
      "initial": 260,
      "development": 490,
      "midSeason": 525,
      "lateSeason": 325
    },
    "totalGdd": 1600,
    "table": "6.11",
    "id": "potato-short-season"
  },
  {
    "label": "Potato (Solanum tuberosum)",
    "season": "long season",
    "stages": {
      "initial": 405,
      "development": 530,
      "midSeason": 490,
      "lateSeason": 835
    },
    "totalGdd": 2260,
    "table": "6.11",
    "id": "potato-long-season"
  },
  {
    "label": "Broccoli (Brassica oleracea cv. italica)",
    "season": "short season",
    "stages": {
      "initial": 195,
      "development": 250,
      "midSeason": 210,
      "lateSeason": 100
    },
    "totalGdd": 755,
    "table": "6.11",
    "id": "broccoli-short-season"
  },
  {
    "label": "Broccoli (Brassica oleracea cv. italica)",
    "season": "long season",
    "stages": {
      "initial": 295,
      "development": 350,
      "midSeason": 525,
      "lateSeason": 110
    },
    "totalGdd": 1280,
    "table": "6.11",
    "id": "broccoli-long-season"
  },
  {
    "label": "Lettuce (Lactuca sativa)",
    "season": "short season",
    "stages": {
      "initial": 365,
      "development": 385,
      "midSeason": 215,
      "lateSeason": 20
    },
    "totalGdd": 985,
    "table": "6.11",
    "id": "lettuce-short-season"
  },
  {
    "label": "Lettuce (Lactuca sativa)",
    "season": "long season",
    "stages": {
      "initial": 360,
      "development": 455,
      "midSeason": 455,
      "lateSeason": 20
    },
    "totalGdd": 1290,
    "table": "6.11",
    "id": "lettuce-long-season"
  },
  {
    "label": "Bell pepper (Capsicum annuum)",
    "season": "common",
    "stages": {
      "initial": 445,
      "development": 1180,
      "midSeason": 745,
      "lateSeason": 45
    },
    "totalGdd": 2415,
    "table": "6.11",
    "id": "bell-pepper-common"
  },
  {
    "label": "Melon (Cucumis melo)",
    "season": "short season",
    "stages": {
      "initial": 185,
      "development": 520,
      "midSeason": 315,
      "lateSeason": 155
    },
    "totalGdd": 1175,
    "table": "6.11",
    "id": "melon-short-season"
  },
  {
    "label": "Melon (Cucumis melo)",
    "season": "long season",
    "stages": {
      "initial": 140,
      "development": 545,
      "midSeason": 460,
      "lateSeason": 455
    },
    "totalGdd": 1600,
    "table": "6.11",
    "id": "melon-long-season"
  },
  {
    "label": "Tomato (Solanum lycopersicum)",
    "season": "industry",
    "stages": {
      "initial": 280,
      "development": 520,
      "midSeason": 880,
      "lateSeason": 220
    },
    "totalGdd": 1900,
    "table": "6.11",
    "id": "tomato-industry"
  },
  {
    "label": "Tomato (Solanum lycopersicum)",
    "season": "market",
    "stages": {
      "initial": 325,
      "development": 660,
      "midSeason": 880,
      "lateSeason": 200
    },
    "totalGdd": 2065,
    "table": "6.11",
    "id": "tomato-market"
  },
  {
    "label": "Bean, seed (Phaseolus vulgaris)",
    "season": "short season",
    "stages": {
      "initial": 160,
      "development": 260,
      "midSeason": 360,
      "lateSeason": 180
    },
    "totalGdd": 960,
    "table": "6.11",
    "id": "bean-seed-short-season"
  },
  {
    "label": "Bean, seed (Phaseolus vulgaris)",
    "season": "long season",
    "stages": {
      "initial": 320,
      "development": 410,
      "midSeason": 400,
      "lateSeason": 220
    },
    "totalGdd": 1350,
    "table": "6.11",
    "id": "bean-seed-long-season"
  },
  {
    "label": "Pea, fresh (Pisum sativum)",
    "season": "industry",
    "stages": {
      "initial": 105,
      "development": 255,
      "midSeason": 510,
      "lateSeason": 35
    },
    "totalGdd": 905,
    "table": "6.11",
    "id": "pea-fresh-industry"
  },
  {
    "label": "Pea, fresh (Pisum sativum)",
    "season": "market",
    "stages": {
      "initial": 155,
      "development": 350,
      "midSeason": 575,
      "lateSeason": 320
    },
    "totalGdd": 1400,
    "table": "6.11",
    "id": "pea-fresh-market"
  },
  {
    "label": "Soybean (Glycine max)",
    "season": "short season",
    "stages": {
      "initial": 300,
      "development": 350,
      "midSeason": 650,
      "lateSeason": 350
    },
    "totalGdd": 1660,
    "table": "6.11",
    "id": "soybean-short-season"
  },
  {
    "label": "Soybean (Glycine max)",
    "season": "long season",
    "stages": {
      "initial": 310,
      "development": 410,
      "midSeason": 680,
      "lateSeason": 560
    },
    "totalGdd": 1960,
    "table": "6.11",
    "id": "soybean-long-season"
  },
  {
    "label": "Cotton (Gossypium hirsutum)",
    "season": "short season",
    "stages": {
      "initial": 280,
      "development": 520,
      "midSeason": 800,
      "lateSeason": 350
    },
    "totalGdd": 1950,
    "table": "6.11",
    "id": "cotton-short-season"
  },
  {
    "label": "Cotton (Gossypium hirsutum)",
    "season": "long season",
    "stages": {
      "initial": 345,
      "development": 905,
      "midSeason": 615,
      "lateSeason": 285
    },
    "totalGdd": 2150,
    "table": "6.11",
    "id": "cotton-long-season"
  },
  {
    "label": "Canola (Brassica napus)",
    "season": "short season",
    "stages": {
      "initial": 330,
      "development": 310,
      "midSeason": 450,
      "lateSeason": 595
    },
    "totalGdd": 1685,
    "table": "6.11",
    "id": "canola-short-season"
  },
  {
    "label": "Canola (Brassica napus)",
    "season": "long season",
    "stages": {
      "initial": 460,
      "development": 555,
      "midSeason": 905,
      "lateSeason": 595
    },
    "totalGdd": 2515,
    "table": "6.11",
    "id": "canola-long-season"
  },
  {
    "label": "Sunflower (Helianthus annuus)",
    "season": "short season",
    "stages": {
      "initial": 345,
      "development": 555,
      "midSeason": 715,
      "lateSeason": 175
    },
    "totalGdd": 1790,
    "table": "6.11",
    "id": "sunflower-short-season"
  },
  {
    "label": "Sunflower (Helianthus annuus)",
    "season": "long season",
    "stages": {
      "initial": 385,
      "development": 570,
      "midSeason": 685,
      "lateSeason": 265
    },
    "totalGdd": 1905,
    "table": "6.11",
    "id": "sunflower-long-season"
  },
  {
    "label": "Barley (Hordeum vulgare)",
    "season": "short season",
    "stages": {
      "initial": 290,
      "development": 455,
      "midSeason": 345,
      "lateSeason": 360
    },
    "totalGdd": 1450,
    "table": "6.11",
    "id": "barley-short-season"
  },
  {
    "label": "Barley (Hordeum vulgare)",
    "season": "long season",
    "stages": {
      "initial": 300,
      "development": 675,
      "midSeason": 690,
      "lateSeason": 660
    },
    "totalGdd": 2325,
    "table": "6.11",
    "id": "barley-long-season"
  },
  {
    "label": "Maize, grain (Zea mays)",
    "season": "short season",
    "stages": {
      "initial": 200,
      "development": 380,
      "midSeason": 500,
      "lateSeason": 340
    },
    "totalGdd": 1420,
    "table": "6.11",
    "id": "maize-grain-short-season"
  },
  {
    "label": "Maize, grain (Zea mays)",
    "season": "long season",
    "stages": {
      "initial": 295,
      "development": 420,
      "midSeason": 775,
      "lateSeason": 465
    },
    "totalGdd": 1955,
    "table": "6.11",
    "id": "maize-grain-long-season"
  },
  {
    "label": "Maize, silage (Zea mays)",
    "season": "short season",
    "stages": {
      "initial": 200,
      "development": 380,
      "midSeason": 430,
      "lateSeason": 120
    },
    "totalGdd": 1130,
    "table": "6.11",
    "id": "maize-silage-short-season"
  },
  {
    "label": "Maize, silage (Zea mays)",
    "season": "long season",
    "stages": {
      "initial": 250,
      "development": 500,
      "midSeason": 600,
      "lateSeason": 200
    },
    "totalGdd": 1550,
    "table": "6.11",
    "id": "maize-silage-long-season"
  },
  {
    "label": "Maize, sweet (Zea mays)",
    "season": "short season",
    "stages": {
      "initial": 200,
      "development": 310,
      "midSeason": 360,
      "lateSeason": 115
    },
    "totalGdd": 985,
    "table": "6.11",
    "id": "maize-sweet-short-season"
  },
  {
    "label": "Maize, sweet (Zea mays)",
    "season": "long season",
    "stages": {
      "initial": 355,
      "development": 500,
      "midSeason": 430,
      "lateSeason": 200
    },
    "totalGdd": 1485,
    "table": "6.11",
    "id": "maize-sweet-long-season"
  },
  {
    "label": "Oats (Avena sativa)",
    "season": "common",
    "stages": {
      "initial": 450,
      "development": 595,
      "midSeason": 550,
      "lateSeason": 255
    },
    "totalGdd": 1850,
    "table": "6.11",
    "id": "oats-common"
  },
  {
    "label": "Sorghum (Sorghum bicolor)",
    "season": "short season",
    "stages": {
      "initial": 280,
      "development": 300,
      "midSeason": 570,
      "lateSeason": 230
    },
    "totalGdd": 1380,
    "table": "6.11",
    "id": "sorghum-short-season"
  },
  {
    "label": "Sorghum (Sorghum bicolor)",
    "season": "long season",
    "stages": {
      "initial": 280,
      "development": 310,
      "midSeason": 650,
      "lateSeason": 280
    },
    "totalGdd": 1520,
    "table": "6.11",
    "id": "sorghum-long-season"
  },
  {
    "label": "Wheat, winter (Triticum aestivum)",
    "season": "short season",
    "stages": {
      "initial": 395,
      "development": 445,
      "midSeason": 440,
      "lateSeason": 365
    },
    "totalGdd": 1645,
    "table": "6.11",
    "id": "wheat-winter-short-season"
  },
  {
    "label": "Wheat, winter (Triticum aestivum)",
    "season": "long season",
    "stages": {
      "initial": 560,
      "development": 405,
      "midSeason": 730,
      "lateSeason": 410
    },
    "totalGdd": 2105,
    "table": "6.11",
    "id": "wheat-winter-long-season"
  },
  {
    "label": "Wheat, spring (Triticum aestivum)",
    "season": "short season",
    "stages": {
      "initial": 360,
      "development": 480,
      "midSeason": 590,
      "lateSeason": 190
    },
    "totalGdd": 1620,
    "table": "6.11",
    "id": "wheat-spring-short-season"
  },
  {
    "label": "Wheat, spring (Triticum aestivum)",
    "season": "long season",
    "stages": {
      "initial": 360,
      "development": 680,
      "midSeason": 720,
      "lateSeason": 540
    },
    "totalGdd": 2300,
    "table": "6.11",
    "id": "wheat-spring-long-season"
  },
  {
    "label": "Rice (Oryza sativa)",
    "season": "short season",
    "stages": {
      "initial": 235,
      "development": 465,
      "midSeason": 665,
      "lateSeason": 295
    },
    "totalGdd": 1660,
    "table": "6.11",
    "id": "rice-short-season"
  },
  {
    "label": "Rice (Oryza sativa)",
    "season": "long season",
    "stages": {
      "initial": 255,
      "development": 490,
      "midSeason": 740,
      "lateSeason": 320
    },
    "totalGdd": 1805,
    "table": "6.11",
    "id": "rice-long-season"
  },
  {
    "label": "Almond (Prunus dulcis)",
    "season": "early maturation",
    "stages": {
      "initial": 250,
      "development": 300,
      "midSeason": 2260,
      "lateSeason": 815
    },
    "totalGdd": 3625,
    "table": "6.11",
    "id": "almond-early-maturation"
  },
  {
    "label": "Almond (Prunus dulcis)",
    "season": "late maturation",
    "stages": {
      "initial": 280,
      "development": 325,
      "midSeason": 2730,
      "lateSeason": 475
    },
    "totalGdd": 3810,
    "table": "6.11",
    "id": "almond-late-maturation"
  },
  {
    "label": "Citrus (oranges, clementines, mandarin)",
    "season": "common",
    "stages": {
      "initial": 35,
      "development": 220,
      "midSeason": 1580,
      "lateSeason": 60
    },
    "totalGdd": 1895,
    "table": "6.11",
    "id": "citrus-common"
  },
  {
    "label": "Olive (Olea europaea)",
    "season": "early maturation",
    "stages": {
      "initial": 50,
      "development": 430,
      "midSeason": 1385,
      "lateSeason": 800
    },
    "totalGdd": 2665,
    "table": "6.11",
    "id": "olive-early-maturation"
  },
  {
    "label": "Olive (Olea europaea)",
    "season": "late maturation",
    "stages": {
      "initial": 380,
      "development": 350,
      "midSeason": 2055,
      "lateSeason": 720
    },
    "totalGdd": 3505,
    "table": "6.11",
    "id": "olive-late-maturation"
  },
  {
    "label": "Pistachio (Pistacia vera)",
    "season": "common",
    "stages": {
      "initial": 225,
      "development": 555,
      "midSeason": 1130,
      "lateSeason": 210
    },
    "totalGdd": 2120,
    "table": "6.11",
    "id": "pistachio-common"
  },
  {
    "label": "Pomegranate (Punica granatum)",
    "season": "common",
    "stages": {
      "initial": 95,
      "development": 185,
      "midSeason": 1900,
      "lateSeason": 265
    },
    "totalGdd": 2445,
    "table": "6.11",
    "id": "pomegranate-common"
  },
  {
    "label": "Wine grapes (Vitis vinifera)",
    "season": "early maturation",
    "stages": {
      "initial": 435,
      "development": 1225,
      "midSeason": 505,
      "lateSeason": 160
    },
    "totalGdd": 2325,
    "table": "6.11",
    "id": "wine-grapes-early-maturation"
  },
  {
    "label": "Wine grapes (Vitis vinifera)",
    "season": "late maturation",
    "stages": {
      "initial": 465,
      "development": 1145,
      "midSeason": 800,
      "lateSeason": 590
    },
    "totalGdd": 3000,
    "table": "6.11",
    "id": "wine-grapes-late-maturation"
  },
  {
    "label": "Asparagus (Asparagus officinalis), roots/tubers/bulbs",
    "season": "minimum length",
    "stages": {
      "initial": 380,
      "development": 350,
      "midSeason": 2510,
      "lateSeason": 480
    },
    "totalGdd": 3720,
    "table": "6.12",
    "id": "asparagus-roots-tubers-bulbs-minimum-length"
  },
  {
    "label": "Asparagus (Asparagus officinalis), roots/tubers/bulbs",
    "season": "maximum length",
    "stages": {
      "initial": 670,
      "development": 540,
      "midSeason": 2670,
      "lateSeason": 1480
    },
    "totalGdd": 5360,
    "table": "6.12",
    "id": "asparagus-roots-tubers-bulbs-maximum-length"
  },
  {
    "label": "Cassava (Manihot esculenta), first year",
    "season": "common",
    "stages": {
      "initial": 260,
      "development": 510,
      "midSeason": 1260,
      "lateSeason": 850
    },
    "totalGdd": 2880,
    "table": "6.12",
    "id": "cassava-first-year-common"
  },
  {
    "label": "Celery roots (Apium graveolens)",
    "season": "minimum length",
    "stages": {
      "initial": 400,
      "development": 370,
      "midSeason": 510,
      "lateSeason": 190
    },
    "totalGdd": 1470,
    "table": "6.12",
    "id": "celery-roots-minimum-length"
  },
  {
    "label": "Celery roots (Apium graveolens)",
    "season": "maximum length",
    "stages": {
      "initial": 130,
      "development": 420,
      "midSeason": 1730,
      "lateSeason": 400
    },
    "totalGdd": 2680,
    "table": "6.12",
    "id": "celery-roots-maximum-length"
  },
  {
    "label": "Sweet potato (Ipomoea batatas)",
    "season": "minimum length",
    "stages": {
      "initial": 150,
      "development": 300,
      "midSeason": 480,
      "lateSeason": 430
    },
    "totalGdd": 1360,
    "table": "6.12",
    "id": "sweet-potato-minimum-length"
  },
  {
    "label": "Sweet potato (Ipomoea batatas)",
    "season": "maximum length",
    "stages": {
      "initial": 170,
      "development": 320,
      "midSeason": 560,
      "lateSeason": 370
    },
    "totalGdd": 1420,
    "table": "6.12",
    "id": "sweet-potato-maximum-length"
  },
  {
    "label": "Table beets (Beta vulgaris)",
    "season": "minimum length",
    "stages": {
      "initial": 30,
      "development": 130,
      "midSeason": 180,
      "lateSeason": 100
    },
    "totalGdd": 440,
    "table": "6.12",
    "id": "table-beets-minimum-length"
  },
  {
    "label": "Table beets (Beta vulgaris)",
    "season": "maximum length",
    "stages": {
      "initial": 40,
      "development": 150,
      "midSeason": 180,
      "lateSeason": 100
    },
    "totalGdd": 470,
    "table": "6.12",
    "id": "table-beets-maximum-length"
  },
  {
    "label": "Artichoke (Cynara scolymus), first year",
    "season": "common",
    "stages": {
      "initial": 290,
      "development": 510,
      "midSeason": 2100,
      "lateSeason": 80
    },
    "totalGdd": 2980,
    "table": "6.12",
    "id": "artichoke-first-year-common"
  },
  {
    "label": "Artichoke (Cynara scolymus), second year",
    "season": "common",
    "stages": {
      "initial": 120,
      "development": 230,
      "midSeason": 2560,
      "lateSeason": 50
    },
    "totalGdd": 2960,
    "table": "6.12",
    "id": "artichoke-second-year-common"
  },
  {
    "label": "Asparagus (Asparagus officinalis), leaves/flowers",
    "season": "minimum length",
    "stages": {
      "initial": 380,
      "development": 350,
      "midSeason": 2510,
      "lateSeason": 480
    },
    "totalGdd": 3720,
    "table": "6.12",
    "id": "asparagus-leaves-flowers-minimum-length"
  },
  {
    "label": "Asparagus (Asparagus officinalis), leaves/flowers",
    "season": "maximum length",
    "stages": {
      "initial": 670,
      "development": 540,
      "midSeason": 2670,
      "lateSeason": 1480
    },
    "totalGdd": 5360,
    "table": "6.12",
    "id": "asparagus-leaves-flowers-maximum-length"
  },
  {
    "label": "Cabbage (B. oleracea)",
    "season": "common",
    "stages": {
      "initial": 790,
      "development": 620,
      "midSeason": 220,
      "lateSeason": 80
    },
    "totalGdd": 1710,
    "table": "6.12",
    "id": "cabbage-common"
  },
  {
    "label": "Cauliflower (B. oleracea var. botrytis)",
    "season": "common",
    "stages": {
      "initial": 700,
      "development": 610,
      "midSeason": 200,
      "lateSeason": 60
    },
    "totalGdd": 1570,
    "table": "6.12",
    "id": "cauliflower-common"
  },
  {
    "label": "Mint (Mentha)",
    "season": "common",
    "stages": {
      "initial": 120,
      "development": 290,
      "midSeason": 2510,
      "lateSeason": 820
    },
    "totalGdd": 3740,
    "table": "6.12",
    "id": "mint-common"
  },
  {
    "label": "Spinach (Spinacia oleracea)",
    "season": "minimum length",
    "stages": {
      "initial": 130,
      "development": 190,
      "midSeason": 180,
      "lateSeason": 70
    },
    "totalGdd": 570,
    "table": "6.12",
    "id": "spinach-minimum-length"
  },
  {
    "label": "Spinach (Spinacia oleracea)",
    "season": "maximum length",
    "stages": {
      "initial": 250,
      "development": 200,
      "midSeason": 140,
      "lateSeason": 20
    },
    "totalGdd": 610,
    "table": "6.12",
    "id": "spinach-maximum-length"
  },
  {
    "label": "Bean, green (Phaseolus vulgaris)",
    "season": "minimum length",
    "stages": {
      "initial": 20,
      "development": 110,
      "midSeason": 220,
      "lateSeason": 100
    },
    "totalGdd": 450,
    "table": "6.12",
    "id": "bean-green-minimum-length"
  },
  {
    "label": "Bean, green (Phaseolus vulgaris)",
    "season": "maximum length",
    "stages": {
      "initial": 230,
      "development": 390,
      "midSeason": 400,
      "lateSeason": 150
    },
    "totalGdd": 1170,
    "table": "6.12",
    "id": "bean-green-maximum-length"
  },
  {
    "label": "Cucumber (Cucumis sativus)",
    "season": "minimum length",
    "stages": {
      "initial": 80,
      "development": 170,
      "midSeason": 450,
      "lateSeason": 270
    },
    "totalGdd": 970,
    "table": "6.12",
    "id": "cucumber-minimum-length"
  },
  {
    "label": "Cucumber (Cucumis sativus)",
    "season": "maximum length",
    "stages": {
      "initial": 370,
      "development": 510,
      "midSeason": 520,
      "lateSeason": 120
    },
    "totalGdd": 1520,
    "table": "6.12",
    "id": "cucumber-maximum-length"
  },
  {
    "label": "Eggplant (Solanum melongena)",
    "season": "minimum length",
    "stages": {
      "initial": 280,
      "development": 440,
      "midSeason": 380,
      "lateSeason": 80
    },
    "totalGdd": 1180,
    "table": "6.12",
    "id": "eggplant-minimum-length"
  },
  {
    "label": "Eggplant (Solanum melongena)",
    "season": "maximum length",
    "stages": {
      "initial": 230,
      "development": 540,
      "midSeason": 480,
      "lateSeason": 180
    },
    "totalGdd": 1430,
    "table": "6.12",
    "id": "eggplant-maximum-length"
  },
  {
    "label": "Pumpkin and winter squash (Cucurbita pepo)",
    "season": "minimum length",
    "stages": {
      "initial": 170,
      "development": 380,
      "midSeason": 370,
      "lateSeason": 150
    },
    "totalGdd": 1070,
    "table": "6.12",
    "id": "pumpkin-and-winter-squash-minimum-length"
  },
  {
    "label": "Pumpkin and winter squash (Cucurbita pepo)",
    "season": "maximum length",
    "stages": {
      "initial": 230,
      "development": 440,
      "midSeason": 430,
      "lateSeason": 200
    },
    "totalGdd": 1300,
    "table": "6.12",
    "id": "pumpkin-and-winter-squash-maximum-length"
  },
  {
    "label": "Squash, zucchini (Cucurbita pepo)",
    "season": "minimum length",
    "stages": {
      "initial": 90,
      "development": 200,
      "midSeason": 210,
      "lateSeason": 130
    },
    "totalGdd": 630,
    "table": "6.12",
    "id": "squash-zucchini-minimum-length"
  },
  {
    "label": "Squash, zucchini (Cucurbita pepo)",
    "season": "maximum length",
    "stages": {
      "initial": 160,
      "development": 370,
      "midSeason": 360,
      "lateSeason": 260
    },
    "totalGdd": 1150,
    "table": "6.12",
    "id": "squash-zucchini-maximum-length"
  },
  {
    "label": "Black and green gram (Vigna mungo)",
    "season": "common",
    "stages": {
      "initial": 110,
      "development": 240,
      "midSeason": 420,
      "lateSeason": 200
    },
    "totalGdd": 970,
    "table": "6.12",
    "id": "black-and-green-gram-common"
  },
  {
    "label": "Chickpea (Cicer arietinum)",
    "season": "minimum length",
    "stages": {
      "initial": 80,
      "development": 200,
      "midSeason": 400,
      "lateSeason": 220
    },
    "totalGdd": 900,
    "table": "6.12",
    "id": "chickpea-minimum-length"
  },
  {
    "label": "Chickpea (Cicer arietinum)",
    "season": "maximum length",
    "stages": {
      "initial": 120,
      "development": 250,
      "midSeason": 430,
      "lateSeason": 210
    },
    "totalGdd": 1010,
    "table": "6.12",
    "id": "chickpea-maximum-length"
  },
  {
    "label": "Cowpea (Vigna unguiculata)",
    "season": "minimum length",
    "stages": {
      "initial": 220,
      "development": 350,
      "midSeason": 440,
      "lateSeason": 230
    },
    "totalGdd": 1240,
    "table": "6.12",
    "id": "cowpea-minimum-length"
  },
  {
    "label": "Cowpea (Vigna unguiculata)",
    "season": "maximum length",
    "stages": {
      "initial": 310,
      "development": 450,
      "midSeason": 550,
      "lateSeason": 300
    },
    "totalGdd": 1610,
    "table": "6.12",
    "id": "cowpea-maximum-length"
  },
  {
    "label": "Fava bean (Vicia faba)",
    "season": "minimum length",
    "stages": {
      "initial": 80,
      "development": 200,
      "midSeason": 400,
      "lateSeason": 220
    },
    "totalGdd": 900,
    "table": "6.12",
    "id": "fava-bean-minimum-length"
  },
  {
    "label": "Fava bean (Vicia faba)",
    "season": "maximum length",
    "stages": {
      "initial": 120,
      "development": 250,
      "midSeason": 430,
      "lateSeason": 210
    },
    "totalGdd": 1010,
    "table": "6.12",
    "id": "fava-bean-maximum-length"
  },
  {
    "label": "Groundnut, peanut (Arachis hypogaea)",
    "season": "minimum length",
    "stages": {
      "initial": 240,
      "development": 470,
      "midSeason": 760,
      "lateSeason": 460
    },
    "totalGdd": 1930,
    "table": "6.12",
    "id": "groundnut-peanut-minimum-length"
  },
  {
    "label": "Groundnut, peanut (Arachis hypogaea)",
    "season": "maximum length",
    "stages": {
      "initial": 430,
      "development": 800,
      "midSeason": 600,
      "lateSeason": 310
    },
    "totalGdd": 2140,
    "table": "6.12",
    "id": "groundnut-peanut-maximum-length"
  },
  {
    "label": "Lentil (Lens culinaris)",
    "season": "minimum length",
    "stages": {
      "initial": 130,
      "development": 270,
      "midSeason": 830,
      "lateSeason": 620
    },
    "totalGdd": 1850,
    "table": "6.12",
    "id": "lentil-minimum-length"
  },
  {
    "label": "Lentil (Lens culinaris)",
    "season": "maximum length",
    "stages": {
      "initial": 120,
      "development": 300,
      "midSeason": 860,
      "lateSeason": 650
    },
    "totalGdd": 1930,
    "table": "6.12",
    "id": "lentil-maximum-length"
  },
  {
    "label": "Flax (Linseed) (Linum usitatissimum)",
    "season": "minimum length",
    "stages": {
      "initial": 210,
      "development": 450,
      "midSeason": 840,
      "lateSeason": 730
    },
    "totalGdd": 2230,
    "table": "6.12",
    "id": "flax-minimum-length"
  },
  {
    "label": "Flax (Linseed) (Linum usitatissimum)",
    "season": "maximum length",
    "stages": {
      "initial": 760,
      "development": 710,
      "midSeason": 1530,
      "lateSeason": 1150
    },
    "totalGdd": 4150,
    "table": "6.12",
    "id": "flax-maximum-length"
  },
  {
    "label": "Castorbean (Ricinus communis)",
    "season": "minimum length",
    "stages": {
      "initial": 280,
      "development": 530,
      "midSeason": 640,
      "lateSeason": 330
    },
    "totalGdd": 1780,
    "table": "6.12",
    "id": "castorbean-minimum-length"
  },
  {
    "label": "Castorbean (Ricinus communis)",
    "season": "maximum length",
    "stages": {
      "initial": 190,
      "development": 490,
      "midSeason": 880,
      "lateSeason": 550
    },
    "totalGdd": 2110,
    "table": "6.12",
    "id": "castorbean-maximum-length"
  },
  {
    "label": "Safflower (Carthamus tinctorius)",
    "season": "minimum length",
    "stages": {
      "initial": 110,
      "development": 410,
      "midSeason": 800,
      "lateSeason": 470
    },
    "totalGdd": 1790,
    "table": "6.12",
    "id": "safflower-minimum-length"
  },
  {
    "label": "Safflower (Carthamus tinctorius)",
    "season": "maximum length",
    "stages": {
      "initial": 220,
      "development": 520,
      "midSeason": 910,
      "lateSeason": 580
    },
    "totalGdd": 2230,
    "table": "6.12",
    "id": "safflower-maximum-length"
  },
  {
    "label": "Sesame (Sesamum indicum)",
    "season": "common",
    "stages": {
      "initial": 170,
      "development": 400,
      "midSeason": 570,
      "lateSeason": 190
    },
    "totalGdd": 1330,
    "table": "6.12",
    "id": "sesame-common"
  },
  {
    "label": "Sugar beet (Beta vulgaris)",
    "season": "minimum length",
    "stages": {
      "initial": 300,
      "development": 290,
      "midSeason": 790,
      "lateSeason": 520
    },
    "totalGdd": 1900,
    "table": "6.12",
    "id": "sugar-beet-minimum-length"
  },
  {
    "label": "Sugar beet (Beta vulgaris)",
    "season": "maximum length",
    "stages": {
      "initial": 490,
      "development": 690,
      "midSeason": 1770,
      "lateSeason": 120
    },
    "totalGdd": 3070,
    "table": "6.12",
    "id": "sugar-beet-maximum-length"
  },
  {
    "label": "Sugar cane (Saccharum officinarum), virgin",
    "season": "minimum length",
    "stages": {
      "initial": 350,
      "development": 810,
      "midSeason": 3480,
      "lateSeason": 1510
    },
    "totalGdd": 6150,
    "table": "6.12",
    "id": "sugar-cane-virgin-minimum-length"
  },
  {
    "label": "Sugar cane (Saccharum officinarum), virgin",
    "season": "maximum length",
    "stages": {
      "initial": 830,
      "development": 2110,
      "midSeason": 4990,
      "lateSeason": 3450
    },
    "totalGdd": 11380,
    "table": "6.12",
    "id": "sugar-cane-virgin-maximum-length"
  },
  {
    "label": "Sugar cane (Saccharum officinarum), ratoon",
    "season": "minimum length",
    "stages": {
      "initial": 250,
      "development": 910,
      "midSeason": 2630,
      "lateSeason": 770
    },
    "totalGdd": 4560,
    "table": "6.12",
    "id": "sugar-cane-ratoon-minimum-length"
  },
  {
    "label": "Sugar cane (Saccharum officinarum), ratoon",
    "season": "maximum length",
    "stages": {
      "initial": 350,
      "development": 1730,
      "midSeason": 3500,
      "lateSeason": 730
    },
    "totalGdd": 6310,
    "table": "6.12",
    "id": "sugar-cane-ratoon-maximum-length"
  },
  {
    "label": "Teff (Eragrostis tef)",
    "season": "minimum length",
    "stages": {
      "initial": 140,
      "development": 310,
      "midSeason": 750,
      "lateSeason": 280
    },
    "totalGdd": 1480,
    "table": "6.12",
    "id": "teff-minimum-length"
  },
  {
    "label": "Teff (Eragrostis tef)",
    "season": "maximum length",
    "stages": {
      "initial": 500,
      "development": 700,
      "midSeason": 1070,
      "lateSeason": 620
    },
    "totalGdd": 2890,
    "table": "6.12",
    "id": "teff-maximum-length"
  },
  {
    "label": "Hops (Humulus lupulus)",
    "season": "common",
    "stages": {
      "initial": 90,
      "development": 360,
      "midSeason": 1430,
      "lateSeason": 170
    },
    "totalGdd": 2050,
    "table": "6.12",
    "id": "hops-common"
  },
  {
    "label": "Alfalfa (Medicago sativa), first cutting cycle",
    "season": "minimum length",
    "stages": {
      "initial": 130,
      "development": 270,
      "midSeason": 290,
      "lateSeason": 160
    },
    "totalGdd": 850,
    "table": "6.12",
    "id": "alfalfa-first-cutting-cycle-minimum-length"
  },
  {
    "label": "Alfalfa (Medicago sativa), first cutting cycle",
    "season": "maximum length",
    "stages": {
      "initial": 70,
      "development": 310,
      "midSeason": 380,
      "lateSeason": 180
    },
    "totalGdd": 940,
    "table": "6.12",
    "id": "alfalfa-first-cutting-cycle-maximum-length"
  },
  {
    "label": "Alfalfa (Medicago sativa), middle cycles",
    "season": "minimum length",
    "stages": {
      "initial": 80,
      "development": 170,
      "midSeason": 180,
      "lateSeason": 100
    },
    "totalGdd": 530,
    "table": "6.12",
    "id": "alfalfa-middle-cycles-minimum-length"
  },
  {
    "label": "Alfalfa (Medicago sativa), middle cycles",
    "season": "maximum length",
    "stages": {
      "initial": 70,
      "development": 340,
      "midSeason": 190,
      "lateSeason": 220
    },
    "totalGdd": 820,
    "table": "6.12",
    "id": "alfalfa-middle-cycles-maximum-length"
  },
  {
    "label": "Bermuda (Cynodon dactylon), hay, several cuttings",
    "season": "minimum length",
    "stages": {
      "initial": 30,
      "development": 260,
      "midSeason": 510,
      "lateSeason": 450
    },
    "totalGdd": 1250,
    "table": "6.12",
    "id": "bermuda-hay-several-cuttings-minimum-length"
  },
  {
    "label": "Bermuda (Cynodon dactylon), hay, several cuttings",
    "season": "maximum length",
    "stages": {
      "initial": 80,
      "development": 260,
      "midSeason": 490,
      "lateSeason": 660
    },
    "totalGdd": 1490,
    "table": "6.12",
    "id": "bermuda-hay-several-cuttings-maximum-length"
  },
  {
    "label": "Grass pasture",
    "season": "common",
    "stages": {
      "initial": 30,
      "development": 260,
      "midSeason": 510,
      "lateSeason": 400
    },
    "totalGdd": 1200,
    "table": "6.12",
    "id": "grass-pasture-common"
  },
  {
    "label": "Sudan grass",
    "season": "minimum length",
    "stages": {
      "initial": 50,
      "development": 290,
      "midSeason": 250,
      "lateSeason": 160
    },
    "totalGdd": 750,
    "table": "6.12",
    "id": "sudan-grass-minimum-length"
  },
  {
    "label": "Sudan grass",
    "season": "maximum length",
    "stages": {
      "initial": 320,
      "development": 410,
      "midSeason": 290,
      "lateSeason": 210
    },
    "totalGdd": 1230,
    "table": "6.12",
    "id": "sudan-grass-maximum-length"
  }
]

export const REV1_THERMAL_THRESHOLDS = Object.freeze(Object.fromEntries(
  RAW_THRESHOLDS.map(record => [record.id, Object.freeze({
    id: record.id,
    label: record.label,
    tBaseC: record.tBaseC,
    tUpperC: record.tUpperC,
    source: Object.freeze({ ...REV1_THERMAL_SOURCE, table: record.table }),
  })]),
))

export const REV1_GDD_STAGES = Object.freeze(Object.fromEntries(
  RAW_GDD_STAGES.map(record => [record.id, Object.freeze({
    id: record.id,
    label: record.label,
    season: record.season,
    stages: Object.freeze(record.stages),
    totalGdd: record.totalGdd,
    source: Object.freeze({ ...REV1_THERMAL_SOURCE, table: record.table }),
  })]),
))

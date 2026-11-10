const REV1_SOURCE = Object.freeze({
  edition: 'FAO-56 Rev.1',
  year: 2025,
  license: 'CC BY 4.0',
  doi: '10.4060/cd6621en',
})

const RAW_CATALOG = [
  {
    "label": "Asparagus (Asparagus officinalis)",
    "category": "vegetable",
    "kc": [
      0.5,
      1.0,
      0.3
    ],
    "height": 0.8,
    "root": [
      1.2,
      1.8
    ],
    "kcb": [
      0.15,
      0.8,
      0.2
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 16,
    "id": "asparagus"
  },
  {
    "label": "Carrots (Daucus carota)",
    "category": "vegetable",
    "kc": [
      0.7,
      1.0,
      0.85
    ],
    "height": 0.3,
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      0.9,
      0.75
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 18,
    "id": "carrots"
  },
  {
    "label": "Cassava — Year 1",
    "category": "vegetable",
    "kc": [
      0.3,
      1.0,
      0.6
    ],
    "height": 1.0,
    "root": [
      0.5,
      0.8
    ],
    "kcb": [
      0.15,
      0.95,
      0.5
    ],
    "cover": 0.8,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 21,
    "id": "cassava-year-1"
  },
  {
    "label": "Cassava — Year 2",
    "category": "vegetable",
    "kc": [
      0.6,
      1.1,
      0.6
    ],
    "height": 1.5,
    "root": [
      0.7,
      1.0
    ],
    "kcb": [
      0.5,
      1.0,
      0.5
    ],
    "cover": 0.8,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 22,
    "id": "cassava-year-2"
  },
  {
    "label": "Celeriac, celery root (Apium graveolens group rapaceum)",
    "category": "vegetable",
    "kc": [
      0.6,
      1.05,
      1.0
    ],
    "height": [
      0.6,
      0.9
    ],
    "root": [
      0.2,
      0.5
    ],
    "kcb": [
      0.15,
      0.95,
      0.85
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 24,
    "id": "celeriac-celery-root"
  },
  {
    "label": "Chufa, tigernut (Cyperus esculentus)",
    "category": "vegetable",
    "kc": [
      0.5,
      1.1,
      0.6
    ],
    "height": 0.6,
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      1.0,
      0.5
    ],
    "cover": 0.98,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 25,
    "id": "chufa-tigernut"
  },
  {
    "label": "Garlic (Allium sativum)",
    "category": "vegetable",
    "kc": [
      0.7,
      1.05,
      0.7
    ],
    "height": 0.5,
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      1.0,
      0.5
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 26,
    "id": "garlic"
  },
  {
    "label": "Leek (Allium porrum)",
    "category": "vegetable",
    "kc": [
      0.7,
      1.0,
      0.9
    ],
    "height": 0.5,
    "root": [
      0.3,
      0.9
    ],
    "kcb": [
      0.15,
      0.95,
      0.85
    ],
    "cover": 0.8,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 28,
    "id": "leek"
  },
  {
    "label": "Mashua (Tropaeolum tuberosum)",
    "category": "vegetable",
    "kc": [
      0.5,
      1.05,
      0.75
    ],
    "height": 0.6,
    "root": [
      0.3,
      0.6
    ],
    "kcb": [
      0.15,
      1.0,
      0.65
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 29,
    "id": "mashua"
  },
  {
    "label": "Onions — Dry",
    "category": "vegetable",
    "kc": [
      0.7,
      1.05,
      0.7
    ],
    "height": 0.45,
    "root": [
      0.3,
      0.6
    ],
    "kcb": [
      0.15,
      1.0,
      0.6
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 31,
    "id": "onions-dry"
  },
  {
    "label": "Onions — Green",
    "category": "vegetable",
    "kc": [
      0.7,
      1.0,
      0.9
    ],
    "height": 0.45,
    "root": [
      0.3,
      0.6
    ],
    "kcb": [
      0.15,
      0.95,
      0.8
    ],
    "cover": 0.75,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 32,
    "id": "onions-green"
  },
  {
    "label": "Onions — Seed",
    "category": "vegetable",
    "kc": [
      0.7,
      1.0,
      0.5
    ],
    "height": 0.45,
    "root": [
      0.3,
      0.6
    ],
    "kcb": [
      0.15,
      0.95,
      0.45
    ],
    "cover": 0.75,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 33,
    "id": "onions-seed"
  },
  {
    "label": "Parsnip (Pastinaca sativa)",
    "category": "vegetable",
    "kc": [
      0.5,
      1.05,
      1.0
    ],
    "height": 0.4,
    "root": [
      0.5,
      1.0
    ],
    "kcb": [
      0.15,
      1.0,
      0.95
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 34,
    "id": "parsnip"
  },
  {
    "label": "Potato — Long season",
    "category": "vegetable",
    "kc": [
      0.5,
      1.1,
      0.4
    ],
    "height": 0.6,
    "root": [
      0.4,
      0.6
    ],
    "kcb": [
      0.15,
      1.05,
      0.3
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 36,
    "id": "potato-long-season"
  },
  {
    "label": "Potato — Short season",
    "category": "vegetable",
    "kc": [
      0.5,
      1.1,
      0.6
    ],
    "height": 0.6,
    "root": [
      0.4,
      0.6
    ],
    "kcb": [
      0.15,
      1.05,
      0.5
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 37,
    "id": "potato-short-season"
  },
  {
    "label": "Radish (Raphanus sativus)",
    "category": "vegetable",
    "kc": [
      0.7,
      0.95,
      0.85
    ],
    "height": 0.3,
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      0.9,
      0.75
    ],
    "cover": 0.8,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 38,
    "id": "radish"
  },
  {
    "label": "Rutabaga (Brassica napobrassica)",
    "category": "vegetable",
    "kc": [
      0.5,
      1.1,
      1.0
    ],
    "height": 0.6,
    "root": [
      0.5,
      1.0
    ],
    "kcb": [
      0.15,
      1.05,
      0.9
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 39,
    "id": "rutabaga"
  },
  {
    "label": "Sweet potato (Ipomoea batatas)",
    "category": "vegetable",
    "kc": [
      0.5,
      1.1,
      0.65
    ],
    "height": 0.5,
    "root": [
      1.0,
      1.2
    ],
    "kcb": [
      0.15,
      1.05,
      0.5
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 41,
    "id": "sweet-potato"
  },
  {
    "label": "Table beets (Beta vulgaris)",
    "category": "vegetable",
    "kc": [
      0.5,
      1.05,
      1.0
    ],
    "height": 0.4,
    "root": [
      0.45,
      1.0
    ],
    "kcb": [
      0.15,
      1.0,
      0.9
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 42,
    "id": "table-beets"
  },
  {
    "label": "Turnip (Brassica rapa cv. rapa)",
    "category": "vegetable",
    "kc": [
      0.5,
      1.05,
      1.0
    ],
    "height": 0.6,
    "root": [
      0.5,
      0.9
    ],
    "kcb": [
      0.15,
      1.0,
      0.95
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 43,
    "id": "turnip"
  },
  {
    "label": "Yam, Taro (Colocasia esculenta)",
    "category": "vegetable",
    "kc": [
      0.7,
      1.05,
      1.0
    ],
    "height": 1.2,
    "root": [
      0.3,
      0.4
    ],
    "kcb": [
      0.15,
      1.0,
      0.95
    ],
    "cover": 0.8,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 44,
    "id": "yam-taro"
  },
  {
    "label": "African cabbage, spiderwisp (Cleome gynandra)",
    "category": "vegetable",
    "kc": [
      0.6,
      1.0,
      0.9
    ],
    "height": [
      0.3,
      0.45
    ],
    "root": [
      0.5,
      0.8
    ],
    "kcb": [
      0.15,
      0.9,
      0.75
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 47,
    "id": "african-cabbage-spiderwisp"
  },
  {
    "label": "African spinach (Amaranthus cruentus)",
    "category": "vegetable",
    "kc": [
      0.6,
      1.1,
      1.0
    ],
    "height": [
      0.5,
      1.2
    ],
    "root": [
      0.3,
      0.6
    ],
    "kcb": [
      0.15,
      1.0,
      0.9
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 49,
    "id": "african-spinach"
  },
  {
    "label": "Artichoke (Cynara scolymus)",
    "category": "vegetable",
    "kc": [
      0.5,
      1.0,
      0.95
    ],
    "height": 0.8,
    "root": [
      0.6,
      1.2
    ],
    "kcb": [
      0.15,
      0.85,
      0.8
    ],
    "cover": 0.75,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 50,
    "id": "artichoke"
  },
  {
    "label": "Arugula, rucula (Eruca sativa or E. vesicaria)",
    "category": "vegetable",
    "kc": [
      0.7,
      1.0,
      1.0
    ],
    "height": 0.45,
    "root": [
      0.3,
      0.6
    ],
    "kcb": [
      0.15,
      0.95,
      0.95
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 51,
    "id": "arugula-rucula"
  },
  {
    "label": "Broccoli (Brassica oleracea cv. italica)",
    "category": "vegetable",
    "kc": [
      0.7,
      1.1,
      1.1
    ],
    "height": 0.6,
    "root": [
      0.4,
      0.9
    ],
    "kcb": [
      0.15,
      1.0,
      1.0
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 53,
    "id": "broccoli"
  },
  {
    "label": "Brussel sprouts (B. oleracea cv. gemmifera)",
    "category": "vegetable",
    "kc": [
      0.7,
      1.05,
      1.05
    ],
    "height": 0.75,
    "root": [
      0.4,
      0.9
    ],
    "kcb": [
      0.15,
      1.0,
      1.0
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 54,
    "id": "brussel-sprouts"
  },
  {
    "label": "Common cabbage (B. oleracea cv. capitata)",
    "category": "vegetable",
    "kc": [
      0.7,
      1.05,
      1.0
    ],
    "height": 0.4,
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      1.0,
      0.9
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 56,
    "id": "common-cabbage"
  },
  {
    "label": "Kale and collard green — 1st year",
    "category": "vegetable",
    "kc": [
      0.6,
      0.95,
      0.9
    ],
    "height": [
      0.8,
      1.2
    ],
    "root": [
      0.5,
      0.8
    ],
    "kcb": [
      0.15,
      0.9,
      0.8
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 59,
    "id": "kale-and-collard-green-1st-year"
  },
  {
    "label": "Kale and collard green — 2nd year",
    "category": "vegetable",
    "kc": [
      0.7,
      0.95,
      0.85
    ],
    "height": [
      0.8,
      1.2
    ],
    "root": [
      0.5,
      0.8
    ],
    "kcb": [
      0.55,
      0.9,
      0.75
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 60,
    "id": "kale-and-collard-green-2nd-year"
  },
  {
    "label": "Chinese cabbage bok choy — 1st year",
    "category": "vegetable",
    "kc": [
      0.6,
      1.05,
      1.0
    ],
    "height": 0.4,
    "root": 0.5,
    "kcb": [
      0.15,
      1.0,
      0.9
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 62,
    "id": "chinese-cabbage-bok-choy-1st-year"
  },
  {
    "label": "Chinese cabbage bok choy — 2nd year",
    "category": "vegetable",
    "kc": [
      0.7,
      1.05,
      0.95
    ],
    "height": 0.4,
    "root": 0.5,
    "kcb": [
      0.55,
      1.0,
      0.8
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 63,
    "id": "chinese-cabbage-bok-choy-2nd-year"
  },
  {
    "label": "Chinese cabbage pak choi — 1st year",
    "category": "vegetable",
    "kc": [
      0.6,
      1.0,
      0.95
    ],
    "height": [
      0.3,
      0.4
    ],
    "root": [
      0.5,
      0.8
    ],
    "kcb": [
      0.15,
      0.95,
      0.8
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 66,
    "id": "chinese-cabbage-pak-choi-1st-year"
  },
  {
    "label": "Chinese cabbage pak choi — 2nd year",
    "category": "vegetable",
    "kc": [
      0.7,
      1.0,
      0.9
    ],
    "height": [
      0.3,
      0.4
    ],
    "root": [
      0.5,
      0.8
    ],
    "kcb": [
      0.5,
      0.95,
      0.75
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 67,
    "id": "chinese-cabbage-pak-choi-2nd-year"
  },
  {
    "label": "Cauliflower (B. oleracea cv. botrytis)",
    "category": "vegetable",
    "kc": [
      0.7,
      1.05,
      1.0
    ],
    "height": 0.4,
    "root": [
      0.4,
      0.9
    ],
    "kcb": [
      0.15,
      1.0,
      0.95
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 68,
    "id": "cauliflower"
  },
  {
    "label": "Celery (Apium graveolens var. dulce)",
    "category": "vegetable",
    "kc": [
      0.7,
      1.05,
      1.0
    ],
    "height": 0.6,
    "root": [
      0.3,
      0.9
    ],
    "kcb": [
      0.15,
      1.0,
      0.95
    ],
    "cover": 0.8,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 69,
    "id": "celery"
  },
  {
    "label": "Endive, escarola (Cichorium endivia)",
    "category": "vegetable",
    "kc": [
      0.4,
      0.9,
      0.85
    ],
    "height": [
      0.3,
      0.5
    ],
    "root": [
      0.15,
      0.3
    ],
    "kcb": [
      0.15,
      0.8,
      0.75
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 70,
    "id": "endive-escarola"
  },
  {
    "label": "Jute mallow for leaves (Corchorus olitorius)",
    "category": "vegetable",
    "kc": [
      0.5,
      1.05,
      0.95
    ],
    "height": [
      1.1,
      1.5
    ],
    "root": [
      0.5,
      0.7
    ],
    "kcb": [
      0.15,
      0.95,
      0.85
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 72,
    "id": "jute-mallow-for-leaves"
  },
  {
    "label": "Lettuce (Lactuca sativa)",
    "category": "vegetable",
    "kc": [
      0.7,
      1.05,
      1.05
    ],
    "height": 0.35,
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      1.0,
      1.0
    ],
    "cover": 0.8,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 73,
    "id": "lettuce"
  },
  {
    "label": "Purslane (Portulaca oleracea)",
    "category": "vegetable",
    "kc": [
      0.6,
      1.0,
      1.0
    ],
    "height": 0.4,
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      0.9,
      0.85
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 74,
    "id": "purslane"
  },
  {
    "label": "Spinach (Spinacia oleracea)",
    "category": "vegetable",
    "kc": [
      0.7,
      1.05,
      1.0
    ],
    "height": 0.35,
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      0.95,
      0.95
    ],
    "cover": 0.8,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 75,
    "id": "spinach"
  },
  {
    "label": "Banana — 1st cycle",
    "category": "vegetable",
    "kc": [
      0.5,
      1.05,
      1.0
    ],
    "height": [
      2.0,
      3.3
    ],
    "root": [
      0.5,
      1.2
    ],
    "kcb": [
      0.15,
      1.0,
      0.9
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 91,
    "id": "banana-1st-cycle"
  },
  {
    "label": "Banana — 2nd cycle",
    "category": "vegetable",
    "kc": [
      1.0,
      1.15,
      1.1
    ],
    "height": [
      2.5,
      4.0
    ],
    "root": [
      0.5,
      1.2
    ],
    "kcb": [
      0.6,
      1.05,
      1.0
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 92,
    "id": "banana-2nd-cycle"
  },
  {
    "label": "Bell pepper (Capsicum annuum)",
    "category": "vegetable",
    "kc": [
      0.6,
      1.1,
      1.0
    ],
    "height": 0.7,
    "root": [
      0.5,
      1.0
    ],
    "kcb": [
      0.15,
      1.0,
      0.7
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 94,
    "id": "bell-pepper"
  },
  {
    "label": "Bitter gourd, bitter melon (Momordica charantia)",
    "category": "vegetable",
    "kc": [
      0.6,
      1.0,
      0.7
    ],
    "height": [
      1.0,
      2.5
    ],
    "root": [
      0.4,
      0.8
    ],
    "kcb": [
      0.15,
      0.85,
      0.6
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 95,
    "id": "bitter-gourd-bitter-melon"
  },
  {
    "label": "Cape gooseberry — 1st year",
    "category": "vegetable",
    "kc": [
      0.45,
      0.5,
      0.4
    ],
    "height": 1.0,
    "root": [
      0.5,
      1.2
    ],
    "kcb": [
      0.25,
      0.4,
      0.3
    ],
    "cover": 0.3,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 97,
    "id": "cape-gooseberry-1st-year"
  },
  {
    "label": "Cape gooseberry — Following years*",
    "category": "vegetable",
    "kc": [
      0.55,
      0.95,
      0.65
    ],
    "height": [
      1.0,
      2.0
    ],
    "root": [
      0.5,
      1.2
    ],
    "kcb": [
      0.35,
      0.85,
      0.5
    ],
    "cover": [
      0.3,
      0.5
    ],
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 99,
    "id": "cape-gooseberry-following-years"
  },
  {
    "label": "Chili habanero (Capsicum chinense)",
    "category": "vegetable",
    "kc": [
      0.6,
      1.15,
      0.75
    ],
    "height": 0.8,
    "root": [
      0.5,
      1.2
    ],
    "kcb": [
      0.15,
      1.05,
      0.65
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 100,
    "id": "chili-habanero"
  },
  {
    "label": "Chili pepper (Capsicum annuum)",
    "category": "vegetable",
    "kc": [
      0.6,
      1.1,
      0.8
    ],
    "height": 0.75,
    "root": [
      0.5,
      1.2
    ],
    "kcb": [
      0.15,
      1.05,
      0.7
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 101,
    "id": "chili-pepper"
  },
  {
    "label": "Chili tabasco pepper — First harvest",
    "category": "vegetable",
    "kc": [
      0.6,
      1.15,
      0.75
    ],
    "height": 0.8,
    "root": [
      0.5,
      1.2
    ],
    "kcb": [
      0.15,
      1.05,
      0.65
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 103,
    "id": "chili-tabasco-pepper-first-harvest"
  },
  {
    "label": "Chili tabasco pepper — Second harvest",
    "category": "vegetable",
    "kc": [
      0.7,
      1.05,
      0.65
    ],
    "height": 0.8,
    "root": [
      0.5,
      1.2
    ],
    "kcb": [
      0.55,
      1.0,
      0.6
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 104,
    "id": "chili-tabasco-pepper-second-harvest"
  },
  {
    "label": "Cucumber — For processing",
    "category": "vegetable",
    "kc": [
      0.6,
      1.0,
      0.9
    ],
    "height": 0.4,
    "root": [
      0.6,
      1.2
    ],
    "kcb": [
      0.15,
      0.95,
      0.8
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 107,
    "id": "cucumber-for-processing"
  },
  {
    "label": "Cucumber — Fresh market",
    "category": "vegetable",
    "kc": [
      0.6,
      1.0,
      0.75
    ],
    "height": 0.4,
    "root": [
      0.6,
      1.2
    ],
    "kcb": [
      0.15,
      0.95,
      0.7
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 108,
    "id": "cucumber-fresh-market"
  },
  {
    "label": "Cucumber — Fresh market, on trellis",
    "category": "vegetable",
    "kc": [
      0.6,
      1.0,
      0.75
    ],
    "height": [
      0.8,
      1.2
    ],
    "root": [
      0.6,
      1.2
    ],
    "kcb": [
      0.15,
      0.95,
      0.7
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 109,
    "id": "cucumber-fresh-market-on-trellis"
  },
  {
    "label": "Eggplant (Solanum melongena)",
    "category": "vegetable",
    "kc": [
      0.6,
      1.05,
      0.95
    ],
    "height": 0.8,
    "root": [
      0.4,
      1.0
    ],
    "kcb": [
      0.15,
      1.0,
      0.9
    ],
    "cover": 0.75,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 110,
    "id": "eggplant"
  },
  {
    "label": "Fennel (Foeniculum vulgare)",
    "category": "vegetable",
    "kc": [
      0.35,
      1.0,
      0.4
    ],
    "height": [
      0.45,
      0.7
    ],
    "root": [
      0.4,
      0.8
    ],
    "kcb": [
      0.15,
      0.9,
      0.3
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 111,
    "id": "fennel"
  },
  {
    "label": "Melon (Cucumis melo)",
    "category": "vegetable",
    "kc": [
      0.5,
      1.0,
      0.8
    ],
    "height": 0.3,
    "root": [
      0.6,
      1.2
    ],
    "kcb": [
      0.15,
      0.95,
      0.75
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 113,
    "id": "melon"
  },
  {
    "label": "Melon cantaloupe (C. melo cv. cantalupensis)",
    "category": "vegetable",
    "kc": [
      0.5,
      1.0,
      0.8
    ],
    "height": 0.3,
    "root": [
      0.6,
      1.2
    ],
    "kcb": [
      0.15,
      0.95,
      0.7
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 114,
    "id": "melon-cantaloupe"
  },
  {
    "label": "Nightshade, sunberry (Solanum retroflexum)",
    "category": "vegetable",
    "kc": [
      0.7,
      1.0,
      0.95
    ],
    "height": 0.75,
    "root": [
      0.6,
      0.8
    ],
    "kcb": [
      0.15,
      0.85,
      0.8
    ],
    "cover": 0.8,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 115,
    "id": "nightshade-sunberry"
  },
  {
    "label": "Okra (Abelmoschus esculentus)",
    "category": "vegetable",
    "kc": [
      0.5,
      0.95,
      0.8
    ],
    "height": 0.9,
    "root": [
      0.6,
      0.8
    ],
    "kcb": [
      0.15,
      0.9,
      0.75
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 116,
    "id": "okra"
  },
  {
    "label": "Pineapple (Ananas comosus)",
    "category": "vegetable",
    "kc": [
      0.4,
      0.9,
      0.9
    ],
    "height": 0.4,
    "root": [
      0.3,
      0.6
    ],
    "kcb": [
      0.15,
      0.85,
      0.8
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 118,
    "id": "pineapple"
  },
  {
    "label": "Pumpkin, winter squash (Cucurbita pepo)",
    "category": "vegetable",
    "kc": [
      0.5,
      0.95,
      0.7
    ],
    "height": 0.4,
    "root": [
      0.9,
      1.5
    ],
    "kcb": [
      0.15,
      0.9,
      0.55
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 119,
    "id": "pumpkin-winter-squash"
  },
  {
    "label": "Strawberries (Fragaria × ananassa)",
    "category": "vegetable",
    "kc": [
      0.5,
      0.8,
      0.75
    ],
    "height": 0.2,
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      0.75,
      0.65
    ],
    "cover": 0.75,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 120,
    "id": "strawberries"
  },
  {
    "label": "Tomato — For processing",
    "category": "vegetable",
    "kc": [
      0.6,
      1.1,
      0.85
    ],
    "height": 0.6,
    "root": [
      0.6,
      1.2
    ],
    "kcb": [
      0.15,
      1.05,
      0.75
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 122,
    "id": "tomato-for-processing"
  },
  {
    "label": "Tomato — Fresh market",
    "category": "vegetable",
    "kc": [
      0.6,
      1.1,
      1.0
    ],
    "height": 0.6,
    "root": [
      0.6,
      1.2
    ],
    "kcb": [
      0.15,
      1.05,
      0.9
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 123,
    "id": "tomato-fresh-market"
  },
  {
    "label": "Tomato — Fresh market, with trellis",
    "category": "vegetable",
    "kc": [
      0.6,
      1.15,
      0.9
    ],
    "height": 1.5,
    "root": [
      0.6,
      1.2
    ],
    "kcb": [
      0.15,
      1.1,
      0.8
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 124,
    "id": "tomato-fresh-market-with-trellis"
  },
  {
    "label": "Watermelon (Citrullus lanatus)",
    "category": "vegetable",
    "kc": [
      0.4,
      1.05,
      0.7
    ],
    "height": 0.4,
    "root": [
      0.8,
      1.5
    ],
    "kcb": [
      0.15,
      1.0,
      0.6
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 125,
    "id": "watermelon"
  },
  {
    "label": "Zucchini, Squash (Cucurbita pepo)",
    "category": "vegetable",
    "kc": [
      0.5,
      1.0,
      0.7
    ],
    "height": 0.5,
    "root": [
      0.6,
      1.1
    ],
    "kcb": [
      0.15,
      0.9,
      0.6
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 126,
    "id": "zucchini-squash"
  },
  {
    "label": "Chicory and bitter chicory",
    "category": "vegetable",
    "kc": [
      0.4,
      0.9,
      0.85
    ],
    "height": [
      0.45,
      0.9
    ],
    "root": [
      0.5,
      0.7
    ],
    "kcb": [
      0.15,
      0.85,
      0.75
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 131,
    "id": "chicory-and-bitter-chicory"
  },
  {
    "label": "Ginger (Zingiber officinale)",
    "category": "vegetable",
    "kc": [
      0.6,
      1.0,
      0.65
    ],
    "height": [
      0.5,
      0.9
    ],
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      0.75,
      0.5
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 133,
    "id": "ginger"
  },
  {
    "label": "Licorice (Glycyrrhiza glabra)",
    "category": "vegetable",
    "kc": [
      0.5,
      1.0,
      0.9
    ],
    "height": 1.0,
    "root": 0.9,
    "kcb": [
      0.15,
      0.9,
      0.75
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 135,
    "id": "licorice"
  },
  {
    "label": "Nutgrass, purple nutsedge (Cyperus rotundus)",
    "category": "vegetable",
    "kc": [
      0.5,
      0.9,
      0.6
    ],
    "height": [
      1.0,
      1.2
    ],
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      0.8,
      0.4
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 136,
    "id": "nutgrass-purple-nutsedge"
  },
  {
    "label": "Turmeric, golden curry (Curcuma longa)",
    "category": "vegetable",
    "kc": [
      0.4,
      1.05,
      0.9
    ],
    "height": [
      0.9,
      1.1
    ],
    "root": [
      0.2,
      0.4
    ],
    "kcb": [
      0.15,
      0.95,
      0.75
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 137,
    "id": "turmeric-golden-curry"
  },
  {
    "label": "Absinthe, wormwood, (Artemisia absinthium)",
    "category": "vegetable",
    "kc": [
      0.45,
      0.8,
      0.4
    ],
    "height": [
      0.8,
      1.2
    ],
    "root": [
      0.6,
      1.0
    ],
    "kcb": [
      0.15,
      0.7,
      0.3
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 140,
    "id": "absinthe-wormwood"
  },
  {
    "label": "Basil (Ocimum basilicum)",
    "category": "vegetable",
    "kc": [
      0.6,
      1.05,
      1.0
    ],
    "height": [
      0.5,
      1.0
    ],
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      0.95,
      0.9
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 141,
    "id": "basil"
  },
  {
    "label": "Cardamom, large & black (Amomum subulatum)",
    "category": "vegetable",
    "kc": [
      0.9,
      0.95,
      0.95
    ],
    "height": [
      1.5,
      3.0
    ],
    "root": [
      1.0,
      1.5
    ],
    "kcb": [
      0.15,
      0.85,
      0.85
    ],
    "cover": 0.8,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 142,
    "id": "cardamom-large-black"
  },
  {
    "label": "Chamomile (Chamomilla recutita)",
    "category": "vegetable",
    "kc": [
      0.35,
      0.85,
      0.5
    ],
    "height": [
      0.5,
      0.9
    ],
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      0.8,
      0.4
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 143,
    "id": "chamomile"
  },
  {
    "label": "Coriander (Coriandrum sativum)",
    "category": "vegetable",
    "kc": [
      0.6,
      1.1,
      1.05
    ],
    "height": [
      0.2,
      0.4
    ],
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      1.0,
      0.95
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 145,
    "id": "coriander"
  },
  {
    "label": "Fenugreek (Trigonella foenum-graecum)",
    "category": "vegetable",
    "kc": [
      0.6,
      1.0,
      0.75
    ],
    "height": [
      0.6,
      1.4
    ],
    "root": [
      0.3,
      0.8
    ],
    "kcb": [
      0.15,
      0.9,
      0.6
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 146,
    "id": "fenugreek"
  },
  {
    "label": "Lavender (Lavandula angustifolia)",
    "category": "vegetable",
    "kc": [
      0.35,
      0.95,
      0.8
    ],
    "height": [
      0.2,
      0.6
    ],
    "root": [
      0.5,
      1.0
    ],
    "kcb": [
      0.15,
      0.85,
      0.65
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 147,
    "id": "lavender"
  },
  {
    "label": "Lemon balm, balm (Melissa officinalis)",
    "category": "vegetable",
    "kc": [
      0.6,
      1.05,
      1.0
    ],
    "height": 0.5,
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      1.0,
      0.9
    ],
    "cover": 0.8,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 148,
    "id": "lemon-balm-balm"
  },
  {
    "label": "Japanese mint, wild mint (Mentha arvensis)",
    "category": "vegetable",
    "kc": [
      0.5,
      1.1,
      1.05
    ],
    "height": [
      0.3,
      0.8
    ],
    "root": [
      0.4,
      0.7
    ],
    "kcb": [
      0.15,
      1.05,
      1.0
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 165,
    "id": "japanese-mint-wild-mint"
  },
  {
    "label": "Peppermint — Single harvest",
    "category": "vegetable",
    "kc": [
      0.55,
      1.1,
      1.05
    ],
    "height": [
      0.3,
      0.5
    ],
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      1.05,
      0.95
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 167,
    "id": "peppermint-single-harvest"
  },
  {
    "label": "Peppermint — Multiple harvests",
    "category": "vegetable",
    "kc": [
      0.55,
      1.0,
      0.95
    ],
    "height": [
      0.3,
      0.5
    ],
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      0.9,
      0.85
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 168,
    "id": "peppermint-multiple-harvests"
  },
  {
    "label": "Spearmint, common mint (Mentha spicata)",
    "category": "vegetable",
    "kc": [
      0.5,
      1.0,
      0.95
    ],
    "height": [
      0.3,
      0.5
    ],
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      0.95,
      0.85
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 169,
    "id": "spearmint-common-mint"
  },
  {
    "label": "Oregano (Origanum vulgare)",
    "category": "vegetable",
    "kc": [
      0.4,
      0.9,
      0.8
    ],
    "height": [
      0.4,
      0.5
    ],
    "root": [
      0.3,
      0.7
    ],
    "kcb": [
      0.15,
      0.8,
      0.65
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 171,
    "id": "oregano"
  },
  {
    "label": "Parsley (Petroselinum crispum)",
    "category": "vegetable",
    "kc": [
      0.6,
      1.0,
      0.9
    ],
    "height": [
      0.3,
      0.45
    ],
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      0.95,
      0.85
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 172,
    "id": "parsley"
  },
  {
    "label": "Plumed cockscomb (Celosia argentea)",
    "category": "vegetable",
    "kc": [
      0.45,
      1.0,
      0.4
    ],
    "height": [
      0.5,
      0.6
    ],
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      0.85,
      0.3
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 173,
    "id": "plumed-cockscomb"
  },
  {
    "label": "Roselle (Hibiscus sabdariffa)",
    "category": "vegetable",
    "kc": [
      0.7,
      1.05,
      0.8
    ],
    "height": [
      0.5,
      0.7
    ],
    "root": [
      0.3,
      0.65
    ],
    "kcb": [
      0.15,
      0.95,
      0.7
    ],
    "cover": 0.8,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 174,
    "id": "roselle"
  },
  {
    "label": "Rosemary, rosmarin (Rosmarinus officinalis)",
    "category": "vegetable",
    "kc": [
      0.3,
      1.0,
      0.85
    ],
    "height": [
      0.45,
      0.8
    ],
    "root": [
      0.4,
      1.0
    ],
    "kcb": [
      0.15,
      0.8,
      0.6
    ],
    "cover": 0.85,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 176,
    "id": "rosemary-rosmarin"
  },
  {
    "label": "Saffron (Crocus sativus)",
    "category": "vegetable",
    "kc": [
      0.6,
      0.95,
      0.4
    ],
    "height": [
      0.1,
      0.15
    ],
    "root": [
      0.3,
      0.6
    ],
    "kcb": [
      0.15,
      0.85,
      0.3
    ],
    "cover": 0.3,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 177,
    "id": "saffron"
  },
  {
    "label": "Stevia, candyleaf, sweetleaf (Stevia rebaudiana)",
    "category": "vegetable",
    "kc": [
      0.45,
      0.95,
      0.7
    ],
    "height": [
      0.3,
      0.8
    ],
    "root": [
      0.3,
      0.6
    ],
    "kcb": [
      0.15,
      0.85,
      0.6
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 178,
    "id": "stevia-candyleaf-sweetleaf"
  },
  {
    "label": "Summer savory (Satureja hortensis)",
    "category": "vegetable",
    "kc": [
      0.6,
      1.1,
      1.1
    ],
    "height": 0.5,
    "root": [
      0.3,
      0.6
    ],
    "kcb": [
      0.15,
      1.0,
      0.95
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 179,
    "id": "summer-savory"
  },
  {
    "label": "Thyme (Thymus vulgaris)",
    "category": "vegetable",
    "kc": [
      0.3,
      0.95,
      0.8
    ],
    "height": [
      0.3,
      0.5
    ],
    "root": [
      0.2,
      0.3
    ],
    "kcb": [
      0.15,
      0.85,
      0.7
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 181,
    "id": "thyme"
  },
  {
    "label": "Yarrow (Achillea millefolium)",
    "category": "vegetable",
    "kc": [
      0.5,
      1.0,
      0.8
    ],
    "height": [
      0.9,
      1.0
    ],
    "root": 1.0,
    "kcb": [
      0.15,
      0.9,
      0.7
    ],
    "cover": 0.75,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 182,
    "id": "yarrow"
  },
  {
    "label": "Ajowan (Trachyspermum ammi)",
    "category": "vegetable",
    "kc": [
      0.7,
      0.9,
      0.4
    ],
    "height": [
      0.65,
      1.0
    ],
    "root": [
      0.5,
      0.8
    ],
    "kcb": [
      0.15,
      0.7,
      0.2
    ],
    "cover": [
      0.5,
      0.8
    ],
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 184,
    "id": "ajowan"
  },
  {
    "label": "Black cumin (Nigella sativa)",
    "category": "vegetable",
    "kc": [
      0.5,
      1.05,
      0.5
    ],
    "height": 0.4,
    "root": [
      0.5,
      0.8
    ],
    "kcb": [
      0.15,
      0.95,
      0.35
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 186,
    "id": "black-cumin"
  },
  {
    "label": "Chia (Salvia hispanica)",
    "category": "vegetable",
    "kc": [
      0.5,
      1.0,
      0.4
    ],
    "height": [
      0.4,
      1.2
    ],
    "root": [
      0.3,
      0.5
    ],
    "kcb": [
      0.15,
      0.9,
      0.3
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 187,
    "id": "chia"
  },
  {
    "label": "Cumin (Cuminum cyminum)",
    "category": "vegetable",
    "kc": [
      0.4,
      0.95,
      0.4
    ],
    "height": [
      0.15,
      0.4
    ],
    "root": [
      0.1,
      0.4
    ],
    "kcb": [
      0.15,
      0.8,
      0.3
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 188,
    "id": "cumin"
  },
  {
    "label": "Milk thistle (Silybum marianum or Carduus m.)",
    "category": "vegetable",
    "kc": [
      0.35,
      0.85,
      0.7
    ],
    "height": [
      1.0,
      1.85
    ],
    "root": [
      0.4,
      0.8
    ],
    "kcb": [
      0.15,
      0.75,
      0.55
    ],
    "cover": 0.75,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 189,
    "id": "milk-thistle"
  },
  {
    "label": "Lesquerella, popweed (Physaria fendleri)",
    "category": "vegetable",
    "kc": [
      0.3,
      0.85,
      0.3
    ],
    "height": [
      0.3,
      0.5
    ],
    "root": [
      0.15,
      0.35
    ],
    "kcb": [
      0.15,
      0.75,
      0.2
    ],
    "cover": 0.9,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 191,
    "id": "lesquerella-popweed"
  },
  {
    "label": "Vanilla (Vanilla planifolia) including tutor and shadow plants",
    "category": "vegetable",
    "kc": [
      1.0,
      1.0,
      1.0
    ],
    "height": [
      1.5,
      2.0
    ],
    "root": [
      0.4,
      0.6
    ],
    "kcb": [
      0.95,
      0.95,
      0.95
    ],
    "cover": 0.95,
    "tables": [
      "6.1",
      "7.1"
    ],
    "row": 192,
    "id": "vanilla-including-tutor-and-shadow-plants"
  },
  {
    "label": "Common bean — Green",
    "category": "field",
    "kc": [
      0.5,
      1.05,
      0.95
    ],
    "height": [
      0.5,
      0.7
    ],
    "root": [
      0.5,
      0.9
    ],
    "kcb": [
      0.15,
      1.0,
      0.85
    ],
    "cover": 0.8,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 212,
    "id": "common-bean-green"
  },
  {
    "label": "Common bean — Dry",
    "category": "field",
    "kc": [
      0.4,
      1.05,
      0.4
    ],
    "height": [
      0.5,
      0.7
    ],
    "root": [
      0.5,
      0.9
    ],
    "kcb": [
      0.15,
      1.0,
      0.3
    ],
    "cover": 0.8,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 213,
    "id": "common-bean-dry"
  },
  {
    "label": "Butter bean, lima bean (Phaseolus lunatus)",
    "category": "field",
    "kc": [
      0.4,
      1.0,
      0.4
    ],
    "height": [
      0.6,
      1.8
    ],
    "root": 0.65,
    "kcb": [
      0.15,
      0.9,
      0.25
    ],
    "cover": 0.6,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 215,
    "id": "butter-bean-lima-bean"
  },
  {
    "label": "Mat bean, moth bean (Vigna aconitifolia)",
    "category": "field",
    "kc": [
      0.55,
      1.05,
      0.35
    ],
    "height": [
      0.15,
      0.25
    ],
    "root": [
      0.8,
      1.4
    ],
    "kcb": [
      0.15,
      0.95,
      0.2
    ],
    "cover": 0.8,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 217,
    "id": "mat-bean-moth-bean"
  },
  {
    "label": "Black and green gram (Vigna mungo) — Black gram (dry)",
    "category": "field",
    "kc": [
      0.4,
      1.1,
      0.35
    ],
    "height": [
      0.5,
      0.7
    ],
    "root": [
      0.6,
      1.0
    ],
    "kcb": [
      0.15,
      1.05,
      0.25
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 220,
    "id": "black-and-green-gram-black-gram"
  },
  {
    "label": "Black and green gram (Vigna mungo) — Green gram",
    "category": "field",
    "kc": [
      0.4,
      1.1,
      0.4
    ],
    "height": [
      0.6,
      0.9
    ],
    "root": [
      0.4,
      1.0
    ],
    "kcb": [
      0.15,
      1.05,
      0.3
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 221,
    "id": "black-and-green-gram-green-gram"
  },
  {
    "label": "Chickpea, garbanzo (Cicer arietinum)",
    "category": "field",
    "kc": [
      0.4,
      1.05,
      0.35
    ],
    "height": [
      0.5,
      0.7
    ],
    "root": [
      0.7,
      1.0
    ],
    "kcb": [
      0.15,
      1.0,
      0.25
    ],
    "cover": 0.9,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 222,
    "id": "chickpea-garbanzo"
  },
  {
    "label": "Clusterbean, guar (Cyamopsis tetragonoloba) — For green beans",
    "category": "field",
    "kc": [
      0.4,
      1.0,
      0.9
    ],
    "height": [
      0.8,
      1.5
    ],
    "root": [
      0.5,
      1.0
    ],
    "kcb": [
      0.15,
      0.9,
      0.8
    ],
    "cover": 0.85,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 226,
    "id": "clusterbean-guar-for-green-beans"
  },
  {
    "label": "Clusterbean, guar (Cyamopsis tetragonoloba) — For guar gum",
    "category": "field",
    "kc": [
      0.4,
      1.0,
      0.4
    ],
    "height": [
      0.8,
      1.5
    ],
    "root": [
      0.5,
      1.0
    ],
    "kcb": [
      0.15,
      0.9,
      0.3
    ],
    "cover": 0.85,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 227,
    "id": "clusterbean-guar-for-guar-gum"
  },
  {
    "label": "Cowpea — Green",
    "category": "field",
    "kc": [
      0.4,
      1.05,
      0.6
    ],
    "height": [
      0.6,
      0.8
    ],
    "root": [
      0.6,
      1.3
    ],
    "kcb": [
      0.15,
      1.0,
      0.5
    ],
    "cover": 0.8,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 229,
    "id": "cowpea-green"
  },
  {
    "label": "Cowpea — Dry",
    "category": "field",
    "kc": [
      0.4,
      1.05,
      0.35
    ],
    "height": [
      0.6,
      0.8
    ],
    "root": [
      0.6,
      1.3
    ],
    "kcb": [
      0.15,
      1.0,
      0.25
    ],
    "cover": 0.8,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 230,
    "id": "cowpea-dry"
  },
  {
    "label": "Fava bean — Fresh",
    "category": "field",
    "kc": [
      0.5,
      1.1,
      1.0
    ],
    "height": 0.8,
    "root": [
      0.5,
      0.7
    ],
    "kcb": [
      0.15,
      1.05,
      0.95
    ],
    "cover": 0.85,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 232,
    "id": "fava-bean-fresh"
  },
  {
    "label": "Fava bean — Dry",
    "category": "field",
    "kc": [
      0.4,
      1.1,
      0.4
    ],
    "height": 0.8,
    "root": [
      0.5,
      0.7
    ],
    "kcb": [
      0.15,
      1.05,
      0.3
    ],
    "cover": 0.85,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 233,
    "id": "fava-bean-dry"
  },
  {
    "label": "Groundnut (peanut) (Arachis hypogaea)",
    "category": "field",
    "kc": [
      0.4,
      1.05,
      0.6
    ],
    "height": 0.5,
    "root": [
      0.5,
      1.0
    ],
    "kcb": [
      0.15,
      1.0,
      0.5
    ],
    "cover": 0.9,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 235,
    "id": "groundnut"
  },
  {
    "label": "Lentil (Lens culinaris)",
    "category": "field",
    "kc": [
      0.4,
      1.05,
      0.3
    ],
    "height": 0.5,
    "root": [
      0.6,
      0.8
    ],
    "kcb": [
      0.15,
      1.0,
      0.2
    ],
    "cover": 0.85,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 237,
    "id": "lentil"
  },
  {
    "label": "Pea — Fresh",
    "category": "field",
    "kc": [
      0.7,
      1.15,
      1.1
    ],
    "height": 0.6,
    "root": [
      0.6,
      1.0
    ],
    "kcb": [
      0.15,
      1.1,
      1.05
    ],
    "cover": 0.98,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 239,
    "id": "pea-fresh"
  },
  {
    "label": "Pea — Dry",
    "category": "field",
    "kc": [
      0.6,
      1.1,
      0.3
    ],
    "height": 0.8,
    "root": [
      0.6,
      1.0
    ],
    "kcb": [
      0.15,
      1.05,
      0.2
    ],
    "cover": 0.98,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 240,
    "id": "pea-dry"
  },
  {
    "label": "Soybean (Glycine max)",
    "category": "field",
    "kc": [
      0.4,
      1.1,
      0.5
    ],
    "height": 0.8,
    "root": [
      0.6,
      1.4
    ],
    "kcb": [
      0.15,
      1.05,
      0.35
    ],
    "cover": 0.98,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 241,
    "id": "soybean"
  },
  {
    "label": "Cotton (Gossypium hirsutum)",
    "category": "field",
    "kc": [
      0.4,
      1.1,
      0.5
    ],
    "height": 1.2,
    "root": [
      1.0,
      1.7
    ],
    "kcb": [
      0.15,
      1.05,
      0.4
    ],
    "cover": 0.9,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 243,
    "id": "cotton"
  },
  {
    "label": "Flax (Linseed) (Linum usitatissimum)",
    "category": "field",
    "kc": [
      0.45,
      1.05,
      0.25
    ],
    "height": 1.0,
    "root": [
      1.0,
      1.5
    ],
    "kcb": [
      0.15,
      1.0,
      0.2
    ],
    "cover": 0.85,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 244,
    "id": "flax"
  },
  {
    "label": "Jute mallow for fibre (Corchorus olitorius)",
    "category": "field",
    "kc": [
      0.5,
      1.0,
      1.0
    ],
    "height": [
      1.1,
      2.7
    ],
    "root": [
      0.5,
      0.7
    ],
    "kcb": [
      0.15,
      0.95,
      0.55
    ],
    "cover": 0.9,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 245,
    "id": "jute-mallow-for-fibre"
  },
  {
    "label": "Kenaf (Hibiscus cannabinus)",
    "category": "field",
    "kc": [
      0.4,
      1.1,
      0.7
    ],
    "height": [
      3.0,
      4.0
    ],
    "root": [
      0.5,
      0.8
    ],
    "kcb": [
      0.15,
      1.05,
      0.6
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 247,
    "id": "kenaf"
  },
  {
    "label": "Sisal (Agave sisalana)",
    "category": "field",
    "kc": [
      0.25,
      0.55,
      0.55
    ],
    "height": 1.5,
    "root": [
      0.5,
      1.0
    ],
    "kcb": [
      0.15,
      0.5,
      0.5
    ],
    "cover": 0.85,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 248,
    "id": "sisal"
  },
  {
    "label": "Sunn hemp (Crotalaria juncea)",
    "category": "field",
    "kc": [
      0.5,
      1.1,
      1.0
    ],
    "height": 1.1,
    "root": [
      0.5,
      0.7
    ],
    "kcb": [
      0.15,
      1.0,
      0.9
    ],
    "cover": 0.85,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 249,
    "id": "sunn-hemp"
  },
  {
    "label": "Camelina (Camelina sativa)",
    "category": "field",
    "kc": [
      0.2,
      1.1,
      0.45
    ],
    "height": 0.8,
    "root": [
      1.0,
      1.5
    ],
    "kcb": [
      0.15,
      1.05,
      0.35
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 251,
    "id": "camelina"
  },
  {
    "label": "Canola (Brassica napus)",
    "category": "field",
    "kc": [
      0.5,
      1.1,
      0.35
    ],
    "height": [
      1.0,
      1.5
    ],
    "root": [
      0.8,
      1.3
    ],
    "kcb": [
      0.15,
      1.05,
      0.25
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 252,
    "id": "canola"
  },
  {
    "label": "Castorbean (Ricinus communis)",
    "category": "field",
    "kc": [
      0.35,
      1.05,
      0.4
    ],
    "height": [
      1.0,
      1.5
    ],
    "root": [
      0.8,
      1.3
    ],
    "kcb": [
      0.15,
      1.0,
      0.3
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 253,
    "id": "castorbean"
  },
  {
    "label": "Linseed (Flax) (Linum usitatissimum)",
    "category": "field",
    "kc": [
      0.35,
      0.95,
      0.25
    ],
    "height": 0.9,
    "root": [
      1.0,
      1.5
    ],
    "kcb": [
      0.15,
      0.9,
      0.15
    ],
    "cover": 0.9,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 254,
    "id": "linseed"
  },
  {
    "label": "Mustard (Brassica juncea)",
    "category": "field",
    "kc": [
      0.35,
      1.1,
      0.4
    ],
    "height": [
      1.5,
      2.0
    ],
    "root": [
      0.5,
      1.1
    ],
    "kcb": [
      0.15,
      1.05,
      0.3
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 255,
    "id": "mustard"
  },
  {
    "label": "Safflower (Carthamus tinctorius)",
    "category": "field",
    "kc": [
      0.35,
      1.05,
      0.25
    ],
    "height": 1.1,
    "root": [
      1.0,
      2.0
    ],
    "kcb": [
      0.15,
      1.0,
      0.15
    ],
    "cover": 0.9,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 256,
    "id": "safflower"
  },
  {
    "label": "Sesame (Sesamum indicum)",
    "category": "field",
    "kc": [
      0.35,
      1.05,
      0.25
    ],
    "height": 1.3,
    "root": [
      1.0,
      1.5
    ],
    "kcb": [
      0.15,
      1.0,
      0.2
    ],
    "cover": 0.85,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 257,
    "id": "sesame"
  },
  {
    "label": "Sunflower (Helianthus annuus)",
    "category": "field",
    "kc": [
      0.35,
      1.15,
      0.3
    ],
    "height": 2.0,
    "root": [
      0.8,
      2.0
    ],
    "kcb": [
      0.15,
      1.1,
      0.2
    ],
    "cover": 0.9,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 258,
    "id": "sunflower"
  },
  {
    "label": "Sugar beet (Beta vulgaris)",
    "category": "field",
    "kc": [
      0.35,
      1.1,
      0.75
    ],
    "height": 0.5,
    "root": [
      0.7,
      1.2
    ],
    "kcb": [
      0.15,
      1.05,
      0.65
    ],
    "cover": 0.9,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 272,
    "id": "sugar-beet"
  },
  {
    "label": "Sugar cane (Saccharum officinarum)",
    "category": "field",
    "kc": [
      0.4,
      1.2,
      0.8
    ],
    "height": [
      3.0,
      4.0
    ],
    "root": [
      1.0,
      1.5
    ],
    "kcb": [
      0.15,
      1.15,
      0.7
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 273,
    "id": "sugar-cane"
  },
  {
    "label": "Cattail (Typha latifolia)",
    "category": "field",
    "kc": [
      0.7,
      1.15,
      0.85
    ],
    "height": [
      1.5,
      2.0
    ],
    "root": [
      1.0,
      1.5
    ],
    "kcb": null,
    "cover": null,
    "tables": [
      "6.2"
    ],
    "row": 275,
    "id": "cattail"
  },
  {
    "label": "Cordgrass (Spartina foliosa, S. alterniflora)",
    "category": "field",
    "kc": [
      1.0,
      1.15,
      1.15
    ],
    "height": [
      2.0,
      2.5
    ],
    "root": [
      1.0,
      1.5
    ],
    "kcb": null,
    "cover": null,
    "tables": [
      "6.2"
    ],
    "row": 277,
    "id": "cordgrass"
  },
  {
    "label": "Giant miscanthus (Miscanthus x giganteus)",
    "category": "field",
    "kc": [
      1.0,
      1.25,
      1.25
    ],
    "height": [
      2.0,
      3.0
    ],
    "root": [
      1.0,
      2.0
    ],
    "kcb": null,
    "cover": null,
    "tables": [
      "6.2"
    ],
    "row": 279,
    "id": "giant-miscanthus"
  },
  {
    "label": "Giant reed (Arundo donax)",
    "category": "field",
    "kc": [
      1.0,
      1.2,
      0.9
    ],
    "height": [
      2.0,
      3.0
    ],
    "root": [
      1.0,
      1.5
    ],
    "kcb": null,
    "cover": null,
    "tables": [
      "6.2"
    ],
    "row": 280,
    "id": "giant-reed"
  },
  {
    "label": "Reed canary grass (Phalaris arundinacea)",
    "category": "field",
    "kc": [
      1.0,
      1.15,
      0.9
    ],
    "height": [
      1.5,
      2.0
    ],
    "root": [
      1.0,
      2.0
    ],
    "kcb": null,
    "cover": null,
    "tables": [
      "6.2"
    ],
    "row": 281,
    "id": "reed-canary-grass"
  },
  {
    "label": "Sedge (Carex riparia, C. acutiformis)",
    "category": "field",
    "kc": [
      0.85,
      1.15,
      0.85
    ],
    "height": [
      1.0,
      2.0
    ],
    "root": [
      1.0,
      1.5
    ],
    "kcb": null,
    "cover": null,
    "tables": [
      "6.2"
    ],
    "row": 283,
    "id": "sedge"
  },
  {
    "label": "Switch grass (Panicum virgatum)",
    "category": "field",
    "kc": [
      0.9,
      0.95,
      0.95
    ],
    "height": [
      2.0,
      2.5
    ],
    "root": [
      1.5,
      3.0
    ],
    "kcb": null,
    "cover": null,
    "tables": [
      "6.2"
    ],
    "row": 284,
    "id": "switch-grass"
  },
  {
    "label": "Amaranth grain (Amaranthus sp.)",
    "category": "field",
    "kc": [
      0.3,
      1.1,
      0.25
    ],
    "height": 2.0,
    "root": [
      0.5,
      1.5
    ],
    "kcb": [
      0.15,
      1.05,
      0.2
    ],
    "cover": 0.8,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 286,
    "id": "amaranth-grain"
  },
  {
    "label": "Barley (Hordeum vulgare)",
    "category": "field",
    "kc": [
      0.3,
      1.1,
      0.25
    ],
    "height": [
      0.7,
      0.9
    ],
    "root": [
      0.6,
      1.2
    ],
    "kcb": [
      0.15,
      1.05,
      0.2
    ],
    "cover": 0.9,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 287,
    "id": "barley"
  },
  {
    "label": "Buckwheat (Fagopyrum esculentum)",
    "category": "field",
    "kc": [
      0.3,
      1.05,
      0.25
    ],
    "height": [
      1.0,
      1.2
    ],
    "root": [
      0.6,
      1.2
    ],
    "kcb": [
      0.15,
      1.0,
      0.2
    ],
    "cover": 0.9,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 288,
    "id": "buckwheat"
  },
  {
    "label": "Maize — Grain, low grain moisture at harvest",
    "category": "field",
    "kc": [
      0.3,
      1.2,
      0.3
    ],
    "height": [
      2.5,
      3.5
    ],
    "root": [
      0.6,
      1.5
    ],
    "kcb": [
      0.15,
      1.15,
      0.25
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 290,
    "id": "maize-grain-low-grain-moisture-at-harvest"
  },
  {
    "label": "Maize — Grain, high grain moisture at harvest",
    "category": "field",
    "kc": [
      0.3,
      1.2,
      0.65
    ],
    "height": [
      2.5,
      3.5
    ],
    "root": [
      0.6,
      1.5
    ],
    "kcb": [
      0.15,
      1.15,
      0.55
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 291,
    "id": "maize-grain-high-grain-moisture-at-harvest"
  },
  {
    "label": "Maize — Silage",
    "category": "field",
    "kc": [
      0.3,
      1.15,
      0.95
    ],
    "height": [
      2.5,
      3.2
    ],
    "root": [
      0.6,
      1.5
    ],
    "kcb": [
      0.15,
      1.1,
      0.8
    ],
    "cover": 0.9,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 292,
    "id": "maize-silage"
  },
  {
    "label": "Maize — Sweet",
    "category": "field",
    "kc": [
      0.3,
      1.15,
      1.05
    ],
    "height": [
      1.5,
      2.5
    ],
    "root": [
      0.6,
      1.5
    ],
    "kcb": [
      0.15,
      1.1,
      1.0
    ],
    "cover": 0.85,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 293,
    "id": "maize-sweet"
  },
  {
    "label": "Oats (Avena sativa)",
    "category": "field",
    "kc": [
      0.3,
      1.05,
      0.25
    ],
    "height": [
      0.8,
      1.1
    ],
    "root": [
      1.0,
      1.5
    ],
    "kcb": [
      0.15,
      1.0,
      0.2
    ],
    "cover": 0.9,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 295,
    "id": "oats"
  },
  {
    "label": "Pearl Millet (Pennisetum glaucum)",
    "category": "field",
    "kc": [
      0.3,
      1.1,
      0.35
    ],
    "height": 2.0,
    "root": [
      1.0,
      2.0
    ],
    "kcb": [
      0.15,
      1.05,
      0.2
    ],
    "cover": 0.85,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 296,
    "id": "pearl-millet"
  },
  {
    "label": "Quinoa (Chenopodium quinoa)",
    "category": "field",
    "kc": [
      0.4,
      1.1,
      0.5
    ],
    "height": [
      1.0,
      1.2
    ],
    "root": [
      0.6,
      1.2
    ],
    "kcb": [
      0.15,
      1.05,
      0.4
    ],
    "cover": 0.8,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 297,
    "id": "quinoa"
  },
  {
    "label": "Rye (Secale cereale)",
    "category": "field",
    "kc": [
      0.3,
      1.0,
      0.25
    ],
    "height": 0.9,
    "root": [
      0.6,
      1.2
    ],
    "kcb": [
      0.15,
      0.95,
      0.2
    ],
    "cover": 0.9,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 298,
    "id": "rye"
  },
  {
    "label": "Sorghum — Grain",
    "category": "field",
    "kc": [
      0.3,
      1.05,
      0.45
    ],
    "height": [
      1.5,
      2.0
    ],
    "root": [
      1.0,
      1.5
    ],
    "kcb": [
      0.15,
      1.0,
      0.35
    ],
    "cover": 0.85,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 300,
    "id": "sorghum-grain"
  },
  {
    "label": "Sorghum — Silage",
    "category": "field",
    "kc": [
      0.3,
      1.05,
      0.9
    ],
    "height": [
      2.0,
      3.0
    ],
    "root": [
      1.0,
      1.5
    ],
    "kcb": [
      0.15,
      0.95,
      0.85
    ],
    "cover": 0.8,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 301,
    "id": "sorghum-silage"
  },
  {
    "label": "Sorghum — Sweet",
    "category": "field",
    "kc": [
      0.3,
      1.1,
      0.95
    ],
    "height": [
      3.0,
      4.0
    ],
    "root": [
      0.6,
      1.5
    ],
    "kcb": [
      0.15,
      1.05,
      0.9
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 302,
    "id": "sorghum-sweet"
  },
  {
    "label": "Teff (Eragrostis tef)",
    "category": "field",
    "kc": [
      0.3,
      1.05,
      0.3
    ],
    "height": 1.1,
    "root": [
      0.6,
      1.2
    ],
    "kcb": [
      0.15,
      1.0,
      0.2
    ],
    "cover": 0.8,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 303,
    "id": "teff"
  },
  {
    "label": "Wheat, common (Triticum aestivum) — Winter, low grain moisture at harvest",
    "category": "field",
    "kc": [
      0.7,
      1.15,
      0.25
    ],
    "height": [
      0.7,
      1.1
    ],
    "root": [
      1.0,
      1.5
    ],
    "kcb": [
      0.15,
      1.1,
      0.2
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 305,
    "id": "wheat-common-winter-low-grain-moisture-at-harvest"
  },
  {
    "label": "Wheat, common (Triticum aestivum) — Winter, high grain moisture at harvest",
    "category": "field",
    "kc": [
      0.7,
      1.15,
      0.55
    ],
    "height": [
      0.7,
      1.1
    ],
    "root": [
      1.0,
      1.5
    ],
    "kcb": [
      0.15,
      1.1,
      0.45
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 306,
    "id": "wheat-common-winter-high-grain-moisture-at-harvest"
  },
  {
    "label": "Wheat, common (Triticum aestivum) — Spring, low grain moisture at harvest",
    "category": "field",
    "kc": [
      0.3,
      1.15,
      0.25
    ],
    "height": [
      0.7,
      1.1
    ],
    "root": [
      1.0,
      1.5
    ],
    "kcb": [
      0.15,
      1.1,
      0.2
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 308,
    "id": "wheat-common-spring-low-grain-moisture-at-harvest"
  },
  {
    "label": "Wheat, common (Triticum aestivum) — Spring, high grain moisture at harvest",
    "category": "field",
    "kc": [
      0.3,
      1.15,
      0.45
    ],
    "height": [
      0.7,
      1.1
    ],
    "root": [
      1.0,
      1.5
    ],
    "kcb": [
      0.15,
      1.1,
      0.4
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 310,
    "id": "wheat-common-spring-high-grain-moisture-at-harvest"
  },
  {
    "label": "Wheat, durum (Triticum durum) — Winter, low grain moisture at harvest",
    "category": "field",
    "kc": [
      0.5,
      1.05,
      0.25
    ],
    "height": [
      0.7,
      1.1
    ],
    "root": [
      1.0,
      1.5
    ],
    "kcb": [
      0.15,
      1.0,
      0.2
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 313,
    "id": "wheat-durum-winter-low-grain-moisture-at-harvest"
  },
  {
    "label": "Wheat, durum (Triticum durum) — Winter, high grain moisture at harvest",
    "category": "field",
    "kc": [
      0.5,
      1.05,
      0.55
    ],
    "height": [
      0.7,
      1.1
    ],
    "root": [
      1.0,
      1.5
    ],
    "kcb": [
      0.15,
      1.0,
      0.45
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 316,
    "id": "wheat-durum-winter-high-grain-moisture-at-harvest"
  },
  {
    "label": "Rice — Flooded",
    "category": "field",
    "kc": [
      1.05,
      1.2,
      1.05
    ],
    "height": 1.0,
    "root": 0.5,
    "kcb": [
      0.15,
      1.15,
      0.9
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 318,
    "id": "rice-flooded"
  },
  {
    "label": "Rice — Flooded, dry seeding",
    "category": "field",
    "kc": [
      0.85,
      1.2,
      1.05
    ],
    "height": 1.0,
    "root": 0.5,
    "kcb": [
      0.15,
      1.15,
      0.9
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 319,
    "id": "rice-flooded-dry-seeding"
  },
  {
    "label": "Rice — Flooded, anticipated cut–off",
    "category": "field",
    "kc": [
      1.05,
      1.2,
      0.8
    ],
    "height": 1.0,
    "root": 0.5,
    "kcb": [
      0.15,
      1.15,
      0.7
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 320,
    "id": "rice-flooded-anticipated-cut-off"
  },
  {
    "label": "Rice — Intermittent irrigation",
    "category": "field",
    "kc": [
      0.95,
      1.2,
      1.0
    ],
    "height": 1.0,
    "root": 0.7,
    "kcb": [
      0.15,
      1.15,
      0.85
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 321,
    "id": "rice-intermittent-irrigation"
  },
  {
    "label": "Rice — Aerobic, sprinkler irrigation",
    "category": "field",
    "kc": [
      0.9,
      1.1,
      0.8
    ],
    "height": 0.8,
    "root": 1.0,
    "kcb": [
      0.15,
      1.05,
      0.7
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 322,
    "id": "rice-aerobic-sprinkler-irrigation"
  },
  {
    "label": "Rice — Aerobic, surface irrigation",
    "category": "field",
    "kc": [
      0.9,
      1.1,
      0.85
    ],
    "height": 0.8,
    "root": 1.0,
    "kcb": [
      0.15,
      1.05,
      0.7
    ],
    "cover": 0.95,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 323,
    "id": "rice-aerobic-surface-irrigation"
  },
  {
    "label": "Rice — Rainfed",
    "category": "field",
    "kc": [
      0.8,
      1.0,
      0.8
    ],
    "height": 0.7,
    "root": [
      0.8,
      1.2
    ],
    "kcb": [
      0.15,
      0.95,
      0.7
    ],
    "cover": 0.9,
    "tables": [
      "6.2",
      "7.2"
    ],
    "row": 324,
    "id": "rice-rainfed"
  },
  {
    "label": "Olive (Olea europea) — Young (< 7 years traditional, < 4 years intensive)",
    "category": "woody",
    "kc": [
      0.4,
      0.35,
      0.4
    ],
    "height": [
      1.5,
      2.0
    ],
    "root": null,
    "kcb": [
      0.2,
      0.3,
      0.2
    ],
    "cover": [
      0.15,
      0.3
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 341,
    "id": "olive-young"
  },
  {
    "label": "Olive (Olea europea) — Traditional, non–irrigated; low density; 100 – 200 pl ha-1",
    "category": "woody",
    "kc": [
      0.45,
      0.45,
      0.45
    ],
    "height": [
      2.5,
      3.5
    ],
    "root": null,
    "kcb": [
      0.25,
      0.3,
      0.3
    ],
    "cover": [
      0.15,
      0.3
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 342,
    "id": "olive-traditional-non-irrigated-low-density-100-200-pl-ha-1"
  },
  {
    "label": "Olive (Olea europea) — Traditional, non–irrigated; medium density; 200 – 300 pl ha-1",
    "category": "woody",
    "kc": [
      0.5,
      0.5,
      0.5
    ],
    "height": [
      3.0,
      4.5
    ],
    "root": null,
    "kcb": [
      0.3,
      0.35,
      0.35
    ],
    "cover": [
      0.2,
      0.4
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 344,
    "id": "olive-traditional-non-irrigated-medium-density-200-300-pl-ha-1"
  },
  {
    "label": "Olive (Olea europea) — Intensive, hedge–prune; low to medium density; 300 – 800 pl ha-1",
    "category": "woody",
    "kc": [
      0.5,
      0.6,
      0.6
    ],
    "height": [
      3.0,
      3.5
    ],
    "root": null,
    "kcb": [
      0.4,
      0.5,
      0.45
    ],
    "cover": [
      0.3,
      0.4
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 346,
    "id": "olive-intensive-hedge-prune-low-to-medium-density-300-800-pl-ha-1"
  },
  {
    "label": "Olive (Olea europea) — Super–Intensive; medium density, hedgerow; 800 – 1500 pl ha-1",
    "category": "woody",
    "kc": [
      0.55,
      0.65,
      0.65
    ],
    "height": [
      3.0,
      3.5
    ],
    "root": null,
    "kcb": [
      0.45,
      0.6,
      0.55
    ],
    "cover": [
      0.35,
      0.45
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 347,
    "id": "olive-super-intensive-medium-density-hedgerow-800-1500-pl-ha-1"
  },
  {
    "label": "Olive (Olea europea) — Super–intensive; high density, hedgerow; 1 500 – 2 000 pl ha-1",
    "category": "woody",
    "kc": [
      0.6,
      0.7,
      0.7
    ],
    "height": [
      3.0,
      4.0
    ],
    "root": null,
    "kcb": [
      0.5,
      0.65,
      0.6
    ],
    "cover": [
      0.45,
      0.55
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 348,
    "id": "olive-super-intensive-high-density-hedgerow-1-500-2-000-pl-ha-1"
  },
  {
    "label": "Table grapes (Vitis vinifera) — Low (Young); diverse trellis and training",
    "category": "woody",
    "kc": [
      0.35,
      0.65,
      0.55
    ],
    "height": {
      "operator": "<",
      "value": 1.5
    },
    "root": null,
    "kcb": [
      0.2,
      0.55,
      0.45
    ],
    "cover": {
      "operator": "<",
      "value": 0.4
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 351,
    "id": "table-grapes-low-diverse-trellis-and-training"
  },
  {
    "label": "Table grapes (Vitis vinifera) — Medium; T–trellis, Y–trellis and vertical shoot positioned (VSP); 1 200 – 1 700 pl ha-1",
    "category": "woody",
    "kc": [
      0.35,
      0.95,
      0.7
    ],
    "height": [
      1.5,
      2.2
    ],
    "root": null,
    "kcb": [
      0.25,
      0.85,
      0.6
    ],
    "cover": [
      0.4,
      0.6
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 353,
    "id": "table-grapes-medium-t-trellis-y-trellis-and-vertical-shoot-positioned-1-200-1-700-pl-ha-1"
  },
  {
    "label": "Table grapes (Vitis vinifera) — High; Y–trellis and overhead system; 1 200 – 1 700 pl ha-1",
    "category": "woody",
    "kc": [
      0.45,
      1.1,
      0.8
    ],
    "height": [
      2.0,
      2.5
    ],
    "root": null,
    "kcb": [
      0.35,
      1.05,
      0.75
    ],
    "cover": [
      0.6,
      0.95
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 354,
    "id": "table-grapes-high-y-trellis-and-overhead-system-1-200-1-700-pl-ha-1"
  },
  {
    "label": "Wine grapes (Vitis vinifera) — Very low (Young < 5 years); diverse trellis and trainings; 2 000 – 3 300 pl ha-1",
    "category": "woody",
    "kc": [
      0.3,
      0.35,
      0.3
    ],
    "height": {
      "operator": "<",
      "value": 1.5
    },
    "root": null,
    "kcb": [
      0.1,
      0.2,
      0.15
    ],
    "cover": {
      "operator": "<",
      "value": 0.15
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 358,
    "id": "wine-grapes-very-low-diverse-trellis-and-trainings-2-000-3-300-pl-ha-1"
  },
  {
    "label": "Wine grapes (Vitis vinifera) — Low; diverse trellis and training; 2 000 – 3 300 pl ha-1",
    "category": "woody",
    "kc": [
      0.35,
      0.6,
      0.4
    ],
    "height": [
      1.5,
      2.0
    ],
    "root": null,
    "kcb": [
      0.2,
      0.45,
      0.25
    ],
    "cover": [
      0.15,
      0.35
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 359,
    "id": "wine-grapes-low-diverse-trellis-and-training-2-000-3-300-pl-ha-1"
  },
  {
    "label": "Wine grapes (Vitis vinifera) — Medium; VSP, single & double Guyot, GDC, single & bilateral cordon, Lyre, Y–trellis; 2 000 – 3 300 pl ha-1",
    "category": "woody",
    "kc": [
      0.4,
      0.8,
      0.55
    ],
    "height": [
      1.5,
      2.0
    ],
    "root": null,
    "kcb": [
      0.25,
      0.7,
      0.45
    ],
    "cover": [
      0.35,
      0.5
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 361,
    "id": "wine-grapes-medium-vsp-single-double-guyot-gdc-single-bilateral-cordon-lyre-y-trellis-2-000-3-300-pl"
  },
  {
    "label": "Wine grapes (Vitis vinifera) — High ; VSP, GDC, Lyre, Y–trellis, T–trellis, QCT, Pergola; 2 000 – 4 300 pl ha-1",
    "category": "woody",
    "kc": [
      0.4,
      0.95,
      0.65
    ],
    "height": [
      1.5,
      2.5
    ],
    "root": null,
    "kcb": [
      0.3,
      0.85,
      0.55
    ],
    "cover": [
      0.5,
      0.6
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 364,
    "id": "wine-grapes-high-vsp-gdc-lyre-y-trellis-t-trellis-qct-pergola-2-000-4-300-pl-ha-1"
  },
  {
    "label": "Wine grapes (Vitis vinifera) — Very high; Y–trellis, GDC and overhead system; 2 000 – 4 300 pl ha-1",
    "category": "woody",
    "kc": [
      0.45,
      1.05,
      0.7
    ],
    "height": [
      1.8,
      2.5
    ],
    "root": null,
    "kcb": [
      0.35,
      0.95,
      0.6
    ],
    "cover": {
      "operator": ">",
      "value": 0.6
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 366,
    "id": "wine-grapes-very-high-y-trellis-gdc-and-overhead-system-2-000-4-300-pl-ha-1"
  },
  {
    "label": "Clementine (Citrus clementina), Mandarin (C. reticulata), Lime (C. aurantifolia) — Young (< 5 years); vase",
    "category": "woody",
    "kc": [
      0.5,
      0.5,
      0.55
    ],
    "height": {
      "operator": "<",
      "value": 1.5
    },
    "root": null,
    "kcb": [
      0.35,
      0.35,
      0.35
    ],
    "cover": [
      0.1,
      0.2
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 370,
    "id": "clementine-mandarin-lime-young-vase"
  },
  {
    "label": "Clementine (Citrus clementina), Mandarin (C. reticulata), Lime (C. aurantifolia) — Low; vase; < 400 pl ha-1",
    "category": "woody",
    "kc": [
      0.55,
      0.6,
      0.6
    ],
    "height": [
      1.5,
      2.5
    ],
    "root": null,
    "kcb": [
      0.4,
      0.5,
      0.5
    ],
    "cover": [
      0.2,
      0.35
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 371,
    "id": "clementine-mandarin-lime-low-vase-400-pl-ha-1"
  },
  {
    "label": "Clementine (Citrus clementina), Mandarin (C. reticulata), Lime (C. aurantifolia) — Medium; vase; 400 – 550 pl ha-1",
    "category": "woody",
    "kc": [
      0.7,
      0.75,
      0.75
    ],
    "height": [
      2.5,
      3.0
    ],
    "root": null,
    "kcb": [
      0.6,
      0.65,
      0.65
    ],
    "cover": [
      0.35,
      0.6
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 372,
    "id": "clementine-mandarin-lime-medium-vase-400-550-pl-ha-1"
  },
  {
    "label": "Clementine (Citrus clementina), Mandarin (C. reticulata), Lime (C. aurantifolia) — High; vase; > 550 pl ha-1",
    "category": "woody",
    "kc": [
      0.8,
      0.85,
      0.85
    ],
    "height": [
      3.0,
      4.0
    ],
    "root": null,
    "kcb": [
      0.7,
      0.75,
      0.75
    ],
    "cover": {
      "operator": ">",
      "value": 0.6
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 373,
    "id": "clementine-mandarin-lime-high-vase-550-pl-ha-1"
  },
  {
    "label": "Lemon (C. limon) — Young (< 5 years); vase",
    "category": "woody",
    "kc": [
      0.5,
      0.4,
      0.55
    ],
    "height": {
      "operator": "<",
      "value": 1.5
    },
    "root": null,
    "kcb": [
      0.35,
      0.35,
      0.35
    ],
    "cover": [
      0.1,
      0.2
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 376,
    "id": "lemon-young-vase"
  },
  {
    "label": "Lemon (C. limon) — Low density; vase; < 200 pl ha-1",
    "category": "woody",
    "kc": [
      0.55,
      0.6,
      0.65
    ],
    "height": [
      1.5,
      2.5
    ],
    "root": null,
    "kcb": [
      0.4,
      0.55,
      0.55
    ],
    "cover": [
      0.2,
      0.5
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 377,
    "id": "lemon-low-density-vase-200-pl-ha-1"
  },
  {
    "label": "Lemon (C. limon) — Medium density; vase; 200 – 400 pl ha-1",
    "category": "woody",
    "kc": [
      0.75,
      0.75,
      0.8
    ],
    "height": [
      2.5,
      3.0
    ],
    "root": null,
    "kcb": [
      0.65,
      0.7,
      0.7
    ],
    "cover": [
      0.5,
      0.7
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 378,
    "id": "lemon-medium-density-vase-200-400-pl-ha-1"
  },
  {
    "label": "Lemon (C. limon) — High density; vase; > 400 pl ha-1",
    "category": "woody",
    "kc": [
      0.75,
      0.8,
      0.8
    ],
    "height": [
      3.0,
      4.0
    ],
    "root": null,
    "kcb": [
      0.7,
      0.75,
      0.75
    ],
    "cover": {
      "operator": ">",
      "value": 0.7
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 380,
    "id": "lemon-high-density-vase-400-pl-ha-1"
  },
  {
    "label": "Lemon (C. limon) — Hedgerow (Industry); > 1 000 pl ha-1",
    "category": "woody",
    "kc": [
      0.8,
      0.85,
      0.85
    ],
    "height": {
      "operator": ">",
      "value": 2.5
    },
    "root": null,
    "kcb": [
      0.7,
      0.75,
      0.75
    ],
    "cover": {
      "operator": ">",
      "value": 0.6
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 381,
    "id": "lemon-hedgerow-1-000-pl-ha-1"
  },
  {
    "label": "Orange (C. sinensis), Grapefruit (C. paradisi), Tangelo (C. tangelo) — Young (< 5 years); vase",
    "category": "woody",
    "kc": [
      0.5,
      0.45,
      0.5
    ],
    "height": {
      "operator": "<",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.35,
      0.35,
      0.35
    ],
    "cover": [
      0.1,
      0.2
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 383,
    "id": "orange-grapefruit-tangelo-young-vase"
  },
  {
    "label": "Orange (C. sinensis), Grapefruit (C. paradisi), Tangelo (C. tangelo) — Low; vase; < 400 pl ha-1",
    "category": "woody",
    "kc": [
      0.55,
      0.6,
      0.6
    ],
    "height": [
      2.0,
      3.0
    ],
    "root": null,
    "kcb": [
      0.4,
      0.5,
      0.45
    ],
    "cover": [
      0.2,
      0.4
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 385,
    "id": "orange-grapefruit-tangelo-low-vase-400-pl-ha-1"
  },
  {
    "label": "Orange (C. sinensis), Grapefruit (C. paradisi), Tangelo (C. tangelo) — Medium; vase; 400 – 600 pl ha-1",
    "category": "woody",
    "kc": [
      0.7,
      0.7,
      0.7
    ],
    "height": [
      3.0,
      4.0
    ],
    "root": null,
    "kcb": [
      0.6,
      0.65,
      0.6
    ],
    "cover": [
      0.4,
      0.7
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 386,
    "id": "orange-grapefruit-tangelo-medium-vase-400-600-pl-ha-1"
  },
  {
    "label": "Orange (C. sinensis), Grapefruit (C. paradisi), Tangelo (C. tangelo) — High; vase; 600 – 950 pl ha-1",
    "category": "woody",
    "kc": [
      0.7,
      0.8,
      0.75
    ],
    "height": {
      "operator": ">",
      "value": 4.0
    },
    "root": null,
    "kcb": [
      0.65,
      0.75,
      0.7
    ],
    "cover": {
      "operator": ">",
      "value": 0.7
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 387,
    "id": "orange-grapefruit-tangelo-high-vase-600-950-pl-ha-1"
  },
  {
    "label": "Orange (C. sinensis), Grapefruit (C. paradisi), Tangelo (C. tangelo) — Hedgerow (Industry); > 1 250 pl ha-1",
    "category": "woody",
    "kc": [
      0.7,
      0.75,
      0.75
    ],
    "height": {
      "operator": ">",
      "value": 2.5
    },
    "root": null,
    "kcb": [
      0.65,
      0.7,
      0.7
    ],
    "cover": {
      "operator": ">",
      "value": 0.6
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 388,
    "id": "orange-grapefruit-tangelo-hedgerow-1-250-pl-ha-1"
  },
  {
    "label": "Avocado (Persea americana) — Young (< 3 years); vase",
    "category": "woody",
    "kc": [
      0.5,
      0.5,
      0.5
    ],
    "height": {
      "operator": "<",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.3,
      0.35,
      0.35
    ],
    "cover": {
      "operator": "<",
      "value": 0.2
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 391,
    "id": "avocado-young-vase"
  },
  {
    "label": "Avocado (Persea americana) — Low ground cover; vase; < 300 pl ha-1",
    "category": "woody",
    "kc": [
      0.6,
      0.65,
      0.65
    ],
    "height": [
      2.0,
      3.0
    ],
    "root": null,
    "kcb": [
      0.45,
      0.55,
      0.5
    ],
    "cover": [
      0.2,
      0.35
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 392,
    "id": "avocado-low-ground-cover-vase-300-pl-ha-1"
  },
  {
    "label": "Avocado (Persea americana) — Medium to high; vase; 300 – 400 pl ha-1",
    "category": "woody",
    "kc": [
      0.8,
      0.85,
      0.85
    ],
    "height": [
      3.0,
      4.0
    ],
    "root": null,
    "kcb": [
      0.65,
      0.75,
      0.7
    ],
    "cover": [
      0.35,
      0.6
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 393,
    "id": "avocado-medium-to-high-vase-300-400-pl-ha-1"
  },
  {
    "label": "Avocado (Persea americana) — Very high; vase; > 400 pl ha-1",
    "category": "woody",
    "kc": [
      0.9,
      1.0,
      0.9
    ],
    "height": {
      "operator": ">",
      "value": 4.0
    },
    "root": null,
    "kcb": [
      0.8,
      0.9,
      0.8
    ],
    "cover": {
      "operator": ">",
      "value": 0.6
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 395,
    "id": "avocado-very-high-vase-400-pl-ha-1"
  },
  {
    "label": "Avocado (Persea americana) — Hedgerow; medium density; 300 – 400 pl ha-1",
    "category": "woody",
    "kc": [
      0.8,
      0.85,
      0.8
    ],
    "height": {
      "operator": ">",
      "value": 2.5
    },
    "root": null,
    "kcb": [
      0.7,
      0.75,
      0.7
    ],
    "cover": [
      0.35,
      0.6
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 396,
    "id": "avocado-hedgerow-medium-density-300-400-pl-ha-1"
  },
  {
    "label": "Avocado (Persea americana) — Hedgerow; high density; > 400 pl ha-1",
    "category": "woody",
    "kc": [
      0.9,
      0.95,
      0.85
    ],
    "height": {
      "operator": ">",
      "value": 3.0
    },
    "root": null,
    "kcb": [
      0.85,
      0.9,
      0.8
    ],
    "cover": [
      0.6,
      0.85
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 397,
    "id": "avocado-hedgerow-high-density-400-pl-ha-1"
  },
  {
    "label": "Fig tree (Ficus carica) — Young (< 5 years)",
    "category": "woody",
    "kc": [
      0.35,
      0.45,
      0.35
    ],
    "height": {
      "operator": "<",
      "value": 1.5
    },
    "root": null,
    "kcb": [
      0.15,
      0.25,
      0.15
    ],
    "cover": {
      "operator": "<",
      "value": 0.2
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 412,
    "id": "fig-tree-young"
  },
  {
    "label": "Fig tree (Ficus carica) — Low, < 400 pl ha-1",
    "category": "woody",
    "kc": [
      0.35,
      0.6,
      0.35
    ],
    "height": [
      1.5,
      2.0
    ],
    "root": null,
    "kcb": [
      0.2,
      0.5,
      0.2
    ],
    "cover": [
      0.2,
      0.3
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 414,
    "id": "fig-tree-low-400-pl-ha-1"
  },
  {
    "label": "Fig tree (Ficus carica) — Medium to high, 800 – 1 000 pl ha-1",
    "category": "woody",
    "kc": [
      0.4,
      0.8,
      0.4
    ],
    "height": [
      2.0,
      2.5
    ],
    "root": null,
    "kcb": [
      0.25,
      0.75,
      0.3
    ],
    "cover": [
      0.3,
      0.5
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 415,
    "id": "fig-tree-medium-to-high-800-1-000-pl-ha-1"
  },
  {
    "label": "Loquat (Eriobotrya japonica) — Young (< 4 years); vase",
    "category": "woody",
    "kc": [
      0.5,
      0.55,
      0.55
    ],
    "height": {
      "operator": "<",
      "value": 2.5
    },
    "root": null,
    "kcb": [
      0.3,
      0.35,
      0.35
    ],
    "cover": {
      "operator": "<",
      "value": 0.25
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 417,
    "id": "loquat-young-vase"
  },
  {
    "label": "Loquat (Eriobotrya japonica) — Low to medium; vase; 450 – 600 pl ha-1",
    "category": "woody",
    "kc": [
      0.55,
      0.75,
      0.7
    ],
    "height": [
      2.5,
      3.5
    ],
    "root": null,
    "kcb": [
      0.4,
      0.65,
      0.6
    ],
    "cover": [
      0.25,
      0.5
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 419,
    "id": "loquat-low-to-medium-vase-450-600-pl-ha-1"
  },
  {
    "label": "Loquat (Eriobotrya japonica) — High; vase; > 600 pl ha-1",
    "category": "woody",
    "kc": [
      0.6,
      0.85,
      0.75
    ],
    "height": {
      "operator": ">",
      "value": 3.5
    },
    "root": null,
    "kcb": [
      0.5,
      0.75,
      0.65
    ],
    "cover": {
      "operator": ">",
      "value": 0.5
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 420,
    "id": "loquat-high-vase-600-pl-ha-1"
  },
  {
    "label": "Persimmon (Diospyros kaki) — Young (< 5 years)",
    "category": "woody",
    "kc": [
      0.35,
      0.4,
      0.25
    ],
    "height": {
      "operator": "<",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.15,
      0.25,
      0.1
    ],
    "cover": {
      "operator": "<",
      "value": 0.15
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 423,
    "id": "persimmon-young"
  },
  {
    "label": "Persimmon (Diospyros kaki) — Low to medium, 300 – 500 pl ha-1",
    "category": "woody",
    "kc": [
      0.3,
      0.65,
      0.35
    ],
    "height": [
      2.0,
      2.5
    ],
    "root": null,
    "kcb": [
      0.15,
      0.55,
      0.2
    ],
    "cover": [
      0.15,
      0.4
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 424,
    "id": "persimmon-low-to-medium-300-500-pl-ha-1"
  },
  {
    "label": "Persimmon (Diospyros kaki) — High, 500 – 800 pl ha-1",
    "category": "woody",
    "kc": [
      0.35,
      0.9,
      0.5
    ],
    "height": [
      2.5,
      3.0
    ],
    "root": null,
    "kcb": [
      0.2,
      0.8,
      0.45
    ],
    "cover": [
      0.4,
      0.6
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 425,
    "id": "persimmon-high-500-800-pl-ha-1"
  },
  {
    "label": "Pomegranate (Punica granatum) — Young (< 5 years)",
    "category": "woody",
    "kc": [
      0.3,
      0.4,
      0.3
    ],
    "height": {
      "operator": "<",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.15,
      0.3,
      0.2
    ],
    "cover": {
      "operator": "<",
      "value": 0.25
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 428,
    "id": "pomegranate-young"
  },
  {
    "label": "Pomegranate (Punica granatum) — Low; vase; 500 – 800 pl ha-1",
    "category": "woody",
    "kc": [
      0.35,
      0.55,
      0.35
    ],
    "height": [
      2.0,
      2.5
    ],
    "root": null,
    "kcb": [
      0.2,
      0.45,
      0.25
    ],
    "cover": [
      0.25,
      0.4
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 429,
    "id": "pomegranate-low-vase-500-800-pl-ha-1"
  },
  {
    "label": "Pomegranate (Punica granatum) — Medium; vase; 500 – 800 pl ha-1",
    "category": "woody",
    "kc": [
      0.45,
      0.7,
      0.45
    ],
    "height": [
      2.5,
      3.0
    ],
    "root": null,
    "kcb": [
      0.3,
      0.65,
      0.35
    ],
    "cover": [
      0.4,
      0.6
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 430,
    "id": "pomegranate-medium-vase-500-800-pl-ha-1"
  },
  {
    "label": "Pomegranate (Punica granatum) — High; vase; > 800 pl ha-1",
    "category": "woody",
    "kc": [
      0.45,
      0.9,
      0.6
    ],
    "height": {
      "operator": ">",
      "value": 3.0
    },
    "root": null,
    "kcb": [
      0.35,
      0.85,
      0.5
    ],
    "cover": {
      "operator": ">",
      "value": 0.6
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 431,
    "id": "pomegranate-high-vase-800-pl-ha-1"
  },
  {
    "label": "Tea (Camellia sinensis) — Young (< 2 years); low hedgerow; 7 000 – 13 500 pl ha-1",
    "category": "woody",
    "kc": [
      0.8,
      0.9,
      0.9
    ],
    "height": {
      "operator": "<",
      "value": 0.7
    },
    "root": null,
    "kcb": [
      0.6,
      0.7,
      0.7
    ],
    "cover": {
      "operator": "<",
      "value": 0.5
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 434,
    "id": "tea-young-low-hedgerow-7-000-13-500-pl-ha-1"
  },
  {
    "label": "Tea (Camellia sinensis) — Mature; hedgerow; 7 000 – 13 500 pl ha-1",
    "category": "woody",
    "kc": [
      1.05,
      1.05,
      1.05
    ],
    "height": {
      "operator": ">",
      "value": 0.7
    },
    "root": null,
    "kcb": [
      0.95,
      0.95,
      0.95
    ],
    "cover": [
      0.5,
      0.9
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 435,
    "id": "tea-mature-hedgerow-7-000-13-500-pl-ha-1"
  },
  {
    "label": "Apple (Malus domestica) — Young (< 4 years); central leader",
    "category": "woody",
    "kc": [
      0.3,
      0.55,
      0.35
    ],
    "height": {
      "operator": "<",
      "value": 3.0
    },
    "root": null,
    "kcb": [
      0.2,
      0.45,
      0.25
    ],
    "cover": {
      "operator": "<",
      "value": 0.25
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 440,
    "id": "apple-young-central-leader"
  },
  {
    "label": "Apple (Malus domestica) — Low; central leader; < 1 500 pl ha-1",
    "category": "woody",
    "kc": [
      0.35,
      0.65,
      0.4
    ],
    "height": [
      3.0,
      4.0
    ],
    "root": null,
    "kcb": [
      0.25,
      0.55,
      0.3
    ],
    "cover": [
      0.25,
      0.4
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 441,
    "id": "apple-low-central-leader-1-500-pl-ha-1"
  },
  {
    "label": "Apple (Malus domestica) — Medium; central leader; 1 500 – 3 000 pl ha-1",
    "category": "woody",
    "kc": [
      0.45,
      0.85,
      0.45
    ],
    "height": [
      3.0,
      4.0
    ],
    "root": null,
    "kcb": [
      0.35,
      0.75,
      0.35
    ],
    "cover": [
      0.4,
      0.5
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 443,
    "id": "apple-medium-central-leader-1-500-3-000-pl-ha-1"
  },
  {
    "label": "Apple (Malus domestica) — High, central leader; 1 500 – 3 000 pl ha-1",
    "category": "woody",
    "kc": [
      0.5,
      0.95,
      0.6
    ],
    "height": [
      3.0,
      4.5
    ],
    "root": null,
    "kcb": [
      0.4,
      0.9,
      0.5
    ],
    "cover": [
      0.5,
      0.7
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 444,
    "id": "apple-high-central-leader-1-500-3-000-pl-ha-1"
  },
  {
    "label": "Apple (Malus domestica) — Very high, central leader; > 3 000 pl ha-1",
    "category": "woody",
    "kc": [
      0.55,
      1.0,
      0.75
    ],
    "height": {
      "operator": ">",
      "value": 3.0
    },
    "root": null,
    "kcb": [
      0.45,
      0.95,
      0.5
    ],
    "cover": {
      "operator": ">",
      "value": 0.7
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 445,
    "id": "apple-very-high-central-leader-3-000-pl-ha-1"
  },
  {
    "label": "Pear (Pyrus communis) — Young (< 5 years); all training systems",
    "category": "woody",
    "kc": [
      0.35,
      0.6,
      0.45
    ],
    "height": {
      "operator": "<",
      "value": 2.5
    },
    "root": null,
    "kcb": [
      0.25,
      0.5,
      0.35
    ],
    "cover": {
      "operator": "<",
      "value": 0.35
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 448,
    "id": "pear-young-all-training-systems"
  },
  {
    "label": "Pear (Pyrus communis) — Low; vase;< 1 000 pl ha-1",
    "category": "woody",
    "kc": [
      0.4,
      0.75,
      0.5
    ],
    "height": [
      2.0,
      2.5
    ],
    "root": null,
    "kcb": [
      0.3,
      0.7,
      0.4
    ],
    "cover": [
      0.35,
      0.4
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 449,
    "id": "pear-low-vase-1-000-pl-ha-1"
  },
  {
    "label": "Pear (Pyrus communis) — Medium; central leader; 1 000 – 1 600 pl ha-1",
    "category": "woody",
    "kc": [
      0.5,
      0.95,
      0.6
    ],
    "height": [
      2.5,
      4.0
    ],
    "root": null,
    "kcb": [
      0.4,
      0.9,
      0.5
    ],
    "cover": [
      0.35,
      0.6
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 450,
    "id": "pear-medium-central-leader-1-000-1-600-pl-ha-1"
  },
  {
    "label": "Pear (Pyrus communis) — High, central leader, other trellis systems; > 1500 pl ha-1",
    "category": "woody",
    "kc": [
      0.65,
      1.05,
      0.7
    ],
    "height": {
      "operator": ">",
      "value": 3.5
    },
    "root": null,
    "kcb": [
      0.55,
      1.0,
      0.6
    ],
    "cover": {
      "operator": ">",
      "value": 0.6
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 451,
    "id": "pear-high-central-leader-other-trellis-systems-1500-pl-ha-1"
  },
  {
    "label": "Apricot (Prunus armeniaca), plums (P. domestica and P. salicina) — Young, vase; (< 5 years)",
    "category": "woody",
    "kc": [
      0.35,
      0.6,
      0.4
    ],
    "height": {
      "operator": "<",
      "value": 2.5
    },
    "root": null,
    "kcb": [
      0.2,
      0.5,
      0.25
    ],
    "cover": {
      "operator": "<",
      "value": 0.4
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 455,
    "id": "apricot-plums-young-vase"
  },
  {
    "label": "Apricot (Prunus armeniaca), plums (P. domestica and P. salicina) — Low; vase; < 200 pl ha-1",
    "category": "woody",
    "kc": [
      0.45,
      0.9,
      0.45
    ],
    "height": [
      2.5,
      3.0
    ],
    "root": null,
    "kcb": [
      0.3,
      0.7,
      0.35
    ],
    "cover": [
      0.4,
      0.65
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 456,
    "id": "apricot-plums-low-vase-200-pl-ha-1"
  },
  {
    "label": "Apricot (Prunus armeniaca), plums (P. domestica and P. salicina) — Medium; vase; 200 – 400 pl ha-1",
    "category": "woody",
    "kc": [
      0.5,
      1.0,
      0.55
    ],
    "height": [
      3.0,
      4.5
    ],
    "root": null,
    "kcb": [
      0.4,
      0.85,
      0.45
    ],
    "cover": [
      0.65,
      0.7
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 458,
    "id": "apricot-plums-medium-vase-200-400-pl-ha-1"
  },
  {
    "label": "Apricot (Prunus armeniaca), plums (P. domestica and P. salicina) — High; vase; > 400 pl ha-1",
    "category": "woody",
    "kc": [
      0.55,
      1.05,
      0.6
    ],
    "height": [
      3.0,
      5.5
    ],
    "root": null,
    "kcb": [
      0.45,
      0.95,
      0.55
    ],
    "cover": [
      0.7,
      0.8
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 459,
    "id": "apricot-plums-high-vase-400-pl-ha-1"
  },
  {
    "label": "Apricot (Prunus armeniaca), plums (P. domestica and P. salicina) — Very high; vase; > 400 pl ha-1",
    "category": "woody",
    "kc": [
      0.6,
      1.05,
      0.65
    ],
    "height": [
      3.0,
      5.5
    ],
    "root": null,
    "kcb": [
      0.5,
      1.0,
      0.6
    ],
    "cover": {
      "operator": ">",
      "value": 0.8
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 460,
    "id": "apricot-plums-very-high-vase-400-pl-ha-1"
  },
  {
    "label": "Cherry (Prunus avium) — Young (< 5 years)",
    "category": "woody",
    "kc": [
      0.4,
      0.6,
      0.5
    ],
    "height": {
      "operator": "<",
      "value": 3.0
    },
    "root": null,
    "kcb": [
      0.25,
      0.5,
      0.35
    ],
    "cover": {
      "operator": "<",
      "value": 0.3
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 463,
    "id": "cherry-young"
  },
  {
    "label": "Cherry (Prunus avium) — Low; vase; < 800 pl ha-1",
    "category": "woody",
    "kc": [
      0.45,
      0.65,
      0.5
    ],
    "height": [
      3.0,
      4.0
    ],
    "root": null,
    "kcb": [
      0.3,
      0.55,
      0.4
    ],
    "cover": [
      0.25,
      0.4
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 464,
    "id": "cherry-low-vase-800-pl-ha-1"
  },
  {
    "label": "Cherry (Prunus avium) — Medium to High (vigorous rootstock); vase; < 800 pl ha-1",
    "category": "woody",
    "kc": [
      0.5,
      0.85,
      0.7
    ],
    "height": {
      "operator": ">",
      "value": 4.0
    },
    "root": null,
    "kcb": [
      0.35,
      0.8,
      0.45
    ],
    "cover": [
      0.4,
      0.7
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 465,
    "id": "cherry-medium-to-high-vase-800-pl-ha-1"
  },
  {
    "label": "Cherry (Prunus avium) — Low to Medium (semi vigorous rootstock); central leader; 800 – 1 250 pl ha-1",
    "category": "woody",
    "kc": [
      0.5,
      0.85,
      0.6
    ],
    "height": [
      4.0,
      5.0
    ],
    "root": null,
    "kcb": [
      0.35,
      0.75,
      0.5
    ],
    "cover": [
      0.4,
      0.5
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 467,
    "id": "cherry-low-to-medium-central-leader-800-1-250-pl-ha-1"
  },
  {
    "label": "Cherry (Prunus avium) — Medium to High (semi–dwarf rootstock); central leader; > 1 200 pl ha-1",
    "category": "woody",
    "kc": [
      0.55,
      0.9,
      0.65
    ],
    "height": {
      "operator": ">",
      "value": 2.5
    },
    "root": null,
    "kcb": [
      0.45,
      0.85,
      0.55
    ],
    "cover": [
      0.4,
      0.7
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 470,
    "id": "cherry-medium-to-high-central-leader-1-200-pl-ha-1"
  },
  {
    "label": "Cherry (Prunus avium) — High (dwarf rootstock), central leader > 1 200 pl ha-1",
    "category": "woody",
    "kc": [
      0.6,
      1.0,
      0.85
    ],
    "height": [
      2.0,
      3.5
    ],
    "root": null,
    "kcb": [
      0.5,
      0.95,
      0.6
    ],
    "cover": [
      0.7,
      0.9
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 471,
    "id": "cherry-high-central-leader-1-200-pl-ha-1"
  },
  {
    "label": "Peach (Prunus persica) — Young (< 4 years)",
    "category": "woody",
    "kc": [
      0.35,
      0.6,
      0.4
    ],
    "height": {
      "operator": "<",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.2,
      0.5,
      0.25
    ],
    "cover": {
      "operator": "<",
      "value": 0.3
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 484,
    "id": "peach-young"
  },
  {
    "label": "Peach (Prunus persica) — Low (high vigour), vase; 400 – 600 pl ha-1",
    "category": "woody",
    "kc": [
      0.35,
      0.8,
      0.5
    ],
    "height": [
      2.0,
      3.5
    ],
    "root": null,
    "kcb": [
      0.25,
      0.7,
      0.4
    ],
    "cover": [
      0.3,
      0.5
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 486,
    "id": "peach-low-vase-400-600-pl-ha-1"
  },
  {
    "label": "Peach (Prunus persica) — Medium (medium vigour); vase; 400 – 700 pl ha-1",
    "category": "woody",
    "kc": [
      0.45,
      0.95,
      0.6
    ],
    "height": [
      3.5,
      4.5
    ],
    "root": null,
    "kcb": [
      0.3,
      0.9,
      0.5
    ],
    "cover": [
      0.5,
      0.65
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 487,
    "id": "peach-medium-vase-400-700-pl-ha-1"
  },
  {
    "label": "Peach (Prunus persica) — High (low vigour), vase; > 700 pl ha-1",
    "category": "woody",
    "kc": [
      0.45,
      1.05,
      0.7
    ],
    "height": {
      "operator": ">",
      "value": 4.0
    },
    "root": null,
    "kcb": [
      0.35,
      1.0,
      0.6
    ],
    "cover": {
      "operator": ">",
      "value": 0.65
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 488,
    "id": "peach-high-vase-700-pl-ha-1"
  },
  {
    "label": "Peach (Prunus persica) — Medium (medium vigour), trellis; > 1 100 pl ha-1",
    "category": "woody",
    "kc": [
      0.4,
      0.85,
      0.55
    ],
    "height": [
      3.5,
      4.5
    ],
    "root": null,
    "kcb": [
      0.3,
      0.8,
      0.45
    ],
    "cover": [
      0.3,
      0.6
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 489,
    "id": "peach-medium-trellis-1-100-pl-ha-1"
  },
  {
    "label": "Peach (Prunus persica) — High (low vigour), trellis; > 1 500 pl ha-1",
    "category": "woody",
    "kc": [
      0.45,
      1.1,
      0.65
    ],
    "height": {
      "operator": ">",
      "value": 3.5
    },
    "root": null,
    "kcb": [
      0.35,
      1.05,
      0.55
    ],
    "cover": [
      0.6,
      0.75
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 491,
    "id": "peach-high-trellis-1-500-pl-ha-1"
  },
  {
    "label": "Peach (Prunus persica) — Very high (low vigour), trellis; > 2 000 pl ha-1",
    "category": "woody",
    "kc": [
      0.5,
      1.15,
      0.75
    ],
    "height": {
      "operator": ">",
      "value": 3.5
    },
    "root": null,
    "kcb": [
      0.4,
      1.1,
      0.65
    ],
    "cover": {
      "operator": ">",
      "value": 0.75
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 492,
    "id": "peach-very-high-trellis-2-000-pl-ha-1"
  },
  {
    "label": "Almond (Prunus dulcis) — Young (< 4 years)",
    "category": "woody",
    "kc": [
      0.3,
      0.5,
      0.45
    ],
    "height": {
      "operator": "<",
      "value": 3.0
    },
    "root": null,
    "kcb": [
      0.15,
      0.4,
      0.3
    ],
    "cover": {
      "operator": "<",
      "value": 0.3
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 496,
    "id": "almond-young"
  },
  {
    "label": "Almond (Prunus dulcis) — Low (high vigour), vase; < 400 pl ha-1",
    "category": "woody",
    "kc": [
      0.35,
      0.55,
      0.45
    ],
    "height": [
      2.0,
      4.0
    ],
    "root": null,
    "kcb": [
      0.25,
      0.5,
      0.35
    ],
    "cover": [
      0.2,
      0.4
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 497,
    "id": "almond-low-vase-400-pl-ha-1"
  },
  {
    "label": "Almond (Prunus dulcis) — Medium (medium vigour), vase; <400 pl ha-1",
    "category": "woody",
    "kc": [
      0.45,
      0.85,
      0.55
    ],
    "height": [
      4.0,
      4.5
    ],
    "root": null,
    "kcb": [
      0.3,
      0.8,
      0.45
    ],
    "cover": [
      0.4,
      0.55
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 498,
    "id": "almond-medium-vase-400-pl-ha-1"
  },
  {
    "label": "Almond (Prunus dulcis) — High (low vigour), vase; > 200 pl ha-1",
    "category": "woody",
    "kc": [
      0.45,
      1.0,
      0.75
    ],
    "height": [
      4.5,
      5.0
    ],
    "root": null,
    "kcb": [
      0.35,
      0.95,
      0.55
    ],
    "cover": [
      0.55,
      0.65
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 499,
    "id": "almond-high-vase-200-pl-ha-1"
  },
  {
    "label": "Almond (Prunus dulcis) — Very high (low vigour), vase; > 200 pl ha-1",
    "category": "woody",
    "kc": [
      0.55,
      1.1,
      0.85
    ],
    "height": [
      4.0,
      5.5
    ],
    "root": null,
    "kcb": [
      0.35,
      1.05,
      0.6
    ],
    "cover": {
      "operator": ">",
      "value": 0.65
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 501,
    "id": "almond-very-high-vase-200-pl-ha-1"
  },
  {
    "label": "Almond (Prunus dulcis) — Hedgerow/Super–intensive (dwarf rootstock); > 2500 pl ha-1",
    "category": "woody",
    "kc": [
      0.35,
      0.9,
      0.5
    ],
    "height": [
      2.0,
      2.5
    ],
    "root": null,
    "kcb": [
      0.25,
      0.8,
      0.4
    ],
    "cover": [
      0.3,
      0.45
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 502,
    "id": "almond-hedgerow-super-intensive-2500-pl-ha-1"
  },
  {
    "label": "Hazelnut (Corylus avellana) — Young (< 6 years)",
    "category": "woody",
    "kc": [
      0.35,
      0.65,
      0.45
    ],
    "height": {
      "operator": "<",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.2,
      0.55,
      0.35
    ],
    "cover": {
      "operator": "<",
      "value": 0.35
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 504,
    "id": "hazelnut-young"
  },
  {
    "label": "Hazelnut (Corylus avellana) — Low to medium; multiple stem–shrub system; < 500 pl ha-1",
    "category": "woody",
    "kc": [
      0.4,
      0.8,
      0.5
    ],
    "height": [
      2.0,
      3.5
    ],
    "root": null,
    "kcb": [
      0.25,
      0.7,
      0.4
    ],
    "cover": [
      0.35,
      0.55
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 506,
    "id": "hazelnut-low-to-medium-multiple-stem-shrub-system-500-pl-ha-1"
  },
  {
    "label": "Hazelnut (Corylus avellana) — Medium to high; multiple stem–shrub system; 500 – 700 pl ha-1",
    "category": "woody",
    "kc": [
      0.45,
      0.9,
      0.55
    ],
    "height": [
      3.5,
      4.5
    ],
    "root": null,
    "kcb": [
      0.35,
      0.8,
      0.45
    ],
    "cover": [
      0.55,
      0.7
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 507,
    "id": "hazelnut-medium-to-high-multiple-stem-shrub-system-500-700-pl-ha-1"
  },
  {
    "label": "Hazelnut (Corylus avellana) — Very high; multiple stem–shrub system > 700 pl ha-1",
    "category": "woody",
    "kc": [
      0.5,
      1.0,
      0.6
    ],
    "height": {
      "operator": ">",
      "value": 4.5
    },
    "root": null,
    "kcb": [
      0.4,
      0.9,
      0.5
    ],
    "cover": {
      "operator": ">",
      "value": 0.7
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 508,
    "id": "hazelnut-very-high-multiple-stem-shrub-system-700-pl-ha-1"
  },
  {
    "label": "Hazelnut (Corylus avellana) — Hedgerow/Super–intensive, > 1 000 pl ha-1",
    "category": "woody",
    "kc": [
      0.5,
      1.05,
      0.55
    ],
    "height": {
      "operator": ">",
      "value": 2.5
    },
    "root": null,
    "kcb": [
      0.4,
      0.9,
      0.5
    ],
    "cover": {
      "operator": ">",
      "value": 0.55
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 509,
    "id": "hazelnut-hedgerow-super-intensive-1-000-pl-ha-1"
  },
  {
    "label": "Pecans (Carya illinoinensis) — Young (< 8 years)",
    "category": "woody",
    "kc": [
      0.4,
      0.7,
      0.5
    ],
    "height": {
      "operator": "<",
      "value": 8.0
    },
    "root": null,
    "kcb": [
      0.25,
      0.6,
      0.4
    ],
    "cover": {
      "operator": "<",
      "value": 0.4
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 512,
    "id": "pecans-young"
  },
  {
    "label": "Pecans (Carya illinoinensis) — Low; vase; > 100 pl ha-1",
    "category": "woody",
    "kc": [
      0.45,
      0.75,
      0.55
    ],
    "height": [
      8.0,
      10.0
    ],
    "root": null,
    "kcb": [
      0.3,
      0.65,
      0.45
    ],
    "cover": [
      0.4,
      0.6
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 513,
    "id": "pecans-low-vase-100-pl-ha-1"
  },
  {
    "label": "Pecans (Carya illinoinensis) — Medium to high; vase; 100 – 250 pl ha-1",
    "category": "woody",
    "kc": [
      0.5,
      0.9,
      0.7
    ],
    "height": [
      10.0,
      13.0
    ],
    "root": null,
    "kcb": [
      0.4,
      0.8,
      0.55
    ],
    "cover": [
      0.6,
      0.8
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 514,
    "id": "pecans-medium-to-high-vase-100-250-pl-ha-1"
  },
  {
    "label": "Pecans (Carya illinoinensis) — Very high; vase; 250 – 300 pl ha-1",
    "category": "woody",
    "kc": [
      0.55,
      0.95,
      0.7
    ],
    "height": {
      "operator": ">",
      "value": 13.0
    },
    "root": null,
    "kcb": [
      0.45,
      0.9,
      0.6
    ],
    "cover": {
      "operator": ">",
      "value": 0.8
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 516,
    "id": "pecans-very-high-vase-250-300-pl-ha-1"
  },
  {
    "label": "Pistachio (Pistacia vera) — Young (< 10 years)",
    "category": "woody",
    "kc": [
      0.3,
      0.5,
      0.35
    ],
    "height": {
      "operator": "<",
      "value": 3.0
    },
    "root": null,
    "kcb": [
      0.15,
      0.4,
      0.25
    ],
    "cover": {
      "operator": "<",
      "value": 0.35
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 518,
    "id": "pistachio-young"
  },
  {
    "label": "Pistachio (Pistacia vera) — Low; vase; > 100 pl ha-1",
    "category": "woody",
    "kc": [
      0.35,
      0.8,
      0.45
    ],
    "height": [
      3.0,
      4.0
    ],
    "root": null,
    "kcb": [
      0.25,
      0.7,
      0.35
    ],
    "cover": [
      0.35,
      0.5
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 519,
    "id": "pistachio-low-vase-100-pl-ha-1"
  },
  {
    "label": "Pistachio (Pistacia vera) — Medium to high; vase; 150 – 350 pl ha-1",
    "category": "woody",
    "kc": [
      0.4,
      0.9,
      0.55
    ],
    "height": [
      4.0,
      4.5
    ],
    "root": null,
    "kcb": [
      0.3,
      0.85,
      0.45
    ],
    "cover": [
      0.5,
      0.7
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 521,
    "id": "pistachio-medium-to-high-vase-150-350-pl-ha-1"
  },
  {
    "label": "Pistachio (Pistacia vera) — Very high; vase; > 300 pl ha-1",
    "category": "woody",
    "kc": [
      0.5,
      1.0,
      0.65
    ],
    "height": {
      "operator": ">",
      "value": 4.5
    },
    "root": null,
    "kcb": [
      0.35,
      0.95,
      0.55
    ],
    "cover": {
      "operator": ">",
      "value": 0.7
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 522,
    "id": "pistachio-very-high-vase-300-pl-ha-1"
  },
  {
    "label": "Pistachio (Pistacia vera) — Hedgerow/Super-intensive, > 1 000 pl ha-1",
    "category": "woody",
    "kc": [
      0.35,
      0.95,
      0.5
    ],
    "height": {
      "operator": ">",
      "value": 2.5
    },
    "root": null,
    "kcb": [
      0.3,
      0.9,
      0.45
    ],
    "cover": {
      "operator": ">",
      "value": 0.3
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 523,
    "id": "pistachio-hedgerow-super-intensive-1-000-pl-ha-1"
  },
  {
    "label": "Walnut (Juglans regia) — Young, vase (< 7 years)",
    "category": "woody",
    "kc": [
      0.45,
      0.8,
      0.55
    ],
    "height": {
      "operator": "<",
      "value": 6.0
    },
    "root": null,
    "kcb": [
      0.25,
      0.7,
      0.45
    ],
    "cover": {
      "operator": "<",
      "value": 0.55
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 526,
    "id": "walnut-young-vase"
  },
  {
    "label": "Walnut (Juglans regia) — Low; vase; < 200 pl ha-1",
    "category": "woody",
    "kc": [
      0.45,
      1.05,
      0.6
    ],
    "height": [
      6.0,
      10.0
    ],
    "root": null,
    "kcb": [
      0.3,
      1.0,
      0.5
    ],
    "cover": [
      0.55,
      0.75
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 527,
    "id": "walnut-low-vase-200-pl-ha-1"
  },
  {
    "label": "Walnut (Juglans regia) — Medium to very high; vase; 200 – 550 pl ha-1",
    "category": "woody",
    "kc": [
      0.5,
      1.1,
      0.7
    ],
    "height": [
      10.0,
      12.0
    ],
    "root": null,
    "kcb": [
      0.4,
      1.05,
      0.6
    ],
    "cover": [
      0.75,
      0.95
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 528,
    "id": "walnut-medium-to-very-high-vase-200-550-pl-ha-1"
  },
  {
    "label": "Kiwifruit (Actinidia deliciosa) — Young (< 6 years); trellis",
    "category": "woody",
    "kc": [
      0.35,
      0.75,
      0.65
    ],
    "height": {
      "operator": "<",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.2,
      0.65,
      0.4
    ],
    "cover": {
      "operator": "<",
      "value": 0.6
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 532,
    "id": "kiwifruit-young-trellis"
  },
  {
    "label": "Kiwifruit (Actinidia deliciosa) — Medium density; T–bar trellis; < 800 pl ha-1",
    "category": "woody",
    "kc": [
      0.4,
      0.95,
      0.75
    ],
    "height": [
      2.0,
      2.2
    ],
    "root": null,
    "kcb": [
      0.25,
      0.85,
      0.7
    ],
    "cover": [
      0.6,
      0.8
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 533,
    "id": "kiwifruit-medium-density-t-bar-trellis-800-pl-ha-1"
  },
  {
    "label": "Kiwifruit (Actinidia deliciosa) — High density; pergola trellis; > 800 pl ha-1",
    "category": "woody",
    "kc": [
      0.45,
      1.0,
      0.85
    ],
    "height": [
      2.0,
      2.5
    ],
    "root": null,
    "kcb": [
      0.3,
      0.9,
      0.75
    ],
    "cover": [
      0.6,
      0.95
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 534,
    "id": "kiwifruit-high-density-pergola-trellis-800-pl-ha-1"
  },
  {
    "label": "Hop (Humulus lupulus) — Common density; trellis; < 3 500 pl ha-1",
    "category": "woody",
    "kc": [
      0.3,
      1.0,
      0.9
    ],
    "height": [
      6.0,
      7.0
    ],
    "root": null,
    "kcb": [
      0.15,
      0.95,
      0.8
    ],
    "cover": [
      0.08,
      0.12
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 537,
    "id": "hop-common-density-trellis-3-500-pl-ha-1"
  },
  {
    "label": "Highbush blueberries (Vaccinium corymbosum) — Young (< 3 years)",
    "category": "woody",
    "kc": [
      0.3,
      0.65,
      0.45
    ],
    "height": {
      "operator": "<",
      "value": 1.5
    },
    "root": null,
    "kcb": [
      0.2,
      0.55,
      0.35
    ],
    "cover": {
      "operator": "<",
      "value": 0.5
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 539,
    "id": "highbush-blueberries-young"
  },
  {
    "label": "Highbush blueberries (Vaccinium corymbosum) — Common density, 2 500 – 5 000 pl ha-1",
    "category": "woody",
    "kc": [
      0.55,
      0.9,
      0.75
    ],
    "height": [
      1.5,
      2.0
    ],
    "root": null,
    "kcb": [
      0.45,
      0.85,
      0.65
    ],
    "cover": [
      0.5,
      0.8
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 541,
    "id": "highbush-blueberries-common-density-2-500-5-000-pl-ha-1"
  },
  {
    "label": "Lowbush blueberries (Vaccinium angustifolium) — Young (< 2 years)",
    "category": "woody",
    "kc": [
      0.3,
      0.65,
      0.55
    ],
    "height": {
      "operator": "<",
      "value": 0.6
    },
    "root": null,
    "kcb": [
      0.2,
      0.55,
      0.4
    ],
    "cover": {
      "operator": "<",
      "value": 0.5
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 543,
    "id": "lowbush-blueberries-young"
  },
  {
    "label": "Lowbush blueberries (Vaccinium angustifolium) — Common density, > 5 000 pl ha-1",
    "category": "woody",
    "kc": [
      0.45,
      0.8,
      0.65
    ],
    "height": [
      0.6,
      1.0
    ],
    "root": null,
    "kcb": [
      0.35,
      0.75,
      0.6
    ],
    "cover": [
      0.5,
      0.8
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 544,
    "id": "lowbush-blueberries-common-density-5-000-pl-ha-1"
  },
  {
    "label": "Rabbiteye blueberry (Vaccinium ashei) — Young (< 3 years)",
    "category": "woody",
    "kc": [
      0.3,
      0.65,
      0.55
    ],
    "height": {
      "operator": "<",
      "value": 0.6
    },
    "root": null,
    "kcb": [
      0.2,
      0.55,
      0.4
    ],
    "cover": {
      "operator": "<",
      "value": 0.5
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 557,
    "id": "rabbiteye-blueberry-young"
  },
  {
    "label": "Rabbiteye blueberry (Vaccinium ashei) — Common density, 2 500 – 5 000 pl ha-1",
    "category": "woody",
    "kc": [
      0.45,
      0.75,
      0.65
    ],
    "height": [
      0.6,
      1.0
    ],
    "root": null,
    "kcb": [
      0.35,
      0.7,
      0.6
    ],
    "cover": [
      0.5,
      0.8
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 558,
    "id": "rabbiteye-blueberry-common-density-2-500-5-000-pl-ha-1"
  },
  {
    "label": "Blackberry (Rubus subgenus rubus) — Young (< 3 years)",
    "category": "woody",
    "kc": [
      0.3,
      0.45,
      0.35
    ],
    "height": {
      "operator": "<",
      "value": 1.0
    },
    "root": null,
    "kcb": [
      0.2,
      0.35,
      0.25
    ],
    "cover": {
      "operator": "<",
      "value": 0.5
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 560,
    "id": "blackberry-young"
  },
  {
    "label": "Blackberry (Rubus subgenus rubus) — Common density, 2 000 – 5 000 pl ha-1",
    "category": "woody",
    "kc": [
      0.35,
      0.9,
      0.5
    ],
    "height": [
      1.0,
      2.0
    ],
    "root": null,
    "kcb": [
      0.25,
      0.85,
      0.4
    ],
    "cover": [
      0.5,
      0.85
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 561,
    "id": "blackberry-common-density-2-000-5-000-pl-ha-1"
  },
  {
    "label": "Acerola (Malpighia emarginata) — Young (< 5 years)",
    "category": "woody",
    "kc": [
      0.5,
      0.6,
      0.55
    ],
    "height": {
      "operator": "<",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.35,
      0.45,
      0.4
    ],
    "cover": {
      "operator": "<",
      "value": 0.5
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 565,
    "id": "acerola-young"
  },
  {
    "label": "Acerola (Malpighia emarginata) — Medium–High, 250 – 700 pl ha-1",
    "category": "woody",
    "kc": [
      0.7,
      0.85,
      0.7
    ],
    "height": [
      2.0,
      4.0
    ],
    "root": null,
    "kcb": [
      0.6,
      0.65,
      0.6
    ],
    "cover": [
      0.5,
      0.7
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 566,
    "id": "acerola-medium-high-250-700-pl-ha-1"
  },
  {
    "label": "Carambola (Averrhoa carambola) — Young (< 4 years)",
    "category": "woody",
    "kc": [
      0.75,
      1.0,
      0.9
    ],
    "height": {
      "operator": "<",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.55,
      0.9,
      0.7
    ],
    "cover": {
      "operator": "<",
      "value": 0.4
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 568,
    "id": "carambola-young"
  },
  {
    "label": "Carambola (Averrhoa carambola) — Common density, 150 - 300 pl ha-1",
    "category": "woody",
    "kc": [
      1.0,
      1.15,
      1.1
    ],
    "height": [
      2.0,
      4.0
    ],
    "root": null,
    "kcb": [
      0.85,
      1.05,
      1.0
    ],
    "cover": [
      0.4,
      0.6
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 569,
    "id": "carambola-common-density-150-300-pl-ha-1"
  },
  {
    "label": "Cherimoya (Annona cherimola) — Young (< 3 years)",
    "category": "woody",
    "kc": [
      0.35,
      0.45,
      0.4
    ],
    "height": {
      "operator": "<",
      "value": 1.5
    },
    "root": null,
    "kcb": [
      0.15,
      0.25,
      0.2
    ],
    "cover": {
      "operator": "<",
      "value": 0.15
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 571,
    "id": "cherimoya-young"
  },
  {
    "label": "Cherimoya (Annona cherimola) — Low to medium, 125 – 400 pl ha-1",
    "category": "woody",
    "kc": [
      0.45,
      0.6,
      0.5
    ],
    "height": [
      1.5,
      3.5
    ],
    "root": null,
    "kcb": [
      0.3,
      0.45,
      0.4
    ],
    "cover": [
      0.15,
      0.35
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 572,
    "id": "cherimoya-low-to-medium-125-400-pl-ha-1"
  },
  {
    "label": "Cherimoya (Annona cherimola) — Medium to high, 500 – 1 250 pl ha-1",
    "category": "woody",
    "kc": [
      0.65,
      0.85,
      0.7
    ],
    "height": {
      "operator": ">",
      "value": 3.0
    },
    "root": null,
    "kcb": [
      0.55,
      0.8,
      0.65
    ],
    "cover": {
      "operator": ">",
      "value": 0.35
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 573,
    "id": "cherimoya-medium-to-high-500-1-250-pl-ha-1"
  },
  {
    "label": "Cocoa (Theobroma cacao) — Young (< 4 years), shading",
    "category": "woody",
    "kc": [
      0.6,
      0.8,
      0.75
    ],
    "height": {
      "operator": "<",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.45,
      0.65,
      0.6
    ],
    "cover": {
      "operator": "<",
      "value": 0.5
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 575,
    "id": "cocoa-young-shading"
  },
  {
    "label": "Cocoa (Theobroma cacao) — Medium shading, < 1 100 pl ha-1",
    "category": "woody",
    "kc": [
      0.9,
      0.95,
      0.95
    ],
    "height": [
      2.0,
      2.5
    ],
    "root": null,
    "kcb": [
      0.8,
      0.85,
      0.85
    ],
    "cover": [
      0.5,
      0.7
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 576,
    "id": "cocoa-medium-shading-1-100-pl-ha-1"
  },
  {
    "label": "Cocoa (Theobroma cacao) — High shading, < 1 500 pl ha-1",
    "category": "woody",
    "kc": [
      1.0,
      1.05,
      1.05
    ],
    "height": {
      "operator": ">",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.9,
      0.95,
      0.95
    ],
    "cover": {
      "operator": ">",
      "value": 0.7
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 577,
    "id": "cocoa-high-shading-1-500-pl-ha-1"
  },
  {
    "label": "Coffee (Coffea arabica) — Young (< 4 years)",
    "category": "woody",
    "kc": [
      0.4,
      0.55,
      0.5
    ],
    "height": {
      "operator": "<",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.3,
      0.35,
      0.35
    ],
    "cover": {
      "operator": "<",
      "value": 0.2
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 579,
    "id": "coffee-young"
  },
  {
    "label": "Coffee (Coffea arabica) — Low to Medium, < 5 500 pl ha-1",
    "category": "woody",
    "kc": [
      0.65,
      0.8,
      0.8
    ],
    "height": [
      1.5,
      3.0
    ],
    "root": null,
    "kcb": [
      0.6,
      0.7,
      0.7
    ],
    "cover": [
      0.2,
      0.5
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 580,
    "id": "coffee-low-to-medium-5-500-pl-ha-1"
  },
  {
    "label": "Coffee (Coffea arabica) — High (including hedgerow), > 5 500 pl ha-1",
    "category": "woody",
    "kc": [
      0.9,
      1.0,
      1.0
    ],
    "height": {
      "operator": ">",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.85,
      0.9,
      0.9
    ],
    "cover": {
      "operator": ">",
      "value": 0.5
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 581,
    "id": "coffee-high-5-500-pl-ha-1"
  },
  {
    "label": "Dragon fruit (Hylocereus undatus) — Young (< 3 years)",
    "category": "woody",
    "kc": [
      0.3,
      0.4,
      0.4
    ],
    "height": {
      "operator": "<",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.15,
      0.25,
      0.25
    ],
    "cover": {
      "operator": "<",
      "value": 0.2
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 583,
    "id": "dragon-fruit-young"
  },
  {
    "label": "Dragon fruit (Hylocereus undatus) — Medium, < 1 800 pl ha-1",
    "category": "woody",
    "kc": [
      0.4,
      0.65,
      0.55
    ],
    "height": [
      2.0,
      2.5
    ],
    "root": null,
    "kcb": [
      0.25,
      0.5,
      0.4
    ],
    "cover": [
      0.2,
      0.3
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 584,
    "id": "dragon-fruit-medium-1-800-pl-ha-1"
  },
  {
    "label": "Dragon fruit (Hylocereus undatus) — High, > 1 800 pl ha-1",
    "category": "woody",
    "kc": [
      0.65,
      0.9,
      0.75
    ],
    "height": [
      2.0,
      2.5
    ],
    "root": null,
    "kcb": [
      0.5,
      0.8,
      0.6
    ],
    "cover": {
      "operator": ">",
      "value": 0.3
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 585,
    "id": "dragon-fruit-high-1-800-pl-ha-1"
  },
  {
    "label": "Dragon fruit (Hylocereus undatus) — High (hedgerow), > 2000 pl ha-1",
    "category": "woody",
    "kc": [
      0.6,
      0.9,
      0.7
    ],
    "height": [
      2.0,
      2.5
    ],
    "root": null,
    "kcb": [
      0.45,
      0.8,
      0.55
    ],
    "cover": {
      "operator": ">",
      "value": 0.25
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 586,
    "id": "dragon-fruit-high-2000-pl-ha-1"
  },
  {
    "label": "Guava (Psidium guajava) — Young (< 8 years)",
    "category": "woody",
    "kc": [
      0.4,
      0.45,
      0.5
    ],
    "height": {
      "operator": "<",
      "value": 1.5
    },
    "root": null,
    "kcb": [
      0.15,
      0.3,
      0.25
    ],
    "cover": {
      "operator": "<",
      "value": 0.2
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 588,
    "id": "guava-young"
  },
  {
    "label": "Guava (Psidium guajava) — Low to medium, < 300 pl ha-1",
    "category": "woody",
    "kc": [
      0.6,
      0.75,
      0.7
    ],
    "height": [
      1.5,
      2.0
    ],
    "root": null,
    "kcb": [
      0.4,
      0.6,
      0.55
    ],
    "cover": [
      0.2,
      0.4
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 589,
    "id": "guava-low-to-medium-300-pl-ha-1"
  },
  {
    "label": "Guava (Psidium guajava) — High, < 350 pl ha-1",
    "category": "woody",
    "kc": [
      0.75,
      0.9,
      0.85
    ],
    "height": [
      2.0,
      2.5
    ],
    "root": null,
    "kcb": [
      0.65,
      0.85,
      0.8
    ],
    "cover": [
      0.4,
      0.6
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 590,
    "id": "guava-high-350-pl-ha-1"
  },
  {
    "label": "Guava (Psidium guajava) — Very high, > 300 pl ha-1",
    "category": "woody",
    "kc": [
      0.9,
      1.05,
      1.0
    ],
    "height": {
      "operator": ">",
      "value": 2.5
    },
    "root": null,
    "kcb": [
      0.8,
      0.9,
      0.85
    ],
    "cover": {
      "operator": ">",
      "value": 0.6
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 591,
    "id": "guava-very-high-300-pl-ha-1"
  },
  {
    "label": "Jujube (Ziziphus jujuba) — Young (< 3 years)",
    "category": "woody",
    "kc": [
      0.3,
      0.45,
      0.35
    ],
    "height": {
      "operator": "<",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.15,
      0.3,
      0.2
    ],
    "cover": {
      "operator": "<",
      "value": 0.25
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 593,
    "id": "jujube-young"
  },
  {
    "label": "Jujube (Ziziphus jujuba) — Low to Medium, < 1 100 pl ha-1",
    "category": "woody",
    "kc": [
      0.35,
      0.55,
      0.4
    ],
    "height": [
      2.0,
      3.0
    ],
    "root": null,
    "kcb": [
      0.2,
      0.45,
      0.3
    ],
    "cover": [
      0.25,
      0.4
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 594,
    "id": "jujube-low-to-medium-1-100-pl-ha-1"
  },
  {
    "label": "Jujube (Ziziphus jujuba) — High, > 1 100 pl ha-1",
    "category": "woody",
    "kc": [
      0.4,
      0.8,
      0.55
    ],
    "height": {
      "operator": ">",
      "value": 3.0
    },
    "root": null,
    "kcb": [
      0.25,
      0.7,
      0.45
    ],
    "cover": {
      "operator": ">",
      "value": 0.4
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 595,
    "id": "jujube-high-1-100-pl-ha-1"
  },
  {
    "label": "Papaya (Carica papaya) — Young (< 1 year)",
    "category": "woody",
    "kc": [
      0.5,
      0.75,
      0.65
    ],
    "height": {
      "operator": "<",
      "value": 1.5
    },
    "root": null,
    "kcb": [
      0.35,
      0.6,
      0.55
    ],
    "cover": {
      "operator": "<",
      "value": 0.4
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 597,
    "id": "papaya-young"
  },
  {
    "label": "Papaya (Carica papaya) — Medium (single row), 3 000 – 4 500 pl ha-1",
    "category": "woody",
    "kc": [
      0.65,
      0.95,
      0.7
    ],
    "height": [
      1.5,
      3.0
    ],
    "root": null,
    "kcb": [
      0.55,
      0.85,
      0.6
    ],
    "cover": [
      0.4,
      0.7
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 598,
    "id": "papaya-medium-3-000-4-500-pl-ha-1"
  },
  {
    "label": "Papaya (Carica papaya) — High (single or double row), < 7 000 pl ha-1",
    "category": "woody",
    "kc": [
      0.8,
      1.05,
      0.85
    ],
    "height": {
      "operator": ">",
      "value": 2.5
    },
    "root": null,
    "kcb": [
      0.75,
      1.0,
      0.8
    ],
    "cover": [
      0.7,
      0.85
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 599,
    "id": "papaya-high-7-000-pl-ha-1"
  },
  {
    "label": "Passionfruit (Passiflora edulis) — Young (< 0.5 years); Vertical shoot position",
    "category": "woody",
    "kc": [
      0.45,
      0.5,
      0.45
    ],
    "height": [
      1.5,
      2.0
    ],
    "root": null,
    "kcb": [
      0.25,
      0.3,
      0.25
    ],
    "cover": {
      "operator": "<",
      "value": 0.15
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 601,
    "id": "passionfruit-young-vertical-shoot-position"
  },
  {
    "label": "Passionfruit (Passiflora edulis) — Medium; VSP; 500 pl ha-1",
    "category": "woody",
    "kc": [
      0.6,
      0.75,
      0.65
    ],
    "height": [
      1.5,
      2.0
    ],
    "root": null,
    "kcb": [
      0.45,
      0.6,
      0.5
    ],
    "cover": [
      0.15,
      0.35
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 602,
    "id": "passionfruit-medium-vsp-500-pl-ha-1"
  },
  {
    "label": "Passionfruit (Passiflora edulis) — High; VSP; 1 000 pl ha-1",
    "category": "woody",
    "kc": [
      0.85,
      1.0,
      0.85
    ],
    "height": [
      1.5,
      2.0
    ],
    "root": null,
    "kcb": [
      0.7,
      0.85,
      0.75
    ],
    "cover": [
      0.35,
      0.45
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 603,
    "id": "passionfruit-high-vsp-1-000-pl-ha-1"
  },
  {
    "label": "Passionfruit (Passiflora edulis) — Medium (< 0.5 years); hedgerow; 1000 pl ha-1",
    "category": "woody",
    "kc": [
      0.6,
      0.65,
      0.65
    ],
    "height": [
      1.5,
      2.0
    ],
    "root": null,
    "kcb": [
      0.5,
      0.6,
      0.55
    ],
    "cover": {
      "operator": "<",
      "value": 0.35
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 604,
    "id": "passionfruit-medium-hedgerow-1000-pl-ha-1"
  },
  {
    "label": "Passionfruit (Passiflora edulis) — High; hedgerow; 1000 pl ha-1",
    "category": "woody",
    "kc": [
      0.9,
      1.0,
      0.9
    ],
    "height": [
      1.5,
      2.0
    ],
    "root": null,
    "kcb": [
      0.8,
      0.95,
      0.8
    ],
    "cover": {
      "operator": ">",
      "value": 0.35
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 605,
    "id": "passionfruit-high-hedgerow-1000-pl-ha-1"
  },
  {
    "label": "Passionfruit (Passiflora edulis) — Young (< 0.5 years); overhead trellis",
    "category": "woody",
    "kc": [
      0.7,
      0.8,
      0.75
    ],
    "height": [
      1.8,
      2.2
    ],
    "root": null,
    "kcb": [
      0.6,
      0.75,
      0.7
    ],
    "cover": {
      "operator": "<",
      "value": 0.6
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 606,
    "id": "passionfruit-young-overhead-trellis"
  },
  {
    "label": "Passionfruit (Passiflora edulis) — Very high; overhead trellis; 2 000 pl ha-1",
    "category": "woody",
    "kc": [
      1.0,
      1.05,
      1.0
    ],
    "height": [
      1.8,
      2.2
    ],
    "root": null,
    "kcb": [
      0.95,
      1.0,
      0.95
    ],
    "cover": {
      "operator": ">",
      "value": 0.6
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 607,
    "id": "passionfruit-very-high-overhead-trellis-2-000-pl-ha-1"
  },
  {
    "label": "Cashew (Anacardium occidentale), dwarf — Young (< 5 years)",
    "category": "woody",
    "kc": [
      0.5,
      0.6,
      0.55
    ],
    "height": {
      "operator": "<",
      "value": 3.0
    },
    "root": null,
    "kcb": [
      0.3,
      0.5,
      0.4
    ],
    "cover": {
      "operator": "<",
      "value": 0.5
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 623,
    "id": "cashew-dwarf-young"
  },
  {
    "label": "Cashew (Anacardium occidentale), dwarf — Common density, 150 - 330 pl ha-1",
    "category": "woody",
    "kc": [
      0.65,
      0.65,
      0.65
    ],
    "height": [
      3.0,
      5.0
    ],
    "root": null,
    "kcb": [
      0.55,
      0.6,
      0.55
    ],
    "cover": [
      0.5,
      0.65
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 624,
    "id": "cashew-dwarf-common-density-150-330-pl-ha-1"
  },
  {
    "label": "Jaboticaba (Plinia peruviana) — Young (< 5 years)",
    "category": "woody",
    "kc": [
      0.5,
      0.65,
      0.55
    ],
    "height": {
      "operator": "<",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.35,
      0.45,
      0.4
    ],
    "cover": {
      "operator": "<",
      "value": 0.5
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 626,
    "id": "jaboticaba-young"
  },
  {
    "label": "Jaboticaba (Plinia peruviana) — Common density, 250 – 500 pl ha-1",
    "category": "woody",
    "kc": [
      0.7,
      0.95,
      0.8
    ],
    "height": {
      "operator": ">",
      "value": 2.5
    },
    "root": null,
    "kcb": [
      0.55,
      0.8,
      0.65
    ],
    "cover": {
      "operator": ">",
      "value": 0.5
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 628,
    "id": "jaboticaba-common-density-250-500-pl-ha-1"
  },
  {
    "label": "Longan (Dimocarpus longan) — Young (<5 years)",
    "category": "woody",
    "kc": [
      0.5,
      0.6,
      0.6
    ],
    "height": [
      1.0,
      2.0
    ],
    "root": null,
    "kcb": [
      0.3,
      0.45,
      0.45
    ],
    "cover": {
      "operator": "<",
      "value": 0.3
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 630,
    "id": "longan-young"
  },
  {
    "label": "Longan (Dimocarpus longan) — Common density, 250 - 300 pl ha-1",
    "category": "woody",
    "kc": [
      0.8,
      0.95,
      0.9
    ],
    "height": [
      2.5,
      4.0
    ],
    "root": null,
    "kcb": [
      0.7,
      0.9,
      0.85
    ],
    "cover": {
      "operator": ">",
      "value": 0.3
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 631,
    "id": "longan-common-density-250-300-pl-ha-1"
  },
  {
    "label": "Lychee (Litchi chinensis) — Young (< 5 years); vase",
    "category": "woody",
    "kc": [
      0.55,
      0.6,
      0.6
    ],
    "height": {
      "operator": "<",
      "value": 2.5
    },
    "root": null,
    "kcb": [
      0.35,
      0.4,
      0.4
    ],
    "cover": {
      "operator": "<",
      "value": 0.2
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 634,
    "id": "lychee-young-vase"
  },
  {
    "label": "Lychee (Litchi chinensis) — Low to medium; vase; 100 – 200 pl ha-1",
    "category": "woody",
    "kc": [
      0.65,
      0.75,
      0.7
    ],
    "height": [
      2.5,
      4.0
    ],
    "root": null,
    "kcb": [
      0.45,
      0.6,
      0.55
    ],
    "cover": [
      0.2,
      0.3
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 635,
    "id": "lychee-low-to-medium-vase-100-200-pl-ha-1"
  },
  {
    "label": "Lychee (Litchi chinensis) — High; vase; 200 – 400 pl ha-1",
    "category": "woody",
    "kc": [
      0.8,
      1.0,
      0.95
    ],
    "height": {
      "operator": ">",
      "value": 4.0
    },
    "root": null,
    "kcb": [
      0.7,
      0.9,
      0.8
    ],
    "cover": {
      "operator": ">",
      "value": 0.3
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 636,
    "id": "lychee-high-vase-200-400-pl-ha-1"
  },
  {
    "label": "Macadamia (Macadamia integrifolia) — Young (< 10 years)",
    "category": "woody",
    "kc": [
      0.55,
      0.55,
      0.5
    ],
    "height": {
      "operator": "<",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.35,
      0.5,
      0.4
    ],
    "cover": {
      "operator": "<",
      "value": 0.5
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 639,
    "id": "macadamia-young"
  },
  {
    "label": "Macadamia (Macadamia integrifolia) — Medium–High, 300 – 500 pl ha-1",
    "category": "woody",
    "kc": [
      0.75,
      0.75,
      0.7
    ],
    "height": [
      2.0,
      4.5
    ],
    "root": null,
    "kcb": [
      0.55,
      0.6,
      0.55
    ],
    "cover": {
      "operator": ">",
      "value": 0.5
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 640,
    "id": "macadamia-medium-high-300-500-pl-ha-1"
  },
  {
    "label": "Mango (Mangifera indica) — Young (< 4 years)",
    "category": "woody",
    "kc": [
      0.45,
      0.6,
      0.55
    ],
    "height": {
      "operator": "<",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.25,
      0.4,
      0.35
    ],
    "cover": {
      "operator": "<",
      "value": 0.25
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 643,
    "id": "mango-young"
  },
  {
    "label": "Mango (Mangifera indica) — Low to medium,100 – 250 pl ha-1",
    "category": "woody",
    "kc": [
      0.6,
      0.85,
      0.75
    ],
    "height": [
      2.0,
      3.0
    ],
    "root": null,
    "kcb": [
      0.45,
      0.7,
      0.6
    ],
    "cover": [
      0.25,
      0.4
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 644,
    "id": "mango-low-to-medium-100-250-pl-ha-1"
  },
  {
    "label": "Mango (Mangifera indica) — High, 400 – 600 pl ha-1",
    "category": "woody",
    "kc": [
      0.75,
      0.95,
      0.85
    ],
    "height": [
      2.5,
      4.0
    ],
    "root": null,
    "kcb": [
      0.65,
      0.85,
      0.75
    ],
    "cover": [
      0.4,
      0.5
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 645,
    "id": "mango-high-400-600-pl-ha-1"
  },
  {
    "label": "Cactus pear (Opuntia ficus–indica) — Young (< 3 years)",
    "category": "woody",
    "kc": [
      0.2,
      0.25,
      0.25
    ],
    "height": {
      "operator": "<",
      "value": 1.5
    },
    "root": null,
    "kcb": [
      0.15,
      0.2,
      0.2
    ],
    "cover": {
      "operator": "<",
      "value": 0.3
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 650,
    "id": "cactus-pear-young"
  },
  {
    "label": "Cactus pear (Opuntia ficus–indica) — Medium, 350 – 800 pl ha-1",
    "category": "woody",
    "kc": [
      0.3,
      0.4,
      0.3
    ],
    "height": [
      1.5,
      2.0
    ],
    "root": null,
    "kcb": [
      0.2,
      0.3,
      0.25
    ],
    "cover": [
      0.3,
      0.5
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 651,
    "id": "cactus-pear-medium-350-800-pl-ha-1"
  },
  {
    "label": "Cactus pear (Opuntia ficus–indica) — High, > 800 pl ha-1",
    "category": "woody",
    "kc": [
      0.35,
      0.5,
      0.4
    ],
    "height": {
      "operator": ">",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.3,
      0.45,
      0.35
    ],
    "cover": {
      "operator": ">",
      "value": 0.5
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 652,
    "id": "cactus-pear-high-800-pl-ha-1"
  },
  {
    "label": "Coconut (Cocos nucifera) and Açaí palm (Euterpe oleracea) — Young (< 15 years/coconut, < 3 years/açaí)",
    "category": "woody",
    "kc": [
      0.45,
      0.55,
      0.55
    ],
    "height": {
      "operator": "<",
      "value": 2.5
    },
    "root": null,
    "kcb": [
      0.3,
      0.35,
      0.35
    ],
    "cover": {
      "operator": "<",
      "value": 0.3
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 655,
    "id": "coconut-and-acai-palm-young"
  },
  {
    "label": "Coconut (Cocos nucifera) and Açaí palm (Euterpe oleracea) — Medium, 100 – 200 pl ha-1",
    "category": "woody",
    "kc": [
      0.75,
      0.85,
      0.85
    ],
    "height": [
      2.5,
      5.0
    ],
    "root": null,
    "kcb": [
      0.6,
      0.65,
      0.65
    ],
    "cover": [
      0.3,
      0.5
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 656,
    "id": "coconut-and-acai-palm-medium-100-200-pl-ha-1"
  },
  {
    "label": "Coconut (Cocos nucifera) and Açaí palm (Euterpe oleracea) — High, > 200 pl ha-1",
    "category": "woody",
    "kc": [
      0.95,
      1.0,
      1.0
    ],
    "height": {
      "operator": ">",
      "value": 5.0
    },
    "root": null,
    "kcb": [
      0.9,
      0.9,
      0.9
    ],
    "cover": {
      "operator": ">",
      "value": 0.5
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 657,
    "id": "coconut-and-acai-palm-high-200-pl-ha-1"
  },
  {
    "label": "Date palm (Phoenix dactylifera) — Young (< 10 years)",
    "category": "woody",
    "kc": [
      0.45,
      0.45,
      0.45
    ],
    "height": {
      "operator": "<",
      "value": 4.0
    },
    "root": null,
    "kcb": [
      0.25,
      0.35,
      0.35
    ],
    "cover": {
      "operator": "<",
      "value": 0.2
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 660,
    "id": "date-palm-young"
  },
  {
    "label": "Date palm (Phoenix dactylifera) — Medium, 100 – 130 pl ha-1",
    "category": "woody",
    "kc": [
      0.7,
      0.7,
      0.7
    ],
    "height": [
      4.0,
      10.0
    ],
    "root": null,
    "kcb": [
      0.5,
      0.6,
      0.6
    ],
    "cover": [
      0.2,
      0.5
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 661,
    "id": "date-palm-medium-100-130-pl-ha-1"
  },
  {
    "label": "Date palm (Phoenix dactylifera) — High, 130 – 200 pl ha-1",
    "category": "woody",
    "kc": [
      0.85,
      0.85,
      0.85
    ],
    "height": [
      5.0,
      12.0
    ],
    "root": null,
    "kcb": [
      0.8,
      0.8,
      0.8
    ],
    "cover": [
      0.5,
      0.7
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 662,
    "id": "date-palm-high-130-200-pl-ha-1"
  },
  {
    "label": "Date palm (Phoenix dactylifera) — Very high, > 200 pl ha-1",
    "category": "woody",
    "kc": [
      0.95,
      0.95,
      0.95
    ],
    "height": {
      "operator": ">",
      "value": 10.0
    },
    "root": null,
    "kcb": [
      0.85,
      0.9,
      0.9
    ],
    "cover": {
      "operator": ">",
      "value": 0.7
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 663,
    "id": "date-palm-very-high-200-pl-ha-1"
  },
  {
    "label": "Jatropha (Jatropha curcas) — Young (< 2 years); vase",
    "category": "woody",
    "kc": [
      0.45,
      0.45,
      0.45
    ],
    "height": {
      "operator": "<",
      "value": 1.0
    },
    "root": null,
    "kcb": [
      0.25,
      0.25,
      0.25
    ],
    "cover": {
      "operator": "<",
      "value": 0.15
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 666,
    "id": "jatropha-young-vase"
  },
  {
    "label": "Jatropha (Jatropha curcas) — Low to medium; vase; 1 100 – 1 500 pl ha-1",
    "category": "woody",
    "kc": [
      0.5,
      0.7,
      0.55
    ],
    "height": [
      1.0,
      2.0
    ],
    "root": null,
    "kcb": [
      0.35,
      0.55,
      0.4
    ],
    "cover": [
      0.15,
      0.35
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 667,
    "id": "jatropha-low-to-medium-vase-1-100-1-500-pl-ha-1"
  },
  {
    "label": "Jatropha (Jatropha curcas) — High; vase; > 1 500 pl ha-1",
    "category": "woody",
    "kc": [
      0.65,
      0.9,
      0.75
    ],
    "height": {
      "operator": ">",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.55,
      0.8,
      0.7
    ],
    "cover": {
      "operator": ">",
      "value": 0.35
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 668,
    "id": "jatropha-high-vase-1-500-pl-ha-1"
  },
  {
    "label": "Oil palm (Elaeis guineensis) — Young (< 3 years)",
    "category": "woody",
    "kc": [
      0.45,
      0.55,
      0.55
    ],
    "height": {
      "operator": "<",
      "value": 2.5
    },
    "root": null,
    "kcb": [
      0.3,
      0.35,
      0.35
    ],
    "cover": {
      "operator": "<",
      "value": 0.3
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 671,
    "id": "oil-palm-young"
  },
  {
    "label": "Oil palm (Elaeis guineensis) — Medium, 100 – 150 pl ha-1",
    "category": "woody",
    "kc": [
      0.75,
      0.85,
      0.85
    ],
    "height": [
      2.5,
      5.0
    ],
    "root": null,
    "kcb": [
      0.6,
      0.7,
      0.7
    ],
    "cover": [
      0.3,
      0.5
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 672,
    "id": "oil-palm-medium-100-150-pl-ha-1"
  },
  {
    "label": "Oil palm (Elaeis guineensis) — High, > 150 pl ha-1",
    "category": "woody",
    "kc": [
      0.95,
      1.0,
      1.0
    ],
    "height": {
      "operator": ">",
      "value": 5.0
    },
    "root": null,
    "kcb": [
      0.85,
      0.95,
      0.95
    ],
    "cover": {
      "operator": ">",
      "value": 0.5
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 673,
    "id": "oil-palm-high-150-pl-ha-1"
  },
  {
    "label": "Peach palm (Bactris gasipaes) for producing heart of palm, “palmito” — Young (≤ 2.5 years)",
    "category": "woody",
    "kc": [
      0.6,
      0.8,
      0.7
    ],
    "height": {
      "operator": "<",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.25,
      0.5,
      0.4
    ],
    "cover": {
      "operator": "<",
      "value": 0.3
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 676,
    "id": "peach-palm-for-producing-heart-of-palm-palmito-young"
  },
  {
    "label": "Peach palm (Bactris gasipaes) for producing heart of palm, “palmito” — Common density, 3 000 – 5 000 pl ha-1",
    "category": "woody",
    "kc": [
      0.8,
      0.95,
      0.9
    ],
    "height": {
      "operator": ">",
      "value": 2.0
    },
    "root": null,
    "kcb": [
      0.55,
      0.75,
      0.7
    ],
    "cover": {
      "operator": ">",
      "value": 0.3
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 677,
    "id": "peach-palm-for-producing-heart-of-palm-palmito-common-density-3-000-5-000-pl-ha-1"
  },
  {
    "label": "Ramie (Boehmeria nivea) — Young (< 2 years)",
    "category": "woody",
    "kc": [
      0.25,
      0.65,
      0.6
    ],
    "height": [
      0.7,
      2.0
    ],
    "root": null,
    "kcb": [
      0.15,
      0.55,
      0.5
    ],
    "cover": {
      "operator": "<",
      "value": 0.8
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 691,
    "id": "ramie-young"
  },
  {
    "label": "Ramie (Boehmeria nivea) — Common density, 40 000 – 60 000 pl ha-1",
    "category": "woody",
    "kc": [
      0.3,
      1.05,
      1.0
    ],
    "height": 2.5,
    "root": null,
    "kcb": [
      0.2,
      1.0,
      0.95
    ],
    "cover": [
      0.8,
      0.95
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 693,
    "id": "ramie-common-density-40-000-60-000-pl-ha-1"
  },
  {
    "label": "Rubber tree (Hevea brasiliensis) — Young (< 6 years)",
    "category": "woody",
    "kc": [
      0.55,
      0.75,
      0.65
    ],
    "height": {
      "operator": "<",
      "value": 8.0
    },
    "root": null,
    "kcb": [
      0.4,
      0.6,
      0.5
    ],
    "cover": {
      "operator": "<",
      "value": 0.75
    },
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 695,
    "id": "rubber-tree-young"
  },
  {
    "label": "Rubber tree (Hevea brasiliensis) — Common density, 400 – 700 pl ha-1",
    "category": "woody",
    "kc": [
      0.85,
      0.95,
      0.85
    ],
    "height": [
      8.0,
      15.0
    ],
    "root": null,
    "kcb": [
      0.75,
      0.9,
      0.8
    ],
    "cover": [
      0.75,
      0.9
    ],
    "tables": [
      "6.3",
      "7.3"
    ],
    "row": 696,
    "id": "rubber-tree-common-density-400-700-pl-ha-1"
  },
  {
    "label": "High mountain, semi–natural, no killing frost",
    "category": "grassland",
    "kc": [
      0.4,
      1.0,
      0.35
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.7,
      0.9
    ],
    "tables": [
      "6.4"
    ],
    "row": 765,
    "id": "high-mountain-semi-natural-no-killing-frost"
  },
  {
    "label": "High mountain, semi–natural, killing frost",
    "category": "grassland",
    "kc": [
      0.4,
      1.1,
      0.95
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.8,
      1.0
    ],
    "tables": [
      "6.4"
    ],
    "row": 766,
    "id": "high-mountain-semi-natural-killing-frost"
  },
  {
    "label": "Non–irrigated, for grazing (or seed)",
    "category": "grassland",
    "kc": [
      0.55,
      0.95,
      0.5
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.75,
      0.9
    ],
    "tables": [
      "6.4"
    ],
    "row": 767,
    "id": "non-irrigated-for-grazing"
  },
  {
    "label": "Non–irrigated, for hay (typical cut cycles)",
    "category": "grassland",
    "kc": [
      0.45,
      1.15,
      1.15
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.95,
      1.1
    ],
    "tables": [
      "6.4"
    ],
    "row": 768,
    "id": "non-irrigated-for-hay"
  },
  {
    "label": "Irrigated, for grazing (or seed)",
    "category": "grassland",
    "kc": [
      0.55,
      1.05,
      0.55
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.85,
      1.0
    ],
    "tables": [
      "6.4"
    ],
    "row": 769,
    "id": "irrigated-for-grazing"
  },
  {
    "label": "Irrigated, for hay (typical cut cycles)",
    "category": "grassland",
    "kc": [
      0.55,
      1.05,
      1.0
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.95,
      1.05
    ],
    "tables": [
      "6.4"
    ],
    "row": 770,
    "id": "irrigated-for-hay"
  },
  {
    "label": "Savanna grasslands",
    "category": "grassland",
    "kc": [
      0.35,
      0.9,
      0.35
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.5,
      0.7
    ],
    "tables": [
      "6.4"
    ],
    "row": 772,
    "id": "savanna-grasslands"
  },
  {
    "label": "Steppe grasslands",
    "category": "grassland",
    "kc": [
      0.3,
      0.75,
      0.3
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.4,
      0.6
    ],
    "tables": [
      "6.4"
    ],
    "row": 773,
    "id": "steppe-grasslands"
  },
  {
    "label": "Meadows and pastures in high mountain",
    "category": "grassland",
    "kc": [
      0.4,
      1.0,
      0.45
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.7,
      0.9
    ],
    "tables": [
      "6.4"
    ],
    "row": 774,
    "id": "meadows-and-pastures-in-high-mountain"
  },
  {
    "label": "Cold and temperate grassland ecosystems",
    "category": "grassland",
    "kc": [
      0.4,
      0.65,
      0.45
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.45,
      0.6
    ],
    "tables": [
      "6.4"
    ],
    "row": 775,
    "id": "cold-and-temperate-grassland-ecosystems"
  },
  {
    "label": "Mixed grasslands and forests",
    "category": "grassland",
    "kc": [
      0.35,
      0.7,
      0.4
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.45,
      0.6
    ],
    "tables": [
      "6.4"
    ],
    "row": 776,
    "id": "mixed-grasslands-and-forests"
  },
  {
    "label": "Shrublands",
    "category": "grassland",
    "kc": [
      0.25,
      0.7,
      0.4
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.4,
      0.6
    ],
    "tables": [
      "6.4"
    ],
    "row": 777,
    "id": "shrublands"
  },
  {
    "label": "Alfalfa for hay; typical multiple cutting cycles",
    "category": "grassland",
    "kc": [
      0.5,
      1.2,
      1.15
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      1.0,
      1.1
    ],
    "tables": [
      "6.4"
    ],
    "row": 779,
    "id": "alfalfa-for-hay-typical-multiple-cutting-cycles"
  },
  {
    "label": "Alfalfa for seed",
    "category": "grassland",
    "kc": [
      0.4,
      1.1,
      0.65
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.75,
      0.95
    ],
    "tables": [
      "6.4"
    ],
    "row": 780,
    "id": "alfalfa-for-seed"
  },
  {
    "label": "Grasses for grazing, high height of grazing cuts",
    "category": "grassland",
    "kc": [
      0.9,
      1.05,
      0.9
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.9,
      1.0
    ],
    "tables": [
      "6.4"
    ],
    "row": 781,
    "id": "grasses-for-grazing-high-height-of-grazing-cuts"
  },
  {
    "label": "Grasses for grazing, short height of grazing cuts",
    "category": "grassland",
    "kc": [
      0.85,
      0.95,
      0.85
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.85,
      0.9
    ],
    "tables": [
      "6.4"
    ],
    "row": 782,
    "id": "grasses-for-grazing-short-height-of-grazing-cuts"
  },
  {
    "label": "Grasses for grazing with large cut cycles",
    "category": "grassland",
    "kc": [
      0.9,
      0.95,
      0.95
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.9,
      0.95
    ],
    "tables": [
      "6.4"
    ],
    "row": 783,
    "id": "grasses-for-grazing-with-large-cut-cycles"
  },
  {
    "label": "Grasses for grazing with short cut cycles",
    "category": "grassland",
    "kc": [
      0.85,
      0.95,
      1.0
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.9,
      1.0
    ],
    "tables": [
      "6.4"
    ],
    "row": 784,
    "id": "grasses-for-grazing-with-short-cut-cycles"
  },
  {
    "label": "Grasses for seed production",
    "category": "grassland",
    "kc": [
      0.3,
      0.9,
      0.65
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.6,
      0.75
    ],
    "tables": [
      "6.4"
    ],
    "row": 785,
    "id": "grasses-for-seed-production"
  },
  {
    "label": "Grasses for hay; typical cut cycles",
    "category": "grassland",
    "kc": [
      0.55,
      1.15,
      1.05
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.9,
      1.05
    ],
    "tables": [
      "6.4"
    ],
    "row": 786,
    "id": "grasses-for-hay-typical-cut-cycles"
  },
  {
    "label": "Turf grasses, gulf courses (cut h<0.01 m)",
    "category": "grassland",
    "kc": [
      0.8,
      0.8,
      0.8
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.75,
      0.85
    ],
    "tables": [
      "6.4"
    ],
    "row": 787,
    "id": "turf-grasses-gulf-courses"
  },
  {
    "label": "Turf grasses, lawns (cut h<0.10 m)",
    "category": "grassland",
    "kc": [
      0.5,
      0.7,
      0.5
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.55,
      0.65
    ],
    "tables": [
      "6.4"
    ],
    "row": 788,
    "id": "turf-grasses-lawns"
  },
  {
    "label": "Turf grasses, urban",
    "category": "grassland",
    "kc": [
      0.65,
      0.9,
      0.5
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": [
      0.65,
      0.8
    ],
    "tables": [
      "6.4"
    ],
    "row": 789,
    "id": "turf-grasses-urban"
  },
  {
    "label": "High mountain (approximately > 3 000 m), wet meadow, with soil freezing in winter",
    "category": "wetland",
    "kc": [
      0.4,
      0.9,
      0.4
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.75,
    "tables": [
      "6.5"
    ],
    "row": 836,
    "id": "high-mountain-wet-meadow-with-soil-freezing-in-winter"
  },
  {
    "label": "High mountain (approximately > 2 000 m), wet grassland, cold winter without soil freezing",
    "category": "wetland",
    "kc": [
      0.4,
      0.85,
      0.4
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.6,
    "tables": [
      "6.5"
    ],
    "row": 838,
    "id": "high-mountain-wet-grassland-cold-winter-without-soil-freezing"
  },
  {
    "label": "Low mountain (approximately 2 000 to 1 000 m), reeds and shrubs, cold winter without soil freezing",
    "category": "wetland",
    "kc": [
      0.65,
      1.05,
      0.4
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.8,
    "tables": [
      "6.5"
    ],
    "row": 841,
    "id": "low-mountain-reeds-and-shrubs-cold-winter-without-soil-freezing"
  },
  {
    "label": "Transition from mountain to lowland (1 000 to 100 m), reed and shrubs, cold winter",
    "category": "wetland",
    "kc": [
      0.5,
      0.8,
      0.7
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.7,
    "tables": [
      "6.5"
    ],
    "row": 843,
    "id": "transition-from-mountain-to-lowland-reed-and-shrubs-cold-winter"
  },
  {
    "label": "Lowlands and flood plains, grasses, temperate climates",
    "category": "wetland",
    "kc": [
      0.55,
      0.85,
      0.55
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.75,
    "tables": [
      "6.5"
    ],
    "row": 844,
    "id": "lowlands-and-flood-plains-grasses-temperate-climates"
  },
  {
    "label": "Coastal lowlands, reed, temperate climates",
    "category": "wetland",
    "kc": [
      0.7,
      1.0,
      0.7
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.9,
    "tables": [
      "6.5"
    ],
    "row": 845,
    "id": "coastal-lowlands-reed-temperate-climates"
  },
  {
    "label": "Salt marshes, grasses and shrubs, warm climates",
    "category": "wetland",
    "kc": [
      0.2,
      0.6,
      0.35
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.45,
    "tables": [
      "6.5"
    ],
    "row": 847,
    "id": "salt-marshes-grasses-and-shrubs-warm-climates"
  },
  {
    "label": "Wet savanna, large grasses, warm climates",
    "category": "wetland",
    "kc": [
      0.6,
      1.0,
      0.65
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.8,
    "tables": [
      "6.5"
    ],
    "row": 848,
    "id": "wet-savanna-large-grasses-warm-climates"
  },
  {
    "label": "Peat bogs",
    "category": "wetland",
    "kc": [
      0.5,
      1.05,
      0.8
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.85,
    "tables": [
      "6.5"
    ],
    "row": 849,
    "id": "peat-bogs"
  },
  {
    "label": "Lowlands, trees and shrubs, cold winter",
    "category": "wetland",
    "kc": [
      0.4,
      0.8,
      0.4
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.7,
    "tables": [
      "6.5"
    ],
    "row": 851,
    "id": "lowlands-trees-and-shrubs-cold-winter"
  },
  {
    "label": "Lowland, grasses, cold winter",
    "category": "wetland",
    "kc": [
      0.9,
      1.1,
      0.9
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 1.0,
    "tables": [
      "6.5"
    ],
    "row": 853,
    "id": "lowland-grasses-cold-winter"
  },
  {
    "label": "Lowland, trees, cold winter, less water",
    "category": "wetland",
    "kc": [
      0.2,
      0.4,
      0.1
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.35,
    "tables": [
      "6.5"
    ],
    "row": 854,
    "id": "lowland-trees-cold-winter-less-water"
  },
  {
    "label": "Lowland, trees, cold winter, more water",
    "category": "wetland",
    "kc": [
      0.6,
      0.9,
      0.7
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.75,
    "tables": [
      "6.5"
    ],
    "row": 855,
    "id": "lowland-trees-cold-winter-more-water"
  },
  {
    "label": "Trees, temperate and hot climates, water available",
    "category": "wetland",
    "kc": [
      0.45,
      0.9,
      0.5
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.7,
    "tables": [
      "6.5"
    ],
    "row": 856,
    "id": "trees-temperate-and-hot-climates-water-available"
  },
  {
    "label": "Trees and shrubs, temperate and hot climates, dry",
    "category": "wetland",
    "kc": [
      0.2,
      0.45,
      0.2
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.35,
    "tables": [
      "6.5"
    ],
    "row": 858,
    "id": "trees-and-shrubs-temperate-and-hot-climates-dry"
  },
  {
    "label": "Trees and shrubs, temperate and hot climates, humid",
    "category": "wetland",
    "kc": [
      0.85,
      0.95,
      0.8
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.9,
    "tables": [
      "6.5"
    ],
    "row": 859,
    "id": "trees-and-shrubs-temperate-and-hot-climates-humid"
  },
  {
    "label": "Sedges (Carex spp.)",
    "category": "wetland",
    "kc": [
      0.7,
      1.1,
      0.7
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.8,
    "tables": [
      "6.5"
    ],
    "row": 861,
    "id": "sedges"
  },
  {
    "label": "Foxtail (Ceratophylum demersum)",
    "category": "wetland",
    "kc": [
      0.75,
      1.05,
      0.8
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.85,
    "tables": [
      "6.5"
    ],
    "row": 862,
    "id": "foxtail"
  },
  {
    "label": "Sawgrass (Cladium jamaicense)",
    "category": "wetland",
    "kc": [
      0.7,
      1.05,
      0.7
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.9,
    "tables": [
      "6.5"
    ],
    "row": 864,
    "id": "sawgrass"
  },
  {
    "label": "Saltgrass (Distichlis spicata)",
    "category": "wetland",
    "kc": [
      0.25,
      0.55,
      0.4
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.45,
    "tables": [
      "6.5"
    ],
    "row": 865,
    "id": "saltgrass"
  },
  {
    "label": "Common reed (Phragmites australis)",
    "category": "wetland",
    "kc": [
      0.7,
      1.1,
      0.75
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 1.0,
    "tables": [
      "6.5"
    ],
    "row": 866,
    "id": "common-reed"
  },
  {
    "label": "Peach willow (Salix amigdaloides)",
    "category": "wetland",
    "kc": [
      0.6,
      1.05,
      0.6
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.9,
    "tables": [
      "6.5"
    ],
    "row": 867,
    "id": "peach-willow"
  },
  {
    "label": "Bulrush (Scirpus lacustris)",
    "category": "wetland",
    "kc": [
      0.65,
      1.05,
      0.5
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.85,
    "tables": [
      "6.5"
    ],
    "row": 869,
    "id": "bulrush"
  },
  {
    "label": "Cattail (Typha latifolia)",
    "category": "wetland",
    "kc": [
      0.6,
      1.05,
      0.65
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.85,
    "tables": [
      "6.5"
    ],
    "row": 870,
    "id": "cattail-2"
  },
  {
    "label": "Big sagebrush (Artemisia tridentata)",
    "category": "wetland",
    "kc": [
      0.35,
      0.8,
      0.35
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.5,
    "tables": [
      "6.5"
    ],
    "row": 11,
    "id": "big-sagebrush"
  },
  {
    "label": "Sedge (Carex spp.)",
    "category": "wetland",
    "kc": [
      0.4,
      0.85,
      0.75
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.65,
    "tables": [
      "6.5"
    ],
    "row": 12,
    "id": "sedge-2"
  },
  {
    "label": "Russian olive (Elaeagnus angustifolia)",
    "category": "wetland",
    "kc": [
      0.65,
      0.8,
      0.65
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.7,
    "tables": [
      "6.5"
    ],
    "row": 13,
    "id": "russian-olive"
  },
  {
    "label": "Arrowweed (Pluchea serice)",
    "category": "wetland",
    "kc": [
      0.3,
      0.6,
      0.2
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.4,
    "tables": [
      "6.5"
    ],
    "row": 15,
    "id": "arrowweed"
  },
  {
    "label": "Blue grass (Poa pratensis)",
    "category": "wetland",
    "kc": [
      0.3,
      0.65,
      0.2
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.5,
    "tables": [
      "6.5"
    ],
    "row": 16,
    "id": "blue-grass"
  },
  {
    "label": "Euphrates poplar (Populus eufratica)",
    "category": "wetland",
    "kc": [
      0.6,
      0.7,
      0.6
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.65,
    "tables": [
      "6.5"
    ],
    "row": 17,
    "id": "euphrates-poplar"
  },
  {
    "label": "Cottonwood, Alamo (P. deltoides)",
    "category": "wetland",
    "kc": [
      0.55,
      0.8,
      0.6
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.7,
    "tables": [
      "6.5"
    ],
    "row": 18,
    "id": "cottonwood-alamo"
  },
  {
    "label": "Frémont's cottonwood (P. fremontii)",
    "category": "wetland",
    "kc": [
      0.45,
      0.75,
      0.45
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.55,
    "tables": [
      "6.5"
    ],
    "row": 20,
    "id": "fremont-s-cottonwood"
  },
  {
    "label": "Gansu’s cottonwood (P. gansuensis)",
    "category": "wetland",
    "kc": [
      0.55,
      0.85,
      0.6
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.65,
    "tables": [
      "6.5"
    ],
    "row": 21,
    "id": "gansu-s-cottonwood"
  },
  {
    "label": "Mesquite (Prosopis velutina)",
    "category": "wetland",
    "kc": [
      0.15,
      0.4,
      0.4
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.35,
    "tables": [
      "6.5"
    ],
    "row": 22,
    "id": "mesquite"
  },
  {
    "label": "Willow (Salix spp. )",
    "category": "wetland",
    "kc": [
      0.55,
      0.95,
      0.65
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.75,
    "tables": [
      "6.5"
    ],
    "row": 23,
    "id": "willow"
  },
  {
    "label": "Saltcedar (Tamarix ramosissima) wet",
    "category": "wetland",
    "kc": [
      0.45,
      0.9,
      0.6
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.7,
    "tables": [
      "6.5"
    ],
    "row": 25,
    "id": "saltcedar-wet"
  },
  {
    "label": "Saltcedar (T. ramosissima) dry",
    "category": "wetland",
    "kc": [
      0.3,
      0.45,
      0.3
    ],
    "height": null,
    "root": null,
    "kcb": null,
    "cover": null,
    "averageKc": 0.4,
    "tables": [
      "6.5"
    ],
    "row": 26,
    "id": "saltcedar-dry"
  }
]

const RAW_DEPLETION_FRACTIONS = [
  {
    "id": "asparagus",
    "label": "Asparagus (Asparagus officinalis)",
    "depletionFraction": 0.45,
    "table": "8.1"
  },
  {
    "id": "carrots",
    "label": "Carrots (Daucus carota)",
    "depletionFraction": 0.3,
    "table": "8.1"
  },
  {
    "id": "cassava",
    "label": "Cassava (Manihot esculenta)",
    "depletionFraction": 0.5,
    "table": "8.1"
  },
  {
    "id": "celeriac-celery-root",
    "label": "Celeriac, celery root (Apium graveolens group rapaceum)",
    "depletionFraction": 0.3,
    "table": "8.1"
  },
  {
    "id": "chufa-tigernut",
    "label": "Chufa, tigernut (Cyperus esculentus)",
    "depletionFraction": 0.35,
    "table": "8.1"
  },
  {
    "id": "garlic",
    "label": "Garlic (Allium sativum)",
    "depletionFraction": 0.3,
    "table": "8.1"
  },
  {
    "id": "leek",
    "label": "Leek (Allium porrum)",
    "depletionFraction": 0.3,
    "table": "8.1"
  },
  {
    "id": "mashua",
    "label": "Mashua (Tropaeolum tuberosum)",
    "depletionFraction": 0.35,
    "table": "8.1"
  },
  {
    "id": "onions",
    "label": "Onions (Allium cepa)",
    "depletionFraction": 0.3,
    "table": "8.1"
  },
  {
    "id": "parsnip",
    "label": "Parsnip (Pastinaca sativa)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "potato",
    "label": "Potato (Solanum tuberosum)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "radish",
    "label": "Radish (Raphanus sativus)",
    "depletionFraction": 0.3,
    "table": "8.1"
  },
  {
    "id": "rutabaga",
    "label": "Rutabaga (Brassica napus)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "sweet-potato",
    "label": "Sweet potato (Ipomoea batatas)",
    "depletionFraction": 0.45,
    "table": "8.1"
  },
  {
    "id": "table-beets",
    "label": "Table beets (Beta vulgaris)",
    "depletionFraction": 0.45,
    "table": "8.1"
  },
  {
    "id": "turnip",
    "label": "Turnip (Brassica rapa)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "yam-taro",
    "label": "Yam, Taro (Colocasia esculenta)",
    "depletionFraction": 0.2,
    "table": "8.1"
  },
  {
    "id": "african-cabbage-spiderwisp",
    "label": "African cabbage, spiderwisp (Cleome gynandra)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "african-spinach",
    "label": "African spinach, (Amaranthus cruentus)",
    "depletionFraction": 0.3,
    "table": "8.1"
  },
  {
    "id": "artichoke",
    "label": "Artichoke (Cynara scolymus)",
    "depletionFraction": 0.45,
    "table": "8.1"
  },
  {
    "id": "arugula-rucula",
    "label": "Arugula, rucula (Eruca sativa or E. vesicaria)",
    "depletionFraction": 0.35,
    "table": "8.1"
  },
  {
    "id": "broccoli",
    "label": "Broccoli (Brassica oleracea cv. italica)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "brussel-sprouts",
    "label": "Brussel sprouts (Brassica oleracea cv. gemmifera)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "common-cabbage",
    "label": "Common cabbage (Brassica oleracea)",
    "depletionFraction": 0.35,
    "table": "8.1"
  },
  {
    "id": "kale-leaf-cabbage-and-collard-green",
    "label": "Kale, leaf cabbage (B. oleracea var. sabellica), and Collard green (B. oleracea var. Acephala)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "chinese-cabbage-bok-choy",
    "label": "Chinese cabbage, bok choy (B. rapa cv. chinensis)",
    "depletionFraction": 0.35,
    "table": "8.1"
  },
  {
    "id": "chinese-cabbage-pak-choi",
    "label": "Chinese cabbage, pak choi (B. rapa ssp. pekinensis)",
    "depletionFraction": 0.35,
    "table": "8.1"
  },
  {
    "id": "cauliflower",
    "label": "Cauliflower (Brassica oleracea cv. botrytis)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "celery",
    "label": "Celery (Apium graveolens var. dulce)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "endive-escarola-cichorium-endivia",
    "label": "Endive, escarola Cichorium endivia",
    "depletionFraction": 0.3,
    "table": "8.1"
  },
  {
    "id": "jute-mallow-for-leaves",
    "label": "Jute mallow for leaves (Corchorus olitorius)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "lettuce",
    "label": "Lettuce (Lactuca sativa)",
    "depletionFraction": 0.3,
    "table": "8.1"
  },
  {
    "id": "purslane",
    "label": "Purslane (Portulaca oleracea)",
    "depletionFraction": 0.35,
    "table": "8.1"
  },
  {
    "id": "spinach",
    "label": "Spinach (Spinacia oleracea)",
    "depletionFraction": 0.25,
    "table": "8.1"
  },
  {
    "id": "banana",
    "label": "Banana (Musa sativa)",
    "depletionFraction": 0.35,
    "table": "8.1"
  },
  {
    "id": "bell-and-chili-pepper",
    "label": "Bell and Chili pepper (Capsicum annuum)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "bitter-gourd-bitter-melon",
    "label": "Bitter gourd, bitter melon (Momordica charantia)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "cape-gooseberry",
    "label": "Cape gooseberry (Physalis peruviana)",
    "depletionFraction": 0.5,
    "table": "8.1"
  },
  {
    "id": "chilli-tabasco-pepper",
    "label": "Chilli tabasco pepper (Capsicum frutescens)",
    "depletionFraction": 0.45,
    "table": "8.1"
  },
  {
    "id": "cucumber",
    "label": "Cucumber (Cucumis sativus)",
    "depletionFraction": 0.45,
    "table": "8.1"
  },
  {
    "id": "eggplant",
    "label": "Eggplant (Solanum melongena)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "fennel",
    "label": "Fennel (Foeniculum vulgare)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "melon",
    "label": "Melon (Cucumis melo)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "melon-cantaloupe",
    "label": "Melon cantaloupe (Cucumis melo)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "nightshade-sunberry",
    "label": "Nightshade, sunberry (Solanum retroflexum)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "okra",
    "label": "Okra (Abelmoschus esculentus)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "pineapple",
    "label": "Pineapple (Ananas comosus)",
    "depletionFraction": 0.35,
    "table": "8.1"
  },
  {
    "id": "pumpkin-winter-squash",
    "label": "Pumpkin, winter squash (Cucumis pepo)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "strawberries",
    "label": "Strawberries (Fragaria × ananassa)",
    "depletionFraction": 0.25,
    "table": "8.1"
  },
  {
    "id": "tomato",
    "label": "Tomato (Solanum lycopersicum)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "watermelon",
    "label": "Watermelon (Citrullus lanatus)",
    "depletionFraction": 0.45,
    "table": "8.1"
  },
  {
    "id": "zucchini-squash",
    "label": "Zucchini, squash (Cucumis pepo)",
    "depletionFraction": 0.45,
    "table": "8.1"
  },
  {
    "id": "chicory-and-bitter-chicory",
    "label": "Chicory and bitter chicory (Cichorium intybus and C. intybus var intybus)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "ginger",
    "label": "Ginger (Zingiber officinale)",
    "depletionFraction": 0.3,
    "table": "8.1"
  },
  {
    "id": "licorice",
    "label": "Licorice (Glycyrrhiza glabra)",
    "depletionFraction": 0.45,
    "table": "8.1"
  },
  {
    "id": "nutgrass-purple-nutsedge",
    "label": "Nutgrass, purple nutsedge (Cyperus rotundus)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "turmeric-golden-curry",
    "label": "Turmeric, golden curry (Curcuma longa)",
    "depletionFraction": 0.3,
    "table": "8.1"
  },
  {
    "id": "absinthe-wormwood",
    "label": "Absinthe, wormwood, (Artemisia absinthium)",
    "depletionFraction": 0.45,
    "table": "8.1"
  },
  {
    "id": "basil",
    "label": "Basil (Ocimum basilicum)",
    "depletionFraction": 0.3,
    "table": "8.1"
  },
  {
    "id": "cardamom-large-black",
    "label": "Cardamom, large & black (Amomum subulatum)",
    "depletionFraction": 0.5,
    "table": "8.1"
  },
  {
    "id": "chamomile",
    "label": "Chamomile (Chamomilla recutita)",
    "depletionFraction": 0.3,
    "table": "8.1"
  },
  {
    "id": "coriander",
    "label": "Coriander (Coriandrum sativum)",
    "depletionFraction": 0.3,
    "table": "8.1"
  },
  {
    "id": "fenugreek",
    "label": "Fenugreek (Trigonella foenum-graecum)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "lavender",
    "label": "Lavender (Lavandula angustifolia)",
    "depletionFraction": 0.45,
    "table": "8.1"
  },
  {
    "id": "lemon-balm-balm",
    "label": "Lemon balm, balm (Melissa officinalis)",
    "depletionFraction": 0.3,
    "table": "8.1"
  },
  {
    "id": "japanese-mint-wild-mint",
    "label": "Japanese mint, wild mint (Mentha arvensis)",
    "depletionFraction": 0.3,
    "table": "8.1"
  },
  {
    "id": "peppermint",
    "label": "Peppermint (Mentha x piperita)",
    "depletionFraction": 0.3,
    "table": "8.1"
  },
  {
    "id": "spearmint-common-mint",
    "label": "Spearmint, common mint (Mentha spicata)",
    "depletionFraction": 0.3,
    "table": "8.1"
  },
  {
    "id": "oregano",
    "label": "Oregano (Origanum vulgare)",
    "depletionFraction": 0.3,
    "table": "8.1"
  },
  {
    "id": "parsley",
    "label": "Parsley (Petroselinum crispum)",
    "depletionFraction": 0.3,
    "table": "8.1"
  },
  {
    "id": "plumed-cockscomb",
    "label": "Plumed cockscomb (Celosia argentea)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "roselle",
    "label": "Roselle (Hibiscus sabdariffa)",
    "depletionFraction": 0.35,
    "table": "8.1"
  },
  {
    "id": "rosemary-rosmarin",
    "label": "Rosemary, rosmarin (Rosmarinus officinalis)",
    "depletionFraction": 0.5,
    "table": "8.1"
  },
  {
    "id": "saffron",
    "label": "Saffron (Crocus sativus)",
    "depletionFraction": 0.2,
    "table": "8.1"
  },
  {
    "id": "stevia-candyleaf-sweetleaf",
    "label": "Stevia, candyleaf, sweetleaf (Stevia rebaudiana)",
    "depletionFraction": 0.35,
    "table": "8.1"
  },
  {
    "id": "summer-savory",
    "label": "Summer savory (Satureja hortensis)",
    "depletionFraction": 0.35,
    "table": "8.1"
  },
  {
    "id": "thyme",
    "label": "Thyme (Thymus vulgaris)",
    "depletionFraction": 0.25,
    "table": "8.1"
  },
  {
    "id": "yarrow",
    "label": "Yarrow (Achillea millefolium)",
    "depletionFraction": 0.5,
    "table": "8.1"
  },
  {
    "id": "ajowan",
    "label": "Ajowan (Trachyspermum ammi)",
    "depletionFraction": 0.45,
    "table": "8.1"
  },
  {
    "id": "black-cumin",
    "label": "Black cumin (Nigella sativa)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "chia",
    "label": "Chia (Salvia hispanica)",
    "depletionFraction": 0.35,
    "table": "8.1"
  },
  {
    "id": "cumin",
    "label": "Cumin (Cuminum cyminum)",
    "depletionFraction": 0.25,
    "table": "8.1"
  },
  {
    "id": "milk-thistle",
    "label": "Milk thistle (Silybum marianum or Carduus m.)",
    "depletionFraction": 0.4,
    "table": "8.1"
  },
  {
    "id": "lesquerella-popweed",
    "label": "Lesquerella, popweed (Physaria fendleri)",
    "depletionFraction": 0.35,
    "table": "8.1"
  },
  {
    "id": "vanilla-including-tutor-and-shadow-plants",
    "label": "Vanilla (Vanilla planifolia), including tutor and shadow plants",
    "depletionFraction": 0.25,
    "table": "8.1"
  },
  {
    "id": "common-bean",
    "label": "Common bean (Phaseolus vulgaris)",
    "depletionFraction": 0.45,
    "table": "8.2"
  },
  {
    "id": "butter-bean-lima-bean",
    "label": "Butter bean, lima bean (Phaseolus lunatus)",
    "depletionFraction": 0.45,
    "table": "8.2"
  },
  {
    "id": "mat-bean-moth-bean",
    "label": "Mat bean, moth bean (Vigna aconitifolia)",
    "depletionFraction": 0.5,
    "table": "8.2"
  },
  {
    "id": "black-green-gram",
    "label": "Black & green gram (Vigna mungo)",
    "depletionFraction": 0.45,
    "table": "8.2"
  },
  {
    "id": "chickpea-garbanzo",
    "label": "Chickpea, garbanzo (Cicer arietinum)",
    "depletionFraction": 0.45,
    "table": "8.2"
  },
  {
    "id": "clusterbean-guar",
    "label": "Clusterbean, guar (Cyamopsis tetragonoloba)",
    "depletionFraction": 0.5,
    "table": "8.2"
  },
  {
    "id": "cowpea",
    "label": "Cowpea (Vigna unguiculata)",
    "depletionFraction": 0.5,
    "table": "8.2"
  },
  {
    "id": "fava-bean",
    "label": "Fava bean (Vicia faba)",
    "depletionFraction": 0.45,
    "table": "8.2"
  },
  {
    "id": "groundnut",
    "label": "Groundnut (peanut) (Arachis hypogaea)",
    "depletionFraction": 0.5,
    "table": "8.2"
  },
  {
    "id": "lentil",
    "label": "Lentil (Lens culinaris)",
    "depletionFraction": 0.5,
    "table": "8.2"
  },
  {
    "id": "pea",
    "label": "Pea (Pisum sativum)",
    "depletionFraction": 0.4,
    "table": "8.2"
  },
  {
    "id": "soybean",
    "label": "Soybean (Glycine max)",
    "depletionFraction": 0.5,
    "table": "8.2"
  },
  {
    "id": "cotton",
    "label": "Cotton (Gossypium hirsutum)",
    "depletionFraction": 0.6,
    "table": "8.2"
  },
  {
    "id": "flax",
    "label": "Flax (Linseed) (Linum usitatissimum)",
    "depletionFraction": 0.5,
    "table": "8.2"
  },
  {
    "id": "jute-mallow-for-fibre",
    "label": "Jute mallow for fibre (Corchorus olitorius)",
    "depletionFraction": 0.5,
    "table": "8.2"
  },
  {
    "id": "kenaf",
    "label": "Kenaf (Hibiscus cannabinus)",
    "depletionFraction": 0.55,
    "table": "8.2"
  },
  {
    "id": "sisal",
    "label": "Sisal (Agave sisalana)",
    "depletionFraction": 0.8,
    "table": "8.2"
  },
  {
    "id": "sunn-hemp",
    "label": "Sunn hemp (Crotalaria juncea)",
    "depletionFraction": 0.55,
    "table": "8.2"
  },
  {
    "id": "camelina",
    "label": "Camelina (Camelina sativa)",
    "depletionFraction": 0.6,
    "table": "8.2"
  },
  {
    "id": "canola",
    "label": "Canola (Brassica napus)",
    "depletionFraction": 0.5,
    "table": "8.2"
  },
  {
    "id": "castorbean",
    "label": "Castorbean (Ricinus communis)",
    "depletionFraction": 0.6,
    "table": "8.2"
  },
  {
    "id": "linseed",
    "label": "Linseed (Flax) (Linum usitatissimum)",
    "depletionFraction": 0.6,
    "table": "8.2"
  },
  {
    "id": "mustard",
    "label": "Mustard (Brassica juncea)",
    "depletionFraction": 0.55,
    "table": "8.2"
  },
  {
    "id": "safflower",
    "label": "Safflower (Carthamus tinctorius)",
    "depletionFraction": 0.6,
    "table": "8.2"
  },
  {
    "id": "sesame",
    "label": "Sesame (Sesamum indicum)",
    "depletionFraction": 0.6,
    "table": "8.2"
  },
  {
    "id": "sunflower",
    "label": "Sunflower (Helianthus annuus)",
    "depletionFraction": 0.5,
    "table": "8.2"
  },
  {
    "id": "sugar-beet",
    "label": "Sugar beet (Beta vulgaris)",
    "depletionFraction": 0.55,
    "table": "8.2"
  },
  {
    "id": "sugar-cane",
    "label": "Sugar cane (Saccharum officinarum)",
    "depletionFraction": 0.6,
    "table": "8.2"
  },
  {
    "id": "amaranth-grain",
    "label": "Amaranth grain (Amaranthus sp.)",
    "depletionFraction": 0.55,
    "table": "8.2"
  },
  {
    "id": "barley",
    "label": "Barley (Hordeum vulgare)",
    "depletionFraction": 0.55,
    "table": "8.2"
  },
  {
    "id": "buckwheat",
    "label": "Buckwheat (Fagopyrum esculentum)",
    "depletionFraction": 0.55,
    "table": "8.2"
  },
  {
    "id": "maize",
    "label": "Maize (Zea mays)",
    "depletionFraction": 0.5,
    "table": "8.2"
  },
  {
    "id": "oats",
    "label": "Oats (Avena sativa)",
    "depletionFraction": 0.55,
    "table": "8.2"
  },
  {
    "id": "pearl-millet",
    "label": "Pearl Millet (Pennisetum glaucum)",
    "depletionFraction": 0.55,
    "table": "8.2"
  },
  {
    "id": "quinoa",
    "label": "Quinoa (Chenopodium quinoa)",
    "depletionFraction": 0.55,
    "table": "8.2"
  },
  {
    "id": "rye",
    "label": "Rye (Secale cereale)",
    "depletionFraction": 0.55,
    "table": "8.2"
  },
  {
    "id": "sorghum",
    "label": "Sorghum (Sorghum bicolor)",
    "depletionFraction": 0.55,
    "table": "8.2"
  },
  {
    "id": "teff",
    "label": "Teff (Eragrostis tef)",
    "depletionFraction": 0.5,
    "table": "8.2"
  },
  {
    "id": "wheat-common",
    "label": "Wheat, common (Triticum aestivum)",
    "depletionFraction": 0.5,
    "table": "8.2"
  },
  {
    "id": "wheat-durum",
    "label": "Wheat, durum (Triticum durum)",
    "depletionFraction": 0.5,
    "table": "8.2"
  },
  {
    "id": "olive-traditional",
    "label": "Olive (Olea europaea) – Traditional",
    "depletionFraction": 0.65,
    "table": "8.3"
  },
  {
    "id": "olive-intensive-and-super-intensive",
    "label": "Olive (Olea europaea) — Intensive and super-intensive",
    "depletionFraction": 0.45,
    "table": "8.3"
  },
  {
    "id": "grapes-table",
    "label": "Grapes (Vitis vinifera) – Table",
    "depletionFraction": 0.4,
    "table": "8.3"
  },
  {
    "id": "grapes-wine",
    "label": "Grapes (Vitis vinifera) — Wine",
    "depletionFraction": 0.5,
    "table": "8.3"
  },
  {
    "id": "citrus",
    "label": "Citrus (Citrus sp.)",
    "depletionFraction": 0.45,
    "table": "8.3"
  },
  {
    "id": "avocado",
    "label": "Avocado (Persea americana)",
    "depletionFraction": 0.55,
    "table": "8.3"
  },
  {
    "id": "fig-tree",
    "label": "Fig tree (Ficus carica)",
    "depletionFraction": 0.5,
    "table": "8.3"
  },
  {
    "id": "loquat",
    "label": "Loquat (Eriobotrya japonica)",
    "depletionFraction": 0.65,
    "table": "8.3"
  },
  {
    "id": "persimmon",
    "label": "Persimmon (Diospyros kaki)",
    "depletionFraction": 0.5,
    "table": "8.3"
  },
  {
    "id": "pomegranate",
    "label": "Pomegranate (Punica granatum)",
    "depletionFraction": 0.45,
    "table": "8.3"
  },
  {
    "id": "tea-non-shaded",
    "label": "Tea (Camellia sinensis) – non-shaded",
    "depletionFraction": 0.4,
    "table": "8.3"
  },
  {
    "id": "tea-shaded",
    "label": "Tea (Camellia sinensis) — shaded",
    "depletionFraction": 0.45,
    "table": "8.3"
  },
  {
    "id": "apple",
    "label": "Apple (Malus domestica)",
    "depletionFraction": 0.5,
    "table": "8.3"
  },
  {
    "id": "pear",
    "label": "Pear (Pyrus communis)",
    "depletionFraction": 0.5,
    "table": "8.3"
  },
  {
    "id": "apricot",
    "label": "Apricot (Prunus armeniaca)",
    "depletionFraction": 0.5,
    "table": "8.3"
  },
  {
    "id": "cherry",
    "label": "Cherry (Prunus avium)",
    "depletionFraction": 0.5,
    "table": "8.3"
  },
  {
    "id": "peach",
    "label": "Peach (Prunus persica)",
    "depletionFraction": 0.5,
    "table": "8.3"
  },
  {
    "id": "plum",
    "label": "Plum (Prunus domestica and P. salicina)",
    "depletionFraction": 0.5,
    "table": "8.3"
  },
  {
    "id": "almond",
    "label": "Almond (Prunus dulcis)",
    "depletionFraction": 0.45,
    "table": "8.3"
  },
  {
    "id": "hazelnut",
    "label": "Hazelnut (Corylus avellana)",
    "depletionFraction": 0.5,
    "table": "8.3"
  },
  {
    "id": "pecan",
    "label": "Pecan (Carya illinoinensis)",
    "depletionFraction": 0.55,
    "table": "8.3"
  },
  {
    "id": "pistachio",
    "label": "Pistachio (Pistacia vera)",
    "depletionFraction": 0.4,
    "table": "8.3"
  },
  {
    "id": "walnut",
    "label": "Walnut (Juglans regia)",
    "depletionFraction": 0.5,
    "table": "8.3"
  },
  {
    "id": "kiwifruit",
    "label": "Kiwifruit (Actinidia deliciosa)",
    "depletionFraction": 0.4,
    "table": "8.3"
  },
  {
    "id": "hop",
    "label": "Hop (Humulus lupulus)",
    "depletionFraction": 0.5,
    "table": "8.3"
  },
  {
    "id": "berries",
    "label": "Berries (bushes) (Vaccinium sp.)",
    "depletionFraction": 0.5,
    "table": "8.3"
  },
  {
    "id": "acerola",
    "label": "Acerola (Malpighia emarginata)",
    "depletionFraction": 0.5,
    "table": "8.3"
  },
  {
    "id": "carambola",
    "label": "Carambola (Averrhoa carambola)",
    "depletionFraction": 0.5,
    "table": "8.3"
  },
  {
    "id": "cashew-dwarf",
    "label": "Cashew (Anacardium occidentale), dwarf",
    "depletionFraction": 0.6,
    "table": "8.3"
  },
  {
    "id": "cherimoya",
    "label": "Cherimoya (Annona cherimola)",
    "depletionFraction": 0.45,
    "table": "8.3"
  },
  {
    "id": "cocoa",
    "label": "Cocoa (Theobroma cacao)",
    "depletionFraction": 0.3,
    "table": "8.3"
  },
  {
    "id": "coffee",
    "label": "Coffee (Coffea arabica)",
    "depletionFraction": 0.4,
    "table": "8.3"
  },
  {
    "id": "dragon-fruit",
    "label": "Dragon fruit (Hylocereus undatus)",
    "depletionFraction": 0.6,
    "table": "8.3"
  },
  {
    "id": "guava",
    "label": "Guava (Psidium guajava)",
    "depletionFraction": 0.5,
    "table": "8.3"
  },
  {
    "id": "jujube",
    "label": "Jujube (Ziziphus jujuba)",
    "depletionFraction": 0.5,
    "table": "8.3"
  },
  {
    "id": "papaya",
    "label": "Papaya (Carica papaya)",
    "depletionFraction": 0.4,
    "table": "8.3"
  },
  {
    "id": "passionfruit",
    "label": "Passionfruit (Passiflora edulis)",
    "depletionFraction": 0.4,
    "table": "8.3"
  },
  {
    "id": "jaboticaba",
    "label": "Jaboticaba (Plinia peruviana)",
    "depletionFraction": 0.6,
    "table": "8.3"
  },
  {
    "id": "longan",
    "label": "Longan (Dimocarpus longan)",
    "depletionFraction": 0.55,
    "table": "8.3"
  },
  {
    "id": "lychee",
    "label": "Lychee (Litchi chinensis)",
    "depletionFraction": 0.55,
    "table": "8.3"
  },
  {
    "id": "macadamia",
    "label": "Macadamia (Macadamia integrifolia)",
    "depletionFraction": 0.65,
    "table": "8.3"
  },
  {
    "id": "mango",
    "label": "Mango (Mangifera indica)",
    "depletionFraction": 0.5,
    "table": "8.3"
  },
  {
    "id": "cactus-pear",
    "label": "Cactus pear (Opuntia ficus–indica)",
    "depletionFraction": 0.7,
    "table": "8.3"
  },
  {
    "id": "coconut-and-acai-palm",
    "label": "Coconut (Cocos nucifera) and Açaí palm (Euterpe oleracea)",
    "depletionFraction": 0.65,
    "table": "8.3"
  },
  {
    "id": "date-palm",
    "label": "Date Palm (Phoenix dactylifera)",
    "depletionFraction": 0.5,
    "table": "8.3"
  },
  {
    "id": "jatropha",
    "label": "Jatropha (Jatropha curcas)",
    "depletionFraction": 0.5,
    "table": "8.3"
  },
  {
    "id": "palm-trees",
    "label": "Palm Trees",
    "depletionFraction": 0.65,
    "table": "8.3"
  },
  {
    "id": "oil-palm",
    "label": "Oil palm (Elaeis guineensis)",
    "depletionFraction": 0.65,
    "table": "8.3"
  },
  {
    "id": "peach-palm",
    "label": "Peach palm (Bactris gasipaes)",
    "depletionFraction": 0.55,
    "table": "8.3"
  },
  {
    "id": "ramie",
    "label": "Ramie (Boehmeria nivea)",
    "depletionFraction": 0.55,
    "table": "8.3"
  },
  {
    "id": "rubber-tree",
    "label": "Rubber tree (Hevea brasiliensis)",
    "depletionFraction": 0.7,
    "table": "8.3"
  },
  {
    "id": "alfalfa-for-hay",
    "label": "Alfalfa – for hay",
    "depletionFraction": 0.55,
    "table": "8.4"
  },
  {
    "id": "alfalfa-for-seed",
    "label": "Alfalfa — for seed",
    "depletionFraction": 0.6,
    "table": "8.4"
  },
  {
    "id": "bermuda-for-hay",
    "label": "Bermuda — for hay",
    "depletionFraction": 0.55,
    "table": "8.4"
  },
  {
    "id": "bermuda-spring-crop-for-seed",
    "label": "Bermuda — spring crop for seed",
    "depletionFraction": 0.6,
    "table": "8.4"
  },
  {
    "id": "clover-and-berseem-hay",
    "label": "Clover and berseem, hay",
    "depletionFraction": 0.5,
    "table": "8.4"
  },
  {
    "id": "rye-grass-for-hay",
    "label": "Rye Grass for hay",
    "depletionFraction": 0.6,
    "table": "8.4"
  },
  {
    "id": "sudan-grass-for-hay",
    "label": "Sudan Grass for hay",
    "depletionFraction": 0.55,
    "table": "8.4"
  },
  {
    "id": "grazing-pasture-rotated-and-extensive-grazing",
    "label": "Grazing Pasture - rotated and extensive grazing",
    "depletionFraction": 0.6,
    "table": "8.4"
  },
  {
    "id": "grasses-for-seed",
    "label": "Grasses for seed",
    "depletionFraction": 0.6,
    "table": "8.4"
  },
  {
    "id": "turf-grass-cool-season-grass",
    "label": "Turf grass – cool season grass",
    "depletionFraction": 0.4,
    "table": "8.4"
  },
  {
    "id": "turf-grass-warm-season-grass",
    "label": "Turf grass — warm season grass",
    "depletionFraction": 0.5,
    "table": "8.4"
  },
  {
    "id": "landscape-grasses-green-of-golf-courses",
    "label": "Landscape grasses, green of golf courses (cut h<0.01 m)",
    "depletionFraction": 0.2,
    "table": "8.4"
  },
  {
    "id": "landscape-grasses-golf-courses-and-lawns",
    "label": "Landscape grasses, golf courses and lawns (cut h<0.10 m)",
    "depletionFraction": 0.4,
    "table": "8.4"
  },
  {
    "id": "landscape-grasses-urban",
    "label": "Landscape grasses, urban",
    "depletionFraction": 0.5,
    "table": "8.4"
  },
  {
    "id": "rice-flooded-paddies-anaerobic",
    "label": "Rice — Flooded paddies, anaerobic rice",
    "depletionFraction": null,
    "threshold": {
      "fraction": 0.8,
      "basis": "saturation-water-content"
    },
    "table": "8.2"
  },
  {
    "id": "rice-aerobic-irrigated",
    "label": "Rice — Sprinkler and surface irrigated, aerobic rice",
    "depletionFraction": null,
    "threshold": {
      "fraction": 0.9,
      "basis": "field-capacity-water-content"
    },
    "table": "8.2"
  }
]

function freezePublished(value) {
  if (Array.isArray(value)) return Object.freeze(value)
  if (value && typeof value === 'object') return Object.freeze(value)
  return value
}

function freezeCatalogRecord(record) {
  const [initial, midSeason, end] = record.kc
  const kcb = record.kcb
    ? Object.freeze({ initial: record.kcb[0], midSeason: record.kcb[1], end: record.kcb[2] })
    : null
  return Object.freeze({
    id: record.id,
    label: record.label,
    category: record.category,
    kc: Object.freeze({ initial, midSeason, end }),
    kcb,
    maximumHeightM: freezePublished(record.height),
    maximumRootDepthM: freezePublished(record.root),
    maximumGroundCover: freezePublished(record.cover),
    averageKc: freezePublished(record.averageKc ?? null),
    sources: Object.freeze(record.tables.map(table => Object.freeze({ ...REV1_SOURCE, table }))),
  })
}

/** Every data row in FAO-56 Rev.1 Tables 6.1–6.5, joined to corresponding rows in 7.1–7.3. */
export const REV1_CROP_CATALOG = Object.freeze(Object.fromEntries(
  RAW_CATALOG.map(record => [record.id, freezeCatalogRecord(record)]),
))

/** Crop depletion-fraction records from FAO-56 Rev.1 Tables 8.1–8.4. */
export const REV1_DEPLETION_FRACTIONS = Object.freeze(Object.fromEntries(
  RAW_DEPLETION_FRACTIONS.map(record => [record.id, Object.freeze({
    id: record.id,
    label: record.label,
    depletionFraction: record.depletionFraction,
    threshold: record.threshold ? Object.freeze(record.threshold) : null,
    source: Object.freeze({ ...REV1_SOURCE, table: record.table }),
  })]),
))

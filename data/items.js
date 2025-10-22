const items = [
    {
        title: "Ramona",
        def: "The first character you obtain in Morimens. She's a precious ally that will never leave your side.",
        img: "https://i.redd.it/wlotgyak7wpf1.png"
    },
    {
        title: "Ogier",
        def: "Son of a minor noble, his father was unremarkable, leading to a seemingly mundane future. By protecting his princess, he became a respected soldier.",
        img: "https://i.redd.it/cwaevleu38if1.png"
    },
    {
        title: "Doll",
        def: "A genius scholar known as the \"Brain of Mythag\", and an external consultant.",
        img: "https://i.redd.it/cbzeogjkyddf1.png"
    },
    {
        title: "Lotan",
        def: "\"I am the creation of the beginning, the ancient whale, the abyssal waters, the soul of Eden, the god of destruction and order's power, aligned with the planet's will to dwell here!\"",
        img: "https://i.redd.it/gbay6q7f0wqf1.png"
    },
    {
        title: "Pollux",
        def: "The Apostle of the Lightbearer, scion of the White Night, One who Dispels Darkness, Divus of the Divine Heart—I, Pollux, have answered your call.",
        img: "https://i.redd.it/xdya1u95ihvf1.jpeg"
    }
];

const app = Vue.createApp({
  data() {
    return {
      items: items,
      currentIndex: 0,
      showDef: false
    };
  },
  methods: {
    toggleView() {
        this.showDef = !this.showDef;
    },
    nextItem() {
        this.currentIndex++;
        this.currentIndex = this.currentIndex%items.length;
    },
    prevItem() {
        this.currentIndex--;
        this.currentIndex = this.currentIndex%items.length;
    }
  }
});

app.mount('#app');
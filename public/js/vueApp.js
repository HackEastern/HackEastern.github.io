var app = new Vue({
  el: '#app',
  data: {
    packingList: [
      'Laptop & Charger',
      'Copies of your Resume',
      'Change of clothing',
      'Blanket/Sleeping Bag/Pillow',
      'Deodorant (more important than your laptop)',
      'Toothbrush & toothpaste',
      'Hoodie',
      'Notebook & Pencils',
      'Earplugs',
      'Nerfgun'
    ],
    checkedList: [],
  },
  created: function() {
    console.log('Vue app component loaded');
  },
  methods: {
    //Used on the packing list to track checked items
    checked: function (e) {
      console.log(e);
    }
  },
});

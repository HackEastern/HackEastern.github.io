//Packing item component
Vue.component('packing-item', {
  template: `
    <li>
      <a href="#checked" v-on:click="$emit(\'check\')">✓ <span style="color: black"> {{ name }} </span></a>
    </li>`
    ,
  props: ['name']
});

Vue.component('checked-item', {
  template: `
    <li style="text-decoration: line-through;">
      <a href="#checked" v-on:click="$emit(\'check\')">X <span style="color: black"> {{ name }} </span></a>
    </li>
  `,
  props: ['name']
});

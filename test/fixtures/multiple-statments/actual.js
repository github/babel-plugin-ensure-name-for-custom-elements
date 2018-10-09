class FooElement extends HTMLElement {
  static get name() {
    const name = "FooElement";
    return name;
  }
}

class BarElement extends HTMLElement {
  static get name() {
    const name = "BarElement";
    name;
  }
}

class BazElement extends HTMLElement {
  static get name() {
    return 1;
  }
}

class FooElement extends HTMLElement {
  get name() {
    return "FooElement";
  }

  static get name() {
    return "FooElement";
  }

}

class BarElement extends HTMLElement {
  name() {
    return "BarElement";
  }

  static get name() {
    return "BarElement";
  }

}

class BazElement extends HTMLElement {
  static get name() {
    return "BazElement";
  }
}

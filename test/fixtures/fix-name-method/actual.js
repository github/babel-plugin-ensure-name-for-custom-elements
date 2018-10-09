class FooElement extends HTMLElement {
  get name() {
    return "FooElement"
  }
}

class BarElement extends HTMLElement {
  name() {
    return "BarElement"
  }
}

class BazElement extends HTMLElement {
  static name() {
    return "BazElement"
  }
}

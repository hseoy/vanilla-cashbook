interface VueOptions {
  el: string;
  data: Record<string, unknown>;
}

class Vue {
  private $el: HTMLElement;

  private data: Record<string, unknown>;

  constructor({ el, data }: VueOptions) {
    this.$el = document.querySelector(el) as HTMLElement;
    this.data = data;

    this.parseElement();
  }

  private parseElement() {
    console.log(this.$el, this.data);
  }
}

export default Vue;

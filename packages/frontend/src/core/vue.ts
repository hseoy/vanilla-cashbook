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
    const htmlContent = this.$el.textContent;
    const matchedTexts = Array.from(
      htmlContent.matchAll(/\{\{([A-Za-z\s]+)\}\}/g),
    );

    const next = matchedTexts.reduce<string>((acc, matchedText) => {
      return acc.replace(
        matchedText[0],
        this.data[matchedText[1].trim()]?.toString(),
      );
    }, htmlContent);

    this.$el.innerHTML = next;
  }
}

export default Vue;

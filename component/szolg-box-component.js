class SzolgBoxComponent extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = `
      <style>
      .container {
        display: flex;
        width: 379px;
        flex-direction: column;
        align-items: center;
        gap: 32px;
      }
      #title {
        color: #fff;
        text-align: center;
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      #content-text {
        color: #fff;
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      svg {
        width: auto;
        height: auto;
      }
      
    </style>
    <div class="container">
    
      <div><svg> <use href="#tartalomIkon"></use> </svg></div>
      <p id="title">Sample title text</p>
      <p id="content-text">Sample content text</p>
    </div>
    <svg>
    <defs>
    <path
          id="tartalomIkon"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.3073 33.6354C20.5469 33.6354 19.9323 32.901 19.9323 32C19.9323 31.0938 20.5469 30.3646 21.3073 30.3646H39.4792C40.2396 30.3646 40.8542 31.099 40.8542 32C40.8542 32.9062 40.2396 33.6354 39.4792 33.6354H21.3073ZM25.0312 60.7188C25.9375 60.7188 26.6719 61.4531 26.6719 62.3594C26.6719 63.2656 25.9375 64 25.0312 64H4.48958C3.4375 64 2.48438 63.5729 1.79167 62.8802C1.09896 62.1875 0.671875 61.2344 0.671875 60.1823V3.81771C0.671875 2.76563 1.09896 1.8125 1.79167 1.11979C2.48438 0.427083 3.4375 0 4.48958 0H51.375C52.4271 0 53.3802 0.432292 54.0729 1.11979C54.7656 1.8125 55.1927 2.76563 55.1927 3.81771V29.9323C55.1927 30.8385 54.4583 31.5729 53.5521 31.5729C52.6458 31.5729 51.9115 30.8385 51.9115 29.9323V3.81771C51.9115 3.67188 51.849 3.53646 51.75 3.44271C51.651 3.34375 51.5208 3.28125 51.375 3.28125H4.48958C4.34375 3.28125 4.20833 3.34375 4.10937 3.4375C4.01562 3.54167 3.95312 3.67188 3.95312 3.81771V60.1771C3.95312 60.3229 4.01562 60.4583 4.10937 60.5521C4.20833 60.651 4.34375 60.7135 4.48958 60.7135H25.0312V60.7188ZM52.0781 38.7188C51.8125 38.4635 51.5052 38.3438 51.151 38.349C50.7969 38.3542 50.4948 38.4896 50.2448 38.7552L48.2083 40.875L53.9219 46.3906L55.9792 44.25C56.224 44 56.3281 43.6771 56.3229 43.3229C56.3177 42.974 56.1927 42.6563 55.9427 42.4167L52.0781 38.7188ZM41.4062 59.3802C40.651 59.6198 39.901 59.8698 39.151 60.1146C38.3958 60.3646 37.6458 60.6198 36.8958 60.8698C35.1198 61.4531 34.125 61.776 33.9167 61.8333C33.7135 61.8958 33.8333 61.0625 34.2812 59.3281L35.6927 53.8854L46.3958 42.75L52.1042 48.2448L41.4062 59.3802ZM21.3073 45.2865C20.5469 45.2865 19.9271 44.5417 19.9271 43.625C19.9271 42.7083 20.5469 41.9635 21.3073 41.9635H30.2604C31.0208 41.9635 31.6406 42.7083 31.6406 43.625C31.6406 44.5417 31.0208 45.2865 30.2604 45.2865H21.3073ZM21.3073 22.0104C20.5469 22.0104 19.9323 21.276 19.9323 20.375C19.9323 19.4688 20.5469 18.7396 21.3073 18.7396H39.4792C40.2396 18.7396 40.8542 19.474 40.8542 20.375C40.8542 21.2813 40.2396 22.0104 39.4792 22.0104H21.3073ZM13.4219 41.3854C14.4948 41.3854 15.3594 42.2552 15.3594 43.3229C15.3594 44.3958 14.4896 45.2604 13.4219 45.2604C12.349 45.2604 11.4844 44.3906 11.4844 43.3229C11.4844 42.2552 12.3542 41.3854 13.4219 41.3854ZM13.4219 29.9167C14.4948 29.9167 15.3594 30.7865 15.3594 31.8542C15.3594 32.9271 14.4896 33.7917 13.4219 33.7917C12.349 33.7917 11.4844 32.9219 11.4844 31.8542C11.4844 30.7865 12.3542 29.9167 13.4219 29.9167ZM13.4219 18.4479C14.4948 18.4479 15.3594 19.3177 15.3594 20.3854C15.3594 21.4583 14.4896 22.3229 13.4219 22.3229C12.349 22.3229 11.4844 21.4531 11.4844 20.3854C11.4844 19.3125 12.3542 18.4479 13.4219 18.4479Z"
          fill="white"
        />
        </defs>
        </svg>
      `;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // this.shadowRoot.getElementById("icon").href = this.getAttribute("icon");
    // this.shadowRoot
    //   .querySelector("use")
    //   .setAttribute("href", this.getAttribute("icon"));
    // this.shadowRoot.querySelector("svg").setAttribute("width",this.shadowRoot.querySelector("#tartalomIkon").getAttribute("width"));
    this.shadowRoot.getElementById("title").innerText =
      this.getAttribute("title");
    this.shadowRoot.getElementById("content-text").innerText =
      this.getAttribute("content-text");
  }
}
customElements.define("szolg-box-component", SzolgBoxComponent);

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     // Sötét mód
//   } else {
//     // Világos mód
//   }
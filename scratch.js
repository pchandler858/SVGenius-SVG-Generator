class Triangle extends Shape {
    render(text) {
      return `<svg width="300" height="200" style="border: 1px solid black">
                <polygon fill="${this.color}" points="60,${160 * 0.8} 240,${160 * 0.8} 150,${40 * 0.8}" />
                <text fill="${this.textColor}" x="150" y="${100 * 0.8}" text-anchor="middle" font-size="${40 * 0.8}px">${text}</text>
              </svg>`;
    }
  }
  
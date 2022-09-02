export const decodeHTMLEntities = (text: string) => {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }
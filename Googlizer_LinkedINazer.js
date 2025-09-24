/*
 * 🔍 Googlizer_LinkedINazer
 * A bookmarklet to transform a list of names into Google or LinkedIn search URLs
 * and open them in bulk.
 *
 * Usage:
 * - Select text on a webpage OR copy-paste names into the popup.
 * - Click buttons to generate Google/LinkedIn search links.
 * - Bulk open them in new tabs.
 */

(function () {
  // === Create the main popup container ===
  const container = document.createElement("div");
  container.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f4f4f4;
    border: 1px solid #ccc;
    box-shadow: 0 2px 8px rgba(0,0,0,.1);
    padding: 20px;
    font-family: Arial, sans-serif;
    color: #333;
    z-index: 9999;
  `;

  // === Add a textarea ===
  const selectedText = window.getSelection().toString();
  const textarea = document.createElement("textarea");
  textarea.style.cssText = `
    width: 100%;
    height: 120px;
    padding: 8px;
    border: 1px solid #ccc;
    resize: none;
    margin-bottom: 10px;
  `;
  textarea.placeholder = "Paste data here...";
  if (selectedText) {
    textarea.value = selectedText;
  }
  container.appendChild(textarea);

  // === Define transformations (Google & LinkedIn) ===
  const transformations = [
    { text: "Googlization", transform: "https://www.google.com/search?q=" },
    {
      text: "LinkedInation",
      transform: "https://www.linkedin.com/search/results/people/?keywords=",
    },
  ];

  transformations.forEach((transformation) => {
    const button = document.createElement("button");
    button.style.cssText = `
      background-color: #007bff;
      color: #fff;
      border-radius: 5px;
      padding: 8px 12px;
      cursor: pointer;
      margin-right: 10px;
      margin-bottom: 5px;
    `;
    button.textContent = transformation.text;

    // When clicked → transform each line into a search URL
    button.addEventListener("click", () => {
      const transformedText = textarea.value.split("\n").map((line) => {
        return (
          transformation.transform +
          encodeURIComponent(line.replace(/ /g, " "))
        );
      });
      textarea.value = transformedText.join("\n");
    });

    container.appendChild(button);
  });

  // === Bulk Open Button ===
  const bulkOpenButton = document.createElement("button");
  bulkOpenButton.style.cssText = `
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    padding: 8px 12px;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 5px;
  `;
  bulkOpenButton.textContent = "Bulk Open Links in Tabs";

  // Open each URL in a new tab (with 2.5s delay)
  bulkOpenButton.addEventListener("click", () => {
    const urls = textarea.value.split("\n");
    urls.forEach((url, index) => {
      setTimeout(() => window.open(url), index * 2500);
    });
  });

  container.appendChild(bulkOpenButton);

  // === Close Button ===
  const closeButton = document.createElement("button");
  closeButton.style.cssText = `
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    padding: 8px 12px;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 5px;
  `;
  closeButton.textContent = "Close";

  closeButton.addEventListener("click", () => {
    document.body.removeChild(container);
  });

  container.appendChild(closeButton);

  // === Inject popup into the page ===
  document.body.appendChild(container);
})();

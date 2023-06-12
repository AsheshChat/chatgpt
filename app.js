const apiKey = "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";
const submitBtn = document.getElementById("submit-btn");
const answerDiv = document.getElementById("answer");

submitBtn.addEventListener("click", async () => {
  const questionInput = document.getElementById("question");
  const contextInput = document.getElementById("context");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "text-davinci-002",
      prompt: `Question: ${questionInput.value}\nContext: ${contextInput.value}\nAnswer:`,
      temperature: 0.7,
      max_tokens: 1024,
      n: 1,
      stop: null,
    }),
  };

  const response = await fetch(
    "https://api.openai.com/v1/engines/davinci-codex/completions",
    requestOptions
  );
  const data = await response.json();
  const answer = data.choices[0].text.trim();

  answerDiv.innerHTML = `<p><strong>Answer:</strong> ${answer}</p>`;
});

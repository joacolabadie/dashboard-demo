import { OAI_TOKEN } from "$env/static/private";

export const generate = async (prompt, temperature) => {
  const oaiToken = OAI_TOKEN;
  const bearer = "Bearer " + oaiToken;
  const uri = "https://api.openai.com/v1/completions";

  const res = await fetch(uri, {
    method: "POST",
    headers: {
      Authorization: bearer,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: prompt + "\n\n",
      max_tokens: 256,
      temperature,
      n: 3,
    }),
  });

  const data = await res.json();

  return data;
};

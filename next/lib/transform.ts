import matter from "gray-matter";

export interface Token {
  type: "markdown" | "live-editor" | "frontmatter" | "common-css";
  value: any;
}

export const transformContent = (content: string) => {
  let results: Token[] = [];
  let block = "";

  const data = matter(content);

  results.push({ type: "frontmatter", value: data.data });

  let type: Token["type"] = "markdown";

  data.content.split("\n").forEach((line, i) => {
    if (line.includes("BEGIN_COMMON_CSS")) {
      if (block !== "") {
        results.push({ type: "markdown", value: block });
      }
      type = "common-css";
      block = "";
      return;
    }

    if (line.includes("BEGIN_LIVE_EDITOR")) {
      if (block !== "") {
        results.push({ type: "markdown", value: block });
      }
      type = "live-editor";
      block = "";
      return;
    }

    if (line.includes("END_COMMON_CSS")) {
      results.push({ type, value: block });
      block = "";
      return;
    }

    if (line.includes("END_LIVE_EDITOR")) {
      results.push({ type, value: block });
      block = "";
      return;
    }

    block += line + "\n";
  });

  results.push({ type: "markdown", value: block });

  results = results.map((token) => {
    let next = token;
    if (token.type === "live-editor") {
      next.value = pulckHtmlCss(token.value);
    }
    return next;
  });

  return results;
};

export function pulckHtmlCss(content: string) {
  let html = "";
  let css = "";
  let type: "html" | "css" | "none" = "none";

  content.split("\n").forEach((line) => {
    if (line.includes("```") && line.includes("html")) {
      type = "html";
      return;
    }
    if (line.includes("```") && line.includes("css")) {
      type = "css";
      return;
    }

    if (line.includes("```")) {
      type = "none";
      return;
    }

    if (type === "html") {
      html += line + "\n";
    }

    if (type === "css") {
      css += line + "\n";
    }
  });
  return { html, css };
}

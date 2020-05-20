import * as matter from "gray-matter";

export interface Token {
  type: "markdown" | "live-editor" | "frontmatter";
  value: any;
}

export const transformContent = (content: string) => {
  let results: Token[] = [];
  let editor = false;
  let block = "";

  const data = matter(content);

  results.push({ type: "frontmatter", value: data.data });

  data.content.split("\n").forEach((line, i) => {
    if (editor) {
      if (line.includes("END_LIVE_EDITOR")) {
        editor = false;
        results.push({ type: "live-editor", value: block });
        block = "";
      } else {
        block += line + "\n";
      }
    } else {
      if (line.includes("BEGIN_LIVE_EDITOR")) {
        results.push({ type: "markdown", value: block });
        block = "";
        editor = true;
      } else {
        block += line + "\n";
      }
    }
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

function pulckHtmlCss(content: string) {
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

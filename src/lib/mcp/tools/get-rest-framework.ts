import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_rest_framework",
  title: "Get REST framework",
  description: "Returns the four pillars of the REST framework (Regulate, Explore, Separate, Talk).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify({
          R: { name: "Regulate", summary: "Calm the nervous system so healing can begin." },
          E: { name: "Explore", summary: "Gently understand what shaped your patterns." },
          S: { name: "Separate", summary: "Untangle your identity from old wounds." },
          T: { name: "Talk", summary: "Speak to yourself and others with compassion." },
        }),
      },
    ],
  }),
});
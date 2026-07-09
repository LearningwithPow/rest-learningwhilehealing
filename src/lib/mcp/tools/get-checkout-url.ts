import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_checkout_url",
  title: "Get REST Reset checkout URL",
  description: "Returns the Xendit checkout URL for enrolling in REST Reset.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: () => ({
    content: [{ type: "text", text: "https://checkout.xendit.co/od/RESTJuly2026" }],
  }),
});
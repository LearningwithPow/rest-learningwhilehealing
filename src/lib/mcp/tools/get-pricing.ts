import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_pricing",
  title: "Get REST Reset pricing",
  description: "Returns Early Bird and regular pricing plus the Early Bird deadline.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify({
          currency: "PHP",
          earlyBirdPrice: 999,
          regularPrice: 1499,
          earlyBirdDeadline: "July 25, 2026 (11:59 PM PHT)",
          paymentMethods: ["Xendit", "GCash", "Maya", "Debit Cards"],
        }),
      },
    ],
  }),
});
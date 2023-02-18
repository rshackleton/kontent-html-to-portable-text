import { RichTextNodeParser } from '@pokornyd/kontent-ai-rich-text-parser/dist/src/parser/node/index';
import type { APIRoute } from 'astro';

type PostBody = {
  html: string;
};

export const post: APIRoute = async (context) => {
  const body = (await context.request.json()) as PostBody;

  if (!parseBody(body)) {
    return new Response(null, {
      status: 400,
      statusText: 'Bad Request',
    });
  }

  try {
    const parser = new RichTextNodeParser();
    const parsed = parser.parse(body.html);

    return {
      body: JSON.stringify({ result: parsed }),
    };
  } catch (error) {
    // Rethrow in development
    if (import.meta.env.DEV) {
      throw error;
    }

    return {
      body: JSON.stringify({ error }),
    };
  }
};

/**
 * Parse request body as PostBody
 */
function parseBody(input: unknown): input is PostBody {
  return (
    typeof input === 'object' &&
    input !== null &&
    'html' in input &&
    typeof input.html === 'string'
  );
}

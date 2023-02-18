import blocktools from '@sanity/block-tools';
import { Schema } from '@sanity/schema';
import type { APIRoute } from 'astro';
import { JSDOM } from 'jsdom';

const schema = Schema.compile({});

export const post: APIRoute = async (context) => {
  const body = await context.request.json();

  if (!('html' in body)) {
    return new Response(null, {
      status: 400,
      statusText: 'Bad Request',
    });
  }

  const result = blocktools.htmlToBlocks(body.html, schema, {
    parseHtml: (html) => new JSDOM(html).window.document,
  });

  return {
    body: JSON.stringify(result),
  };
};

import type { APIRoute } from 'astro';

export const post: APIRoute = async (context) => {
  const body = await context.request.json();

  if (!('html' in body)) {
    return new Response(null, {
      status: 400,
      statusText: 'Bad Request',
    });
  }

  return {
    body: JSON.stringify({}),
  };
};

function sleep(duration: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

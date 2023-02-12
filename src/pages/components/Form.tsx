import { useSignal } from '@preact/signals';
import { createRef } from 'preact';
import { Field } from './Field';
import { Footer } from './Footer';
import { Header } from './Header';

export function Form() {
  const htmlString = useSignal('');
  const portableTextString = useSignal('');

  const ref = createRef<AbortController>();

  return (
    <form
      class="grid grid-cols-2 p-4 gap-4 h-full grid-rows-[auto,1fr,auto]"
      onSubmit={async (event) => {
        event.preventDefault();
        postHtml(htmlString.value);
      }}
    >
      <Header />
      <Field label="HTML" name="html" value={htmlString} />
      <Field
        label="Portable Text"
        name="portableText"
        readonly
        value={portableTextString}
      />
      <Footer />
    </form>
  );

  async function postHtml(html: string) {
    if (ref.current) {
      ref.current.abort();
    }

    ref.current = new AbortController();

    const res = await fetch('/api/to-portable-text', {
      body: JSON.stringify({ html }),
      method: 'post',
      signal: ref.current.signal,
    });

    const data = await res.json();

    portableTextString.value = JSON.stringify(data, null, 2);
  }
}

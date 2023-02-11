import { Field } from './Field';
import { Footer } from './Footer';
import { Header } from './Header';

export function Form() {
  return (
    <form
      class="grid grid-cols-2 p-4 gap-4 h-full grid-rows-[auto,1fr,auto]"
      method="post"
    >
      <Header />
      <Field label="HTML" name="html" />
      <Field label="Portable Text" name="portableText" readonly />
      <Footer />
    </form>
  );
}

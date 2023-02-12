import type { Signal } from '@preact/signals';

export type FieldProps = {
  name: string;
  label: string;
  readonly?: boolean;
  value: Signal<string>;
};

export function Field(props: FieldProps) {
  return (
    <div class="grid">
      <label class="flex flex-col" for={props.name}>
        <span class="block mb-2 font-medium text-lg">{props.label}</span>
        <textarea
          id={props.name}
          class="bg-indigo-50 p-2 font-mono grow"
          name={props.name}
          readOnly={props.readonly}
          value={props.value.value}
          onInput={(event) => {
            if (event.target instanceof HTMLTextAreaElement) {
              props.value.value = event.target.value;
            }
          }}
        />
      </label>
    </div>
  );
}

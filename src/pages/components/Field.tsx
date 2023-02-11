export type FieldProps = {
  name: string;
  label: string;
  readonly?: boolean;
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
        />
      </label>
    </div>
  );
}

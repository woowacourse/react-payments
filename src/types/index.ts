interface InputFieldConfig {
  id: string;
  sectionTitle: string;
  hintText?: string;
  label: string;
  placeholder: string[];
}

interface SelectFieldConfig {
  id: string;
  sectionTitle: string;
  hintText: string;
  placeholder: string;
}

export type { InputFieldConfig, SelectFieldConfig };

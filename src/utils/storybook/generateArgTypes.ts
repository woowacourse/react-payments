type ArgGenerateParameter =
  | {
      control: 'object';
    }
  | {
      control: 'check';
      options: string[] | readonly string[];
    }
  | {
      control: 'boolean';
    }
  | {
      control: 'check';
      options: string[] | readonly string[];
    }
  | {
      control: 'inline-check';
      options: string[] | readonly string[];
    }
  | {
      control: 'radio';
      options: string[] | readonly string[];
    }
  | {
      control: 'inline-radio';
      options: string[] | readonly string[];
    }
  | {
      control: 'select';
      options: string[] | readonly string[];
    }
  | {
      control: 'multi-select';
      options: string[] | readonly string[];
    }
  | {
      control: 'number';
      min: number;
      max: number;
      step: number;
    }
  | {
      control: 'range';
      min: number;
      max: number;
      step: number;
    }
  | {
      control: 'color';
      presetColors: string[] | readonly string[];
    }
  | {
      control: 'date';
    }
  | {
      control: 'text';
    }
  | {
      control: 'file';
      accept: string;
    }
  | {
      control: 'function';
    };

export const generateArgTypes = (param: ArgGenerateParameter) => {
  switch (param.control) {
    case 'color':
      return { control: { type: param.control, presetColors: param.presetColors } } as const;
    case 'number':
      return {
        control: { type: param.control, min: param.min, max: param.max, step: param.step },
      } as const;
    case 'range':
      return {
        control: { type: param.control, min: param.min, max: param.max, step: param.step },
      } as const;
    case 'file':
      return { control: { type: param.control, accept: param.accept } } as const;
    default:
      return param;
  }
};

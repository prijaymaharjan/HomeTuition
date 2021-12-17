export interface ColourOption  {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const colourOptions: readonly ColourOption [] = [
    { value: '1', label: 'Science', color: '#00B8D9'},   
    { value: '2', label: 'Mathsmatic', color: '#FF5630' },
    { value: '3', label: 'Social Studies', color: '#FF8B00' },
    { value: '4', label: 'EHP', color: '#FFC400' },
    { value: '5', label: 'Nepali', color: '#36B37E' },
    { value: '6', label: 'Computer', color: '#00875A' },
    { value: '7', label: 'English', color: '#253858' },
   
  ];
  
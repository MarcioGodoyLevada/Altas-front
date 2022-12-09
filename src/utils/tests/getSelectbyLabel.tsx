import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export function getSelectByLabel(regex: RegExp | string) {
  const label = screen.getByText(regex);
  const container = label.parentNode;
  const control = container?.querySelector('.select__control');

  if (!(label instanceof HTMLLabelElement)) {
    throw Error(`${regex} não é uma label.`);
  }

  if (!control) {
    throw Error(`Select Control ${regex} não encontrado.`);
  }

  return {
    label: label as HTMLLabelElement,
    control: control as HTMLDivElement,
    click: () => userEvent.click(control)
  };
}

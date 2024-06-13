import { GenericContentType } from './enums';
import { GenericContentInterface, GenericContentMainAreaProps, GenericContentSidekickAreaProps } from './types';

// GenericContent Extensible Area

export class GenericContentMainArea implements GenericContentInterface {
  id: string = '';

  type: GenericContentType;

  contentFunction: (element: HTMLElement) => void;

  /**
   * Returns an object that when used in the setter as a generic content will be rendered
   * over the meeting main presentation.
   *
   * @param contentFunction - function that gives the html element to render the content of
   * the generic component
   *
   * @returns Object that will be interpreted by the core of Bigbluebutton (HTML5).
   */
  constructor({
    contentFunction
  }: GenericContentMainAreaProps) {
    this.contentFunction = contentFunction;
    this.type = GenericContentType.MAIN_AREA;
  }

  setItemId: (id: string) => void = (id: string) => {
    this.id = id;
  };
}

export class GenericContentSidekickArea implements GenericContentInterface {
  id: string = '';

  type: GenericContentType;

  name: string = '';

  section: string = '';

  buttonIcon: string = '';

  contentFunction: (element: HTMLElement) => void;

  /**
   * Returns an object that when used in the setter as a generic content will be rendered
   * in the sidekick panel. Every generic sidekick content has an intrinsic button associated,
   * which is added to the sidebar navigation and, when clicked, toggles the rendering of the
   * given generic sidekick content.
   *
   * @param contentFunction - function that gives the html element to render the content of
   * the generic component
   * @param name - the label of the associated sidebar navigation button
   * @param section - section name under which the associated sidebar navigation button will be displayed
   * @param buttonIcon - the icon of the associated sidebar navigation button
   *
   * @returns Object that will be interpreted by the core of Bigbluebutton (HTML5).
   */
  constructor({
    contentFunction, name, section, buttonIcon
  }: GenericContentSidekickAreaProps) {
    this.contentFunction = contentFunction;
    this.name = name;
    this.section = section;
    this.buttonIcon = buttonIcon;
    this.type = GenericContentType.SIDEKICK_AREA;
  }

  setItemId: (id: string) => void = (id: string) => {
    this.id = id;
  };
}

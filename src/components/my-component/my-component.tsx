import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

/**
 * This is a demo component to demonstrate the usage of StencilJS with Storybook.
 *
 * @slot - This the default slot
 * @slot greeting - This is a named slot
 *
 * @csspart greeting - Part for styling the greeting
 *
 * @cssprop [--greeting-color=black] - Color of the greeting
 *
 * @event my-event - This is a custom event
 */
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private greeting = "Hello, World! I'm";

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div part="greeting">
        <slot name="greeting">
          {this.greeting} {this.getText()}
        </slot>
        <slot></slot>
      </div>
    );
  }
}

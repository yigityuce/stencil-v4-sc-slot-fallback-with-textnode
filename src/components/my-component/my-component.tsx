import { Component, Fragment, State, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
  scoped: true
})
export class MyComponent {
  @State() shortName: string;

  render() {
    return (
      <Fragment>
        <cmp-avatar>{this.shortName}</cmp-avatar>
        <button onClick={() => (this.shortName = this.shortName ? null : 'JD')}>Toggle ShortName</button>
      </Fragment>
    );
  }
}

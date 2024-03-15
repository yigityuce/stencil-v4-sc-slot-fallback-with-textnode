import { Component, h } from '@stencil/core';

@Component({
  tag: 'cmp-avatar',
  styleUrl: 'cmp-avatar.css',
  shadow: false,
  scoped: true
})
export class CmpAvatar {
  render() {
    return (
      <div class="container">
        <slot>&#128100;</slot>
      </div>
    );
  }
}

import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'fl-badge',
  styleUrl: 'fl-badge.css',
  shadow: true,
})
export class FlBadge {

enum btypes {
    PRIMARY = {
        COLOR = "red",
        TEXT = "Default"
    },
    SUCCESS = {
        COLOR = "green",
        TEXT = "Success"
    },
    DANGER = {
        COLOR = "red",
        TEXT = "Danger"
    }, 
    INFO = {
        COLOR = "lightblue",
        TEXT = "Info"
    },
    WARNING = {
        COLOR = "yello",
        TEXT = "Warning"
    },
}

@Prop() testing: string;



  componentDidLoad() {
    console.log(types);      
  }

  render() {
    return (
      <Host style={{backgroundColor: "red", border: "2px solid red"}}>Hi How are you{this.testing}
        <slot></slot>
      </Host>
    );
  }

}

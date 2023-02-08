import React, { PureComponent } from 'react';

// PureComponent, не позволяет ре-рендерить если равны значения стейт(например: два раза кликнуть на одну кнопку) (под капотом все ПРОПСЫ СРАВНИВАЮТСЯ)
export default class Tabs extends PureComponent {
  state = {
    activeTabIdx: 0,
  };

  // аналог PureComponent, не позволяет ре-рендерить если равны значения стейт(например: два раза кликнуть на одну кнопку)
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.activeTabIdx !== this.state.activeTabIdx;
  // }

  setActiveTabIdx = idx => {
    this.setState({ activeTabIdx: idx });
  };

  render() {
    console.log(`Re-render @ ${Date.now()}`);

    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];

    return (
      <>
        <div>
          {items.map((item, idx) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabIdx(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
}
